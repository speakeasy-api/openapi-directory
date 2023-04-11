import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationRolesEnum } from "./organizationrolesenum";
/**
 * Details of an invitation to join an organization
 */
export declare class OrganizationInvitation extends SpeakeasyBase {
    /**
     * Enrollment code to use when joining this organization
     */
    customCode?: string;
    /**
     * The email address this invitation was sent to
     */
    email?: string;
    /**
     * The invitation unique identifier
     */
    id?: string;
    /**
     * The unique identifier of the User who created this invitation
     */
    invitedBy?: string;
    /**
     * The unique identifier of the Organization owning this class
     */
    organization?: string;
    /**
     * User's Organization Role (for Edu users only)
     */
    organizationRole?: OrganizationRolesEnum;
    /**
     * The unique identifier of the User who used this invitation
     */
    usedBy?: string;
}
