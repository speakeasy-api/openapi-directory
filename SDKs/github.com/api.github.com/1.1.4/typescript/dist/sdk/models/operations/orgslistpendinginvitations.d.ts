import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filter invitations by their invitation source.
 */
export declare enum OrgsListPendingInvitationsInvitationSourceEnum {
    All = "all",
    Member = "member",
    Scim = "scim"
}
/**
 * Filter invitations by their member role.
 */
export declare enum OrgsListPendingInvitationsRoleEnum {
    All = "all",
    Admin = "admin",
    DirectMember = "direct_member",
    BillingManager = "billing_manager",
    HiringManager = "hiring_manager"
}
export declare class OrgsListPendingInvitationsRequest extends SpeakeasyBase {
    /**
     * Filter invitations by their invitation source.
     */
    invitationSource?: OrgsListPendingInvitationsInvitationSourceEnum;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * Filter invitations by their member role.
     */
    role?: OrgsListPendingInvitationsRoleEnum;
}
export declare class OrgsListPendingInvitationsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    organizationInvitations?: shared.OrganizationInvitation[];
}
