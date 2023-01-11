import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityStreamModeEnum } from "./activitystreammodeenum";
import { ActivityStreamStatusEnum } from "./activitystreamstatusenum";
import { DbClusterRoles } from "./dbclusterroles";
import { DbClusterMemberList } from "./dbclustermemberlist";
import { DbClusterOptionGroupMemberships } from "./dbclusteroptiongroupmemberships";
import { DomainMembershipList } from "./domainmembershiplist";
import { WriteForwardingStatusEnum } from "./writeforwardingstatusenum";
import { ClusterPendingModifiedValues } from "./clusterpendingmodifiedvalues";
import { ScalingConfigurationInfo } from "./scalingconfigurationinfo";
import { TagList } from "./taglist";
import { VpcSecurityGroupMembershipList } from "./vpcsecuritygroupmembershiplist";



// DbCluster
/** 
 * <p>Contains the details of an Amazon Aurora DB cluster. </p> <p>This data type is used as a response element in the <code>DescribeDBClusters</code>, <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions. </p>
**/
export class DbCluster extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityStreamKinesisStreamName?: string;

  @SpeakeasyMetadata()
  activityStreamKmsKeyId?: string;

  @SpeakeasyMetadata()
  activityStreamMode?: ActivityStreamModeEnum;

  @SpeakeasyMetadata()
  activityStreamStatus?: ActivityStreamStatusEnum;

  @SpeakeasyMetadata()
  allocatedStorage?: number;

  @SpeakeasyMetadata({ elemType: DbClusterRoles })
  associatedRoles?: DbClusterRoles[];

  @SpeakeasyMetadata()
  automaticRestartTime?: Date;

  @SpeakeasyMetadata()
  availabilityZones?: Record<string, any>[];

  @SpeakeasyMetadata()
  backtrackConsumedChangeRecords?: number;

  @SpeakeasyMetadata()
  backtrackWindow?: number;

  @SpeakeasyMetadata()
  backupRetentionPeriod?: number;

  @SpeakeasyMetadata()
  capacity?: number;

  @SpeakeasyMetadata()
  characterSetName?: string;

  @SpeakeasyMetadata()
  cloneGroupId?: string;

  @SpeakeasyMetadata()
  clusterCreateTime?: Date;

  @SpeakeasyMetadata()
  copyTagsToSnapshot?: boolean;

  @SpeakeasyMetadata()
  crossAccountClone?: boolean;

  @SpeakeasyMetadata()
  customEndpoints?: string[];

  @SpeakeasyMetadata()
  dbClusterArn?: string;

  @SpeakeasyMetadata()
  dbClusterIdentifier?: string;

  @SpeakeasyMetadata({ elemType: DbClusterMemberList })
  dbClusterMembers?: DbClusterMemberList[];

  @SpeakeasyMetadata({ elemType: DbClusterOptionGroupMemberships })
  dbClusterOptionGroupMemberships?: DbClusterOptionGroupMemberships[];

  @SpeakeasyMetadata()
  dbClusterParameterGroup?: string;

  @SpeakeasyMetadata()
  dbSubnetGroup?: string;

  @SpeakeasyMetadata()
  databaseName?: string;

  @SpeakeasyMetadata()
  dbClusterResourceId?: string;

  @SpeakeasyMetadata()
  deletionProtection?: boolean;

  @SpeakeasyMetadata({ elemType: DomainMembershipList })
  domainMemberships?: DomainMembershipList[];

  @SpeakeasyMetadata()
  earliestBacktrackTime?: Date;

  @SpeakeasyMetadata()
  earliestRestorableTime?: Date;

  @SpeakeasyMetadata()
  enabledCloudwatchLogsExports?: string[];

  @SpeakeasyMetadata()
  endpoint?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineMode?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  globalWriteForwardingRequested?: boolean;

  @SpeakeasyMetadata()
  globalWriteForwardingStatus?: WriteForwardingStatusEnum;

  @SpeakeasyMetadata()
  hostedZoneId?: string;

  @SpeakeasyMetadata()
  httpEndpointEnabled?: boolean;

  @SpeakeasyMetadata()
  iamDatabaseAuthenticationEnabled?: boolean;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  latestRestorableTime?: Date;

  @SpeakeasyMetadata()
  masterUsername?: string;

  @SpeakeasyMetadata()
  multiAZ?: boolean;

  @SpeakeasyMetadata()
  pendingModifiedValues?: ClusterPendingModifiedValues;

  @SpeakeasyMetadata()
  percentProgress?: string;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata()
  preferredBackupWindow?: string;

  @SpeakeasyMetadata()
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata()
  readReplicaIdentifiers?: Record<string, any>[];

  @SpeakeasyMetadata()
  readerEndpoint?: string;

  @SpeakeasyMetadata()
  replicationSourceIdentifier?: string;

  @SpeakeasyMetadata()
  scalingConfigurationInfo?: ScalingConfigurationInfo;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  storageEncrypted?: boolean;

  @SpeakeasyMetadata({ elemType: TagList })
  tagList?: TagList[];

  @SpeakeasyMetadata({ elemType: VpcSecurityGroupMembershipList })
  vpcSecurityGroups?: VpcSecurityGroupMembershipList[];
}
