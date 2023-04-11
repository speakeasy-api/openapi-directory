import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The set of tiering configurations for the pricing rule.
 */
export declare class UpdatePricingRuleRequestBodyTiering extends SpeakeasyBase {
    freeTier?: shared.UpdateFreeTierConfig;
}
/**
 *  The new pricing rule type.
 */
export declare enum UpdatePricingRuleRequestBodyTypeEnum {
    Markup = "MARKUP",
    Discount = "DISCOUNT",
    Tiering = "TIERING"
}
export declare class UpdatePricingRuleRequestBody extends SpeakeasyBase {
    /**
     *  The Amazon Resource Name (ARN) of the pricing rule to update.
     */
    arn: string;
    /**
     *  The new description for the pricing rule.
     */
    description?: string;
    /**
     *  The new modifier to show pricing plan rates as a percentage.
     */
    modifierPercentage?: number;
    /**
     *  The new name of the pricing rule. The name must be unique to each pricing rule.
     */
    name?: string;
    /**
     *  The set of tiering configurations for the pricing rule.
     */
    tiering?: UpdatePricingRuleRequestBodyTiering;
    /**
     *  The new pricing rule type.
     */
    type?: UpdatePricingRuleRequestBodyTypeEnum;
}
export declare class UpdatePricingRuleRequest extends SpeakeasyBase {
    requestBody: UpdatePricingRuleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdatePricingRuleResponse extends SpeakeasyBase {
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
     * InternalServerException
     */
    internalServerException?: any;
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
     * Success
     */
    updatePricingRuleOutput?: shared.UpdatePricingRuleOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
