import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodeUpdateInitiatedByEnum } from "./nodeupdateinitiatedbyenum";
import { NodeUpdateStatusEnum } from "./nodeupdatestatusenum";



// NodeGroupMemberUpdateStatusList
/** 
 * The status of the service update on the node group member 
**/
export class NodeGroupMemberUpdateStatusList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheClusterId?: string;

  @SpeakeasyMetadata()
  cacheNodeId?: string;

  @SpeakeasyMetadata()
  nodeDeletionDate?: Date;

  @SpeakeasyMetadata()
  nodeUpdateEndDate?: Date;

  @SpeakeasyMetadata()
  nodeUpdateInitiatedBy?: NodeUpdateInitiatedByEnum;

  @SpeakeasyMetadata()
  nodeUpdateInitiatedDate?: Date;

  @SpeakeasyMetadata()
  nodeUpdateStartDate?: Date;

  @SpeakeasyMetadata()
  nodeUpdateStatus?: NodeUpdateStatusEnum;

  @SpeakeasyMetadata()
  nodeUpdateStatusModifiedDate?: Date;
}
