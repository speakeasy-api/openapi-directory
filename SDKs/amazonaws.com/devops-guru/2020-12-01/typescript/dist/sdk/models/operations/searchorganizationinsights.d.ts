import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  Filters you can use to specify which events are returned when <code>ListEvents</code> is called.
 */
export declare class SearchOrganizationInsightsRequestBodyFilters extends SpeakeasyBase {
    /**
     *  A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks.
     */
    resourceCollection?: shared.ResourceCollection;
    /**
     * A collection of the names of Amazon Web Services services.
     */
    serviceCollection?: shared.ServiceCollection;
    severities?: shared.InsightSeverityEnum[];
    statuses?: shared.InsightStatusEnum[];
}
/**
 *  A time range used to specify when the behavior of an insight or anomaly started.
 */
export declare class SearchOrganizationInsightsRequestBodyStartTimeRange extends SpeakeasyBase {
    fromTime?: Date;
    toTime?: Date;
}
/**
 *  The type of insights you are searching for (<code>REACTIVE</code> or <code>PROACTIVE</code>).
 */
export declare enum SearchOrganizationInsightsRequestBodyTypeEnum {
    Reactive = "REACTIVE",
    Proactive = "PROACTIVE"
}
export declare class SearchOrganizationInsightsRequestBody extends SpeakeasyBase {
    /**
     * The ID of the Amazon Web Services account.
     */
    accountIds: string[];
    /**
     *  Filters you can use to specify which events are returned when <code>ListEvents</code> is called.
     */
    filters?: SearchOrganizationInsightsRequestBodyFilters;
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
    startTimeRange: SearchOrganizationInsightsRequestBodyStartTimeRange;
    /**
     *  The type of insights you are searching for (<code>REACTIVE</code> or <code>PROACTIVE</code>).
     */
    type: SearchOrganizationInsightsRequestBodyTypeEnum;
}
export declare class SearchOrganizationInsightsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: SearchOrganizationInsightsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SearchOrganizationInsightsResponse extends SpeakeasyBase {
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
    searchOrganizationInsightsResponse?: shared.SearchOrganizationInsightsResponse;
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
