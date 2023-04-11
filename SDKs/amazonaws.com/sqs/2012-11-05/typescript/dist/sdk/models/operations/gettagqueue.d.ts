import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETTagQueueActionEnum {
    TagQueue = "TagQueue"
}
export declare enum GETTagQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GETTagQueueRequest extends SpeakeasyBase {
    /**
     * The AWS account number
     */
    accountNumber: number;
    action: GETTagQueueActionEnum;
    /**
     * The name of the queue
     */
    queueName: string;
    /**
     * The list of tags to be added to the specified queue.
     */
    tags: Record<string, string>;
    version: GETTagQueueVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETTagQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
