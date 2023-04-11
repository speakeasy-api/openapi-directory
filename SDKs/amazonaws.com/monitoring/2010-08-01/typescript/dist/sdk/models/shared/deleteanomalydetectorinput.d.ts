import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { MetricMathAnomalyDetector } from "./metricmathanomalydetector";
import { SingleMetricAnomalyDetector } from "./singlemetricanomalydetector";
export declare class DeleteAnomalyDetectorInput extends SpeakeasyBase {
    dimensions?: Dimension[];
    metricMathAnomalyDetector?: MetricMathAnomalyDetector;
    metricName?: string;
    namespace?: string;
    singleMetricAnomalyDetector?: SingleMetricAnomalyDetector;
    stat?: string;
}
