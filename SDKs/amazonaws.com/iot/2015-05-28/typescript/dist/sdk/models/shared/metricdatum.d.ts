import { SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
/**
 * A metric.
 */
export declare class MetricDatum extends SpeakeasyBase {
    timestamp?: Date;
    value?: MetricValue;
}
