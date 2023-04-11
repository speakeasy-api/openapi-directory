import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointPerformance } from "./endpointperformance";
import { InferenceRecommendation } from "./inferencerecommendation";
import { RecommendationJobInputConfig } from "./recommendationjobinputconfig";
import { RecommendationJobStatusEnum } from "./recommendationjobstatusenum";
import { RecommendationJobStoppingConditions } from "./recommendationjobstoppingconditions";
import { RecommendationJobTypeEnum } from "./recommendationjobtypeenum";
/**
 * Success
 */
export declare class DescribeInferenceRecommendationsJobResponse extends SpeakeasyBase {
    completionTime?: Date;
    creationTime: Date;
    endpointPerformances?: EndpointPerformance[];
    failureReason?: string;
    inferenceRecommendations?: InferenceRecommendation[];
    inputConfig: RecommendationJobInputConfig;
    jobArn: string;
    jobDescription?: string;
    jobName: string;
    jobType: RecommendationJobTypeEnum;
    lastModifiedTime: Date;
    roleArn: string;
    status: RecommendationJobStatusEnum;
    stoppingConditions?: RecommendationJobStoppingConditions;
}
