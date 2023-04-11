import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityMetric } from "./dataqualitymetric";
/**
 * An array of <code>DataQualityMetric</code> objects that describes one or more data quality metrics.
 */
export declare class MetricSetDataQualityMetric extends SpeakeasyBase {
    dataQualityMetricList?: DataQualityMetric[];
    metricSetArn?: string;
}
