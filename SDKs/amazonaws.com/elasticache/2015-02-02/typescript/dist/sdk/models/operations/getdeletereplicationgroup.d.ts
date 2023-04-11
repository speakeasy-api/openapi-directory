import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteReplicationGroupActionEnum {
    DeleteReplicationGroup = "DeleteReplicationGroup"
}
export declare enum GETDeleteReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETDeleteReplicationGroupRequest extends SpeakeasyBase {
    action: GETDeleteReplicationGroupActionEnum;
    /**
     * The name of a final node group (shard) snapshot. ElastiCache creates the snapshot from the primary node in the cluster, rather than one of the replicas; this is to ensure that it captures the freshest data. After the final snapshot is taken, the replication group is immediately deleted.
     */
    finalSnapshotIdentifier?: string;
    /**
     * The identifier for the cluster to be deleted. This parameter is not case sensitive.
     */
    replicationGroupId: string;
    /**
     * If set to <code>true</code>, all of the read replicas are deleted, but the primary node is retained.
     */
    retainPrimaryCluster?: boolean;
    version: GETDeleteReplicationGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
