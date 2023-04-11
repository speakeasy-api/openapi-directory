import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDataQuery } from "./metricdataquery";
/**
 * Describes a custom scaling metric for a predictive scaling policy.
 */
export declare class PredictiveScalingCustomizedScalingMetric extends SpeakeasyBase {
    metricDataQueries: MetricDataQuery[];
}
