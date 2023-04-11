import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUntagQueueActionEnum {
    UntagQueue = "UntagQueue"
}
export declare enum GETUntagQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GETUntagQueueRequest extends SpeakeasyBase {
    /**
     * The AWS account number
     */
    accountNumber: number;
    action: GETUntagQueueActionEnum;
    /**
     * The name of the queue
     */
    queueName: string;
    /**
     * The list of tags to be removed from the specified queue.
     */
    tagKeys: string[];
    version: GETUntagQueueVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUntagQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
