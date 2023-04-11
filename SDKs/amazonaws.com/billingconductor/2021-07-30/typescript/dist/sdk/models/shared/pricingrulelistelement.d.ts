import { SpeakeasyBase } from "../../../internal/utils";
import { PricingRuleScopeEnum } from "./pricingrulescopeenum";
import { PricingRuleTypeEnum } from "./pricingruletypeenum";
import { Tiering } from "./tiering";
/**
 *  A representation of a pricing rule.
 */
export declare class PricingRuleListElement extends SpeakeasyBase {
    arn?: string;
    associatedPricingPlanCount?: number;
    billingEntity?: string;
    creationTime?: number;
    description?: string;
    lastModifiedTime?: number;
    modifierPercentage?: number;
    name?: string;
    operation?: string;
    scope?: PricingRuleScopeEnum;
    service?: string;
    tiering?: Tiering;
    type?: PricingRuleTypeEnum;
    usageType?: string;
}
