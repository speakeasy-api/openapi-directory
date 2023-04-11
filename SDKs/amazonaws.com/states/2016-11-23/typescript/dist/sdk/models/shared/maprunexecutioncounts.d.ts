import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains details about all of the child workflow executions started by a Map Run.
 */
export declare class MapRunExecutionCounts extends SpeakeasyBase {
    aborted: number;
    failed: number;
    pending: number;
    resultsWritten: number;
    running: number;
    succeeded: number;
    timedOut: number;
    total: number;
}
