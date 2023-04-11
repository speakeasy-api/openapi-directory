import { SpeakeasyBase } from "../../../internal/utils";
import { PITPolicyRule } from "./pitpolicyrule";
import { ReplicationConfigurationDataPlaneRoutingEnum } from "./replicationconfigurationdataplaneroutingenum";
import { ReplicationConfigurationDefaultLargeStagingDiskTypeEnum } from "./replicationconfigurationdefaultlargestagingdisktypeenum";
import { ReplicationConfigurationEbsEncryptionEnum } from "./replicationconfigurationebsencryptionenum";
/**
 * Success
 */
export declare class ReplicationConfigurationTemplate extends SpeakeasyBase {
    arn?: string;
    associateDefaultSecurityGroup?: boolean;
    bandwidthThrottling?: number;
    createPublicIP?: boolean;
    dataPlaneRouting?: ReplicationConfigurationDataPlaneRoutingEnum;
    defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskTypeEnum;
    ebsEncryption?: ReplicationConfigurationEbsEncryptionEnum;
    ebsEncryptionKeyArn?: string;
    pitPolicy?: PITPolicyRule[];
    replicationConfigurationTemplateID: string;
    replicationServerInstanceType?: string;
    replicationServersSecurityGroupsIDs?: string[];
    stagingAreaSubnetId?: string;
    stagingAreaTags?: Record<string, string>;
    tags?: Record<string, string>;
    useDedicatedReplicationServer?: boolean;
}
