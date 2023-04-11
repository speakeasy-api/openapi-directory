import { SpeakeasyBase } from "../../../internal/utils";
import { BatchGetCommitsError } from "./batchgetcommitserror";
import { Commit } from "./commit";
/**
 * Success
 */
export declare class BatchGetCommitsOutput extends SpeakeasyBase {
    commits?: Commit[];
    errors?: BatchGetCommitsError[];
}
