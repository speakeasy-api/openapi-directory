import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationSummary } from "./recommendationsummary";
/**
 * Success
 */
export declare class ListRecommendationsResponse extends SpeakeasyBase {
    nextToken?: string;
    recommendationSummaries?: RecommendationSummary[];
}
