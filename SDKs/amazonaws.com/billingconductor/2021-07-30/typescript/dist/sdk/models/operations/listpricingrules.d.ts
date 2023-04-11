import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The filter that specifies criteria that the pricing rules returned by the <code>ListPricingRules</code> API will adhere to.
 */
export declare class ListPricingRulesRequestBodyFilters extends SpeakeasyBase {
    arns?: string[];
}
export declare class ListPricingRulesRequestBody extends SpeakeasyBase {
    /**
     *  The preferred billing period to get the pricing plan.
     */
    billingPeriod?: string;
    /**
     *  The filter that specifies criteria that the pricing rules returned by the <code>ListPricingRules</code> API will adhere to.
     */
    filters?: ListPricingRulesRequestBodyFilters;
    /**
     *  The maximum number of pricing rules to retrieve.
     */
    maxResults?: number;
    /**
     *  The pagination token that's used on subsequent call to get pricing rules.
     */
    nextToken?: string;
}
export declare class ListPricingRulesRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListPricingRulesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPricingRulesResponse extends SpeakeasyBase {
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
    listPricingRulesOutput?: shared.ListPricingRulesOutput;
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
