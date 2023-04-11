import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationRolesEnum } from "./organizationrolesenum";
/**
 * User update as an organization admin
 */
export declare class UserAdminUpdate extends SpeakeasyBase {
    /**
     * Email of the account
     */
    email?: string;
    /**
     * First name of the user
     */
    firstname?: string;
    /**
     * Last name of the user
     */
    lastname?: string;
    /**
     * User's Organization Role (for Edu users only)
     */
    organizationRole?: OrganizationRolesEnum;
    /**
     * Password of the account
     */
    password?: string;
    /**
     * Username of the account
     */
    username?: string;
}
