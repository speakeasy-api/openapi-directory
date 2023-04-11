import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { OrganizationSimple } from "./organizationsimple";
export declare class OrgMembershipPermissions extends SpeakeasyBase {
    canCreateRepository: boolean;
}
/**
 * The user's membership type in the organization.
 */
export declare enum OrgMembershipRoleEnum {
    Admin = "admin",
    Member = "member",
    BillingManager = "billing_manager"
}
/**
 * The state of the member in the organization. The `pending` state indicates the user has not yet accepted an invitation.
 */
export declare enum OrgMembershipStateEnum {
    Active = "active",
    Pending = "pending"
}
/**
 * Org Membership
 */
export declare class OrgMembership extends SpeakeasyBase {
    /**
     * Organization Simple
     */
    organization: OrganizationSimple;
    organizationUrl: string;
    permissions?: OrgMembershipPermissions;
    /**
     * The user's membership type in the organization.
     */
    role: OrgMembershipRoleEnum;
    /**
     * The state of the member in the organization. The `pending` state indicates the user has not yet accepted an invitation.
     */
    state: OrgMembershipStateEnum;
    url: string;
    /**
     * Simple User
     */
    user: NullableSimpleUser;
}
