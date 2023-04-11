import { SpeakeasyBase } from "../../../internal/utils";
import { ECSServiceMetricNameEnum } from "./ecsservicemetricnameenum";
import { ECSServiceMetricStatisticEnum } from "./ecsservicemetricstatisticenum";
/**
 * <p> Describes the utilization metric of an Amazon ECS service. </p> <p>To determine the performance difference between your current Amazon ECS service and the recommended option, compare the utilization metric data of your service against its projected utilization metric data.</p>
 */
export declare class ECSServiceUtilizationMetric extends SpeakeasyBase {
    name?: ECSServiceMetricNameEnum;
    statistic?: ECSServiceMetricStatisticEnum;
    value?: number;
}
