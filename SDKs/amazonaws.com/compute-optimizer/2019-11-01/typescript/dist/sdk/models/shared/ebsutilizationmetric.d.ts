import { SpeakeasyBase } from "../../../internal/utils";
import { EBSMetricNameEnum } from "./ebsmetricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";
/**
 * <p>Describes a utilization metric of an Amazon Elastic Block Store (Amazon EBS) volume.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p>
 */
export declare class EBSUtilizationMetric extends SpeakeasyBase {
    name?: EBSMetricNameEnum;
    statistic?: MetricStatisticEnum;
    value?: number;
}
