import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchMetricDataStatusCodeEnum } from "./cloudwatchmetricdatastatuscodeenum";
import { TimestampMetricValuePair } from "./timestampmetricvaluepair";
/**
 * Contains information about the analyzed metrics that displayed anomalous behavior.
 */
export declare class CloudWatchMetricsDataSummary extends SpeakeasyBase {
    statusCode?: CloudWatchMetricDataStatusCodeEnum;
    timestampMetricValuePairList?: TimestampMetricValuePair[];
}
