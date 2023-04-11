import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The launch template that was used to launch Windows instances from pre-provisioned snapshots.
 */
export declare class DisableFastLaunchResultLaunchTemplate extends SpeakeasyBase {
    launchTemplateId?: string;
    launchTemplateName?: string;
    version?: string;
}
/**
 * The pre-provisioning resource type that must be cleaned after turning off faster launching for the Windows AMI. Supported values include: <code>snapshot</code>.
 */
export declare enum DisableFastLaunchResultResourceTypeEnum {
    Snapshot = "snapshot"
}
/**
 * Parameters that were used for faster launching for the Windows AMI before faster launching was turned off. This informs the clean-up process.
 */
export declare class DisableFastLaunchResultSnapshotConfiguration extends SpeakeasyBase {
    targetResourceCount?: number;
}
/**
 * The current state of faster launching for the specified Windows AMI.
 */
export declare enum DisableFastLaunchResultStateEnum {
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
export declare class DisableFastLaunchResult extends SpeakeasyBase {
    imageId?: string;
    launchTemplate?: DisableFastLaunchResultLaunchTemplate;
    maxParallelLaunches?: number;
    ownerId?: string;
    resourceType?: DisableFastLaunchResultResourceTypeEnum;
    snapshotConfiguration?: DisableFastLaunchResultSnapshotConfiguration;
    state?: DisableFastLaunchResultStateEnum;
    stateTransitionReason?: string;
    stateTransitionTime?: Date;
}
