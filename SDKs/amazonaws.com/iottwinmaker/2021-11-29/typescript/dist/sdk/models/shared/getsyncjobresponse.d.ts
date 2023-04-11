import { SpeakeasyBase } from "../../../internal/utils";
import { SyncJobStatus } from "./syncjobstatus";
/**
 * Success
 */
export declare class GetSyncJobResponse extends SpeakeasyBase {
    arn: string;
    creationDateTime: Date;
    status: SyncJobStatus;
    syncRole: string;
    syncSource: string;
    updateDateTime: Date;
    workspaceId: string;
}
