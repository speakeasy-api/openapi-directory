import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order.
 */
export declare enum ListVectorEnrichmentJobsRequestBodySortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class ListVectorEnrichmentJobsRequestBody extends SpeakeasyBase {
    /**
     * The maximum number of items to return.
     */
    maxResults?: number;
    /**
     * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
     */
    nextToken?: string;
    /**
     * The parameter by which to sort the results.
     */
    sortBy?: string;
    /**
     * An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order.
     */
    sortOrder?: ListVectorEnrichmentJobsRequestBodySortOrderEnum;
    /**
     * A filter that retrieves only jobs with a specific status.
     */
    statusEquals?: string;
}
export declare class ListVectorEnrichmentJobsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListVectorEnrichmentJobsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListVectorEnrichmentJobsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listVectorEnrichmentJobOutput?: shared.ListVectorEnrichmentJobOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
