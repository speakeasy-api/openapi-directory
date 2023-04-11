import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationJobInferenceBenchmark } from "./recommendationjobinferencebenchmark";
import { RecommendationJobStatusEnum } from "./recommendationjobstatusenum";
import { RecommendationStepTypeEnum } from "./recommendationsteptypeenum";
/**
 * A returned array object for the <code>Steps</code> response field in the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListInferenceRecommendationsJobSteps.html">ListInferenceRecommendationsJobSteps</a> API command.
 */
export declare class InferenceRecommendationsJobStep extends SpeakeasyBase {
    inferenceBenchmark?: RecommendationJobInferenceBenchmark;
    jobName: string;
    status: RecommendationJobStatusEnum;
    stepType: RecommendationStepTypeEnum;
}
