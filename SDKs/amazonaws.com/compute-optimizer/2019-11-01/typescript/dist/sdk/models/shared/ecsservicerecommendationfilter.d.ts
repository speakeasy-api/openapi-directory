import { SpeakeasyBase } from "../../../internal/utils";
import { ECSServiceRecommendationFilterNameEnum } from "./ecsservicerecommendationfilternameenum";
/**
 *  Describes a filter that returns a more specific list of Amazon ECS service recommendations. Use this filter with the <a>GetECSServiceRecommendations</a> action.
 */
export declare class ECSServiceRecommendationFilter extends SpeakeasyBase {
    name?: ECSServiceRecommendationFilterNameEnum;
    values?: string[];
}
