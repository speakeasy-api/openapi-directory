import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTBatchDeleteAttributesActionEnum {
    BatchDeleteAttributes = "BatchDeleteAttributes"
}
export declare enum POSTBatchDeleteAttributesVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class POSTBatchDeleteAttributesRequest extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: POSTBatchDeleteAttributesActionEnum;
    requestBody?: Uint8Array;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: POSTBatchDeleteAttributesVersionEnum;
}
export declare class POSTBatchDeleteAttributesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
