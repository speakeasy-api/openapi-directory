import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The snapshot state.
 */
export declare enum DescribeSnapshotsResultSnapshotsStateEnum {
    Pending = "pending",
    Completed = "completed",
    Error = "error",
    Recoverable = "recoverable",
    Recovering = "recovering"
}
/**
 * The storage tier in which the snapshot is stored. <code>standard</code> indicates that the snapshot is stored in the standard snapshot storage tier and that it is ready for use. <code>archive</code> indicates that the snapshot is currently archived and that it must be restored before it can be used.
 */
export declare enum DescribeSnapshotsResultSnapshotsStorageTierEnum {
    Archive = "archive",
    Standard = "standard"
}
/**
 * Describes a tag.
 */
export declare class DescribeSnapshotsResultSnapshotsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a snapshot.
 */
export declare class DescribeSnapshotsResultSnapshots extends SpeakeasyBase {
    dataEncryptionKeyId?: string;
    description?: string;
    encrypted?: boolean;
    kmsKeyId?: string;
    outpostArn?: string;
    ownerAlias?: string;
    ownerId?: string;
    progress?: string;
    restoreExpiryTime?: Date;
    snapshotId?: string;
    startTime?: Date;
    state?: DescribeSnapshotsResultSnapshotsStateEnum;
    stateMessage?: string;
    storageTier?: DescribeSnapshotsResultSnapshotsStorageTierEnum;
    tags?: DescribeSnapshotsResultSnapshotsTags[];
    volumeId?: string;
    volumeSize?: number;
}
/**
 * Success
 */
export declare class DescribeSnapshotsResult extends SpeakeasyBase {
    nextToken?: string;
    snapshots?: DescribeSnapshotsResultSnapshots[];
}
