import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationPreferencesDetail } from "./recommendationpreferencesdetail";
/**
 * Success
 */
export declare class GetRecommendationPreferencesResponse extends SpeakeasyBase {
    nextToken?: string;
    recommendationPreferencesDetails?: RecommendationPreferencesDetail[];
}
