import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationJobStatusEnum } from "./recommendationjobstatusenum";
import { RecommendationStepTypeEnum } from "./recommendationsteptypeenum";
export declare class ListInferenceRecommendationsJobStepsRequest extends SpeakeasyBase {
    jobName: string;
    maxResults?: number;
    nextToken?: string;
    status?: RecommendationJobStatusEnum;
    stepType?: RecommendationStepTypeEnum;
}
