import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationTemplateStatusEnum } from "./recommendationtemplatestatusenum";
/**
 * Success
 */
export declare class DeleteRecommendationTemplateResponse extends SpeakeasyBase {
    recommendationTemplateArn: string;
    status: RecommendationTemplateStatusEnum;
}
