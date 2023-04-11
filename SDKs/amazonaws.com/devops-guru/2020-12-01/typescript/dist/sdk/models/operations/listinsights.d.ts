import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  A filter used by <code>ListInsights</code> to specify which insights to return.
 */
export declare class ListInsightsRequestBodyStatusFilter extends SpeakeasyBase {
    any?: shared.ListInsightsAnyStatusFilter;
    closed?: shared.ListInsightsClosedStatusFilter;
    ongoing?: shared.ListInsightsOngoingStatusFilter;
}
export declare class ListInsightsRequestBody extends SpeakeasyBase {
    /**
     * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
     */
    maxResults?: number;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
     */
    nextToken?: string;
    /**
     *  A filter used by <code>ListInsights</code> to specify which insights to return.
     */
    statusFilter: ListInsightsRequestBodyStatusFilter;
}
export declare class ListInsightsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListInsightsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListInsightsResponse extends SpeakeasyBase {
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
    listInsightsResponse?: shared.ListInsightsResponse;
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
