import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies property- and tag-based conditions that define filter criteria for including or excluding S3 buckets from the query results. Exclude conditions take precedence over include conditions.
 */
export declare class SearchResourcesRequestBodyBucketCriteria extends SpeakeasyBase {
    excludes?: shared.SearchResourcesCriteriaBlock;
    includes?: shared.SearchResourcesCriteriaBlock;
}
/**
 * Specifies criteria for sorting the results of a query for information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
 */
export declare class SearchResourcesRequestBodySortCriteria extends SpeakeasyBase {
    attributeName?: shared.SearchResourcesSortAttributeNameEnum;
    orderBy?: shared.OrderByEnum;
}
export declare class SearchResourcesRequestBody extends SpeakeasyBase {
    /**
     * Specifies property- and tag-based conditions that define filter criteria for including or excluding S3 buckets from the query results. Exclude conditions take precedence over include conditions.
     */
    bucketCriteria?: SearchResourcesRequestBodyBucketCriteria;
    /**
     * The maximum number of items to include in each page of the response. The default value is 50.
     */
    maxResults?: number;
    /**
     * The nextToken string that specifies which page of results to return in a paginated response.
     */
    nextToken?: string;
    /**
     * Specifies criteria for sorting the results of a query for information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
     */
    sortCriteria?: SearchResourcesRequestBodySortCriteria;
}
export declare class SearchResourcesRequest extends SpeakeasyBase {
    requestBody: SearchResourcesRequestBody;
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
export declare class SearchResourcesResponse extends SpeakeasyBase {
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    searchResourcesResponse?: shared.SearchResourcesResponse;
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
