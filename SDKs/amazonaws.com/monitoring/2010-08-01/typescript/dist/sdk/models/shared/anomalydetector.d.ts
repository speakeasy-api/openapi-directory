import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalyDetectorConfiguration } from "./anomalydetectorconfiguration";
import { AnomalyDetectorStateValueEnum } from "./anomalydetectorstatevalueenum";
import { Dimension } from "./dimension";
import { MetricMathAnomalyDetector } from "./metricmathanomalydetector";
import { SingleMetricAnomalyDetector } from "./singlemetricanomalydetector";
/**
 * An anomaly detection model associated with a particular CloudWatch metric, statistic, or metric math expression. You can use the model to display a band of expected, normal values when the metric is graphed.
 */
export declare class AnomalyDetector extends SpeakeasyBase {
    configuration?: AnomalyDetectorConfiguration;
    dimensions?: Dimension[];
    metricMathAnomalyDetector?: MetricMathAnomalyDetector;
    metricName?: string;
    namespace?: string;
    singleMetricAnomalyDetector?: SingleMetricAnomalyDetector;
    stat?: string;
    stateValue?: AnomalyDetectorStateValueEnum;
}
