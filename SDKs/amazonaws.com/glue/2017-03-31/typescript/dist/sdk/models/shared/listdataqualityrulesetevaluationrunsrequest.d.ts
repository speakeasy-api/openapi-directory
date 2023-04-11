import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityRulesetEvaluationRunFilter } from "./dataqualityrulesetevaluationrunfilter";
export declare class ListDataQualityRulesetEvaluationRunsRequest extends SpeakeasyBase {
    filter?: DataQualityRulesetEvaluationRunFilter;
    maxResults?: number;
    nextToken?: string;
}
