import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListQueueTagsActionEnum {
    ListQueueTags = "ListQueueTags"
}
export declare enum GETListQueueTagsVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GETListQueueTagsRequest extends SpeakeasyBase {
    /**
     * The AWS account number
     */
    accountNumber: number;
    action: GETListQueueTagsActionEnum;
    /**
     * The name of the queue
     */
    queueName: string;
    version: GETListQueueTagsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListQueueTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
