import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDecreaseNodeGroupsInGlobalReplicationGroupActionEnum {
    DecreaseNodeGroupsInGlobalReplicationGroup = "DecreaseNodeGroupsInGlobalReplicationGroup"
}
export declare enum GETDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETDecreaseNodeGroupsInGlobalReplicationGroupRequest extends SpeakeasyBase {
    action: GETDecreaseNodeGroupsInGlobalReplicationGroupActionEnum;
    /**
     * Indicates that the shard reconfiguration process begins immediately. At present, the only permitted value for this parameter is true.
     */
    applyImmediately: boolean;
    /**
     * If the value of NodeGroupCount is less than the current number of node groups (shards), then either NodeGroupsToRemove or NodeGroupsToRetain is required. GlobalNodeGroupsToRemove is a list of NodeGroupIds to remove from the cluster. ElastiCache for Redis will attempt to remove all node groups listed by GlobalNodeGroupsToRemove from the cluster.
     */
    globalNodeGroupsToRemove?: string[];
    /**
     * If the value of NodeGroupCount is less than the current number of node groups (shards), then either NodeGroupsToRemove or NodeGroupsToRetain is required. GlobalNodeGroupsToRetain is a list of NodeGroupIds to retain from the cluster. ElastiCache for Redis will attempt to retain all node groups listed by GlobalNodeGroupsToRetain from the cluster.
     */
    globalNodeGroupsToRetain?: string[];
    /**
     * The name of the Global datastore
     */
    globalReplicationGroupId: string;
    /**
     * The number of node groups (shards) that results from the modification of the shard configuration
     */
    nodeGroupCount: number;
    version: GETDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDecreaseNodeGroupsInGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
