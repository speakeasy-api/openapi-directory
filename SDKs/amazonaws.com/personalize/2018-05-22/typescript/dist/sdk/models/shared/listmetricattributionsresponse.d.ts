import { SpeakeasyBase } from "../../../internal/utils";
import { MetricAttributionSummary } from "./metricattributionsummary";
/**
 * Success
 */
export declare class ListMetricAttributionsResponse extends SpeakeasyBase {
    metricAttributions?: MetricAttributionSummary[];
    nextToken?: string;
}
