import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  A filter used by <code>ListInsights</code> to specify which insights to return.
 */
export declare class ListOrganizationInsightsRequestBodyStatusFilter extends SpeakeasyBase {
    any?: shared.ListInsightsAnyStatusFilter;
    closed?: shared.ListInsightsClosedStatusFilter;
    ongoing?: shared.ListInsightsOngoingStatusFilter;
}
export declare class ListOrganizationInsightsRequestBody extends SpeakeasyBase {
    /**
     * The ID of the Amazon Web Services account.
     */
    accountIds?: string[];
    /**
     * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
     */
    maxResults?: number;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
     */
    nextToken?: string;
    /**
     * The ID of the organizational unit.
     */
    organizationalUnitIds?: string[];
    /**
     *  A filter used by <code>ListInsights</code> to specify which insights to return.
     */
    statusFilter: ListOrganizationInsightsRequestBodyStatusFilter;
}
export declare class ListOrganizationInsightsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListOrganizationInsightsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListOrganizationInsightsResponse extends SpeakeasyBase {
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
    listOrganizationInsightsResponse?: shared.ListOrganizationInsightsResponse;
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
