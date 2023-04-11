import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTBatchPutAttributesActionEnum {
    BatchPutAttributes = "BatchPutAttributes"
}
export declare enum POSTBatchPutAttributesVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class POSTBatchPutAttributesRequest extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: POSTBatchPutAttributesActionEnum;
    requestBody?: Uint8Array;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: POSTBatchPutAttributesVersionEnum;
}
export declare class POSTBatchPutAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
