import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbParameterGroupStatusList } from "./dbparametergroupstatuslist";
import { DbSecurityGroupMembershipList } from "./dbsecuritygroupmembershiplist";
import { DbSubnetGroup } from "./dbsubnetgroup";
import { DomainMembershipList } from "./domainmembershiplist";
import { Endpoint } from "./endpoint";
import { OptionGroupMembershipList } from "./optiongroupmembershiplist";
import { PendingModifiedValues } from "./pendingmodifiedvalues";
import { DbInstanceStatusInfoList } from "./dbinstancestatusinfolist";
import { VpcSecurityGroupMembershipList } from "./vpcsecuritygroupmembershiplist";



// DbInstanceList
/** 
 * <p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
**/
export class DbInstanceList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocatedStorage?: number;

  @SpeakeasyMetadata()
  autoMinorVersionUpgrade?: boolean;

  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  backupRetentionPeriod?: number;

  @SpeakeasyMetadata()
  caCertificateIdentifier?: string;

  @SpeakeasyMetadata()
  characterSetName?: string;

  @SpeakeasyMetadata()
  copyTagsToSnapshot?: boolean;

  @SpeakeasyMetadata()
  dbClusterIdentifier?: string;

  @SpeakeasyMetadata()
  dbInstanceArn?: string;

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
  masterUsername?: string;

  @SpeakeasyMetadata()
  monitoringInterval?: number;

  @SpeakeasyMetadata()
  monitoringRoleArn?: string;

  @SpeakeasyMetadata()
  multiAZ?: boolean;

  @SpeakeasyMetadata({ elemType: OptionGroupMembershipList })
  optionGroupMemberships?: OptionGroupMembershipList[];

  @SpeakeasyMetadata()
  pendingModifiedValues?: PendingModifiedValues;

  @SpeakeasyMetadata()
  performanceInsightsEnabled?: boolean;

  @SpeakeasyMetadata()
  performanceInsightsKMSKeyId?: string;

  @SpeakeasyMetadata()
  preferredBackupWindow?: string;

  @SpeakeasyMetadata()
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata()
  promotionTier?: number;

  @SpeakeasyMetadata()
  publiclyAccessible?: Record<string, any>;

  @SpeakeasyMetadata()
  readReplicaDBClusterIdentifiers?: Record<string, any>[];

  @SpeakeasyMetadata()
  readReplicaDBInstanceIdentifiers?: Record<string, any>[];

  @SpeakeasyMetadata()
  readReplicaSourceDBInstanceIdentifier?: string;

  @SpeakeasyMetadata()
  secondaryAvailabilityZone?: string;

  @SpeakeasyMetadata({ elemType: DbInstanceStatusInfoList })
  statusInfos?: DbInstanceStatusInfoList[];

  @SpeakeasyMetadata()
  storageEncrypted?: boolean;

  @SpeakeasyMetadata()
  storageType?: string;

  @SpeakeasyMetadata()
  tdeCredentialArn?: string;

  @SpeakeasyMetadata()
  timezone?: string;

  @SpeakeasyMetadata({ elemType: VpcSecurityGroupMembershipList })
  vpcSecurityGroups?: VpcSecurityGroupMembershipList[];
}
