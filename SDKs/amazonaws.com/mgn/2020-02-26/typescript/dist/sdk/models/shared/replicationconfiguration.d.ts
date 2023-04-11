import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationConfigurationDataPlaneRoutingEnum } from "./replicationconfigurationdataplaneroutingenum";
import { ReplicationConfigurationDefaultLargeStagingDiskTypeEnum } from "./replicationconfigurationdefaultlargestagingdisktypeenum";
import { ReplicationConfigurationEbsEncryptionEnum } from "./replicationconfigurationebsencryptionenum";
import { ReplicationConfigurationReplicatedDisk } from "./replicationconfigurationreplicateddisk";
/**
 * Success
 */
export declare class ReplicationConfiguration extends SpeakeasyBase {
    associateDefaultSecurityGroup?: boolean;
    bandwidthThrottling?: number;
    createPublicIP?: boolean;
    dataPlaneRouting?: ReplicationConfigurationDataPlaneRoutingEnum;
    defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskTypeEnum;
    ebsEncryption?: ReplicationConfigurationEbsEncryptionEnum;
    ebsEncryptionKeyArn?: string;
    name?: string;
    replicatedDisks?: ReplicationConfigurationReplicatedDisk[];
    replicationServerInstanceType?: string;
    replicationServersSecurityGroupsIDs?: string[];
    sourceServerID?: string;
    stagingAreaSubnetId?: string;
    stagingAreaTags?: Record<string, string>;
    useDedicatedReplicationServer?: boolean;
}
