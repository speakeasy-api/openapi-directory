import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * List imports request filters.
 */
export declare class ListImportsRequestBodyFilters extends SpeakeasyBase {
    importIDs?: string[];
}
export declare class ListImportsRequestBody extends SpeakeasyBase {
    /**
     * List imports request filters.
     */
    filters?: ListImportsRequestBodyFilters;
    /**
     * List imports request max results.
     */
    maxResults?: number;
    /**
     * List imports request next token.
     */
    nextToken?: string;
}
export declare class ListImportsRequest extends SpeakeasyBase {
    requestBody: ListImportsRequestBody;
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
export declare class ListImportsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listImportsResponse?: shared.ListImportsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
