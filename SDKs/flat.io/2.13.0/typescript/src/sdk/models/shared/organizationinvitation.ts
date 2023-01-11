import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationRolesEnum } from "./organizationrolesenum";



// OrganizationInvitation
/** 
 * Details of an invitation to join an organization
**/
export class OrganizationInvitation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customCode" })
  customCode?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=invitedBy" })
  invitedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationRole" })
  organizationRole?: OrganizationRolesEnum;

  @SpeakeasyMetadata({ data: "json, name=usedBy" })
  usedBy?: string;
}
