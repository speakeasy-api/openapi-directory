import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains details about items that were processed in all of the child workflow executions that were started by a Map Run.
 */
export declare class MapRunItemCounts extends SpeakeasyBase {
    aborted: number;
    failed: number;
    pending: number;
    resultsWritten: number;
    running: number;
    succeeded: number;
    timedOut: number;
    total: number;
}
