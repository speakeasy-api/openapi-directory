import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutomaticFailoverStatusEnum } from "./automaticfailoverstatusenum";



// GlobalReplicationGroupMemberList
/** 
 * A member of a Global datastore. It contains the Replication Group Id, the Amazon region and the role of the replication group. 
**/
export class GlobalReplicationGroupMemberList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  automaticFailover?: AutomaticFailoverStatusEnum;

  @SpeakeasyMetadata()
  replicationGroupId?: string;

  @SpeakeasyMetadata()
  replicationGroupRegion?: string;

  @SpeakeasyMetadata()
  role?: string;

  @SpeakeasyMetadata()
  status?: string;
}
