import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Current state of the snapshot.
 */
export declare enum CreateSnapshotsResultSnapshotsStateEnum {
    Pending = "pending",
    Completed = "completed",
    Error = "error",
    Recoverable = "recoverable",
    Recovering = "recovering"
}
/**
 * Describes a tag.
 */
export declare class CreateSnapshotsResultSnapshotsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about a snapshot.
 */
export declare class CreateSnapshotsResultSnapshots extends SpeakeasyBase {
    description?: string;
    encrypted?: boolean;
    outpostArn?: string;
    ownerId?: string;
    progress?: string;
    snapshotId?: string;
    startTime?: Date;
    state?: CreateSnapshotsResultSnapshotsStateEnum;
    tags?: CreateSnapshotsResultSnapshotsTags[];
    volumeId?: string;
    volumeSize?: number;
}
/**
 * Success
 */
export declare class CreateSnapshotsResult extends SpeakeasyBase {
    snapshots?: CreateSnapshotsResultSnapshots[];
}
