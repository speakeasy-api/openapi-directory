import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DomainMembershipList
/** 
 * An Active Directory Domain membership record associated with the DB instance or cluster.
**/
export class DomainMembershipList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  domain?: string;

  @SpeakeasyMetadata()
  fqdn?: string;

  @SpeakeasyMetadata()
  iamRoleName?: string;

  @SpeakeasyMetadata()
  status?: string;
}
