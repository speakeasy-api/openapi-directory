import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafRegionalRuleGroupRulesActionDetails } from "./awswafregionalrulegrouprulesactiondetails";
/**
 * Provides information about the rules attached to a rule group
 */
export declare class AwsWafRegionalRuleGroupRulesDetails extends SpeakeasyBase {
    action?: AwsWafRegionalRuleGroupRulesActionDetails;
    priority?: number;
    ruleId?: string;
    type?: string;
}
