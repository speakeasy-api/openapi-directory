import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSendMessageActionEnum {
    SendMessage = "SendMessage"
}
export declare enum POSTSendMessageVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class POSTSendMessageRequest extends SpeakeasyBase {
    action: POSTSendMessageActionEnum;
    requestBody?: Uint8Array;
    version: POSTSendMessageVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSendMessageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
