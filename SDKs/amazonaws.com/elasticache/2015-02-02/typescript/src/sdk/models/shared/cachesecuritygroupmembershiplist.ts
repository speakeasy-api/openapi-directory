import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CacheSecurityGroupMembershipList
/** 
 * Represents a cluster's status within a particular cache security group.
**/
export class CacheSecurityGroupMembershipList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheSecurityGroupName?: string;

  @SpeakeasyMetadata()
  status?: string;
}
