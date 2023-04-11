import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order.
 */
export declare enum ListEarthObservationJobsRequestBodySortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * A filter that retrieves only jobs with a specific status.
 */
export declare enum ListEarthObservationJobsRequestBodyStatusEqualsEnum {
    Initializing = "INITIALIZING",
    InProgress = "IN_PROGRESS",
    Stopping = "STOPPING",
    Completed = "COMPLETED",
    Stopped = "STOPPED",
    Failed = "FAILED",
    Deleting = "DELETING",
    Deleted = "DELETED"
}
export declare class ListEarthObservationJobsRequestBody extends SpeakeasyBase {
    /**
     * The total number of items to return.
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
    sortOrder?: ListEarthObservationJobsRequestBodySortOrderEnum;
    /**
     * A filter that retrieves only jobs with a specific status.
     */
    statusEquals?: ListEarthObservationJobsRequestBodyStatusEqualsEnum;
}
export declare class ListEarthObservationJobsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListEarthObservationJobsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListEarthObservationJobsResponse extends SpeakeasyBase {
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
    listEarthObservationJobOutput?: shared.ListEarthObservationJobOutput;
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
