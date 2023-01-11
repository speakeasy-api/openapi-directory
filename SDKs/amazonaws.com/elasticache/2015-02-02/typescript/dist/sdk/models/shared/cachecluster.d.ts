import { SpeakeasyBase } from "../../../internal/utils";
import { CacheNodeList } from "./cachenodelist";
import { CacheParameterGroupStatus } from "./cacheparametergroupstatus";
import { CacheSecurityGroupMembershipList } from "./cachesecuritygroupmembershiplist";
import { Endpoint } from "./endpoint";
import { LogDeliveryConfigurationList } from "./logdeliveryconfigurationlist";
import { NotificationConfiguration } from "./notificationconfiguration";
import { PendingModifiedValues } from "./pendingmodifiedvalues";
import { SecurityGroupMembership } from "./securitygroupmembership";
/**
 * Contains all of the attributes of a specific cluster.
**/
export declare class CacheCluster extends SpeakeasyBase {
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
    logDeliveryConfigurations?: LogDeliveryConfigurationList[];
    notificationConfiguration?: NotificationConfiguration;
    numCacheNodes?: number;
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
}
