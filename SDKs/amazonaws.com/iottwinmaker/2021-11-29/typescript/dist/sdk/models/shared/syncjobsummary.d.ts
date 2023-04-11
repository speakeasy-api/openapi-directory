import { SpeakeasyBase } from "../../../internal/utils";
import { SyncJobStatus } from "./syncjobstatus";
/**
 * The SyncJob summary.
 */
export declare class SyncJobSummary extends SpeakeasyBase {
    arn?: string;
    creationDateTime?: Date;
    status?: SyncJobStatus;
    syncSource?: string;
    updateDateTime?: Date;
    workspaceId?: string;
}
