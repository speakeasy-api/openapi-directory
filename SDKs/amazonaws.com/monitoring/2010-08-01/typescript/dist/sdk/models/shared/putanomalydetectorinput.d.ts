import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalyDetectorConfiguration } from "./anomalydetectorconfiguration";
import { Dimension } from "./dimension";
import { MetricMathAnomalyDetector } from "./metricmathanomalydetector";
import { SingleMetricAnomalyDetector } from "./singlemetricanomalydetector";
export declare class PutAnomalyDetectorInput extends SpeakeasyBase {
    configuration?: AnomalyDetectorConfiguration;
    dimensions?: Dimension[];
    metricMathAnomalyDetector?: MetricMathAnomalyDetector;
    metricName?: string;
    namespace?: string;
    singleMetricAnomalyDetector?: SingleMetricAnomalyDetector;
    stat?: string;
}
