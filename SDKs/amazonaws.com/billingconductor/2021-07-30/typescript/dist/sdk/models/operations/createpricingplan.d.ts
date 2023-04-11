import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatePricingPlanRequestBody extends SpeakeasyBase {
    /**
     * The description of the pricing plan.
     */
    description?: string;
    /**
     * The name of the pricing plan. The names must be unique to each pricing plan.
     */
    name: string;
    /**
     *  A list of Amazon Resource Names (ARNs) that define the pricing plan parameters.
     */
    pricingRuleArns?: string[];
    /**
     *  A map that contains tag keys and tag values that are attached to a pricing plan.
     */
    tags?: Record<string, string>;
}
export declare class CreatePricingPlanRequest extends SpeakeasyBase {
    requestBody: CreatePricingPlanRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The token that is needed to support idempotency. Idempotency isn't currently supported, but will be implemented in a future update.
     */
    xAmznClientToken?: string;
}
export declare class CreatePricingPlanResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createPricingPlanOutput?: shared.CreatePricingPlanOutput;
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
