import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodeGroupMemberList } from "./nodegroupmemberlist";
import { Endpoint } from "./endpoint";



// NodeGroupList
/** 
 * Represents a collection of cache nodes in a replication group. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.
**/
export class NodeGroupList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nodeGroupId?: string;

  @SpeakeasyMetadata({ elemType: NodeGroupMemberList })
  nodeGroupMembers?: NodeGroupMemberList[];

  @SpeakeasyMetadata()
  primaryEndpoint?: Endpoint;

  @SpeakeasyMetadata()
  readerEndpoint?: Endpoint;

  @SpeakeasyMetadata()
  slots?: string;

  @SpeakeasyMetadata()
  status?: string;
}
