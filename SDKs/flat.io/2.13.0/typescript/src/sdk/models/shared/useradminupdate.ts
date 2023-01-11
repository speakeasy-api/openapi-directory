import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationRolesEnum } from "./organizationrolesenum";



// UserAdminUpdate
/** 
 * User update as an organization admin
**/
export class UserAdminUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstname" })
  firstname?: string;

  @SpeakeasyMetadata({ data: "json, name=lastname" })
  lastname?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationRole" })
  organizationRole?: OrganizationRolesEnum;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
