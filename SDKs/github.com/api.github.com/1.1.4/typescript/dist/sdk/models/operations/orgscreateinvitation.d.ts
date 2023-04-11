import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The role for the new member.
 *
 * @remarks
 *  * `admin` - Organization owners with full administrative rights to the organization and complete access to all repositories and teams.
 *  * `direct_member` - Non-owner organization members with ability to see other members and join teams by invitation.
 *  * `billing_manager` - Non-owner organization members with ability to manage the billing settings of your organization.
 */
export declare enum OrgsCreateInvitationRequestBodyRoleEnum {
    Admin = "admin",
    DirectMember = "direct_member",
    BillingManager = "billing_manager"
}
export declare class OrgsCreateInvitationRequestBody extends SpeakeasyBase {
    /**
     * **Required unless you provide `invitee_id`**. Email address of the person you are inviting, which can be an existing GitHub user.
     */
    email?: string;
    /**
     * **Required unless you provide `email`**. GitHub user ID for the person you are inviting.
     */
    inviteeId?: number;
    /**
     * The role for the new member.
     *
     * @remarks
     *  * `admin` - Organization owners with full administrative rights to the organization and complete access to all repositories and teams.
     *  * `direct_member` - Non-owner organization members with ability to see other members and join teams by invitation.
     *  * `billing_manager` - Non-owner organization members with ability to manage the billing settings of your organization.
     */
    role?: OrgsCreateInvitationRequestBodyRoleEnum;
    /**
     * Specify IDs for the teams you want to invite new members to.
     */
    teamIds?: number[];
}
export declare class OrgsCreateInvitationRequest extends SpeakeasyBase {
    requestBody?: OrgsCreateInvitationRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class OrgsCreateInvitationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    organizationInvitation?: shared.OrganizationInvitation;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
