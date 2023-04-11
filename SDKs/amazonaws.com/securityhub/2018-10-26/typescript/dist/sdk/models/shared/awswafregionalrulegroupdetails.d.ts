import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafRegionalRuleGroupRulesDetails } from "./awswafregionalrulegrouprulesdetails";
/**
 * Provides information about an WAF Regional rule group. The rule group is a collection of rules for inspecting and controlling web requests.
 */
export declare class AwsWafRegionalRuleGroupDetails extends SpeakeasyBase {
    metricName?: string;
    name?: string;
    ruleGroupId?: string;
    rules?: AwsWafRegionalRuleGroupRulesDetails[];
}
