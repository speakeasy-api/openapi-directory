import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationJobStatusEnum } from "./recommendationjobstatusenum";
import { RecommendationJobTypeEnum } from "./recommendationjobtypeenum";
/**
 * A structure that contains a list of recommendation jobs.
 */
export declare class InferenceRecommendationsJob extends SpeakeasyBase {
    completionTime?: Date;
    creationTime: Date;
    failureReason?: string;
    jobArn: string;
    jobDescription: string;
    jobName: string;
    jobType: RecommendationJobTypeEnum;
    lastModifiedTime: Date;
    roleArn: string;
    status: RecommendationJobStatusEnum;
}
