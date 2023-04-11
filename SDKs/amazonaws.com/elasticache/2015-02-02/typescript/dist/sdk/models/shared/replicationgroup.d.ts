import { SpeakeasyBase } from "../../../internal/utils";
import { AutomaticFailoverStatusEnum } from "./automaticfailoverstatusenum";
import { DataTieringStatusEnum } from "./datatieringstatusenum";
import { Endpoint } from "./endpoint";
import { GlobalReplicationGroupInfo } from "./globalreplicationgroupinfo";
import { IpDiscoveryEnum } from "./ipdiscoveryenum";
import { LogDeliveryConfigurationList } from "./logdeliveryconfigurationlist";
import { MultiAZStatusEnum } from "./multiazstatusenum";
import { NetworkTypeEnum } from "./networktypeenum";
import { NodeGroupList } from "./nodegrouplist";
import { ReplicationGroupPendingModifiedValues } from "./replicationgrouppendingmodifiedvalues";
import { TransitEncryptionModeEnum } from "./transitencryptionmodeenum";
/**
 * Contains all of the attributes of a specific Redis replication group.
 */
export declare class ReplicationGroup extends SpeakeasyBase {
    arn?: string;
    atRestEncryptionEnabled?: boolean;
    authTokenEnabled?: boolean;
    authTokenLastModifiedDate?: Date;
    autoMinorVersionUpgrade?: boolean;
    automaticFailover?: AutomaticFailoverStatusEnum;
    cacheNodeType?: string;
    clusterEnabled?: boolean;
    configurationEndpoint?: Endpoint;
    dataTiering?: DataTieringStatusEnum;
    description?: string;
    globalReplicationGroupInfo?: GlobalReplicationGroupInfo;
    ipDiscovery?: IpDiscoveryEnum;
    kmsKeyId?: string;
    logDeliveryConfigurations?: LogDeliveryConfigurationList[];
    memberClusters?: string[];
    memberClustersOutpostArns?: string[];
    multiAZ?: MultiAZStatusEnum;
    networkType?: NetworkTypeEnum;
    nodeGroups?: NodeGroupList[];
    pendingModifiedValues?: ReplicationGroupPendingModifiedValues;
    replicationGroupCreateTime?: Date;
    replicationGroupId?: string;
    snapshotRetentionLimit?: number;
    snapshotWindow?: string;
    snapshottingClusterId?: string;
    status?: string;
    transitEncryptionEnabled?: boolean;
    transitEncryptionMode?: TransitEncryptionModeEnum;
    userGroupIds?: string[];
}
