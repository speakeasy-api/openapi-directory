import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationTargetEnum } from "./recommendationtargetenum";
/**
 * You can use <code>RightsizingRecommendationConfiguration</code> to customize recommendations across two attributes. You can choose to view recommendations for instances within the same instance families or across different instance families. You can also choose to view your estimated savings that are associated with recommendations with consideration of existing Savings Plans or Reserved Instance (RI) benefits, or neither.
 */
export declare class RightsizingRecommendationConfiguration extends SpeakeasyBase {
    benefitsConsidered: boolean;
    recommendationTarget: RecommendationTargetEnum;
}
