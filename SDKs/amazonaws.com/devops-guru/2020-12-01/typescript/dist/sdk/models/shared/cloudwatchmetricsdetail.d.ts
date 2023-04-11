import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchMetricsDataSummary } from "./cloudwatchmetricsdatasummary";
import { CloudWatchMetricsDimension } from "./cloudwatchmetricsdimension";
import { CloudWatchMetricsStatEnum } from "./cloudwatchmetricsstatenum";
/**
 *  Information about an Amazon CloudWatch metric.
 */
export declare class CloudWatchMetricsDetail extends SpeakeasyBase {
    dimensions?: CloudWatchMetricsDimension[];
    metricDataSummary?: CloudWatchMetricsDataSummary;
    metricName?: string;
    namespace?: string;
    period?: number;
    stat?: CloudWatchMetricsStatEnum;
    unit?: string;
}
