import { SpeakeasyBase } from "../../../internal/utils";
import { MetricFilter } from "./metricfilter";
/**
 * Success
 */
export declare class DescribeMetricFiltersResponse extends SpeakeasyBase {
    metricFilters?: MetricFilter[];
    /**
     * The token for the next set of items to return. The token expires after 24 hours.
     */
    nextToken?: string;
}
