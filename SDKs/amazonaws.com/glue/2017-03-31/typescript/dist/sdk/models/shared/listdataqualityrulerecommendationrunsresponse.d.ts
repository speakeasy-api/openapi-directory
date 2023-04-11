import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityRuleRecommendationRunDescription } from "./dataqualityrulerecommendationrundescription";
/**
 * Success
 */
export declare class ListDataQualityRuleRecommendationRunsResponse extends SpeakeasyBase {
    nextToken?: string;
    runs?: DataQualityRuleRecommendationRunDescription[];
}
