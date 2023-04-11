import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The scope of pricing rule that indicates if it's globally applicable, or it's service-specific.
 */
export declare enum CreatePricingRuleRequestBodyScopeEnum {
    Global = "GLOBAL",
    Service = "SERVICE",
    BillingEntity = "BILLING_ENTITY",
    Sku = "SKU"
}
/**
 *  The set of tiering configurations for the pricing rule.
 */
export declare class CreatePricingRuleRequestBodyTiering extends SpeakeasyBase {
    freeTier?: shared.CreateFreeTierConfig;
}
/**
 *  The type of pricing rule.
 */
export declare enum CreatePricingRuleRequestBodyTypeEnum {
    Markup = "MARKUP",
    Discount = "DISCOUNT",
    Tiering = "TIERING"
}
export declare class CreatePricingRuleRequestBody extends SpeakeasyBase {
    /**
     *  The seller of services provided by Amazon Web Services, their affiliates, or third-party providers selling services via Amazon Web Services Marketplace.
     */
    billingEntity?: string;
    /**
     *  The pricing rule description.
     */
    description?: string;
    /**
     *  A percentage modifier that's applied on the public pricing rates.
     */
    modifierPercentage?: number;
    /**
     *  The pricing rule name. The names must be unique to each pricing rule.
     */
    name: string;
    /**
     * <p> Operation is the specific Amazon Web Services action covered by this line item. This describes the specific usage of the line item.</p> <p> If the <code>Scope</code> attribute is set to <code>SKU</code>, this attribute indicates which operation the <code>PricingRule</code> is modifying. For example, a value of <code>RunInstances:0202</code> indicates the operation of running an Amazon EC2 instance.</p>
     */
    operation?: string;
    /**
     *  The scope of pricing rule that indicates if it's globally applicable, or it's service-specific.
     */
    scope: CreatePricingRuleRequestBodyScopeEnum;
    /**
     *  If the <code>Scope</code> attribute is set to <code>SERVICE</code> or <code>SKU</code>, the attribute indicates which service the <code>PricingRule</code> is applicable for.
     */
    service?: string;
    /**
     *  A map that contains tag keys and tag values that are attached to a pricing rule.
     */
    tags?: Record<string, string>;
    /**
     *  The set of tiering configurations for the pricing rule.
     */
    tiering?: CreatePricingRuleRequestBodyTiering;
    /**
     *  The type of pricing rule.
     */
    type: CreatePricingRuleRequestBodyTypeEnum;
    /**
     * <p> Usage type is the unit that each service uses to measure the usage of a specific type of resource.</p> <p>If the <code>Scope</code> attribute is set to <code>SKU</code>, this attribute indicates which usage type the <code>PricingRule</code> is modifying. For example, <code>USW2-BoxUsage:m2.2xlarge</code> describes an<code> M2 High Memory Double Extra Large</code> instance in the US West (Oregon) Region. <pre><code>&lt;/p&gt; </code></pre>
     */
    usageType?: string;
}
export declare class CreatePricingRuleRequest extends SpeakeasyBase {
    requestBody: CreatePricingRuleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The token that's needed to support idempotency. Idempotency isn't currently supported, but will be implemented in a future update.
     */
    xAmznClientToken?: string;
}
export declare class CreatePricingRuleResponse extends SpeakeasyBase {
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
    createPricingRuleOutput?: shared.CreatePricingRuleOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
