import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutomaticFailoverStatusEnum } from "./automaticfailoverstatusenum";
import { Endpoint } from "./endpoint";
import { GlobalReplicationGroupInfo } from "./globalreplicationgroupinfo";
import { LogDeliveryConfigurationList } from "./logdeliveryconfigurationlist";
import { MultiAzStatusEnum } from "./multiazstatusenum";
import { NodeGroupList } from "./nodegrouplist";
import { ReplicationGroupPendingModifiedValues } from "./replicationgrouppendingmodifiedvalues";



// ReplicationGroup
/** 
 * Contains all of the attributes of a specific Redis replication group.
**/
export class ReplicationGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  atRestEncryptionEnabled?: boolean;

  @SpeakeasyMetadata()
  authTokenEnabled?: boolean;

  @SpeakeasyMetadata()
  authTokenLastModifiedDate?: Date;

  @SpeakeasyMetadata()
  automaticFailover?: AutomaticFailoverStatusEnum;

  @SpeakeasyMetadata()
  cacheNodeType?: string;

  @SpeakeasyMetadata()
  clusterEnabled?: boolean;

  @SpeakeasyMetadata()
  configurationEndpoint?: Endpoint;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  globalReplicationGroupInfo?: GlobalReplicationGroupInfo;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata({ elemType: LogDeliveryConfigurationList })
  logDeliveryConfigurations?: LogDeliveryConfigurationList[];

  @SpeakeasyMetadata()
  memberClusters?: Record<string, any>[];

  @SpeakeasyMetadata()
  memberClustersOutpostArns?: Record<string, any>[];

  @SpeakeasyMetadata()
  multiAZ?: MultiAzStatusEnum;

  @SpeakeasyMetadata({ elemType: NodeGroupList })
  nodeGroups?: NodeGroupList[];

  @SpeakeasyMetadata()
  pendingModifiedValues?: ReplicationGroupPendingModifiedValues;

  @SpeakeasyMetadata()
  replicationGroupCreateTime?: Date;

  @SpeakeasyMetadata()
  replicationGroupId?: string;

  @SpeakeasyMetadata()
  snapshotRetentionLimit?: number;

  @SpeakeasyMetadata()
  snapshotWindow?: string;

  @SpeakeasyMetadata()
  snapshottingClusterId?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  transitEncryptionEnabled?: boolean;

  @SpeakeasyMetadata()
  userGroupIds?: string[];
}
