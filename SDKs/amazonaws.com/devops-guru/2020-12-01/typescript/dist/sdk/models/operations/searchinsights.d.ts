import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies values used to filter responses when searching for insights. You can use a <code>ResourceCollection</code>, <code>ServiceCollection</code>, array of severities, and an array of status values. Each filter type contains one or more values to search for. If you specify multiple filter types, the filter types are joined with an <code>AND</code>, and the request returns only results that match all of the specified filters.
 */
export declare class SearchInsightsRequestBodyFilters extends SpeakeasyBase {
    /**
     *  A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks.
     */
    resourceCollection?: shared.ResourceCollection;
    serviceCollection?: shared.ServiceCollection;
    severities?: shared.InsightSeverityEnum[];
    statuses?: shared.InsightStatusEnum[];
}
/**
 *  A time range used to specify when the behavior of an insight or anomaly started.
 */
export declare class SearchInsightsRequestBodyStartTimeRange extends SpeakeasyBase {
    fromTime?: Date;
    toTime?: Date;
}
/**
 *  The type of insights you are searching for (<code>REACTIVE</code> or <code>PROACTIVE</code>).
 */
export declare enum SearchInsightsRequestBodyTypeEnum {
    Reactive = "REACTIVE",
    Proactive = "PROACTIVE"
}
export declare class SearchInsightsRequestBody extends SpeakeasyBase {
    /**
     * Specifies values used to filter responses when searching for insights. You can use a <code>ResourceCollection</code>, <code>ServiceCollection</code>, array of severities, and an array of status values. Each filter type contains one or more values to search for. If you specify multiple filter types, the filter types are joined with an <code>AND</code>, and the request returns only results that match all of the specified filters.
     */
    filters?: SearchInsightsRequestBodyFilters;
    /**
     * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
     */
    maxResults?: number;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
     */
    nextToken?: string;
    /**
     *  A time range used to specify when the behavior of an insight or anomaly started.
     */
    startTimeRange: SearchInsightsRequestBodyStartTimeRange;
    /**
     *  The type of insights you are searching for (<code>REACTIVE</code> or <code>PROACTIVE</code>).
     */
    type: SearchInsightsRequestBodyTypeEnum;
}
export declare class SearchInsightsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: SearchInsightsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SearchInsightsResponse extends SpeakeasyBase {
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
    searchInsightsResponse?: shared.SearchInsightsResponse;
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
