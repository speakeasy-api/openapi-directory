import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a snapshot that is currently in the Recycle Bin.
 */
export declare class ListSnapshotsInRecycleBinResultSnapshots extends SpeakeasyBase {
    description?: string;
    recycleBinEnterTime?: Date;
    recycleBinExitTime?: Date;
    snapshotId?: string;
    volumeId?: string;
}
/**
 * Success
 */
export declare class ListSnapshotsInRecycleBinResult extends SpeakeasyBase {
    nextToken?: string;
    snapshots?: ListSnapshotsInRecycleBinResultSnapshots[];
}
