import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationRolesEnum } from "./organizationrolesenum";



// OrganizationInvitationCreation
/** 
 * The parameters to create an organization invitation
**/
export class OrganizationInvitationCreation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationRole" })
  organizationRole?: OrganizationRolesEnum;
}
