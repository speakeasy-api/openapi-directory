import { SpeakeasyBase } from "../../../internal/utils";
/**
 * EBS volume specifications such as volume type, IOPS, size (GiB) and throughput (MiB/s) that are requested for the EBS volume attached to an EC2 instance in the cluster.
 */
export declare class VolumeSpecification extends SpeakeasyBase {
    iops?: number;
    sizeInGB: number;
    throughput?: number;
    volumeType: string;
}
