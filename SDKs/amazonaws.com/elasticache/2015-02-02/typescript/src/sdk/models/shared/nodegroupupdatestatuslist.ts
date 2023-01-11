import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodeGroupMemberUpdateStatusList } from "./nodegroupmemberupdatestatuslist";



// NodeGroupUpdateStatusList
/** 
 * The status of the service update on the node group 
**/
export class NodeGroupUpdateStatusList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nodeGroupId?: string;

  @SpeakeasyMetadata({ elemType: NodeGroupMemberUpdateStatusList })
  nodeGroupMemberUpdateStatus?: NodeGroupMemberUpdateStatusList[];
}
