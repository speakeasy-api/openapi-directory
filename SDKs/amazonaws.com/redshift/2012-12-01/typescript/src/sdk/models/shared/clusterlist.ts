/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AquaConfiguration } from "./aquaconfiguration";
import { ClusterIamRoleList } from "./clusteriamrolelist";
import { ClusterNode } from "./clusternode";
import { ClusterParameterGroupStatusList } from "./clusterparametergroupstatuslist";
import { ClusterSecurityGroupMembershipList } from "./clustersecuritygroupmembershiplist";
import { ClusterSnapshotCopyStatus } from "./clustersnapshotcopystatus";
import { DataTransferProgress } from "./datatransferprogress";
import { DeferredMaintenanceWindowsList } from "./deferredmaintenancewindowslist";
import { ElasticIpStatus } from "./elasticipstatus";
import { Endpoint } from "./endpoint";
import { HsmStatus } from "./hsmstatus";
import { PendingModifiedValues } from "./pendingmodifiedvalues";
import { ReservedNodeExchangeStatus } from "./reservednodeexchangestatus";
import { ResizeInfo } from "./resizeinfo";
import { RestoreStatus } from "./restorestatus";
import { ScheduleStateEnum } from "./schedulestateenum";
import { TagList } from "./taglist";
import { VpcSecurityGroupMembershipList } from "./vpcsecuritygroupmembershiplist";

/**
 * Describes a cluster.
 */
export class ClusterList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowVersionUpgrade?: boolean;

  @SpeakeasyMetadata()
  aquaConfiguration?: AquaConfiguration;

  @SpeakeasyMetadata()
  automatedSnapshotRetentionPeriod?: number;

  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  availabilityZoneRelocationStatus?: string;

  @SpeakeasyMetadata()
  clusterAvailabilityStatus?: string;

  @SpeakeasyMetadata()
  clusterCreateTime?: Date;

  @SpeakeasyMetadata()
  clusterIdentifier?: string;

  @SpeakeasyMetadata()
  clusterNamespaceArn?: string;

  @SpeakeasyMetadata({ elemType: ClusterNode })
  clusterNodes?: ClusterNode[];

  @SpeakeasyMetadata({ elemType: ClusterParameterGroupStatusList })
  clusterParameterGroups?: ClusterParameterGroupStatusList[];

  @SpeakeasyMetadata()
  clusterPublicKey?: string;

  @SpeakeasyMetadata()
  clusterRevisionNumber?: string;

  @SpeakeasyMetadata({ elemType: ClusterSecurityGroupMembershipList })
  clusterSecurityGroups?: ClusterSecurityGroupMembershipList[];

  @SpeakeasyMetadata()
  clusterSnapshotCopyStatus?: ClusterSnapshotCopyStatus;

  @SpeakeasyMetadata()
  clusterStatus?: string;

  @SpeakeasyMetadata()
  clusterSubnetGroupName?: string;

  @SpeakeasyMetadata()
  clusterVersion?: string;

  @SpeakeasyMetadata()
  dbName?: string;

  @SpeakeasyMetadata()
  dataTransferProgress?: DataTransferProgress;

  @SpeakeasyMetadata()
  defaultIamRoleArn?: string;

  @SpeakeasyMetadata({ elemType: DeferredMaintenanceWindowsList })
  deferredMaintenanceWindows?: DeferredMaintenanceWindowsList[];

  @SpeakeasyMetadata()
  elasticIpStatus?: ElasticIpStatus;

  @SpeakeasyMetadata()
  elasticResizeNumberOfNodeOptions?: string;

  @SpeakeasyMetadata()
  encrypted?: boolean;

  @SpeakeasyMetadata()
  endpoint?: Endpoint;

  @SpeakeasyMetadata()
  enhancedVpcRouting?: boolean;

  @SpeakeasyMetadata()
  expectedNextSnapshotScheduleTime?: Date;

  @SpeakeasyMetadata()
  expectedNextSnapshotScheduleTimeStatus?: string;

  @SpeakeasyMetadata()
  hsmStatus?: HsmStatus;

  @SpeakeasyMetadata({ elemType: ClusterIamRoleList })
  iamRoles?: ClusterIamRoleList[];

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  maintenanceTrackName?: string;

  @SpeakeasyMetadata()
  manualSnapshotRetentionPeriod?: number;

  @SpeakeasyMetadata()
  masterUsername?: string;

  @SpeakeasyMetadata()
  modifyStatus?: string;

  @SpeakeasyMetadata()
  nextMaintenanceWindowStartTime?: Date;

  @SpeakeasyMetadata()
  nodeType?: string;

  @SpeakeasyMetadata()
  numberOfNodes?: number;

  @SpeakeasyMetadata()
  pendingActions?: string[];

  @SpeakeasyMetadata()
  pendingModifiedValues?: PendingModifiedValues;

  @SpeakeasyMetadata()
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata()
  publiclyAccessible?: boolean;

  @SpeakeasyMetadata()
  reservedNodeExchangeStatus?: ReservedNodeExchangeStatus;

  @SpeakeasyMetadata()
  resizeInfo?: ResizeInfo;

  @SpeakeasyMetadata()
  restoreStatus?: RestoreStatus;

  @SpeakeasyMetadata()
  snapshotScheduleIdentifier?: string;

  @SpeakeasyMetadata()
  snapshotScheduleState?: ScheduleStateEnum;

  @SpeakeasyMetadata({ elemType: TagList })
  tags?: TagList[];

  @SpeakeasyMetadata()
  totalStorageCapacityInMegaBytes?: number;

  @SpeakeasyMetadata()
  vpcId?: string;

  @SpeakeasyMetadata({ elemType: VpcSecurityGroupMembershipList })
  vpcSecurityGroups?: VpcSecurityGroupMembershipList[];
}
