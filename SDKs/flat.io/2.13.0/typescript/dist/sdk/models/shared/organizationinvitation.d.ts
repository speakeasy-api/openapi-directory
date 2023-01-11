import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationRolesEnum } from "./organizationrolesenum";
/**
 * Details of an invitation to join an organization
**/
export declare class OrganizationInvitation extends SpeakeasyBase {
    customCode?: string;
    email?: string;
    id?: string;
    invitedBy?: string;
    organization?: string;
    organizationRole?: OrganizationRolesEnum;
    usedBy?: string;
}
