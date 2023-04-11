import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTReceiveMessageActionEnum {
    ReceiveMessage = "ReceiveMessage"
}
export declare enum POSTReceiveMessageVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class POSTReceiveMessageRequest extends SpeakeasyBase {
    action: POSTReceiveMessageActionEnum;
    requestBody?: Uint8Array;
    version: POSTReceiveMessageVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTReceiveMessageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
