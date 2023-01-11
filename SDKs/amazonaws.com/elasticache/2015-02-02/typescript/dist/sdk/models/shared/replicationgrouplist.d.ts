import { SpeakeasyBase } from "../../../internal/utils";
import { AutomaticFailoverStatusEnum } from "./automaticfailoverstatusenum";
import { Endpoint } from "./endpoint";
import { GlobalReplicationGroupInfo } from "./globalreplicationgroupinfo";
import { LogDeliveryConfigurationList } from "./logdeliveryconfigurationlist";
import { MultiAzStatusEnum } from "./multiazstatusenum";
import { NodeGroupList } from "./nodegrouplist";
import { ReplicationGroupPendingModifiedValues } from "./replicationgrouppendingmodifiedvalues";
/**
 * Contains all of the attributes of a specific Redis replication group.
**/
export declare class ReplicationGroupList extends SpeakeasyBase {
    arn?: string;
    atRestEncryptionEnabled?: boolean;
    authTokenEnabled?: boolean;
    authTokenLastModifiedDate?: Date;
    automaticFailover?: AutomaticFailoverStatusEnum;
    cacheNodeType?: string;
    clusterEnabled?: boolean;
    configurationEndpoint?: Endpoint;
    description?: string;
    globalReplicationGroupInfo?: GlobalReplicationGroupInfo;
    kmsKeyId?: string;
    logDeliveryConfigurations?: LogDeliveryConfigurationList[];
    memberClusters?: Record<string, any>[];
    memberClustersOutpostArns?: Record<string, any>[];
    multiAZ?: MultiAzStatusEnum;
    nodeGroups?: NodeGroupList[];
    pendingModifiedValues?: ReplicationGroupPendingModifiedValues;
    replicationGroupCreateTime?: Date;
    replicationGroupId?: string;
    snapshotRetentionLimit?: number;
    snapshotWindow?: string;
    snapshottingClusterId?: string;
    status?: string;
    transitEncryptionEnabled?: boolean;
    userGroupIds?: string[];
}
