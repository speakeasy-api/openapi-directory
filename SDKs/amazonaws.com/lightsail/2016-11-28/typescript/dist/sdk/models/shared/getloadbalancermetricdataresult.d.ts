import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerMetricNameEnum } from "./loadbalancermetricnameenum";
import { MetricDatapoint } from "./metricdatapoint";
/**
 * Success
 */
export declare class GetLoadBalancerMetricDataResult extends SpeakeasyBase {
    metricData?: MetricDatapoint[];
    metricName?: LoadBalancerMetricNameEnum;
}
