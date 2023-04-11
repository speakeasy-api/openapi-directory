import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListPricingRulesAssociatedToPricingPlanRequestBody extends SpeakeasyBase {
    /**
     *  The billing period for which the pricing rule associations are to be listed.
     */
    billingPeriod?: string;
    /**
     * The optional maximum number of pricing rule associations to retrieve.
     */
    maxResults?: number;
    /**
     *  The optional pagination token returned by a previous call.
     */
    nextToken?: string;
    /**
     *  The Amazon Resource Name (ARN) of the pricing plan for which associations are to be listed.
     */
    pricingPlanArn: string;
}
export declare class ListPricingRulesAssociatedToPricingPlanRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListPricingRulesAssociatedToPricingPlanRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPricingRulesAssociatedToPricingPlanResponse extends SpeakeasyBase {
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
    listPricingRulesAssociatedToPricingPlanOutput?: shared.ListPricingRulesAssociatedToPricingPlanOutput;
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
