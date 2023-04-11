import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the last archive or restore process.
 */
export declare enum DescribeSnapshotTierStatusResultSnapshotTierStatusesLastTieringOperationStatusEnum {
    ArchivalInProgress = "archival-in-progress",
    ArchivalCompleted = "archival-completed",
    ArchivalFailed = "archival-failed",
    TemporaryRestoreInProgress = "temporary-restore-in-progress",
    TemporaryRestoreCompleted = "temporary-restore-completed",
    TemporaryRestoreFailed = "temporary-restore-failed",
    PermanentRestoreInProgress = "permanent-restore-in-progress",
    PermanentRestoreCompleted = "permanent-restore-completed",
    PermanentRestoreFailed = "permanent-restore-failed"
}
/**
 * The state of the snapshot.
 */
export declare enum DescribeSnapshotTierStatusResultSnapshotTierStatusesStatusEnum {
    Pending = "pending",
    Completed = "completed",
    Error = "error",
    Recoverable = "recoverable",
    Recovering = "recovering"
}
/**
 * The storage tier in which the snapshot is stored. <code>standard</code> indicates that the snapshot is stored in the standard snapshot storage tier and that it is ready for use. <code>archive</code> indicates that the snapshot is currently archived and that it must be restored before it can be used.
 */
export declare enum DescribeSnapshotTierStatusResultSnapshotTierStatusesStorageTierEnum {
    Archive = "archive",
    Standard = "standard"
}
/**
 * Describes a tag.
 */
export declare class DescribeSnapshotTierStatusResultSnapshotTierStatusesTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Provides information about a snapshot's storage tier.
 */
export declare class DescribeSnapshotTierStatusResultSnapshotTierStatuses extends SpeakeasyBase {
    archivalCompleteTime?: Date;
    lastTieringOperationStatus?: DescribeSnapshotTierStatusResultSnapshotTierStatusesLastTieringOperationStatusEnum;
    lastTieringOperationStatusDetail?: string;
    lastTieringProgress?: number;
    lastTieringStartTime?: Date;
    ownerId?: string;
    restoreExpiryTime?: Date;
    snapshotId?: string;
    status?: DescribeSnapshotTierStatusResultSnapshotTierStatusesStatusEnum;
    storageTier?: DescribeSnapshotTierStatusResultSnapshotTierStatusesStorageTierEnum;
    tags?: DescribeSnapshotTierStatusResultSnapshotTierStatusesTags[];
    volumeId?: string;
}
/**
 * Success
 */
export declare class DescribeSnapshotTierStatusResult extends SpeakeasyBase {
    nextToken?: string;
    snapshotTierStatuses?: DescribeSnapshotTierStatusResultSnapshotTierStatuses[];
}
