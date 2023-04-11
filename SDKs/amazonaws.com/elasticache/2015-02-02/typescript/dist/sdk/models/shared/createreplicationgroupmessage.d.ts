import { SpeakeasyBase } from "../../../internal/utils";
import { IpDiscoveryEnum } from "./ipdiscoveryenum";
import { LogDeliveryConfigurationRequestList } from "./logdeliveryconfigurationrequestlist";
import { NetworkTypeEnum } from "./networktypeenum";
import { NodeGroupConfigurationList } from "./nodegroupconfigurationlist";
import { TagList } from "./taglist";
import { TransitEncryptionModeEnum } from "./transitencryptionmodeenum";
/**
 * Represents the input of a <code>CreateReplicationGroup</code> operation.
 */
export declare class CreateReplicationGroupMessage extends SpeakeasyBase {
    atRestEncryptionEnabled?: boolean;
    authToken?: string;
    autoMinorVersionUpgrade?: boolean;
    automaticFailoverEnabled?: boolean;
    cacheNodeType?: string;
    cacheParameterGroupName?: string;
    cacheSecurityGroupNames?: string[];
    cacheSubnetGroupName?: string;
    dataTieringEnabled?: boolean;
    engine?: string;
    engineVersion?: string;
    globalReplicationGroupId?: string;
    ipDiscovery?: IpDiscoveryEnum;
    kmsKeyId?: string;
    logDeliveryConfigurations?: LogDeliveryConfigurationRequestList[];
    multiAZEnabled?: boolean;
    networkType?: NetworkTypeEnum;
    nodeGroupConfiguration?: NodeGroupConfigurationList[];
    notificationTopicArn?: string;
    numCacheClusters?: number;
    numNodeGroups?: number;
    port?: number;
    preferredCacheClusterAZs?: string[];
    preferredMaintenanceWindow?: string;
    primaryClusterId?: string;
    replicasPerNodeGroup?: number;
    replicationGroupDescription: string;
    replicationGroupId: string;
    securityGroupIds?: string[];
    snapshotArns?: string[];
    snapshotName?: string;
    snapshotRetentionLimit?: number;
    snapshotWindow?: string;
    tags?: TagList[];
    transitEncryptionEnabled?: boolean;
    transitEncryptionMode?: TransitEncryptionModeEnum;
    userGroupIds?: string[];
}
