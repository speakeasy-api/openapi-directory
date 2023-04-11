import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Interact with GitHub Orgs.
 */
export declare class Orgs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get announcement banner for organization
     *
     * @remarks
     * Gets the announcement banner currently set for the organization. Only returns the announcement banner set at the
     * organization level. Organization members may also see an enterprise-level announcement banner. To get an
     * announcement banner displayed at the enterprise level, use the enterprise-level endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/announcement-banners#get-enterprise-announcement-banner-for-org} - API method documentation
     */
    announcementBannersGetAnnouncementBannerForOrg(req: operations.AnnouncementBannersGetAnnouncementBannerForOrgRequest, config?: AxiosRequestConfig): Promise<operations.AnnouncementBannersGetAnnouncementBannerForOrgResponse>;
    /**
     * Remove announcement banner from organization
     *
     * @remarks
     * Removes the announcement banner currently set for the organization.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/announcement-banners/organizations#remove-announcement-banner-from-organization} - API method documentation
     */
    announcementBannersRemoveAnnouncementBannerForOrg(req: operations.AnnouncementBannersRemoveAnnouncementBannerForOrgRequest, config?: AxiosRequestConfig): Promise<operations.AnnouncementBannersRemoveAnnouncementBannerForOrgResponse>;
    /**
     * Set announcement banner for organization
     *
     * @remarks
     * Sets the announcement banner to display for the organization.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/announcement-banners/organizations#set-announcement-banner-for-organization} - API method documentation
     */
    announcementBannersSetAnnouncementBannerForOrg(req: operations.AnnouncementBannersSetAnnouncementBannerForOrgRequest, config?: AxiosRequestConfig): Promise<operations.AnnouncementBannersSetAnnouncementBannerForOrgResponse>;
    /**
     * Add a security manager team
     *
     * @remarks
     * Adds a team as a security manager for an organization. For more information, see "[Managing security for an organization](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization) for an organization."
     *
     * To use this endpoint, you must be an administrator for the organization, and you must use an access token with the `write:org` scope.
     *
     * GitHub Apps must have the `administration` organization read-write permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#add-a-security-manager-team} - API method documentation
     */
    orgsAddSecurityManagerTeam(req: operations.OrgsAddSecurityManagerTeamRequest, config?: AxiosRequestConfig): Promise<operations.OrgsAddSecurityManagerTeamResponse>;
    /**
     * Block a user from an organization
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#block-a-user-from-an-organization} - API method documentation
     */
    orgsBlockUser(req: operations.OrgsBlockUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsBlockUserResponse>;
    /**
     * Cancel an organization invitation
     *
     * @remarks
     * Cancel an organization invitation. In order to cancel an organization invitation, the authenticated user must be an organization owner.
     *
     * This endpoint triggers [notifications](https://docs.github.com/enterprise-cloud@latest//github/managing-subscriptions-and-notifications-on-github/about-notifications).
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#cancel-an-organization-invitation} - API method documentation
     */
    orgsCancelInvitation(req: operations.OrgsCancelInvitationRequest, config?: AxiosRequestConfig): Promise<operations.OrgsCancelInvitationResponse>;
    /**
     * Check if a user is blocked by an organization
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#check-if-a-user-is-blocked-by-an-organization} - API method documentation
     */
    orgsCheckBlockedUser(req: operations.OrgsCheckBlockedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsCheckBlockedUserResponse>;
    /**
     * Check organization membership for a user
     *
     * @remarks
     * Check if a user is, publicly or privately, a member of the organization.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#check-organization-membership-for-a-user} - API method documentation
     */
    orgsCheckMembershipForUser(req: operations.OrgsCheckMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsCheckMembershipForUserResponse>;
    /**
     * Check public organization membership for a user
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#check-public-organization-membership-for-a-user} - API method documentation
     */
    orgsCheckPublicMembershipForUser(req: operations.OrgsCheckPublicMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsCheckPublicMembershipForUserResponse>;
    /**
     * Convert an organization member to outside collaborator
     *
     * @remarks
     * When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://docs.github.com/enterprise-cloud@latest//articles/converting-an-organization-member-to-an-outside-collaborator/)". Converting an organization member to an outside collaborator may be restricted by enterprise administrators. For more information, see "[Enforcing repository management policies in your enterprise](https://docs.github.com/enterprise-cloud@latest//admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)."
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#convert-an-organization-member-to-outside-collaborator} - API method documentation
     */
    orgsConvertMemberToOutsideCollaborator(req: operations.OrgsConvertMemberToOutsideCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.OrgsConvertMemberToOutsideCollaboratorResponse>;
    /**
     * Create a custom role
     *
     * @remarks
     * **Note**: This operation is in beta and is subject to change.
     *
     * Creates a custom repository role that can be used by all repositories owned by the organization.
     *
     * To use this endpoint the authenticated user must be an administrator for the organization and must use an access token with `admin:org` scope.
     * GitHub Apps must have the `organization_custom_roles:write` organization permission to use this endpoint.
     *
     * For more information on custom repository roles, see "[About custom repository roles](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)."
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#create-a-custom-role} - API method documentation
     */
    orgsCreateCustomRole(req: operations.OrgsCreateCustomRoleRequest, config?: AxiosRequestConfig): Promise<operations.OrgsCreateCustomRoleResponse>;
    /**
     * Create an organization invitation
     *
     * @remarks
     * Invite people to an organization by using their GitHub user ID or their email address. In order to create invitations in an organization, the authenticated user must be an organization owner.
     *
     * This endpoint triggers [notifications](https://docs.github.com/enterprise-cloud@latest//github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#create-an-organization-invitation} - API method documentation
     */
    orgsCreateInvitation(req: operations.OrgsCreateInvitationRequest, config?: AxiosRequestConfig): Promise<operations.OrgsCreateInvitationResponse>;
    /**
     * Create an organization webhook
     *
     * @remarks
     * Here's how you can create a hook that posts payloads in JSON format:
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#create-an-organization-webhook} - API method documentation
     */
    orgsCreateWebhook(req: operations.OrgsCreateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsCreateWebhookResponse>;
    /**
     * Delete a custom role
     *
     * @remarks
     * **Note**: This operation is in beta and is subject to change.
     *
     * Deletes a custom role from an organization. Once the custom role has been deleted, any
     * user, team, or invitation with the deleted custom role will be reassigned the inherited role.
     *
     * To use this endpoint the authenticated user must be an administrator for the organization and must use an access token with `admin:org` scope.
     * GitHub Apps must have the `organization_custom_roles:write` organization permission to use this endpoint.
     *
     * For more information about custom repository roles, see "[About custom repository roles](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)."
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#delete-a-custom-role} - API method documentation
     */
    orgsDeleteCustomRole(req: operations.OrgsDeleteCustomRoleRequest, config?: AxiosRequestConfig): Promise<operations.OrgsDeleteCustomRoleResponse>;
    /**
     * Delete an organization webhook
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#delete-an-organization-webhook} - API method documentation
     */
    orgsDeleteWebhook(req: operations.OrgsDeleteWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsDeleteWebhookResponse>;
    /**
     * Enable or disable a security feature for an organization
     *
     * @remarks
     * Enables or disables the specified security feature for all repositories in an organization.
     *
     * To use this endpoint, you must be an organization owner or be member of a team with the security manager role.
     * A token with the 'write:org' scope is also required.
     *
     * GitHub Apps must have the `organization_administration:write` permission to use this endpoint.
     *
     * For more information, see "[Managing security managers in your organization](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#enable-or-disable-security-product-on-all-org-repos} - API method documentation
     */
    orgsEnableOrDisableSecurityProductOnAllOrgRepos(req: operations.OrgsEnableOrDisableSecurityProductOnAllOrgReposRequest, config?: AxiosRequestConfig): Promise<operations.OrgsEnableOrDisableSecurityProductOnAllOrgReposResponse>;
    /**
     * Get an organization
     *
     * @remarks
     * To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://docs.github.com/enterprise-cloud@latest//articles/securing-your-account-with-two-factor-authentication-2fa/).
     *
     * GitHub Apps with the `Organization plan` permission can use this endpoint to retrieve information about an organization's GitHub Enterprise Cloud plan. See "[Authenticating with GitHub Apps](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/)" for details. For an example response, see 'Response with GitHub Enterprise Cloud plan information' below."
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#get-an-organization} - API method documentation
     */
    orgsGet(req: operations.OrgsGetRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetResponse>;
    /**
     * Get the audit log for an organization
     *
     * @remarks
     * Gets the audit log for an organization. For more information, see "[Reviewing the audit log for your organization](https://docs.github.com/enterprise-cloud@latest//github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization)."
     *
     * To use this endpoint, you must be an organization owner, and you must use an access token with the `read:audit_log` scope. GitHub Apps must have the `organization_administration` read permission to use this endpoint.
     *
     * By default, the response includes up to 30 events from the past three months. Use the `phrase` parameter to filter results and retrieve older events. For example, use the `phrase` parameter with the `created` qualifier to filter events based on when the events occurred. For more information, see "[Reviewing the audit log for your organization](https://docs.github.com/enterprise-cloud@latest//organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#searching-the-audit-log)."
     *
     * Use pagination to retrieve fewer or more than 30 events. For more information, see "[Resources in the REST API](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#pagination)."
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#get-audit-log} - API method documentation
     */
    orgsGetAuditLog(req: operations.OrgsGetAuditLogRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetAuditLogResponse>;
    /**
     * Get a custom role
     *
     * @remarks
     * **Note**: This operation is in beta and is subject to change.
     *
     * Gets a custom repository role that is available to all repositories owned by the organization.
     *
     * To use this operation, the authenticated user must be an administrator for the organization and must use an access token with `admin:org` scope.
     * GitHub Apps must have the `organization_custom_roles:write` organization permission to use this endpoint.
     *
     * For more information on custom repository roles, see "[About custom repository roles](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)."
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs/#get-a-custom-role} - API method documentation
     */
    orgsGetCustomRole(req: operations.OrgsGetCustomRoleRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetCustomRoleResponse>;
    /**
     * Get an organization membership for the authenticated user
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user} - API method documentation
     */
    orgsGetMembershipForAuthenticatedUser(req: operations.OrgsGetMembershipForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetMembershipForAuthenticatedUserResponse>;
    /**
     * Get organization membership for a user
     *
     * @remarks
     * In order to get a user's membership with an organization, the authenticated user must be an organization member. The `state` parameter in the response can be used to identify the user's membership status.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#get-organization-membership-for-a-user} - API method documentation
     */
    orgsGetMembershipForUser(req: operations.OrgsGetMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetMembershipForUserResponse>;
    /**
     * Get an organization webhook
     *
     * @remarks
     * Returns a webhook configured in an organization. To get only the webhook `config` properties, see "[Get a webhook configuration for an organization](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization)."
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#get-an-organization-webhook} - API method documentation
     */
    orgsGetWebhook(req: operations.OrgsGetWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetWebhookResponse>;
    /**
     * Get a webhook configuration for an organization
     *
     * @remarks
     * Returns the webhook configuration for an organization. To get more information about the webhook, including the `active` state and `events`, use "[Get an organization webhook ](/rest/reference/orgs#get-an-organization-webhook)."
     *
     * Access tokens must have the `admin:org_hook` scope, and GitHub Apps must have the `organization_hooks:read` permission.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#get-a-webhook-configuration-for-an-organization} - API method documentation
     */
    orgsGetWebhookConfigForOrg(req: operations.OrgsGetWebhookConfigForOrgRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetWebhookConfigForOrgResponse>;
    /**
     * Get a webhook delivery for an organization webhook
     *
     * @remarks
     * Returns a delivery for a webhook configured in an organization.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#get-a-webhook-delivery-for-an-organization-webhook} - API method documentation
     */
    orgsGetWebhookDelivery(req: operations.OrgsGetWebhookDeliveryRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetWebhookDeliveryResponse>;
    /**
     * List organizations
     *
     * @remarks
     * Lists all organizations, in the order that they were created on GitHub Enterprise Cloud.
     *
     * **Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of organizations.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-organizations} - API method documentation
     */
    orgsList(req: operations.OrgsListRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListResponse>;
    /**
     * List app installations for an organization
     *
     * @remarks
     * Lists all GitHub Apps in an organization. The installation count includes all GitHub Apps installed on repositories in the organization. You must be an organization owner with `admin:read` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-app-installations-for-an-organization} - API method documentation
     */
    orgsListAppInstallations(req: operations.OrgsListAppInstallationsRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListAppInstallationsResponse>;
    /**
     * List users blocked by an organization
     *
     * @remarks
     * List the users blocked by an organization.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-users-blocked-by-an-organization} - API method documentation
     */
    orgsListBlockedUsers(req: operations.OrgsListBlockedUsersRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListBlockedUsersResponse>;
    /**
     * List custom repository roles in an organization
     *
     * @remarks
     * List the custom repository roles available in this organization. In order to see custom
     * repository roles in an organization, the authenticated user must be an organization owner.
     *
     * To use this endpoint the authenticated user must be an administrator for the organization or of an repository of the organization and must use an access token with `admin:org repo` scope.
     * GitHub Apps must have the `organization_custom_roles:read` organization permission to use this endpoint.
     *
     * For more information on custom repository roles, see "[About custom repository roles](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)."
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-custom-repository-roles-in-an-organization} - API method documentation
     */
    orgsListCustomRoles(req: operations.OrgsListCustomRolesRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListCustomRolesResponse>;
    /**
     * List failed organization invitations
     *
     * @remarks
     * The return hash contains `failed_at` and `failed_reason` fields which represent the time at which the invitation failed and the reason for the failure.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-failed-organization-invitations} - API method documentation
     */
    orgsListFailedInvitations(req: operations.OrgsListFailedInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListFailedInvitationsResponse>;
    /**
     * List repository fine-grained permissions for an organization
     *
     * @remarks
     * **Note**: This operation is in beta and subject to change.
     *
     * Lists the fine-grained permissions that can be used in custom repository roles for an organization. For more information, see "[About custom repository roles](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)."
     *
     * To use this endpoint the authenticated user must be an administrator for the organization or of an repository of the organization and must use an access token with `admin:org repo` scope.
     * GitHub Apps must have the `organization_custom_roles:read` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-repository-fine-grained-permissions-for-an-organization} - API method documentation
     */
    orgsListFineGrainedPermissions(req: operations.OrgsListFineGrainedPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListFineGrainedPermissionsResponse>;
    /**
     * List organizations for the authenticated user
     *
     * @remarks
     * List organizations for the authenticated user.
     *
     * **OAuth scope requirements**
     *
     * This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope. OAuth requests with insufficient scope receive a `403 Forbidden` response.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-organizations-for-the-authenticated-user} - API method documentation
     */
    orgsListForAuthenticatedUser(req: operations.OrgsListForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListForAuthenticatedUserResponse>;
    /**
     * List organizations for a user
     *
     * @remarks
     * List [public organization memberships](https://docs.github.com/enterprise-cloud@latest//articles/publicizing-or-concealing-organization-membership) for the specified user.
     *
     * This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-organizations-for-the-authenticated-user) API instead.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-organizations-for-a-user} - API method documentation
     */
    orgsListForUser(req: operations.OrgsListForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListForUserResponse>;
    /**
     * List organization invitation teams
     *
     * @remarks
     * List all teams associated with an invitation. In order to see invitations in an organization, the authenticated user must be an organization owner.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-organization-invitation-teams} - API method documentation
     */
    orgsListInvitationTeams(req: operations.OrgsListInvitationTeamsRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListInvitationTeamsResponse>;
    /**
     * List organization members
     *
     * @remarks
     * List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-organization-members} - API method documentation
     */
    orgsListMembers(req: operations.OrgsListMembersRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListMembersResponse>;
    /**
     * List organization memberships for the authenticated user
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-organization-memberships-for-the-authenticated-user} - API method documentation
     */
    orgsListMembershipsForAuthenticatedUser(req: operations.OrgsListMembershipsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListMembershipsForAuthenticatedUserResponse>;
    /**
     * List outside collaborators for an organization
     *
     * @remarks
     * List all users who are outside collaborators of an organization.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-outside-collaborators-for-an-organization} - API method documentation
     */
    orgsListOutsideCollaborators(req: operations.OrgsListOutsideCollaboratorsRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListOutsideCollaboratorsResponse>;
    /**
     * List pending organization invitations
     *
     * @remarks
     * The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, or `hiring_manager`. If the invitee is not a GitHub Enterprise Cloud member, the `login` field in the return hash will be `null`.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-pending-organization-invitations} - API method documentation
     */
    orgsListPendingInvitations(req: operations.OrgsListPendingInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListPendingInvitationsResponse>;
    /**
     * List public organization members
     *
     * @remarks
     * Members of an organization can choose to have their membership publicized or not.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-public-organization-members} - API method documentation
     */
    orgsListPublicMembers(req: operations.OrgsListPublicMembersRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListPublicMembersResponse>;
    /**
     * List SAML SSO authorizations for an organization
     *
     * @remarks
     * Listing and deleting credential authorizations is available to organizations with GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products).
     *
     * An authenticated organization owner with the `read:org` scope can list all credential authorizations for an organization that uses SAML single sign-on (SSO). The credentials are either personal access tokens or SSH keys that organization members have authorized for the organization. For more information, see [About authentication with SAML single sign-on](https://docs.github.com/enterprise-cloud@latest//articles/about-authentication-with-saml-single-sign-on).
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-saml-sso-authorizations-for-an-organization} - API method documentation
     */
    orgsListSamlSsoAuthorizations(req: operations.OrgsListSamlSsoAuthorizationsRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListSamlSsoAuthorizationsResponse>;
    /**
     * List security manager teams
     *
     * @remarks
     * Lists teams that are security managers for an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
     *
     * To use this endpoint, you must be an administrator or security manager for the organization, and you must use an access token with the `read:org` scope.
     *
     * GitHub Apps must have the `administration` organization read permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-security-manager-teams} - API method documentation
     */
    orgsListSecurityManagerTeams(req: operations.OrgsListSecurityManagerTeamsRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListSecurityManagerTeamsResponse>;
    /**
     * List deliveries for an organization webhook
     *
     * @remarks
     * Returns a list of webhook deliveries for a webhook configured in an organization.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-deliveries-for-an-organization-webhook} - API method documentation
     */
    orgsListWebhookDeliveries(req: operations.OrgsListWebhookDeliveriesRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListWebhookDeliveriesResponse>;
    /**
     * List organization webhooks
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-organization-webhooks} - API method documentation
     */
    orgsListWebhooks(req: operations.OrgsListWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListWebhooksResponse>;
    /**
     * Ping an organization webhook
     *
     * @remarks
     * This will trigger a [ping event](https://docs.github.com/enterprise-cloud@latest//webhooks/#ping-event) to be sent to the hook.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#ping-an-organization-webhook} - API method documentation
     */
    orgsPingWebhook(req: operations.OrgsPingWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsPingWebhookResponse>;
    /**
     * Redeliver a delivery for an organization webhook
     *
     * @remarks
     * Redeliver a delivery for a webhook configured in an organization.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#redeliver-a-delivery-for-an-organization-webhook} - API method documentation
     */
    orgsRedeliverWebhookDelivery(req: operations.OrgsRedeliverWebhookDeliveryRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRedeliverWebhookDeliveryResponse>;
    /**
     * Remove an organization member
     *
     * @remarks
     * Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#remove-an-organization-member} - API method documentation
     */
    orgsRemoveMember(req: operations.OrgsRemoveMemberRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRemoveMemberResponse>;
    /**
     * Remove organization membership for a user
     *
     * @remarks
     * In order to remove a user's membership with an organization, the authenticated user must be an organization owner.
     *
     * If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#remove-organization-membership-for-a-user} - API method documentation
     */
    orgsRemoveMembershipForUser(req: operations.OrgsRemoveMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRemoveMembershipForUserResponse>;
    /**
     * Remove outside collaborator from an organization
     *
     * @remarks
     * Removing a user from this list will remove them from all the organization's repositories.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#remove-outside-collaborator-from-an-organization} - API method documentation
     */
    orgsRemoveOutsideCollaborator(req: operations.OrgsRemoveOutsideCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRemoveOutsideCollaboratorResponse>;
    /**
     * Remove public organization membership for the authenticated user
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user} - API method documentation
     */
    orgsRemovePublicMembershipForAuthenticatedUser(req: operations.OrgsRemovePublicMembershipForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRemovePublicMembershipForAuthenticatedUserResponse>;
    /**
     * Remove a SAML SSO authorization for an organization
     *
     * @remarks
     * Listing and deleting credential authorizations is available to organizations with GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products).
     *
     * An authenticated organization owner with the `admin:org` scope can remove a credential authorization for an organization that uses SAML SSO. Once you remove someone's credential authorization, they will need to create a new personal access token or SSH key and authorize it for the organization they want to access.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#remove-a-saml-sso-authorization-for-an-organization} - API method documentation
     */
    orgsRemoveSamlSsoAuthorization(req: operations.OrgsRemoveSamlSsoAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRemoveSamlSsoAuthorizationResponse>;
    /**
     * Remove a security manager team
     *
     * @remarks
     * Removes the security manager role from a team for an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization) team from an organization."
     *
     * To use this endpoint, you must be an administrator for the organization, and you must use an access token with the `admin:org` scope.
     *
     * GitHub Apps must have the `administration` organization read-write permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#remove-a-security-manager-team} - API method documentation
     */
    orgsRemoveSecurityManagerTeam(req: operations.OrgsRemoveSecurityManagerTeamRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRemoveSecurityManagerTeamResponse>;
    /**
     * Set organization membership for a user
     *
     * @remarks
     * Only authenticated organization owners can add a member to the organization or update the member's role.
     *
     * *   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.
     *
     * *   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.
     *
     * **Rate limits**
     *
     * To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#set-organization-membership-for-a-user} - API method documentation
     */
    orgsSetMembershipForUser(req: operations.OrgsSetMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsSetMembershipForUserResponse>;
    /**
     * Set public organization membership for the authenticated user
     *
     * @remarks
     * The user can publicize their own membership. (A user cannot publicize the membership for another user.)
     *
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user} - API method documentation
     */
    orgsSetPublicMembershipForAuthenticatedUser(req: operations.OrgsSetPublicMembershipForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsSetPublicMembershipForAuthenticatedUserResponse>;
    /**
     * Unblock a user from an organization
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#unblock-a-user-from-an-organization} - API method documentation
     */
    orgsUnblockUser(req: operations.OrgsUnblockUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsUnblockUserResponse>;
    /**
     * Update an organization
     *
     * @remarks
     * **Parameter Deprecation Notice:** GitHub Enterprise Cloud will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).
     *
     * Enables an authenticated organization owner with the `admin:org` scope to update the organization's profile and member privileges.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#update-an-organization} - API method documentation
     */
    orgsUpdate(req: operations.OrgsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.OrgsUpdateResponse>;
    /**
     * Update a custom role
     *
     * @remarks
     * **Note**: This operation is in beta and subject to change.
     *
     * Updates a custom repository role that can be used by all repositories owned by the organization.
     *
     * To use this endpoint the authenticated user must be an administrator for the organization and must use an access token with `admin:org` scope.
     * GitHub Apps must have the `organization_custom_roles:write` organization permission to use this endpoint.
     *
     * For more information about custom repository roles, see "[About custom repository roles](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)."
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#update-a-custom-role} - API method documentation
     */
    orgsUpdateCustomRole(req: operations.OrgsUpdateCustomRoleRequest, config?: AxiosRequestConfig): Promise<operations.OrgsUpdateCustomRoleResponse>;
    /**
     * Update an organization membership for the authenticated user
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user} - API method documentation
     */
    orgsUpdateMembershipForAuthenticatedUser(req: operations.OrgsUpdateMembershipForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsUpdateMembershipForAuthenticatedUserResponse>;
    /**
     * Update an organization webhook
     *
     * @remarks
     * Updates a webhook configured in an organization. When you update a webhook, the `secret` will be overwritten. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for an organization](/rest/reference/orgs#update-a-webhook-configuration-for-an-organization)."
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#update-an-organization-webhook} - API method documentation
     */
    orgsUpdateWebhook(req: operations.OrgsUpdateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsUpdateWebhookResponse>;
    /**
     * Update a webhook configuration for an organization
     *
     * @remarks
     * Updates the webhook configuration for an organization. To update more information about the webhook, including the `active` state and `events`, use "[Update an organization webhook ](/rest/reference/orgs#update-an-organization-webhook)."
     *
     * Access tokens must have the `admin:org_hook` scope, and GitHub Apps must have the `organization_hooks:write` permission.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#update-a-webhook-configuration-for-an-organization} - API method documentation
     */
    orgsUpdateWebhookConfigForOrg(req: operations.OrgsUpdateWebhookConfigForOrgRequest, config?: AxiosRequestConfig): Promise<operations.OrgsUpdateWebhookConfigForOrgResponse>;
}
