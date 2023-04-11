import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The snapshot state.
 */
export declare enum SnapshotStateEnum {
    Pending = "pending",
    Completed = "completed",
    Error = "error",
    Recoverable = "recoverable",
    Recovering = "recovering"
}
/**
 * The storage tier in which the snapshot is stored. <code>standard</code> indicates that the snapshot is stored in the standard snapshot storage tier and that it is ready for use. <code>archive</code> indicates that the snapshot is currently archived and that it must be restored before it can be used.
 */
export declare enum SnapshotStorageTierEnum {
    Archive = "archive",
    Standard = "standard"
}
/**
 * Describes a tag.
 */
export declare class SnapshotTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a snapshot.
 */
export declare class Snapshot extends SpeakeasyBase {
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
    state?: SnapshotStateEnum;
    stateMessage?: string;
    storageTier?: SnapshotStorageTierEnum;
    tags?: SnapshotTags[];
    volumeId?: string;
    volumeSize?: number;
}
