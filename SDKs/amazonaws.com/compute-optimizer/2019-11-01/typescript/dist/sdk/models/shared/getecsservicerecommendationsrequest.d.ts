import { SpeakeasyBase } from "../../../internal/utils";
import { ECSServiceRecommendationFilter } from "./ecsservicerecommendationfilter";
export declare class GetECSServiceRecommendationsRequest extends SpeakeasyBase {
    accountIds?: string[];
    filters?: ECSServiceRecommendationFilter[];
    maxResults?: number;
    nextToken?: string;
    serviceArns?: string[];
}
