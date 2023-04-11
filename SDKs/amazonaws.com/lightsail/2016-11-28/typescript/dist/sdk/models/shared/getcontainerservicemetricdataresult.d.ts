import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceMetricNameEnum } from "./containerservicemetricnameenum";
import { MetricDatapoint } from "./metricdatapoint";
/**
 * Success
 */
export declare class GetContainerServiceMetricDataResult extends SpeakeasyBase {
    metricData?: MetricDatapoint[];
    metricName?: ContainerServiceMetricNameEnum;
}
