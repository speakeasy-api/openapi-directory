import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationSummary } from "./recommendationsummary";
/**
 * Success
 */
export declare class GetRecommendationSummariesResponse extends SpeakeasyBase {
    nextToken?: string;
    recommendationSummaries?: RecommendationSummary[];
}
