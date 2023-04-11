import { SpeakeasyBase } from "../../../internal/utils";
import { BucketMetricNameEnum } from "./bucketmetricnameenum";
import { MetricDatapoint } from "./metricdatapoint";
/**
 * Success
 */
export declare class GetBucketMetricDataResult extends SpeakeasyBase {
    metricData?: MetricDatapoint[];
    metricName?: BucketMetricNameEnum;
}
