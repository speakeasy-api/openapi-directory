import { SpeakeasyBase } from "../../../internal/utils";
import { ECSServiceMetricNameEnum } from "./ecsservicemetricnameenum";
/**
 * <p> Describes the projected metrics of an Amazon ECS service recommendation option. </p> <p>To determine the performance difference between your current Amazon ECS service and the recommended option, compare the metric data of your service against its projected metric data.</p>
 */
export declare class ECSServiceProjectedMetric extends SpeakeasyBase {
    lowerBoundValues?: number[];
    name?: ECSServiceMetricNameEnum;
    timestamps?: Date[];
    upperBoundValues?: number[];
}
