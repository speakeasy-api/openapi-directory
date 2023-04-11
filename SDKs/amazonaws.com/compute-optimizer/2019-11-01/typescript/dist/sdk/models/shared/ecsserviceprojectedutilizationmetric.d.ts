import { SpeakeasyBase } from "../../../internal/utils";
import { ECSServiceMetricNameEnum } from "./ecsservicemetricnameenum";
import { ECSServiceMetricStatisticEnum } from "./ecsservicemetricstatisticenum";
/**
 * <p> Describes the projected utilization metrics of an Amazon ECS service recommendation option. </p> <p>To determine the performance difference between your current Amazon ECS service and the recommended option, compare the utilization metric data of your service against its projected utilization metric data.</p>
 */
export declare class ECSServiceProjectedUtilizationMetric extends SpeakeasyBase {
    lowerBoundValue?: number;
    name?: ECSServiceMetricNameEnum;
    statistic?: ECSServiceMetricStatisticEnum;
    upperBoundValue?: number;
}
