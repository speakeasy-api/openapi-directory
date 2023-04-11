import { SpeakeasyBase } from "../../../internal/utils";
import { FrequencyEnum } from "./frequencyenum";
import { Metric } from "./metric";
import { MetricSetDimensionFilter } from "./metricsetdimensionfilter";
import { MetricSource } from "./metricsource";
import { TimestampColumn } from "./timestampcolumn";
/**
 * Success
 */
export declare class DescribeMetricSetResponse extends SpeakeasyBase {
    anomalyDetectorArn?: string;
    creationTime?: Date;
    dimensionFilterList?: MetricSetDimensionFilter[];
    dimensionList?: string[];
    lastModificationTime?: Date;
    metricList?: Metric[];
    metricSetArn?: string;
    metricSetDescription?: string;
    metricSetFrequency?: FrequencyEnum;
    metricSetName?: string;
    metricSource?: MetricSource;
    offset?: number;
    timestampColumn?: TimestampColumn;
    timezone?: string;
}
