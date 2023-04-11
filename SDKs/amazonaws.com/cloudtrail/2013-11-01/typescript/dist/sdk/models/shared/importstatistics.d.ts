import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Provides statistics for the specified <code>ImportID</code>. CloudTrail does not update import statistics in real-time. Returned values for parameters such as <code>EventsCompleted</code> may be lower than the actual value, because CloudTrail updates statistics incrementally over the course of the import.
 */
export declare class ImportStatistics extends SpeakeasyBase {
    eventsCompleted?: number;
    failedEntries?: number;
    filesCompleted?: number;
    prefixesCompleted?: number;
    prefixesFound?: number;
}
