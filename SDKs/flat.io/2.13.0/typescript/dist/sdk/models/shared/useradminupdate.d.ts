import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationRolesEnum } from "./organizationrolesenum";
/**
 * User update as an organization admin
**/
export declare class UserAdminUpdate extends SpeakeasyBase {
    email?: string;
    firstname?: string;
    lastname?: string;
    organizationRole?: OrganizationRolesEnum;
    password?: string;
    username?: string;
}
