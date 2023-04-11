import { SpeakeasyBase } from "../../../internal/utils";
import { CacheNodeList } from "./cachenodelist";
import { CacheParameterGroupStatus } from "./cacheparametergroupstatus";
import { CacheSecurityGroupMembershipList } from "./cachesecuritygroupmembershiplist";
import { Endpoint } from "./endpoint";
import { IpDiscoveryEnum } from "./ipdiscoveryenum";
import { LogDeliveryConfigurationList } from "./logdeliveryconfigurationlist";
import { NetworkTypeEnum } from "./networktypeenum";
import { NotificationConfiguration } from "./notificationconfiguration";
import { PendingModifiedValues } from "./pendingmodifiedvalues";
import { SecurityGroupMembership } from "./securitygroupmembership";
import { TransitEncryptionModeEnum } from "./transitencryptionmodeenum";
/**
 * Contains all of the attributes of a specific cluster.
 */
export declare class CacheClusterList extends SpeakeasyBase {
    arn?: string;
    atRestEncryptionEnabled?: boolean;
    authTokenEnabled?: boolean;
    authTokenLastModifiedDate?: Date;
    autoMinorVersionUpgrade?: boolean;
    cacheClusterCreateTime?: Date;
    cacheClusterId?: string;
    cacheClusterStatus?: string;
    cacheNodeType?: string;
    cacheNodes?: CacheNodeList[];
    cacheParameterGroup?: CacheParameterGroupStatus;
    cacheSecurityGroups?: CacheSecurityGroupMembershipList[];
    cacheSubnetGroupName?: string;
    clientDownloadLandingPage?: string;
    configurationEndpoint?: Endpoint;
    engine?: string;
    engineVersion?: string;
    ipDiscovery?: IpDiscoveryEnum;
    logDeliveryConfigurations?: LogDeliveryConfigurationList[];
    networkType?: NetworkTypeEnum;
    notificationConfiguration?: NotificationConfiguration;
    numCacheNodes?: number;
    /**
     * A group of settings that are applied to the cluster in the future, or that are currently being applied.
     */
    pendingModifiedValues?: PendingModifiedValues;
    preferredAvailabilityZone?: string;
    preferredMaintenanceWindow?: string;
    preferredOutpostArn?: string;
    replicationGroupId?: string;
    replicationGroupLogDeliveryEnabled?: boolean;
    securityGroups?: SecurityGroupMembership[];
    snapshotRetentionLimit?: number;
    snapshotWindow?: string;
    transitEncryptionEnabled?: boolean;
    transitEncryptionMode?: TransitEncryptionModeEnum;
}
