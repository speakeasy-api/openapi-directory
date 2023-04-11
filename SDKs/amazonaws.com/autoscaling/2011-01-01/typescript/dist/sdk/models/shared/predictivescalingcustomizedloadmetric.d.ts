import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDataQuery } from "./metricdataquery";
/**
 * Describes a custom load metric for a predictive scaling policy.
 */
export declare class PredictiveScalingCustomizedLoadMetric extends SpeakeasyBase {
    metricDataQueries: MetricDataQuery[];
}
