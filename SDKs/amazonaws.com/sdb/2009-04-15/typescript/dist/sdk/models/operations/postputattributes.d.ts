import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTPutAttributesActionEnum {
    PutAttributes = "PutAttributes"
}
export declare enum POSTPutAttributesVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class POSTPutAttributesRequest extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: POSTPutAttributesActionEnum;
    requestBody?: Uint8Array;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: POSTPutAttributesVersionEnum;
}
export declare class POSTPutAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
