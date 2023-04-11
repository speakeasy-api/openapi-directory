import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetAttributesActionEnum {
    GetAttributes = "GetAttributes"
}
export declare enum POSTGetAttributesVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class POSTGetAttributesRequest extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: POSTGetAttributesActionEnum;
    requestBody?: Uint8Array;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: POSTGetAttributesVersionEnum;
}
export declare class POSTGetAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
