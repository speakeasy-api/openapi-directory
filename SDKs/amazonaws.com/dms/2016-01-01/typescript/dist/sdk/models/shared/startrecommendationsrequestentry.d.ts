import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationSettings } from "./recommendationsettings";
/**
 * Provides information about the source database to analyze and provide target recommendations according to the specified requirements.
 */
export declare class StartRecommendationsRequestEntry extends SpeakeasyBase {
    databaseId: string;
    settings: RecommendationSettings;
}
