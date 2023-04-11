import { SpeakeasyBase } from "../../../internal/utils";
import { MetricStreamFilter } from "./metricstreamfilter";
import { MetricStreamOutputFormatEnum } from "./metricstreamoutputformatenum";
import { MetricStreamStatisticsConfiguration } from "./metricstreamstatisticsconfiguration";
import { Tag } from "./tag";
export declare class PutMetricStreamInput extends SpeakeasyBase {
    excludeFilters?: MetricStreamFilter[];
    firehoseArn: string;
    includeFilters?: MetricStreamFilter[];
    includeLinkedAccountsMetrics?: boolean;
    name: string;
    outputFormat: MetricStreamOutputFormatEnum;
    roleArn: string;
    statisticsConfigurations?: MetricStreamStatisticsConfiguration[];
    tags?: Tag[];
}
