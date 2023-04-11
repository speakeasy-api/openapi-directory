import { SpeakeasyBase } from "../../../internal/utils";
import { MetricStreamFilter } from "./metricstreamfilter";
import { MetricStreamOutputFormatEnum } from "./metricstreamoutputformatenum";
import { MetricStreamStatisticsConfiguration } from "./metricstreamstatisticsconfiguration";
/**
 * Success
 */
export declare class GetMetricStreamOutput extends SpeakeasyBase {
    arn?: string;
    creationDate?: Date;
    excludeFilters?: MetricStreamFilter[];
    firehoseArn?: string;
    includeFilters?: MetricStreamFilter[];
    includeLinkedAccountsMetrics?: boolean;
    lastUpdateDate?: Date;
    name?: string;
    outputFormat?: MetricStreamOutputFormatEnum;
    roleArn?: string;
    state?: string;
    statisticsConfigurations?: MetricStreamStatisticsConfiguration[];
}
