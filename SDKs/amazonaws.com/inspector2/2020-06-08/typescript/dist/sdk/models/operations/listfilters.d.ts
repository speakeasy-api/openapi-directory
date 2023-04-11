import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The action the filter applies to matched findings.
 */
export declare enum ListFiltersRequestBodyActionEnum {
    None = "NONE",
    Suppress = "SUPPRESS"
}
export declare class ListFiltersRequestBody extends SpeakeasyBase {
    /**
     * The action the filter applies to matched findings.
     */
    action?: ListFiltersRequestBodyActionEnum;
    /**
     * The Amazon resource number (ARN) of the filter.
     */
    arns?: string[];
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: number;
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
     */
    nextToken?: string;
}
export declare class ListFiltersRequest extends SpeakeasyBase {
    requestBody: ListFiltersRequestBody;
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
export declare class ListFiltersResponse extends SpeakeasyBase {
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
    listFiltersResponse?: shared.ListFiltersResponse;
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
