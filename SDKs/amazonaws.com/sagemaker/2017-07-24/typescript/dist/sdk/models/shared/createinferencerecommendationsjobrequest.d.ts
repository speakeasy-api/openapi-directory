import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationJobInputConfig } from "./recommendationjobinputconfig";
import { RecommendationJobOutputConfig } from "./recommendationjoboutputconfig";
import { RecommendationJobStoppingConditions } from "./recommendationjobstoppingconditions";
import { RecommendationJobTypeEnum } from "./recommendationjobtypeenum";
import { Tag } from "./tag";
export declare class CreateInferenceRecommendationsJobRequest extends SpeakeasyBase {
    inputConfig: RecommendationJobInputConfig;
    jobDescription?: string;
    jobName: string;
    jobType: RecommendationJobTypeEnum;
    outputConfig?: RecommendationJobOutputConfig;
    roleArn: string;
    stoppingConditions?: RecommendationJobStoppingConditions;
    tags?: Tag[];
}
