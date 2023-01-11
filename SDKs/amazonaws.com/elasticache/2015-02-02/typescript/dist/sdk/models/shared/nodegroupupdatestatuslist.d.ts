import { SpeakeasyBase } from "../../../internal/utils";
import { NodeGroupMemberUpdateStatusList } from "./nodegroupmemberupdatestatuslist";
/**
 * The status of the service update on the node group
**/
export declare class NodeGroupUpdateStatusList extends SpeakeasyBase {
    nodeGroupId?: string;
    nodeGroupMemberUpdateStatus?: NodeGroupMemberUpdateStatusList[];
}
