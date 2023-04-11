import { SpeakeasyBase } from "../../../internal/utils";
import { AnalysisRuleAggregation } from "./analysisruleaggregation";
import { AnalysisRuleList } from "./analysisrulelist";
/**
 * Controls on the query specifications that can be run on configured table..
 */
export declare class AnalysisRulePolicyV1 extends SpeakeasyBase {
    aggregation?: AnalysisRuleAggregation;
    list?: AnalysisRuleList;
}
