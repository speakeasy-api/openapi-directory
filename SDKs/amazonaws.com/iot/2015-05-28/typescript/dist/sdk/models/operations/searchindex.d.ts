import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchIndexRequestBody extends SpeakeasyBase {
    /**
     * The search index name.
     */
    indexName?: string;
    /**
     * The maximum number of results to return at one time.
     */
    maxResults?: number;
    /**
     * The token used to get the next set of results, or <code>null</code> if there are no additional results.
     */
    nextToken?: string;
    /**
     * The search query string. For more information about the search query syntax, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/query-syntax.html">Query syntax</a>.
     */
    queryString: string;
    /**
     * The query version.
     */
    queryVersion?: string;
}
export declare class SearchIndexRequest extends SpeakeasyBase {
    requestBody: SearchIndexRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SearchIndexResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * IndexNotReadyException
     */
    indexNotReadyException?: any;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidQueryException
     */
    invalidQueryException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    searchIndexResponse?: shared.SearchIndexResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
