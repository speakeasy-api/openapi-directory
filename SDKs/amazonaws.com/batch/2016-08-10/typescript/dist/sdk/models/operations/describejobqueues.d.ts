import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeJobQueuesRequestBody extends SpeakeasyBase {
    /**
     * A list of up to 100 queue names or full queue Amazon Resource Name (ARN) entries.
     */
    jobQueues?: string[];
    /**
     * The maximum number of results returned by <code>DescribeJobQueues</code> in paginated output. When this parameter is used, <code>DescribeJobQueues</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeJobQueues</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>DescribeJobQueues</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
     */
    maxResults?: number;
    /**
     * <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobQueues</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
     */
    nextToken?: string;
}
export declare class DescribeJobQueuesRequest extends SpeakeasyBase {
    requestBody: DescribeJobQueuesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class DescribeJobQueuesResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    describeJobQueuesResponse?: shared.DescribeJobQueuesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerException
     */
    serverException?: any;
}
