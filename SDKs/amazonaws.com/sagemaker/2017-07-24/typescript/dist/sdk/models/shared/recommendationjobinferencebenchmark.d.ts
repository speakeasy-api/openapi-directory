import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointOutputConfiguration } from "./endpointoutputconfiguration";
import { InferenceMetrics } from "./inferencemetrics";
import { ModelConfiguration } from "./modelconfiguration";
import { RecommendationMetrics } from "./recommendationmetrics";
/**
 * The details for a specific benchmark from an Inference Recommender job.
 */
export declare class RecommendationJobInferenceBenchmark extends SpeakeasyBase {
    /**
     * The endpoint configuration made by Inference Recommender during a recommendation job.
     */
    endpointConfiguration?: EndpointOutputConfiguration;
    /**
     * The metrics for an existing endpoint compared in an Inference Recommender job.
     */
    endpointMetrics?: InferenceMetrics;
    failureReason?: string;
    /**
     * The metrics of recommendations.
     */
    metrics?: RecommendationMetrics;
    /**
     * Defines the model configuration. Includes the specification name and environment parameters.
     */
    modelConfiguration: ModelConfiguration;
}
