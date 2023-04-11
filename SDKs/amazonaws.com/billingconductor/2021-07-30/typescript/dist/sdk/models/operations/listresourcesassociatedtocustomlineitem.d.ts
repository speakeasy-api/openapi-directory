import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  A filter that specifies the type of resource associations that should be retrieved for a custom line item.
 */
export declare class ListResourcesAssociatedToCustomLineItemRequestBodyFilters extends SpeakeasyBase {
    relationship?: shared.CustomLineItemRelationshipEnum;
}
export declare class ListResourcesAssociatedToCustomLineItemRequestBody extends SpeakeasyBase {
    /**
     *  The ARN of the custom line item for which the resource associations will be listed.
     */
    arn: string;
    /**
     *  The billing period for which the resource associations will be listed.
     */
    billingPeriod?: string;
    /**
     *  A filter that specifies the type of resource associations that should be retrieved for a custom line item.
     */
    filters?: ListResourcesAssociatedToCustomLineItemRequestBodyFilters;
    /**
     *  (Optional) The maximum number of resource associations to be retrieved.
     */
    maxResults?: number;
    /**
     *  (Optional) The pagination token that's returned by a previous request.
     */
    nextToken?: string;
}
export declare class ListResourcesAssociatedToCustomLineItemRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListResourcesAssociatedToCustomLineItemRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListResourcesAssociatedToCustomLineItemResponse extends SpeakeasyBase {
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
    listResourcesAssociatedToCustomLineItemOutput?: shared.ListResourcesAssociatedToCustomLineItemOutput;
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
