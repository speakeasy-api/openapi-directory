import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionGroup } from "./dimensiongroup";
/**
 * A single query to be processed. You must provide the metric to query. If no other parameters are specified, Performance Insights returns all data points for the specified metric. Optionally, you can request that the data points be aggregated by dimension group (<code>GroupBy</code>), and return only those data points that match your criteria (<code>Filter</code>).
 */
export declare class MetricQuery extends SpeakeasyBase {
    filter?: Record<string, string>;
    groupBy?: DimensionGroup;
    metric: string;
}
