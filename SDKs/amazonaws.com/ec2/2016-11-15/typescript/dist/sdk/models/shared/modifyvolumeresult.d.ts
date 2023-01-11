import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the volume modification.
**/
export declare class ModifyVolumeResultVolumeModification extends SpeakeasyBase {
    endTime?: Record<string, any>;
    modificationState?: Record<string, any>;
    originalIops?: Record<string, any>;
    originalMultiAttachEnabled?: Record<string, any>;
    originalSize?: Record<string, any>;
    originalThroughput?: Record<string, any>;
    originalVolumeType?: Record<string, any>;
    progress?: Record<string, any>;
    startTime?: Record<string, any>;
    statusMessage?: Record<string, any>;
    targetIops?: Record<string, any>;
    targetMultiAttachEnabled?: Record<string, any>;
    targetSize?: Record<string, any>;
    targetThroughput?: Record<string, any>;
    targetVolumeType?: Record<string, any>;
    volumeId?: Record<string, any>;
}
export declare class ModifyVolumeResult extends SpeakeasyBase {
    volumeModification?: ModifyVolumeResultVolumeModification;
}
