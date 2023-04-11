import { SpeakeasyBase } from "../../../internal/utils";
import { MetricAttribute } from "./metricattribute";
import { MetricAttributionOutput } from "./metricattributionoutput";
export declare class CreateMetricAttributionRequest extends SpeakeasyBase {
    datasetGroupArn: string;
    metrics: MetricAttribute[];
    metricsOutputConfig: MetricAttributionOutput;
    name: string;
}
