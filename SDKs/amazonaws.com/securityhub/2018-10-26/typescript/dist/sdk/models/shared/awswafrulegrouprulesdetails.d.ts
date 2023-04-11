import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafRuleGroupRulesActionDetails } from "./awswafrulegrouprulesactiondetails";
/**
 * Provides information about the rules attached to the rule group. These rules identify the web requests that you want to allow, block, or count.
 */
export declare class AwsWafRuleGroupRulesDetails extends SpeakeasyBase {
    action?: AwsWafRuleGroupRulesActionDetails;
    priority?: number;
    ruleId?: string;
    type?: string;
}
