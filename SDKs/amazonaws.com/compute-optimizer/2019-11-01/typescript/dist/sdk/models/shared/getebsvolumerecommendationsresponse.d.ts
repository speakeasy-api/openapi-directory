import { SpeakeasyBase } from "../../../internal/utils";
import { GetRecommendationError } from "./getrecommendationerror";
import { VolumeRecommendation } from "./volumerecommendation";
/**
 * Success
 */
export declare class GetEBSVolumeRecommendationsResponse extends SpeakeasyBase {
    errors?: GetRecommendationError[];
    nextToken?: string;
    volumeRecommendations?: VolumeRecommendation[];
}
