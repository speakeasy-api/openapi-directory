import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDataQuery } from "./metricdataquery";
/**
 * Describes a customized capacity metric for a predictive scaling policy.
 */
export declare class PredictiveScalingCustomizedCapacityMetric extends SpeakeasyBase {
    metricDataQueries: MetricDataQuery[];
}
