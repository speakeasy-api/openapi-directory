import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration details of the recommender.
 */
export declare class RecommenderConfig extends SpeakeasyBase {
    itemExplorationConfig?: Record<string, string>;
    minRecommendationRequestsPerSecond?: number;
}
