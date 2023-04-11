import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Source server post migration custom action filters.
 */
export declare class ListSourceServerActionsRequestBodyFilters extends SpeakeasyBase {
    actionIDs?: string[];
}
export declare class ListSourceServerActionsRequestBody extends SpeakeasyBase {
    /**
     * Source server post migration custom action filters.
     */
    filters?: ListSourceServerActionsRequestBodyFilters;
    /**
     * Maximum amount of items to return when listing source server post migration custom actions.
     */
    maxResults?: number;
    /**
     * Next token to use when listing source server post migration custom actions.
     */
    nextToken?: string;
    /**
     * Source server ID.
     */
    sourceServerID: string;
}
export declare class ListSourceServerActionsRequest extends SpeakeasyBase {
    requestBody: ListSourceServerActionsRequestBody;
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
export declare class ListSourceServerActionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listSourceServerActionsResponse?: shared.ListSourceServerActionsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
}
