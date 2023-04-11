import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationSet } from "./recommendationset";
import { StrategyRecommendationEnum } from "./strategyrecommendationenum";
/**
 *  Contains information about a strategy recommendation for an application component.
 */
export declare class ApplicationComponentStrategy extends SpeakeasyBase {
    isPreferred?: boolean;
    recommendation?: RecommendationSet;
    status?: StrategyRecommendationEnum;
}
