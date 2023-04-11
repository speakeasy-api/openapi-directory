import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  Specifies one or more service names that are used to list anomalies.
 */
export declare class ListAnomaliesForInsightRequestBodyFilters extends SpeakeasyBase {
    /**
     * A collection of the names of Amazon Web Services services.
     */
    serviceCollection?: shared.ServiceCollection;
}
/**
 *  A time range used to specify when the behavior of an insight or anomaly started.
 */
export declare class ListAnomaliesForInsightRequestBodyStartTimeRange extends SpeakeasyBase {
    fromTime?: Date;
    toTime?: Date;
}
export declare class ListAnomaliesForInsightRequestBody extends SpeakeasyBase {
    /**
     * The ID of the Amazon Web Services account.
     */
    accountId?: string;
    /**
     *  Specifies one or more service names that are used to list anomalies.
     */
    filters?: ListAnomaliesForInsightRequestBodyFilters;
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
    startTimeRange?: ListAnomaliesForInsightRequestBodyStartTimeRange;
}
export declare class ListAnomaliesForInsightRequest extends SpeakeasyBase {
    /**
     *  The ID of the insight. The returned anomalies belong to this insight.
     */
    insightId: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListAnomaliesForInsightRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAnomaliesForInsightResponse extends SpeakeasyBase {
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
    listAnomaliesForInsightResponse?: shared.ListAnomaliesForInsightResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
