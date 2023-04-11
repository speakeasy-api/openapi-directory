import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of fast snapshot restores.
 */
export declare enum EnableFastSnapshotRestoresResultSuccessfulStateEnum {
    Enabling = "enabling",
    Optimizing = "optimizing",
    Enabled = "enabled",
    Disabling = "disabling",
    Disabled = "disabled"
}
/**
 * Describes fast snapshot restores that were successfully enabled.
 */
export declare class EnableFastSnapshotRestoresResultSuccessful extends SpeakeasyBase {
    availabilityZone?: string;
    disabledTime?: Date;
    disablingTime?: Date;
    enabledTime?: Date;
    enablingTime?: Date;
    optimizingTime?: Date;
    ownerAlias?: string;
    ownerId?: string;
    snapshotId?: string;
    state?: EnableFastSnapshotRestoresResultSuccessfulStateEnum;
    stateTransitionReason?: string;
}
/**
 * The error.
 */
export declare class EnableFastSnapshotRestoresResultUnsuccessfulFastSnapshotRestoreStateErrorsError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Contains information about an error that occurred when enabling fast snapshot restores.
 */
export declare class EnableFastSnapshotRestoresResultUnsuccessfulFastSnapshotRestoreStateErrors extends SpeakeasyBase {
    availabilityZone?: string;
    error?: EnableFastSnapshotRestoresResultUnsuccessfulFastSnapshotRestoreStateErrorsError;
}
/**
 * Contains information about the errors that occurred when enabling fast snapshot restores.
 */
export declare class EnableFastSnapshotRestoresResultUnsuccessful extends SpeakeasyBase {
    fastSnapshotRestoreStateErrors?: EnableFastSnapshotRestoresResultUnsuccessfulFastSnapshotRestoreStateErrors[];
    snapshotId?: string;
}
/**
 * Success
 */
export declare class EnableFastSnapshotRestoresResult extends SpeakeasyBase {
    successful?: EnableFastSnapshotRestoresResultSuccessful[];
    unsuccessful?: EnableFastSnapshotRestoresResultUnsuccessful[];
}
