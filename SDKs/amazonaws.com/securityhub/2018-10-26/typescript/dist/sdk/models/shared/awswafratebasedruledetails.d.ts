import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafRateBasedRuleMatchPredicate } from "./awswafratebasedrulematchpredicate";
/**
 * Details about a rate-based rule for global resources. A rate-based rule provides settings to indicate when to allow, block, or count a request. Rate-based rules include the number of requests that arrive over a specified period of time.
 */
export declare class AwsWafRateBasedRuleDetails extends SpeakeasyBase {
    matchPredicates?: AwsWafRateBasedRuleMatchPredicate[];
    metricName?: string;
    name?: string;
    rateKey?: string;
    rateLimit?: number;
    ruleId?: string;
}
