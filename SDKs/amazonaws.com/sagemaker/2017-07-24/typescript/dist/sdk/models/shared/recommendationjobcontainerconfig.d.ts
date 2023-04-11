import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationJobPayloadConfig } from "./recommendationjobpayloadconfig";
/**
 * Specifies mandatory fields for running an Inference Recommender job directly in the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateInferenceRecommendationsJob.html">CreateInferenceRecommendationsJob</a> API. The fields specified in <code>ContainerConfig</code> override the corresponding fields in the model package. Use <code>ContainerConfig</code> if you want to specify these fields for the recommendation job but don't want to edit them in your model package.
 */
export declare class RecommendationJobContainerConfig extends SpeakeasyBase {
    dataInputConfig?: string;
    domain?: string;
    framework?: string;
    frameworkVersion?: string;
    nearestModelName?: string;
    payloadConfig?: RecommendationJobPayloadConfig;
    supportedInstanceTypes?: string[];
    task?: string;
}
