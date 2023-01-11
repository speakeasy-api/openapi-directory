import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationRolesEnum } from "./organizationrolesenum";
/**
 * The parameters to create an organization invitation
**/
export declare class OrganizationInvitationCreation extends SpeakeasyBase {
    email?: string;
    organizationRole?: OrganizationRolesEnum;
}
