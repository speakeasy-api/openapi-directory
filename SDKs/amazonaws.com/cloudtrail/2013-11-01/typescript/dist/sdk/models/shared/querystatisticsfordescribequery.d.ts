import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Gets metadata about a query, including the number of events that were matched, the total number of events scanned, the query run time in milliseconds, and the query's creation time.
 */
export declare class QueryStatisticsForDescribeQuery extends SpeakeasyBase {
    bytesScanned?: number;
    creationTime?: Date;
    eventsMatched?: number;
    eventsScanned?: number;
    executionTimeInMillis?: number;
}
