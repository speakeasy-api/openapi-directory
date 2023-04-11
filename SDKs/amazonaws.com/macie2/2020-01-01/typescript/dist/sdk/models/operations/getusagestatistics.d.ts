import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies criteria for sorting the results of a query for Amazon Macie account quotas and usage data.
 */
export declare class GetUsageStatisticsRequestBodySortBy extends SpeakeasyBase {
    key?: shared.UsageStatisticsSortKeyEnum;
    orderBy?: shared.OrderByEnum;
}
/**
 * An inclusive time period that Amazon Macie usage data applies to. Possible values are:
 */
export declare enum GetUsageStatisticsRequestBodyTimeRangeEnum {
    MonthToDate = "MONTH_TO_DATE",
    Past30Days = "PAST_30_DAYS"
}
export declare class GetUsageStatisticsRequestBody extends SpeakeasyBase {
    /**
     * An array of objects, one for each condition to use to filter the query results. If you specify more than one condition, Amazon Macie uses an AND operator to join the conditions.
     */
    filterBy?: shared.UsageStatisticsFilter[];
    /**
     * The maximum number of items to include in each page of the response.
     */
    maxResults?: number;
    /**
     * The nextToken string that specifies which page of results to return in a paginated response.
     */
    nextToken?: string;
    /**
     * Specifies criteria for sorting the results of a query for Amazon Macie account quotas and usage data.
     */
    sortBy?: GetUsageStatisticsRequestBodySortBy;
    /**
     * An inclusive time period that Amazon Macie usage data applies to. Possible values are:
     */
    timeRange?: GetUsageStatisticsRequestBodyTimeRangeEnum;
}
export declare class GetUsageStatisticsRequest extends SpeakeasyBase {
    requestBody: GetUsageStatisticsRequestBody;
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
export declare class GetUsageStatisticsResponse extends SpeakeasyBase {
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
    getUsageStatisticsResponse?: shared.GetUsageStatisticsResponse;
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
