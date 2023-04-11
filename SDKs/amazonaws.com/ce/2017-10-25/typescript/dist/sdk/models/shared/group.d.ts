import { SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
/**
 * One level of grouped data in the results.
 */
export declare class Group extends SpeakeasyBase {
    keys?: string[];
    metrics?: Record<string, MetricValue>;
}
