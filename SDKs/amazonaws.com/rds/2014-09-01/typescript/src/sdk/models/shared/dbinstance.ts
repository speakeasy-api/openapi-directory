import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbParameterGroupStatusList } from "./dbparametergroupstatuslist";
import { DbSecurityGroupMembershipList } from "./dbsecuritygroupmembershiplist";
import { DbSubnetGroup } from "./dbsubnetgroup";
import { Endpoint } from "./endpoint";
import { OptionGroupMembershipList } from "./optiongroupmembershiplist";
import { PendingModifiedValues } from "./pendingmodifiedvalues";
import { DbInstanceStatusInfoList } from "./dbinstancestatusinfolist";
import { VpcSecurityGroupMembershipList } from "./vpcsecuritygroupmembershiplist";



export class DbInstance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocatedStorage?: number;

  @SpeakeasyMetadata()
  autoMinorVersionUpgrade?: boolean;

  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  backupRetentionPeriod?: number;

  @SpeakeasyMetadata()
  characterSetName?: string;

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
  endpoint?: Endpoint;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  instanceCreateTime?: Date;

  @SpeakeasyMetadata()
  iops?: number;

  @SpeakeasyMetadata()
  latestRestorableTime?: Date;

  @SpeakeasyMetadata()
  licenseModel?: string;

  @SpeakeasyMetadata()
  masterUsername?: string;

  @SpeakeasyMetadata()
  multiAZ?: boolean;

  @SpeakeasyMetadata({ elemType: OptionGroupMembershipList })
  optionGroupMemberships?: OptionGroupMembershipList[];

  @SpeakeasyMetadata()
  pendingModifiedValues?: PendingModifiedValues;

  @SpeakeasyMetadata()
  preferredBackupWindow?: string;

  @SpeakeasyMetadata()
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata()
  publiclyAccessible?: boolean;

  @SpeakeasyMetadata()
  readReplicaDBInstanceIdentifiers?: Record<string, any>[];

  @SpeakeasyMetadata()
  readReplicaSourceDBInstanceIdentifier?: string;

  @SpeakeasyMetadata()
  secondaryAvailabilityZone?: string;

  @SpeakeasyMetadata({ elemType: DbInstanceStatusInfoList })
  statusInfos?: DbInstanceStatusInfoList[];

  @SpeakeasyMetadata()
  storageType?: string;

  @SpeakeasyMetadata()
  tdeCredentialArn?: string;

  @SpeakeasyMetadata({ elemType: VpcSecurityGroupMembershipList })
  vpcSecurityGroups?: VpcSecurityGroupMembershipList[];
}
