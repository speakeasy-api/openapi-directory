import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationItem } from "./recommendationitem";
import { SopServiceTypeEnum } from "./sopservicetypeenum";
/**
 * Defines a standard operating procedure (SOP) recommendation.
 */
export declare class SopRecommendation extends SpeakeasyBase {
    appComponentName?: string;
    description?: string;
    items?: RecommendationItem[];
    name?: string;
    prerequisite?: string;
    recommendationId: string;
    referenceId: string;
    serviceType: SopServiceTypeEnum;
}
