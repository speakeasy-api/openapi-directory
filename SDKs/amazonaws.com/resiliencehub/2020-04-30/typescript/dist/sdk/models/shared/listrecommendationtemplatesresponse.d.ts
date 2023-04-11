import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationTemplate } from "./recommendationtemplate";
/**
 * Success
 */
export declare class ListRecommendationTemplatesResponse extends SpeakeasyBase {
    nextToken?: string;
    recommendationTemplates?: RecommendationTemplate[];
}
