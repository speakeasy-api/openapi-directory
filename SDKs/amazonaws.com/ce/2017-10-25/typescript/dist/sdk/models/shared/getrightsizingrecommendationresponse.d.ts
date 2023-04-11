import { SpeakeasyBase } from "../../../internal/utils";
import { RightsizingRecommendation } from "./rightsizingrecommendation";
import { RightsizingRecommendationConfiguration } from "./rightsizingrecommendationconfiguration";
import { RightsizingRecommendationMetadata } from "./rightsizingrecommendationmetadata";
import { RightsizingRecommendationSummary } from "./rightsizingrecommendationsummary";
/**
 * Success
 */
export declare class GetRightsizingRecommendationResponse extends SpeakeasyBase {
    configuration?: RightsizingRecommendationConfiguration;
    metadata?: RightsizingRecommendationMetadata;
    nextPageToken?: string;
    rightsizingRecommendations?: RightsizingRecommendation[];
    summary?: RightsizingRecommendationSummary;
}
