import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The attachment state of the volume.
 */
export declare enum VolumeAttachmentStateEnum {
    Attaching = "attaching",
    Attached = "attached",
    Detaching = "detaching",
    Detached = "detached",
    Busy = "busy"
}
/**
 * Describes volume attachment details.
 */
export declare class VolumeAttachment extends SpeakeasyBase {
    attachTime?: Date;
    deleteOnTermination?: boolean;
    device?: string;
    instanceId?: string;
    state?: VolumeAttachmentStateEnum;
    volumeId?: string;
}
