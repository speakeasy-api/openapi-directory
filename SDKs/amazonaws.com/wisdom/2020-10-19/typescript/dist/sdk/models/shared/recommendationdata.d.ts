import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
import { RecommendationTypeEnum } from "./recommendationtypeenum";
import { RelevanceLevelEnum } from "./relevancelevelenum";
/**
 * Information about the recommendation.
 */
export declare class RecommendationData extends SpeakeasyBase {
    document: Document;
    recommendationId: string;
    relevanceLevel?: RelevanceLevelEnum;
    relevanceScore?: number;
    type?: RecommendationTypeEnum;
}
