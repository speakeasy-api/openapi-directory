import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityMetricTypeEnum } from "./dataqualitymetrictypeenum";
/**
 * An array that describes a data quality metric. Each <code>DataQualityMetric</code> object contains the data quality metric name, its value, a description of the metric, and the affected column.
 */
export declare class DataQualityMetric extends SpeakeasyBase {
    metricDescription?: string;
    metricType?: DataQualityMetricTypeEnum;
    metricValue?: number;
    relatedColumnName?: string;
}
