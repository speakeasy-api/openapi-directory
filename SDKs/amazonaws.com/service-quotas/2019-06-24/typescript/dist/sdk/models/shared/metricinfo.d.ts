import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the CloudWatch metric that reflects quota usage.
 */
export declare class MetricInfo extends SpeakeasyBase {
    metricDimensions?: Record<string, string>;
    metricName?: string;
    metricNamespace?: string;
    metricStatisticRecommendation?: string;
}
