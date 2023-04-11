import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteMessageBatchActionEnum {
    DeleteMessageBatch = "DeleteMessageBatch"
}
export declare enum POSTDeleteMessageBatchVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class POSTDeleteMessageBatchRequest extends SpeakeasyBase {
    action: POSTDeleteMessageBatchActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteMessageBatchVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteMessageBatchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
