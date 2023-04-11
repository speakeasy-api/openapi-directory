import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDimension } from "./metricdimension";
/**
 * Represents a specific metric.
 */
export declare class Metric extends SpeakeasyBase {
    dimensions?: MetricDimension[];
    metricName: string;
    namespace: string;
}
