import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of fast snapshot restores for the snapshot.
 */
export declare enum DisableFastSnapshotRestoresResultSuccessfulStateEnum {
    Enabling = "enabling",
    Optimizing = "optimizing",
    Enabled = "enabled",
    Disabling = "disabling",
    Disabled = "disabled"
}
/**
 * Describes fast snapshot restores that were successfully disabled.
 */
export declare class DisableFastSnapshotRestoresResultSuccessful extends SpeakeasyBase {
    availabilityZone?: string;
    disabledTime?: Date;
    disablingTime?: Date;
    enabledTime?: Date;
    enablingTime?: Date;
    optimizingTime?: Date;
    ownerAlias?: string;
    ownerId?: string;
    snapshotId?: string;
    state?: DisableFastSnapshotRestoresResultSuccessfulStateEnum;
    stateTransitionReason?: string;
}
/**
 * The error.
 */
export declare class DisableFastSnapshotRestoresResultUnsuccessfulFastSnapshotRestoreStateErrorsError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Contains information about an error that occurred when disabling fast snapshot restores.
 */
export declare class DisableFastSnapshotRestoresResultUnsuccessfulFastSnapshotRestoreStateErrors extends SpeakeasyBase {
    availabilityZone?: string;
    error?: DisableFastSnapshotRestoresResultUnsuccessfulFastSnapshotRestoreStateErrorsError;
}
/**
 * Contains information about the errors that occurred when disabling fast snapshot restores.
 */
export declare class DisableFastSnapshotRestoresResultUnsuccessful extends SpeakeasyBase {
    fastSnapshotRestoreStateErrors?: DisableFastSnapshotRestoresResultUnsuccessfulFastSnapshotRestoreStateErrors[];
    snapshotId?: string;
}
/**
 * Success
 */
export declare class DisableFastSnapshotRestoresResult extends SpeakeasyBase {
    successful?: DisableFastSnapshotRestoresResultSuccessful[];
    unsuccessful?: DisableFastSnapshotRestoresResultUnsuccessful[];
}
