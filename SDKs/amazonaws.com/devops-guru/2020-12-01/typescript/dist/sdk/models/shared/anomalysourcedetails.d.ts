import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchMetricsDetail } from "./cloudwatchmetricsdetail";
import { PerformanceInsightsMetricsDetail } from "./performanceinsightsmetricsdetail";
/**
 *  Details about the source of the anomalous operational data that triggered the anomaly.
 */
export declare class AnomalySourceDetails extends SpeakeasyBase {
    cloudWatchMetrics?: CloudWatchMetricsDetail[];
    performanceInsightsMetrics?: PerformanceInsightsMetricsDetail[];
}
