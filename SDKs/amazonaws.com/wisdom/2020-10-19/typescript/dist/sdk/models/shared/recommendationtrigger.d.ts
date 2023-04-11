import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationSourceTypeEnum } from "./recommendationsourcetypeenum";
import { RecommendationTriggerData } from "./recommendationtriggerdata";
import { RecommendationTriggerTypeEnum } from "./recommendationtriggertypeenum";
/**
 * A recommendation trigger provides context on the event that produced the referenced recommendations. Recommendations are only referenced in <code>recommendationIds</code> by a single RecommendationTrigger.
 */
export declare class RecommendationTrigger extends SpeakeasyBase {
    data: RecommendationTriggerData;
    id: string;
    recommendationIds: string[];
    source: RecommendationSourceTypeEnum;
    type: RecommendationTriggerTypeEnum;
}
