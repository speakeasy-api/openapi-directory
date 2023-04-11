import { SpeakeasyBase } from "../../../internal/utils";
import { AZStatusEnum } from "./azstatusenum";
import { ClusterPendingUpdates } from "./clusterpendingupdates";
import { DataTieringStatusEnum } from "./datatieringstatusenum";
import { Endpoint } from "./endpoint";
import { SecurityGroupMembership } from "./securitygroupmembership";
import { Shard } from "./shard";
/**
 * Contains all of the attributes of a specific cluster.
 */
export declare class Cluster extends SpeakeasyBase {
    aclName?: string;
    arn?: string;
    autoMinorVersionUpgrade?: boolean;
    availabilityMode?: AZStatusEnum;
    clusterEndpoint?: Endpoint;
    dataTiering?: DataTieringStatusEnum;
    description?: string;
    enginePatchVersion?: string;
    engineVersion?: string;
    kmsKeyId?: string;
    maintenanceWindow?: string;
    name?: string;
    nodeType?: string;
    numberOfShards?: number;
    parameterGroupName?: string;
    parameterGroupStatus?: string;
    pendingUpdates?: ClusterPendingUpdates;
    securityGroups?: SecurityGroupMembership[];
    shards?: Shard[];
    snapshotRetentionLimit?: number;
    snapshotWindow?: string;
    snsTopicArn?: string;
    snsTopicStatus?: string;
    status?: string;
    subnetGroupName?: string;
    tlsEnabled?: boolean;
}
