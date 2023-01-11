import { SpeakeasyBase } from "../../../internal/utils";
import { NodeGroupMemberList } from "./nodegroupmemberlist";
import { Endpoint } from "./endpoint";
/**
 * Represents a collection of cache nodes in a replication group. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.
**/
export declare class NodeGroupList extends SpeakeasyBase {
    nodeGroupId?: string;
    nodeGroupMembers?: NodeGroupMemberList[];
    primaryEndpoint?: Endpoint;
    readerEndpoint?: Endpoint;
    slots?: string;
    status?: string;
}
