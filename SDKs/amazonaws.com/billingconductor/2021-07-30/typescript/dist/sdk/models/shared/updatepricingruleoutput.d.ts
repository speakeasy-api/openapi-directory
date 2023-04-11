import { SpeakeasyBase } from "../../../internal/utils";
import { PricingRuleScopeEnum } from "./pricingrulescopeenum";
import { PricingRuleTypeEnum } from "./pricingruletypeenum";
import { UpdateTieringInput } from "./updatetieringinput";
/**
 * Success
 */
export declare class UpdatePricingRuleOutput extends SpeakeasyBase {
    arn?: string;
    associatedPricingPlanCount?: number;
    billingEntity?: string;
    description?: string;
    lastModifiedTime?: number;
    modifierPercentage?: number;
    name?: string;
    operation?: string;
    scope?: PricingRuleScopeEnum;
    service?: string;
    tiering?: UpdateTieringInput;
    type?: PricingRuleTypeEnum;
    usageType?: string;
}
