import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current modification state. The modification state is null for unmodified volumes.
 */
export declare enum DescribeVolumesModificationsResultVolumesModificationsModificationStateEnum {
    Modifying = "modifying",
    Optimizing = "optimizing",
    Completed = "completed",
    Failed = "failed"
}
/**
 * The original EBS volume type of the volume.
 */
export declare enum DescribeVolumesModificationsResultVolumesModificationsOriginalVolumeTypeEnum {
    Standard = "standard",
    Io1 = "io1",
    Io2 = "io2",
    Gp2 = "gp2",
    Sc1 = "sc1",
    St1 = "st1",
    Gp3 = "gp3"
}
/**
 * The target EBS volume type of the volume.
 */
export declare enum DescribeVolumesModificationsResultVolumesModificationsTargetVolumeTypeEnum {
    Standard = "standard",
    Io1 = "io1",
    Io2 = "io2",
    Gp2 = "gp2",
    Sc1 = "sc1",
    St1 = "st1",
    Gp3 = "gp3"
}
/**
 * <p>Describes the modification status of an EBS volume.</p> <p>If the volume has never been modified, some element values will be null.</p>
 */
export declare class DescribeVolumesModificationsResultVolumesModifications extends SpeakeasyBase {
    endTime?: Date;
    modificationState?: DescribeVolumesModificationsResultVolumesModificationsModificationStateEnum;
    originalIops?: number;
    originalMultiAttachEnabled?: boolean;
    originalSize?: number;
    originalThroughput?: number;
    originalVolumeType?: DescribeVolumesModificationsResultVolumesModificationsOriginalVolumeTypeEnum;
    progress?: number;
    startTime?: Date;
    statusMessage?: string;
    targetIops?: number;
    targetMultiAttachEnabled?: boolean;
    targetSize?: number;
    targetThroughput?: number;
    targetVolumeType?: DescribeVolumesModificationsResultVolumesModificationsTargetVolumeTypeEnum;
    volumeId?: string;
}
/**
 * Success
 */
export declare class DescribeVolumesModificationsResult extends SpeakeasyBase {
    nextToken?: string;
    volumesModifications?: DescribeVolumesModificationsResultVolumesModifications[];
}
