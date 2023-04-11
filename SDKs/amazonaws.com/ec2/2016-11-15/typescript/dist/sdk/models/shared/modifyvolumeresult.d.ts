import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current modification state. The modification state is null for unmodified volumes.
 */
export declare enum ModifyVolumeResultVolumeModificationModificationStateEnum {
    Modifying = "modifying",
    Optimizing = "optimizing",
    Completed = "completed",
    Failed = "failed"
}
/**
 * The original EBS volume type of the volume.
 */
export declare enum ModifyVolumeResultVolumeModificationOriginalVolumeTypeEnum {
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
export declare enum ModifyVolumeResultVolumeModificationTargetVolumeTypeEnum {
    Standard = "standard",
    Io1 = "io1",
    Io2 = "io2",
    Gp2 = "gp2",
    Sc1 = "sc1",
    St1 = "st1",
    Gp3 = "gp3"
}
/**
 * Information about the volume modification.
 */
export declare class ModifyVolumeResultVolumeModification extends SpeakeasyBase {
    endTime?: Date;
    modificationState?: ModifyVolumeResultVolumeModificationModificationStateEnum;
    originalIops?: number;
    originalMultiAttachEnabled?: boolean;
    originalSize?: number;
    originalThroughput?: number;
    originalVolumeType?: ModifyVolumeResultVolumeModificationOriginalVolumeTypeEnum;
    progress?: number;
    startTime?: Date;
    statusMessage?: string;
    targetIops?: number;
    targetMultiAttachEnabled?: boolean;
    targetSize?: number;
    targetThroughput?: number;
    targetVolumeType?: ModifyVolumeResultVolumeModificationTargetVolumeTypeEnum;
    volumeId?: string;
}
/**
 * Success
 */
export declare class ModifyVolumeResult extends SpeakeasyBase {
    volumeModification?: ModifyVolumeResultVolumeModification;
}
