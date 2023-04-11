import { SpeakeasyBase } from "../../../internal/utils";
import { MetricAttribute } from "./metricattribute";
import { MetricAttributionOutput } from "./metricattributionoutput";
export declare class UpdateMetricAttributionRequest extends SpeakeasyBase {
    addMetrics?: MetricAttribute[];
    metricAttributionArn?: string;
    metricsOutputConfig?: MetricAttributionOutput;
    removeMetrics?: string[];
}
