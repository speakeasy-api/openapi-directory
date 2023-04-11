import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListQueuesActionEnum {
    ListQueues = "ListQueues"
}
export declare enum GETListQueuesVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GETListQueuesRequest extends SpeakeasyBase {
    action: GETListQueuesActionEnum;
    /**
     * Maximum number of results to include in the response. Value range is 1 to 1000. You must set <code>MaxResults</code> to receive a value for <code>NextToken</code> in the response.
     */
    maxResults?: number;
    /**
     * Pagination token to request the next set of results.
     */
    nextToken?: string;
    /**
     * <p>A string to use for filtering the list results. Only those queues whose name begins with the specified string are returned.</p> <p>Queue URLs and names are case-sensitive.</p>
     */
    queueNamePrefix?: string;
    version: GETListQueuesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListQueuesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
