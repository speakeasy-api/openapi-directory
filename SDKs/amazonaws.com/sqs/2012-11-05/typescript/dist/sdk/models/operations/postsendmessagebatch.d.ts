import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSendMessageBatchActionEnum {
    SendMessageBatch = "SendMessageBatch"
}
export declare enum POSTSendMessageBatchVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class POSTSendMessageBatchRequest extends SpeakeasyBase {
    action: POSTSendMessageBatchActionEnum;
    requestBody?: Uint8Array;
    version: POSTSendMessageBatchVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSendMessageBatchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
