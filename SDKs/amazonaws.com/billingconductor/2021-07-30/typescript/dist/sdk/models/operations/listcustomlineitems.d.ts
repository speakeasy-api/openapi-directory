import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  A filter that specifies the custom line items and billing groups to retrieve FFLI information.
 */
export declare class ListCustomLineItemsRequestBodyFilters extends SpeakeasyBase {
    arns?: string[];
    billingGroups?: string[];
    names?: string[];
}
export declare class ListCustomLineItemsRequestBody extends SpeakeasyBase {
    /**
     *  The preferred billing period to get custom line items (FFLIs).
     */
    billingPeriod?: string;
    /**
     *  A filter that specifies the custom line items and billing groups to retrieve FFLI information.
     */
    filters?: ListCustomLineItemsRequestBodyFilters;
    /**
     *  The maximum number of billing groups to retrieve.
     */
    maxResults?: number;
    /**
     *  The pagination token that's used on subsequent calls to get custom line items (FFLIs).
     */
    nextToken?: string;
}
export declare class ListCustomLineItemsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListCustomLineItemsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListCustomLineItemsResponse extends SpeakeasyBase {
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
    listCustomLineItemsOutput?: shared.ListCustomLineItemsOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
