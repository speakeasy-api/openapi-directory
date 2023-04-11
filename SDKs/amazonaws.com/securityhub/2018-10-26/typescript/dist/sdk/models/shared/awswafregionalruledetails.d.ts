import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafRegionalRulePredicateListDetails } from "./awswafregionalrulepredicatelistdetails";
/**
 * Provides information about an WAF Regional rule. This rule identifies the web requests that you want to allow, block, or count.
 */
export declare class AwsWafRegionalRuleDetails extends SpeakeasyBase {
    metricName?: string;
    name?: string;
    predicateList?: AwsWafRegionalRulePredicateListDetails[];
    ruleId?: string;
}
