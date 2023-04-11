import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafRegionalRateBasedRuleMatchPredicate } from "./awswafregionalratebasedrulematchpredicate";
/**
 * contains details about a rate-based rule for Regional resources. A rate-based rule provides settings to indicate when to allow, block, or count a request. Rate-based rules include the number of requests that arrive over a specified period of time.
 */
export declare class AwsWafRegionalRateBasedRuleDetails extends SpeakeasyBase {
    matchPredicates?: AwsWafRegionalRateBasedRuleMatchPredicate[];
    metricName?: string;
    name?: string;
    rateKey?: string;
    rateLimit?: number;
    ruleId?: string;
}
