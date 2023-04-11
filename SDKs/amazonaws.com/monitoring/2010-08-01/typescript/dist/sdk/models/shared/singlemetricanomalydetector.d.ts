import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
/**
 * Designates the CloudWatch metric and statistic that provides the time series the anomaly detector uses as input.
 */
export declare class SingleMetricAnomalyDetector extends SpeakeasyBase {
    dimensions?: Dimension[];
    metricName?: string;
    namespace?: string;
    stat?: string;
}
