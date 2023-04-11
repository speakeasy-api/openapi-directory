import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityRulesetEvaluationRunDescription } from "./dataqualityrulesetevaluationrundescription";
/**
 * Success
 */
export declare class ListDataQualityRulesetEvaluationRunsResponse extends SpeakeasyBase {
    nextToken?: string;
    runs?: DataQualityRulesetEvaluationRunDescription[];
}
