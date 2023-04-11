import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * List exports request filters.
 */
export declare class ListExportsRequestBodyFilters extends SpeakeasyBase {
    exportIDs?: string[];
}
export declare class ListExportsRequestBody extends SpeakeasyBase {
    /**
     * List exports request filters.
     */
    filters?: ListExportsRequestBodyFilters;
    /**
     * List export request max results.
     */
    maxResults?: number;
    /**
     * List export request next token.
     */
    nextToken?: string;
}
export declare class ListExportsRequest extends SpeakeasyBase {
    requestBody: ListExportsRequestBody;
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
export declare class ListExportsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listExportsResponse?: shared.ListExportsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
}
