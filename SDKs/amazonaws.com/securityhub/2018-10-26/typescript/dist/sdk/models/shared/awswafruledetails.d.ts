import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafRulePredicateListDetails } from "./awswafrulepredicatelistdetails";
/**
 * Provides information about a WAF rule. This rule specifies the web requests that you want to allow, block, or count.
 */
export declare class AwsWafRuleDetails extends SpeakeasyBase {
    metricName?: string;
    name?: string;
    predicateList?: AwsWafRulePredicateListDetails[];
    ruleId?: string;
}
