import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationData } from "./recommendationdata";
import { RecommendationTrigger } from "./recommendationtrigger";
/**
 * Success
 */
export declare class GetRecommendationsResponse extends SpeakeasyBase {
    recommendations: RecommendationData[];
    triggers?: RecommendationTrigger[];
}
