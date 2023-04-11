import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteAttributesActionEnum {
    DeleteAttributes = "DeleteAttributes"
}
export declare enum POSTDeleteAttributesVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class POSTDeleteAttributesRequest extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: POSTDeleteAttributesActionEnum;
    requestBody?: Uint8Array;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: POSTDeleteAttributesVersionEnum;
}
export declare class POSTDeleteAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
