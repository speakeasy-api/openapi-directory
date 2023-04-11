import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityRuleRecommendationRunFilter } from "./dataqualityrulerecommendationrunfilter";
export declare class ListDataQualityRuleRecommendationRunsRequest extends SpeakeasyBase {
    filter?: DataQualityRuleRecommendationRunFilter;
    maxResults?: number;
    nextToken?: string;
}
