import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The attachment state of the volume.
 */
export declare enum VolumeAttachmentsStateEnum {
    Attaching = "attaching",
    Attached = "attached",
    Detaching = "detaching",
    Detached = "detached",
    Busy = "busy"
}
/**
 * Describes volume attachment details.
 */
export declare class VolumeAttachments extends SpeakeasyBase {
    attachTime?: Date;
    deleteOnTermination?: boolean;
    device?: string;
    instanceId?: string;
    state?: VolumeAttachmentsStateEnum;
    volumeId?: string;
}
/**
 * The volume state.
 */
export declare enum VolumeStateEnum {
    Creating = "creating",
    Available = "available",
    InUse = "in-use",
    Deleting = "deleting",
    Deleted = "deleted",
    Error = "error"
}
/**
 * Describes a tag.
 */
export declare class VolumeTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The volume type.
 */
export declare enum VolumeVolumeTypeEnum {
    Standard = "standard",
    Io1 = "io1",
    Io2 = "io2",
    Gp2 = "gp2",
    Sc1 = "sc1",
    St1 = "st1",
    Gp3 = "gp3"
}
/**
 * Describes a volume.
 */
export declare class Volume extends SpeakeasyBase {
    attachments?: VolumeAttachments[];
    availabilityZone?: string;
    createTime?: Date;
    encrypted?: boolean;
    fastRestored?: boolean;
    iops?: number;
    kmsKeyId?: string;
    multiAttachEnabled?: boolean;
    outpostArn?: string;
    size?: number;
    snapshotId?: string;
    state?: VolumeStateEnum;
    tags?: VolumeTags[];
    throughput?: number;
    volumeId?: string;
    volumeType?: VolumeVolumeTypeEnum;
}
