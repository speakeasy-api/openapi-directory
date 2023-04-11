import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The metrics of recommendations.
 */
export declare class RecommendationMetrics extends SpeakeasyBase {
    costPerHour: number;
    costPerInference: number;
    cpuUtilization?: number;
    maxInvocations: number;
    memoryUtilization?: number;
    modelLatency: number;
}
