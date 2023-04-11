import { SpeakeasyBase } from "../../../internal/utils";
import { ECSServiceProjectedMetric } from "./ecsserviceprojectedmetric";
/**
 * <p> Describes the projected metrics of an Amazon ECS service recommendation option. </p> <p>To determine the performance difference between your current Amazon ECS service and the recommended option, compare the metric data of your service against its projected metric data.</p>
 */
export declare class ECSServiceRecommendedOptionProjectedMetric extends SpeakeasyBase {
    projectedMetrics?: ECSServiceProjectedMetric[];
    recommendedCpuUnits?: number;
    recommendedMemorySize?: number;
}
