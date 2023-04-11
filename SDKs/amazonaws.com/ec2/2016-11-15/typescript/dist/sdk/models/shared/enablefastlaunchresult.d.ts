import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The launch template that is used when launching Windows instances from pre-provisioned snapshots.
 */
export declare class EnableFastLaunchResultLaunchTemplate extends SpeakeasyBase {
    launchTemplateId?: string;
    launchTemplateName?: string;
    version?: string;
}
/**
 * The type of resource that was defined for pre-provisioning the Windows AMI for faster launching.
 */
export declare enum EnableFastLaunchResultResourceTypeEnum {
    Snapshot = "snapshot"
}
/**
 * Settings to create and manage the pre-provisioned snapshots that Amazon EC2 uses for faster launches from the Windows AMI. This property is returned when the associated <code>resourceType</code> is <code>snapshot</code>.
 */
export declare class EnableFastLaunchResultSnapshotConfiguration extends SpeakeasyBase {
    targetResourceCount?: number;
}
/**
 * The current state of faster launching for the specified Windows AMI.
 */
export declare enum EnableFastLaunchResultStateEnum {
    Enabling = "enabling",
    EnablingFailed = "enabling-failed",
    Enabled = "enabled",
    EnabledFailed = "enabled-failed",
    Disabling = "disabling",
    DisablingFailed = "disabling-failed"
}
/**
 * Success
 */
export declare class EnableFastLaunchResult extends SpeakeasyBase {
    imageId?: string;
    launchTemplate?: EnableFastLaunchResultLaunchTemplate;
    maxParallelLaunches?: number;
    ownerId?: string;
    resourceType?: EnableFastLaunchResultResourceTypeEnum;
    snapshotConfiguration?: EnableFastLaunchResultSnapshotConfiguration;
    state?: EnableFastLaunchResultStateEnum;
    stateTransitionReason?: string;
    stateTransitionTime?: Date;
}
