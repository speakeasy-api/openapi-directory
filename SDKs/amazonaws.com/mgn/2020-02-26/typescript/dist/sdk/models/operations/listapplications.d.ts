import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Applications list filters.
 */
export declare class ListApplicationsRequestBodyFilters extends SpeakeasyBase {
    applicationIDs?: string[];
    isArchived?: boolean;
    waveIDs?: string[];
}
export declare class ListApplicationsRequestBody extends SpeakeasyBase {
    /**
     * Applications list filters.
     */
    filters?: ListApplicationsRequestBodyFilters;
    /**
     * Maximum results to return when listing applications.
     */
    maxResults?: number;
    /**
     * Request next token.
     */
    nextToken?: string;
}
export declare class ListApplicationsRequest extends SpeakeasyBase {
    requestBody: ListApplicationsRequestBody;
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
export declare class ListApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listApplicationsResponse?: shared.ListApplicationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
}
