import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointInfo } from "./endpointinfo";
import { InferenceMetrics } from "./inferencemetrics";
/**
 * The performance results from running an Inference Recommender job on an existing endpoint.
 */
export declare class EndpointPerformance extends SpeakeasyBase {
    /**
     * Details about a customer endpoint that was compared in an Inference Recommender job.
     */
    endpointInfo: EndpointInfo;
    metrics: InferenceMetrics;
}
