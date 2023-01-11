import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DomainMembershipList
/** 
 * An Active Directory Domain membership record associated with a DB instance.
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
