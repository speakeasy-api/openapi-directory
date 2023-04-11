import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListPricingPlansAssociatedWithPricingRuleRequestBody extends SpeakeasyBase {
    /**
     *  The pricing plan billing period for which associations will be listed.
     */
    billingPeriod?: string;
    /**
     *  The optional maximum number of pricing rule associations to retrieve.
     */
    maxResults?: number;
    /**
     *  The optional pagination token returned by a previous call.
     */
    nextToken?: string;
    /**
     *  The pricing rule Amazon Resource Name (ARN) for which associations will be listed.
     */
    pricingRuleArn: string;
}
export declare class ListPricingPlansAssociatedWithPricingRuleRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListPricingPlansAssociatedWithPricingRuleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPricingPlansAssociatedWithPricingRuleResponse extends SpeakeasyBase {
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
    listPricingPlansAssociatedWithPricingRuleOutput?: shared.ListPricingPlansAssociatedWithPricingRuleOutput;
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
