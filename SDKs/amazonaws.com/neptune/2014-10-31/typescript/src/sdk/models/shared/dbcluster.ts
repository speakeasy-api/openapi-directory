import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterRoles } from "./dbclusterroles";
import { DbClusterMemberList } from "./dbclustermemberlist";
import { DbClusterOptionGroupMemberships } from "./dbclusteroptiongroupmemberships";
import { VpcSecurityGroupMembershipList } from "./vpcsecuritygroupmembershiplist";



// DbCluster
/** 
 * <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
**/
export class DbCluster extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocatedStorage?: number;

  @SpeakeasyMetadata({ elemType: DbClusterRoles })
  associatedRoles?: DbClusterRoles[];

  @SpeakeasyMetadata()
  automaticRestartTime?: Date;

  @SpeakeasyMetadata()
  availabilityZones?: Record<string, any>[];

  @SpeakeasyMetadata()
  backupRetentionPeriod?: number;

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

  @SpeakeasyMetadata()
  earliestRestorableTime?: Date;

  @SpeakeasyMetadata()
  enabledCloudwatchLogsExports?: string[];

  @SpeakeasyMetadata()
  endpoint?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  hostedZoneId?: string;

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
  status?: string;

  @SpeakeasyMetadata()
  storageEncrypted?: boolean;

  @SpeakeasyMetadata({ elemType: VpcSecurityGroupMembershipList })
  vpcSecurityGroups?: VpcSecurityGroupMembershipList[];
}
