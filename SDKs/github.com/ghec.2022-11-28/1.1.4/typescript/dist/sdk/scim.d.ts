import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Provisioning of GitHub organization membership for SCIM-enabled providers.
 */
export declare class Scim {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a SCIM user from an organization
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/scim#delete-a-scim-user-from-an-organization} - API method documentation
     */
    scimDeleteUserFromOrg(req: operations.ScimDeleteUserFromOrgRequest, config?: AxiosRequestConfig): Promise<operations.ScimDeleteUserFromOrgResponse>;
    /**
     * Get SCIM provisioning information for a user
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/scim#get-scim-provisioning-information-for-a-user} - API method documentation
     */
    scimGetProvisioningInformationForUser(req: operations.ScimGetProvisioningInformationForUserRequest, config?: AxiosRequestConfig): Promise<operations.ScimGetProvisioningInformationForUserResponse>;
    /**
     * List SCIM provisioned identities
     *
     * @remarks
     * Retrieves a paginated list of all provisioned organization members, including pending invitations. If you provide the `filter` parameter, the resources for all matching provisions members are returned.
     *
     * When a user with a SAML-provisioned external identity leaves (or is removed from) an organization, the account's metadata is immediately removed. However, the returned list of user accounts might not always match the organization or enterprise member list you see on GitHub Enterprise Cloud. This can happen in certain cases where an external identity associated with an organization will not match an organization member:
     *   - When a user with a SCIM-provisioned external identity is removed from an organization, the account's metadata is preserved to allow the user to re-join the organization in the future.
     *   - When inviting a user to join an organization, you can expect to see their external identity in the results before they accept the invitation, or if the invitation is cancelled (or never accepted).
     *   - When a user is invited over SCIM, an external identity is created that matches with the invitee's email address. However, this identity is only linked to a user account when the user accepts the invitation by going through SAML SSO.
     *
     * The returned list of external identities can include an entry for a `null` user. These are unlinked SAML identities that are created when a user goes through the following Single Sign-On (SSO) process but does not sign in to their GitHub Enterprise Cloud account after completing SSO:
     *
     * 1. The user is granted access by the IdP and is not a member of the GitHub Enterprise Cloud organization.
     *
     * 1. The user attempts to access the GitHub Enterprise Cloud organization and initiates the SAML SSO process, and is not currently signed in to their GitHub Enterprise Cloud account.
     *
     * 1. After successfully authenticating with the SAML SSO IdP, the `null` external identity entry is created and the user is prompted to sign in to their GitHub Enterprise Cloud account:
     *    - If the user signs in, their GitHub Enterprise Cloud account is linked to this entry.
     *    - If the user does not sign in (or does not create a new account when prompted), they are not added to the GitHub Enterprise Cloud organization, and the external identity `null` entry remains in place.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/scim#list-scim-provisioned-identities} - API method documentation
     */
    scimListProvisionedIdentities(req: operations.ScimListProvisionedIdentitiesRequest, config?: AxiosRequestConfig): Promise<operations.ScimListProvisionedIdentitiesResponse>;
    /**
     * Provision and invite a SCIM user
     *
     * @remarks
     * Provisions organization membership for a user, and sends an activation email to the email address. If the user was previously a member of the organization, the invitation will reinstate any former privileges that the user had. For more information about reinstating former members, see "[Reinstating a former member of your organization](https://docs.github.com/enterprise-cloud@latest//organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization)."
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/scim#provision-and-invite-a-scim-user} - API method documentation
     */
    scimProvisionAndInviteUser(req: operations.ScimProvisionAndInviteUserRequest, config?: AxiosRequestConfig): Promise<operations.ScimProvisionAndInviteUserResponse>;
    /**
     * Update a provisioned organization membership
     *
     * @remarks
     * Replaces an existing provisioned user's information. You must provide all the information required for the user as if you were provisioning them for the first time. Any existing user information that you don't provide will be removed. If you want to only update a specific attribute, use the [Update an attribute for a SCIM user](https://docs.github.com/enterprise-cloud@latest//rest/reference/scim#update-an-attribute-for-a-scim-user) endpoint instead.
     *
     * You must at least provide the required values for the user: `userName`, `name`, and `emails`.
     *
     * **Warning:** Setting `active: false` removes the user from the organization, deletes the external identity, and deletes the associated `{scim_user_id}`.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/scim#set-scim-information-for-a-provisioned-user} - API method documentation
     */
    scimSetInformationForProvisionedUser(req: operations.ScimSetInformationForProvisionedUserRequest, config?: AxiosRequestConfig): Promise<operations.ScimSetInformationForProvisionedUserResponse>;
    /**
     * Update an attribute for a SCIM user
     *
     * @remarks
     * Allows you to change a provisioned user's individual attributes. To change a user's values, you must provide a specific `Operations` JSON format that contains at least one of the `add`, `remove`, or `replace` operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).
     *
     * **Note:** Complicated SCIM `path` selectors that include filters are not supported. For example, a `path` selector defined as `"path": "emails[type eq \"work\"]"` will not work.
     *
     * **Warning:** If you set `active:false` using the `replace` operation (as shown in the JSON example below), it removes the user from the organization, deletes the external identity, and deletes the associated `:scim_user_id`.
     *
     * ```
     * {
     *   "Operations":[{
     *     "op":"replace",
     *     "value":{
     *       "active":false
     *     }
     *   }]
     * }
     * ```
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/scim#update-an-attribute-for-a-scim-user} - API method documentation
     */
    scimUpdateAttributeForUser(req: operations.ScimUpdateAttributeForUserRequest, config?: AxiosRequestConfig): Promise<operations.ScimUpdateAttributeForUserResponse>;
}
