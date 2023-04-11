import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointOutputConfiguration } from "./endpointoutputconfiguration";
import { ModelConfiguration } from "./modelconfiguration";
import { RecommendationMetrics } from "./recommendationmetrics";
/**
 * A list of recommendations made by Amazon SageMaker Inference Recommender.
 */
export declare class InferenceRecommendation extends SpeakeasyBase {
    endpointConfiguration: EndpointOutputConfiguration;
    metrics: RecommendationMetrics;
    modelConfiguration: ModelConfiguration;
    recommendationId?: string;
}
