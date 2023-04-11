import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLMetricEnumEnum } from "./automlmetricenumenum";
import { AutoMLMetricExtendedEnumEnum } from "./automlmetricextendedenumenum";
import { MetricSetSourceEnum } from "./metricsetsourceenum";
/**
 * Information about the metric for a candidate produced by an AutoML job.
 */
export declare class MetricDatum extends SpeakeasyBase {
    metricName?: AutoMLMetricEnumEnum;
    set?: MetricSetSourceEnum;
    standardMetricName?: AutoMLMetricExtendedEnumEnum;
    value?: number;
}
