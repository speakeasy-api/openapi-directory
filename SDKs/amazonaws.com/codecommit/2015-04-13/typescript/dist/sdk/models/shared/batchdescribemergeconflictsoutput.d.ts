import { SpeakeasyBase } from "../../../internal/utils";
import { BatchDescribeMergeConflictsError } from "./batchdescribemergeconflictserror";
import { Conflict } from "./conflict";
/**
 * Success
 */
export declare class BatchDescribeMergeConflictsOutput extends SpeakeasyBase {
    baseCommitId?: string;
    conflicts: Conflict[];
    destinationCommitId: string;
    errors?: BatchDescribeMergeConflictsError[];
    nextToken?: string;
    sourceCommitId: string;
}
