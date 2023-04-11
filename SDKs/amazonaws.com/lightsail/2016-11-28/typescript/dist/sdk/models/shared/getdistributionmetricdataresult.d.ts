import { SpeakeasyBase } from "../../../internal/utils";
import { DistributionMetricNameEnum } from "./distributionmetricnameenum";
import { MetricDatapoint } from "./metricdatapoint";
/**
 * Success
 */
export declare class GetDistributionMetricDataResult extends SpeakeasyBase {
    metricData?: MetricDatapoint[];
    metricName?: DistributionMetricNameEnum;
}
