import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDataQuery } from "./metricdataquery";
/**
 * Indicates the CloudWatch math expression that provides the time series the anomaly detector uses as input. The designated math expression must return a single time series.
 */
export declare class MetricMathAnomalyDetector extends SpeakeasyBase {
    metricDataQueries?: MetricDataQuery[];
}
