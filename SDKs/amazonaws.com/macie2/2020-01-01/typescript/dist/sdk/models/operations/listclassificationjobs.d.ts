import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies criteria for filtering the results of a request for information about classification jobs.
 */
export declare class ListClassificationJobsRequestBodyFilterCriteria extends SpeakeasyBase {
    excludes?: shared.ListJobsFilterTerm[];
    includes?: shared.ListJobsFilterTerm[];
}
/**
 * Specifies criteria for sorting the results of a request for information about classification jobs.
 */
export declare class ListClassificationJobsRequestBodySortCriteria extends SpeakeasyBase {
    attributeName?: shared.ListJobsSortAttributeNameEnum;
    orderBy?: shared.OrderByEnum;
}
export declare class ListClassificationJobsRequestBody extends SpeakeasyBase {
    /**
     * Specifies criteria for filtering the results of a request for information about classification jobs.
     */
    filterCriteria?: ListClassificationJobsRequestBodyFilterCriteria;
    /**
     * The maximum number of items to include in each page of the response.
     */
    maxResults?: number;
    /**
     * The nextToken string that specifies which page of results to return in a paginated response.
     */
    nextToken?: string;
    /**
     * Specifies criteria for sorting the results of a request for information about classification jobs.
     */
    sortCriteria?: ListClassificationJobsRequestBodySortCriteria;
}
export declare class ListClassificationJobsRequest extends SpeakeasyBase {
    requestBody: ListClassificationJobsRequestBody;
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
export declare class ListClassificationJobsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listClassificationJobsResponse?: shared.ListClassificationJobsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
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
