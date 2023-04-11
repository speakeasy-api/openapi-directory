import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A filter that specifies the billing period range where the custom line item versions reside.
 */
export declare class ListCustomLineItemVersionsRequestBodyFilters extends SpeakeasyBase {
    billingPeriodRange?: shared.ListCustomLineItemVersionsBillingPeriodRangeFilter;
}
export declare class ListCustomLineItemVersionsRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) for the custom line item.
     */
    arn: string;
    /**
     * A filter that specifies the billing period range where the custom line item versions reside.
     */
    filters?: ListCustomLineItemVersionsRequestBodyFilters;
    /**
     * The maximum number of custom line item versions to retrieve.
     */
    maxResults?: number;
    /**
     * The pagination token that's used on subsequent calls to retrieve custom line item versions.
     */
    nextToken?: string;
}
export declare class ListCustomLineItemVersionsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListCustomLineItemVersionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListCustomLineItemVersionsResponse extends SpeakeasyBase {
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
    listCustomLineItemVersionsOutput?: shared.ListCustomLineItemVersionsOutput;
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
