import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationSet } from "./recommendationset";
import { StrategyRecommendationEnum } from "./strategyrecommendationenum";
/**
 *  Contains information about a strategy recommendation for a server.
 */
export declare class ServerStrategy extends SpeakeasyBase {
    isPreferred?: boolean;
    numberOfApplicationComponents?: number;
    recommendation?: RecommendationSet;
    status?: StrategyRecommendationEnum;
}
