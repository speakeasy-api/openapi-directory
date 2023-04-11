import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filter model by type
 */
export declare class ListCampaignsRequestBodyFilters extends SpeakeasyBase {
    /**
     * Connect instance identifier filter
     */
    instanceIdFilter?: shared.InstanceIdFilter;
}
export declare class ListCampaignsRequestBody extends SpeakeasyBase {
    /**
     * Filter model by type
     */
    filters?: ListCampaignsRequestBodyFilters;
    /**
     * The maximum number of results to return per page.
     */
    maxResults?: number;
    /**
     * The token for the next set of results.
     */
    nextToken?: string;
}
export declare class ListCampaignsRequest extends SpeakeasyBase {
    requestBody: ListCampaignsRequestBody;
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
export declare class ListCampaignsResponse extends SpeakeasyBase {
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
    listCampaignsResponse?: shared.ListCampaignsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
