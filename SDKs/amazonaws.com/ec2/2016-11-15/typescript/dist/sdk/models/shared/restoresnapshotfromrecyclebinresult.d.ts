import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the snapshot.
 */
export declare enum RestoreSnapshotFromRecycleBinResultStateEnum {
    Pending = "pending",
    Completed = "completed",
    Error = "error",
    Recoverable = "recoverable",
    Recovering = "recovering"
}
/**
 * Success
 */
export declare class RestoreSnapshotFromRecycleBinResult extends SpeakeasyBase {
    description?: string;
    encrypted?: boolean;
    outpostArn?: string;
    ownerId?: string;
    progress?: string;
    snapshotId?: string;
    startTime?: Date;
    state?: RestoreSnapshotFromRecycleBinResultStateEnum;
    volumeId?: string;
    volumeSize?: number;
}
