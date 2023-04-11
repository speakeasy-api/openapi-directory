import { SpeakeasyBase } from "../../../internal/utils";
import { AttemptSyncConfig } from "./attemptsyncconfig";
export declare class SaveAttemptSyncConfigRequestBody extends SpeakeasyBase {
    attemptNumber: number;
    jobId: number;
    syncConfig: AttemptSyncConfig;
}
