import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeTypeEnum } from "./volumetypeenum";
/**
 * The parameters for a block device for an EBS volume.
 */
export declare class LaunchTemplateEbsBlockDeviceRequest extends SpeakeasyBase {
    deleteOnTermination?: boolean;
    encrypted?: boolean;
    iops?: number;
    kmsKeyId?: string;
    snapshotId?: string;
    throughput?: number;
    volumeSize?: number;
    volumeType?: VolumeTypeEnum;
}
