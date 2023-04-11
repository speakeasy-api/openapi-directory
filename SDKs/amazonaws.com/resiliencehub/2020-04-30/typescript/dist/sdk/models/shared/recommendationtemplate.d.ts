import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationTemplateStatusEnum } from "./recommendationtemplatestatusenum";
import { RenderRecommendationTypeEnum } from "./renderrecommendationtypeenum";
import { S3Location } from "./s3location";
import { TemplateFormatEnum } from "./templateformatenum";
/**
 * Defines a recommendation template created with the <a>CreateRecommendationTemplate</a> action.
 */
export declare class RecommendationTemplate extends SpeakeasyBase {
    appArn?: string;
    assessmentArn: string;
    endTime?: Date;
    format: TemplateFormatEnum;
    message?: string;
    name: string;
    needsReplacements?: boolean;
    recommendationIds?: string[];
    recommendationTemplateArn: string;
    recommendationTypes: RenderRecommendationTypeEnum[];
    startTime?: Date;
    status: RecommendationTemplateStatusEnum;
    tags?: Record<string, string>;
    templatesLocation?: S3Location;
}
