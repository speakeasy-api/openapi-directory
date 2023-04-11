import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Parameters for a block device for an Amazon Elastic Block Store (Amazon EBS) volume in an Amazon EC2 launch template.
 */
export declare class AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails extends SpeakeasyBase {
    deleteOnTermination?: boolean;
    encrypted?: boolean;
    iops?: number;
    kmsKeyId?: string;
    snapshotId?: string;
    throughput?: number;
    volumeSize?: number;
    volumeType?: string;
}
