import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityStreamModeEnum } from "./activitystreammodeenum";
import { ActivityStreamStatusEnum } from "./activitystreamstatusenum";
import { DbInstanceRoles } from "./dbinstanceroles";
import { DbInstanceAutomatedBackupsReplicationList } from "./dbinstanceautomatedbackupsreplicationlist";
import { DbParameterGroupStatusList } from "./dbparametergroupstatuslist";
import { DbSecurityGroupMembershipList } from "./dbsecuritygroupmembershiplist";
import { DbSubnetGroup } from "./dbsubnetgroup";
import { DomainMembershipList } from "./domainmembershiplist";
import { Endpoint } from "./endpoint";
import { OptionGroupMembershipList } from "./optiongroupmembershiplist";
import { PendingModifiedValues } from "./pendingmodifiedvalues";
import { ProcessorFeatureList } from "./processorfeaturelist";
import { ReplicaModeEnum } from "./replicamodeenum";
import { DbInstanceStatusInfoList } from "./dbinstancestatusinfolist";
import { TagList } from "./taglist";
import { VpcSecurityGroupMembershipList } from "./vpcsecuritygroupmembershiplist";



// DbInstance
/** 
 * <p>Contains the details of an Amazon RDS DB instance. </p> <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action. </p>
**/
export class DbInstance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityStreamEngineNativeAuditFieldsIncluded?: boolean;

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

  @SpeakeasyMetadata({ elemType: DbInstanceRoles })
  associatedRoles?: DbInstanceRoles[];

  @SpeakeasyMetadata()
  autoMinorVersionUpgrade?: boolean;

  @SpeakeasyMetadata()
  automaticRestartTime?: Date;

  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  awsBackupRecoveryPointArn?: string;

  @SpeakeasyMetadata()
  backupRetentionPeriod?: number;

  @SpeakeasyMetadata()
  caCertificateIdentifier?: string;

  @SpeakeasyMetadata()
  characterSetName?: string;

  @SpeakeasyMetadata()
  copyTagsToSnapshot?: boolean;

  @SpeakeasyMetadata()
  customerOwnedIpEnabled?: boolean;

  @SpeakeasyMetadata()
  dbClusterIdentifier?: string;

  @SpeakeasyMetadata()
  dbInstanceArn?: string;

  @SpeakeasyMetadata({ elemType: DbInstanceAutomatedBackupsReplicationList })
  dbInstanceAutomatedBackupsReplications?: DbInstanceAutomatedBackupsReplicationList[];

  @SpeakeasyMetadata()
  dbInstanceClass?: string;

  @SpeakeasyMetadata()
  dbInstanceIdentifier?: string;

  @SpeakeasyMetadata()
  dbInstanceStatus?: string;

  @SpeakeasyMetadata()
  dbName?: string;

  @SpeakeasyMetadata({ elemType: DbParameterGroupStatusList })
  dbParameterGroups?: DbParameterGroupStatusList[];

  @SpeakeasyMetadata({ elemType: DbSecurityGroupMembershipList })
  dbSecurityGroups?: DbSecurityGroupMembershipList[];

  @SpeakeasyMetadata()
  dbSubnetGroup?: DbSubnetGroup;

  @SpeakeasyMetadata()
  dbInstancePort?: number;

  @SpeakeasyMetadata()
  dbiResourceId?: string;

  @SpeakeasyMetadata()
  deletionProtection?: boolean;

  @SpeakeasyMetadata({ elemType: DomainMembershipList })
  domainMemberships?: DomainMembershipList[];

  @SpeakeasyMetadata()
  enabledCloudwatchLogsExports?: string[];

  @SpeakeasyMetadata()
  endpoint?: Endpoint;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  enhancedMonitoringResourceArn?: string;

  @SpeakeasyMetadata()
  iamDatabaseAuthenticationEnabled?: boolean;

  @SpeakeasyMetadata()
  instanceCreateTime?: Date;

  @SpeakeasyMetadata()
  iops?: number;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  latestRestorableTime?: Date;

  @SpeakeasyMetadata()
  licenseModel?: string;

  @SpeakeasyMetadata()
  listenerEndpoint?: Endpoint;

  @SpeakeasyMetadata()
  masterUsername?: string;

  @SpeakeasyMetadata()
  maxAllocatedStorage?: number;

  @SpeakeasyMetadata()
  monitoringInterval?: number;

  @SpeakeasyMetadata()
  monitoringRoleArn?: string;

  @SpeakeasyMetadata()
  multiAZ?: boolean;

  @SpeakeasyMetadata()
  ncharCharacterSetName?: string;

  @SpeakeasyMetadata({ elemType: OptionGroupMembershipList })
  optionGroupMemberships?: OptionGroupMembershipList[];

  @SpeakeasyMetadata()
  pendingModifiedValues?: PendingModifiedValues;

  @SpeakeasyMetadata()
  performanceInsightsEnabled?: boolean;

  @SpeakeasyMetadata()
  performanceInsightsKMSKeyId?: string;

  @SpeakeasyMetadata()
  performanceInsightsRetentionPeriod?: number;

  @SpeakeasyMetadata()
  preferredBackupWindow?: string;

  @SpeakeasyMetadata()
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata({ elemType: ProcessorFeatureList })
  processorFeatures?: ProcessorFeatureList[];

  @SpeakeasyMetadata()
  promotionTier?: number;

  @SpeakeasyMetadata()
  publiclyAccessible?: boolean;

  @SpeakeasyMetadata()
  readReplicaDBClusterIdentifiers?: Record<string, any>[];

  @SpeakeasyMetadata()
  readReplicaDBInstanceIdentifiers?: Record<string, any>[];

  @SpeakeasyMetadata()
  readReplicaSourceDBInstanceIdentifier?: string;

  @SpeakeasyMetadata()
  replicaMode?: ReplicaModeEnum;

  @SpeakeasyMetadata()
  secondaryAvailabilityZone?: string;

  @SpeakeasyMetadata({ elemType: DbInstanceStatusInfoList })
  statusInfos?: DbInstanceStatusInfoList[];

  @SpeakeasyMetadata()
  storageEncrypted?: boolean;

  @SpeakeasyMetadata()
  storageType?: string;

  @SpeakeasyMetadata({ elemType: TagList })
  tagList?: TagList[];

  @SpeakeasyMetadata()
  tdeCredentialArn?: string;

  @SpeakeasyMetadata()
  timezone?: string;

  @SpeakeasyMetadata({ elemType: VpcSecurityGroupMembershipList })
  vpcSecurityGroups?: VpcSecurityGroupMembershipList[];
}
