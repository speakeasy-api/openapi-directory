import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies criteria for sorting the results of a query for information about S3 buckets.
 */
export declare class DescribeBucketsRequestBodySortCriteria extends SpeakeasyBase {
    attributeName?: string;
    orderBy?: shared.OrderByEnum;
}
export declare class DescribeBucketsRequestBody extends SpeakeasyBase {
    /**
     * Specifies, as a map, one or more property-based conditions that filter the results of a query for information about S3 buckets.
     */
    criteria?: Record<string, shared.BucketCriteriaAdditionalProperties>;
    /**
     * The maximum number of items to include in each page of the response. The default value is 50.
     */
    maxResults?: number;
    /**
     * The nextToken string that specifies which page of results to return in a paginated response.
     */
    nextToken?: string;
    /**
     * Specifies criteria for sorting the results of a query for information about S3 buckets.
     */
    sortCriteria?: DescribeBucketsRequestBodySortCriteria;
}
export declare class DescribeBucketsRequest extends SpeakeasyBase {
    requestBody: DescribeBucketsRequestBody;
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
export declare class DescribeBucketsResponse extends SpeakeasyBase {
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
     * Success
     */
    describeBucketsResponse?: shared.DescribeBucketsResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
