import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationGroupList } from "./replicationgrouplist";



// ReplicationGroupMessage
/** 
 * Represents the output of a <code>DescribeReplicationGroups</code> operation.
**/
export class ReplicationGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ReplicationGroupList })
  replicationGroups?: ReplicationGroupList[];
}
