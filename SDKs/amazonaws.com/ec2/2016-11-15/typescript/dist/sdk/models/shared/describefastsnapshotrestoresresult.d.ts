import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of fast snapshot restores.
 */
export declare enum DescribeFastSnapshotRestoresResultFastSnapshotRestoresStateEnum {
    Enabling = "enabling",
    Optimizing = "optimizing",
    Enabled = "enabled",
    Disabling = "disabling",
    Disabled = "disabled"
}
/**
 * Describes fast snapshot restores for a snapshot.
 */
export declare class DescribeFastSnapshotRestoresResultFastSnapshotRestores extends SpeakeasyBase {
    availabilityZone?: string;
    disabledTime?: Date;
    disablingTime?: Date;
    enabledTime?: Date;
    enablingTime?: Date;
    optimizingTime?: Date;
    ownerAlias?: string;
    ownerId?: string;
    snapshotId?: string;
    state?: DescribeFastSnapshotRestoresResultFastSnapshotRestoresStateEnum;
    stateTransitionReason?: string;
}
/**
 * Success
 */
export declare class DescribeFastSnapshotRestoresResult extends SpeakeasyBase {
    fastSnapshotRestores?: DescribeFastSnapshotRestoresResultFastSnapshotRestores[];
    nextToken?: string;
}
