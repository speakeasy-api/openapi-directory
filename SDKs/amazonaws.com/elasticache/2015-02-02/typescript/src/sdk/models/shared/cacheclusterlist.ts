import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheNodeList } from "./cachenodelist";
import { CacheParameterGroupStatus } from "./cacheparametergroupstatus";
import { CacheSecurityGroupMembershipList } from "./cachesecuritygroupmembershiplist";
import { Endpoint } from "./endpoint";
import { LogDeliveryConfigurationList } from "./logdeliveryconfigurationlist";
import { NotificationConfiguration } from "./notificationconfiguration";
import { PendingModifiedValues } from "./pendingmodifiedvalues";
import { SecurityGroupMembership } from "./securitygroupmembership";



// CacheClusterList
/** 
 * Contains all of the attributes of a specific cluster.
**/
export class CacheClusterList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  atRestEncryptionEnabled?: boolean;

  @SpeakeasyMetadata()
  authTokenEnabled?: boolean;

  @SpeakeasyMetadata()
  authTokenLastModifiedDate?: Date;

  @SpeakeasyMetadata()
  autoMinorVersionUpgrade?: boolean;

  @SpeakeasyMetadata()
  cacheClusterCreateTime?: Date;

  @SpeakeasyMetadata()
  cacheClusterId?: string;

  @SpeakeasyMetadata()
  cacheClusterStatus?: string;

  @SpeakeasyMetadata()
  cacheNodeType?: string;

  @SpeakeasyMetadata({ elemType: CacheNodeList })
  cacheNodes?: CacheNodeList[];

  @SpeakeasyMetadata()
  cacheParameterGroup?: CacheParameterGroupStatus;

  @SpeakeasyMetadata({ elemType: CacheSecurityGroupMembershipList })
  cacheSecurityGroups?: CacheSecurityGroupMembershipList[];

  @SpeakeasyMetadata()
  cacheSubnetGroupName?: string;

  @SpeakeasyMetadata()
  clientDownloadLandingPage?: string;

  @SpeakeasyMetadata()
  configurationEndpoint?: Endpoint;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata({ elemType: LogDeliveryConfigurationList })
  logDeliveryConfigurations?: LogDeliveryConfigurationList[];

  @SpeakeasyMetadata()
  notificationConfiguration?: NotificationConfiguration;

  @SpeakeasyMetadata()
  numCacheNodes?: number;

  @SpeakeasyMetadata()
  pendingModifiedValues?: PendingModifiedValues;

  @SpeakeasyMetadata()
  preferredAvailabilityZone?: string;

  @SpeakeasyMetadata()
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata()
  preferredOutpostArn?: string;

  @SpeakeasyMetadata()
  replicationGroupId?: string;

  @SpeakeasyMetadata()
  replicationGroupLogDeliveryEnabled?: boolean;

  @SpeakeasyMetadata({ elemType: SecurityGroupMembership })
  securityGroups?: SecurityGroupMembership[];

  @SpeakeasyMetadata()
  snapshotRetentionLimit?: number;

  @SpeakeasyMetadata()
  snapshotWindow?: string;

  @SpeakeasyMetadata()
  transitEncryptionEnabled?: boolean;
}
