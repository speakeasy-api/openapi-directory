import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafRuleGroupRulesDetails } from "./awswafrulegrouprulesdetails";
/**
 * Provides information about an WAF rule group. A rule group is a collection of rules for inspecting and controlling web requests.
 */
export declare class AwsWafRuleGroupDetails extends SpeakeasyBase {
    metricName?: string;
    name?: string;
    ruleGroupId?: string;
    rules?: AwsWafRuleGroupRulesDetails[];
}
