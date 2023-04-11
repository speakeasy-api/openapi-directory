import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceMetricNameEnum } from "./instancemetricnameenum";
import { MetricDatapoint } from "./metricdatapoint";
/**
 * Success
 */
export declare class GetInstanceMetricDataResult extends SpeakeasyBase {
    metricData?: MetricDatapoint[];
    metricName?: InstanceMetricNameEnum;
}
