import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationSettings } from "./recommendationsettings";
export declare class StartRecommendationsRequest extends SpeakeasyBase {
    databaseId: string;
    settings: RecommendationSettings;
}
