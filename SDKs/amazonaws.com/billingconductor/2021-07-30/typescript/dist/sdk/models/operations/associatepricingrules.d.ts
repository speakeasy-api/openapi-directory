import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AssociatePricingRulesRequestBody extends SpeakeasyBase {
    /**
     *  The <code>PricingPlanArn</code> that the <code>PricingRuleArns</code> are associated with.
     */
    arn: string;
    /**
     *  The <code>PricingRuleArns</code> that are associated with the Pricing Plan.
     */
    pricingRuleArns: string[];
}
export declare class AssociatePricingRulesRequest extends SpeakeasyBase {
    requestBody: AssociatePricingRulesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociatePricingRulesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    associatePricingRulesOutput?: shared.AssociatePricingRulesOutput;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceLimitExceededException
     */
    serviceLimitExceededException?: any;
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
