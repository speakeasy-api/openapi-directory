import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The attachment state of the volume.
 */
export declare enum DescribeVolumesResultVolumesAttachmentsStateEnum {
    Attaching = "attaching",
    Attached = "attached",
    Detaching = "detaching",
    Detached = "detached",
    Busy = "busy"
}
/**
 * Describes volume attachment details.
 */
export declare class DescribeVolumesResultVolumesAttachments extends SpeakeasyBase {
    attachTime?: Date;
    deleteOnTermination?: boolean;
    device?: string;
    instanceId?: string;
    state?: DescribeVolumesResultVolumesAttachmentsStateEnum;
    volumeId?: string;
}
/**
 * The volume state.
 */
export declare enum DescribeVolumesResultVolumesStateEnum {
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
export declare class DescribeVolumesResultVolumesTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The volume type.
 */
export declare enum DescribeVolumesResultVolumesVolumeTypeEnum {
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
export declare class DescribeVolumesResultVolumes extends SpeakeasyBase {
    attachments?: DescribeVolumesResultVolumesAttachments[];
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
    state?: DescribeVolumesResultVolumesStateEnum;
    tags?: DescribeVolumesResultVolumesTags[];
    throughput?: number;
    volumeId?: string;
    volumeType?: DescribeVolumesResultVolumesVolumeTypeEnum;
}
/**
 * Success
 */
export declare class DescribeVolumesResult extends SpeakeasyBase {
    nextToken?: string;
    volumes?: DescribeVolumesResultVolumes[];
}
