import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClusterSecurityGroupMembershipList
/** 
 * Describes a cluster security group.
**/
export class ClusterSecurityGroupMembershipList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterSecurityGroupName?: string;

  @SpeakeasyMetadata()
  status?: string;
}
