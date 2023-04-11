import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationRolesEnum } from "./organizationrolesenum";
/**
 * The parameters to create an organization invitation
 */
export declare class OrganizationInvitationCreation extends SpeakeasyBase {
    /**
     * The email address you want to send the invitation to
     */
    email?: string;
    /**
     * User's Organization Role (for Edu users only)
     */
    organizationRole?: OrganizationRolesEnum;
}
