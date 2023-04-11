import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum } from "./replicationconfigurationreplicateddiskstagingdisktypeenum";
/**
 * The configuration of a disk of the Source Server to be replicated.
 */
export declare class ReplicationConfigurationReplicatedDisk extends SpeakeasyBase {
    deviceName?: string;
    iops?: number;
    isBootDisk?: boolean;
    optimizedStagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum;
    stagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum;
    throughput?: number;
}
