import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigRecommendation } from "./configrecommendation";
import { RecommendationComplianceStatusEnum } from "./recommendationcompliancestatusenum";
/**
 * Defines recommendations for an Resilience Hub Application Component, returned as an object. This object contains component names, configuration recommendations, and recommendation statuses.
 */
export declare class ComponentRecommendation extends SpeakeasyBase {
    appComponentName: string;
    configRecommendations: ConfigRecommendation[];
    recommendationStatus: RecommendationComplianceStatusEnum;
}
