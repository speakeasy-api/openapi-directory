import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbSecurityGroupMembershipList
/** 
 * Specifies membership in a designated DB security group.
**/
export class DbSecurityGroupMembershipList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSecurityGroupName?: string;

  @SpeakeasyMetadata()
  status?: string;
}
