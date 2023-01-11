import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationConfigurationDataPlaneRoutingEnum } from "./replicationconfigurationdataplaneroutingenum";
import { ReplicationConfigurationDefaultLargeStagingDiskTypeEnum } from "./replicationconfigurationdefaultlargestagingdisktypeenum";
import { ReplicationConfigurationEbsEncryptionEnum } from "./replicationconfigurationebsencryptionenum";
export declare class ReplicationConfigurationTemplate extends SpeakeasyBase {
    arn?: string;
    associateDefaultSecurityGroup?: boolean;
    bandwidthThrottling?: number;
    createPublicIP?: boolean;
    dataPlaneRouting?: ReplicationConfigurationDataPlaneRoutingEnum;
    defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskTypeEnum;
    ebsEncryption?: ReplicationConfigurationEbsEncryptionEnum;
    ebsEncryptionKeyArn?: string;
    replicationConfigurationTemplateID: string;
    replicationServerInstanceType?: string;
    replicationServersSecurityGroupsIDs?: string[];
    stagingAreaSubnetId?: string;
    stagingAreaTags?: Record<string, string>;
    tags?: Record<string, string>;
    useDedicatedReplicationServer?: boolean;
}
