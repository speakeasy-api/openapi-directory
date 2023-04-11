import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The filter that specifies the Amazon Resource Names (ARNs) of pricing plans, to retrieve pricing plan information.
 */
export declare class ListPricingPlansRequestBodyFilters extends SpeakeasyBase {
    arns?: string[];
}
export declare class ListPricingPlansRequestBody extends SpeakeasyBase {
    /**
     * The preferred billing period to get pricing plan.
     */
    billingPeriod?: string;
    /**
     * The filter that specifies the Amazon Resource Names (ARNs) of pricing plans, to retrieve pricing plan information.
     */
    filters?: ListPricingPlansRequestBodyFilters;
    /**
     * The maximum number of pricing plans to retrieve.
     */
    maxResults?: number;
    /**
     * The pagination token that's used on subsequent call to get pricing plans.
     */
    nextToken?: string;
}
export declare class ListPricingPlansRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListPricingPlansRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPricingPlansResponse extends SpeakeasyBase {
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
    listPricingPlansOutput?: shared.ListPricingPlansOutput;
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
