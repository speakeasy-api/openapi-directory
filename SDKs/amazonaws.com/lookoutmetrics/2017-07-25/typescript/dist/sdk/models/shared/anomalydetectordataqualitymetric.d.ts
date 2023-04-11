import { SpeakeasyBase } from "../../../internal/utils";
import { MetricSetDataQualityMetric } from "./metricsetdataqualitymetric";
/**
 * Aggregated details about the data quality metrics collected for the <code>AnomalyDetectorArn</code> provided in the <a>GetDataQualityMetrics</a> object.
 */
export declare class AnomalyDetectorDataQualityMetric extends SpeakeasyBase {
    metricSetDataQualityMetricList?: MetricSetDataQualityMetric[];
    startTimestamp?: Date;
}
