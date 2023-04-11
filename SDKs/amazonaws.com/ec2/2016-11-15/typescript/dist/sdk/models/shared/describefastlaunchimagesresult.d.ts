import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The launch template that the fast-launch enabled Windows AMI uses when it launches Windows instances from pre-provisioned snapshots.
 */
export declare class DescribeFastLaunchImagesResultFastLaunchImagesLaunchTemplate extends SpeakeasyBase {
    launchTemplateId?: string;
    launchTemplateName?: string;
    version?: string;
}
/**
 * The resource type that is used for pre-provisioning the Windows AMI. Supported values include: <code>snapshot</code>.
 */
export declare enum DescribeFastLaunchImagesResultFastLaunchImagesResourceTypeEnum {
    Snapshot = "snapshot"
}
/**
 * A group of parameters that are used for pre-provisioning the associated Windows AMI using snapshots.
 */
export declare class DescribeFastLaunchImagesResultFastLaunchImagesSnapshotConfiguration extends SpeakeasyBase {
    targetResourceCount?: number;
}
/**
 * The current state of faster launching for the specified Windows AMI.
 */
export declare enum DescribeFastLaunchImagesResultFastLaunchImagesStateEnum {
    Enabling = "enabling",
    EnablingFailed = "enabling-failed",
    Enabled = "enabled",
    EnabledFailed = "enabled-failed",
    Disabling = "disabling",
    DisablingFailed = "disabling-failed"
}
/**
 * Describe details about a fast-launch enabled Windows image that meets the requested criteria. Criteria are defined by the <code>DescribeFastLaunchImages</code> action filters.
 */
export declare class DescribeFastLaunchImagesResultFastLaunchImages extends SpeakeasyBase {
    imageId?: string;
    launchTemplate?: DescribeFastLaunchImagesResultFastLaunchImagesLaunchTemplate;
    maxParallelLaunches?: number;
    ownerId?: string;
    resourceType?: DescribeFastLaunchImagesResultFastLaunchImagesResourceTypeEnum;
    snapshotConfiguration?: DescribeFastLaunchImagesResultFastLaunchImagesSnapshotConfiguration;
    state?: DescribeFastLaunchImagesResultFastLaunchImagesStateEnum;
    stateTransitionReason?: string;
    stateTransitionTime?: Date;
}
/**
 * Success
 */
export declare class DescribeFastLaunchImagesResult extends SpeakeasyBase {
    fastLaunchImages?: DescribeFastLaunchImagesResultFastLaunchImages[];
    nextToken?: string;
}
