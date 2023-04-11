import { SpeakeasyBase } from "../../../internal/utils";
import { ECSServiceRecommendation } from "./ecsservicerecommendation";
import { GetRecommendationError } from "./getrecommendationerror";
/**
 * Success
 */
export declare class GetECSServiceRecommendationsResponse extends SpeakeasyBase {
    ecsServiceRecommendations?: ECSServiceRecommendation[];
    errors?: GetRecommendationError[];
    nextToken?: string;
}
