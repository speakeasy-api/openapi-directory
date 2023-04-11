import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteMessageActionEnum {
    DeleteMessage = "DeleteMessage"
}
export declare enum POSTDeleteMessageVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class POSTDeleteMessageRequest extends SpeakeasyBase {
    action: POSTDeleteMessageActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteMessageVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteMessageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
