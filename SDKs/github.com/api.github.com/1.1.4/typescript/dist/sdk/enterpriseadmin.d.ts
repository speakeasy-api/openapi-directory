import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class EnterpriseAdmin {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * enterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise - Add organization access to a self-hosted runner group in an enterprise
     *
     * Adds an organization to the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#add-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
    **/
    enterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise(req: operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse>;
    /**
     * enterpriseAdminAddSelfHostedRunnerToGroupForEnterprise - Add a self-hosted runner to a group for an enterprise
     *
     * Adds a self-hosted runner to a runner group configured in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise`
     * scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#add-a-self-hosted-runner-to-a-group-for-an-enterprise - API method documentation
    **/
    enterpriseAdminAddSelfHostedRunnerToGroupForEnterprise(req: operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse>;
    /**
     * enterpriseAdminCreateRegistrationTokenForEnterprise - Create a registration token for an enterprise
     *
     * Returns a token that you can pass to the `config` script. The token expires after one hour.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * #### Example using registration token
     *
     * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
     *
     * ```
     * ./config.sh --url https://github.com/enterprises/octo-enterprise --token TOKEN
     * ```
     *
     * https://docs.github.com/rest/reference/enterprise-admin#create-a-registration-token-for-an-enterprise - API method documentation
    **/
    enterpriseAdminCreateRegistrationTokenForEnterprise(req: operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse>;
    /**
     * enterpriseAdminCreateRemoveTokenForEnterprise - Create a remove token for an enterprise
     *
     * Returns a token that you can pass to the `config` script to remove a self-hosted runner from an enterprise. The token expires after one hour.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * #### Example using remove token
     *
     * To remove your self-hosted runner from an enterprise, replace `TOKEN` with the remove token provided by this
     * endpoint.
     *
     * ```
     * ./config.sh remove --token TOKEN
     * ```
     *
     * https://docs.github.com/rest/reference/enterprise-admin#create-a-remove-token-for-an-enterprise - API method documentation
    **/
    enterpriseAdminCreateRemoveTokenForEnterprise(req: operations.EnterpriseAdminCreateRemoveTokenForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateRemoveTokenForEnterpriseResponse>;
    /**
     * enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise - Create a self-hosted runner group for an enterprise
     *
     * Creates a new self-hosted runner group for an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#create-self-hosted-runner-group-for-an-enterprise - API method documentation
    **/
    enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise(req: operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse>;
    /**
     * enterpriseAdminDeleteScimGroupFromEnterprise - Delete a SCIM group from an enterprise
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#delete-a-scim-group-from-an-enterprise - API method documentation
    **/
    enterpriseAdminDeleteScimGroupFromEnterprise(req: operations.EnterpriseAdminDeleteScimGroupFromEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteScimGroupFromEnterpriseResponse>;
    /**
     * enterpriseAdminDeleteSelfHostedRunnerFromEnterprise - Delete a self-hosted runner from an enterprise
     *
     * Forces the removal of a self-hosted runner from an enterprise. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#delete-self-hosted-runner-from-an-enterprise - API method documentation
    **/
    enterpriseAdminDeleteSelfHostedRunnerFromEnterprise(req: operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponse>;
    /**
     * enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise - Delete a self-hosted runner group from an enterprise
     *
     * Deletes a self-hosted runner group for an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#delete-a-self-hosted-runner-group-from-an-enterprise - API method documentation
    **/
    enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise(req: operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponse>;
    /**
     * enterpriseAdminDeleteUserFromEnterprise - Delete a SCIM user from an enterprise
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#delete-a-scim-user-from-an-enterprise - API method documentation
    **/
    enterpriseAdminDeleteUserFromEnterprise(req: operations.EnterpriseAdminDeleteUserFromEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteUserFromEnterpriseResponse>;
    /**
     * enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise - Disable a selected organization for GitHub Actions in an enterprise
     *
     * Removes an organization from the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#disable-a-selected-organization-for-github-actions-in-an-enterprise - API method documentation
    **/
    enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise(req: operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse>;
    /**
     * enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise - Enable a selected organization for GitHub Actions in an enterprise
     *
     * Adds an organization to the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#enable-a-selected-organization-for-github-actions-in-an-enterprise - API method documentation
    **/
    enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise(req: operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse>;
    /**
     * enterpriseAdminGetAllowedActionsEnterprise - Get allowed actions for an enterprise
     *
     * Gets the selected actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#get-allowed-actions-for-an-enterprise - API method documentation
    **/
    enterpriseAdminGetAllowedActionsEnterprise(req: operations.EnterpriseAdminGetAllowedActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetAllowedActionsEnterpriseResponse>;
    /**
     * enterpriseAdminGetGithubActionsPermissionsEnterprise - Get GitHub Actions permissions for an enterprise
     *
     * Gets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#get-github-actions-permissions-for-an-enterprise - API method documentation
    **/
    enterpriseAdminGetGithubActionsPermissionsEnterprise(req: operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse>;
    /**
     * enterpriseAdminGetProvisioningInformationForEnterpriseGroup - Get SCIM provisioning information for an enterprise group
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-group - API method documentation
    **/
    enterpriseAdminGetProvisioningInformationForEnterpriseGroup(req: operations.EnterpriseAdminGetProvisioningInformationForEnterpriseGroupRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse>;
    /**
     * enterpriseAdminGetProvisioningInformationForEnterpriseUser - Get SCIM provisioning information for an enterprise user
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-user - API method documentation
    **/
    enterpriseAdminGetProvisioningInformationForEnterpriseUser(req: operations.EnterpriseAdminGetProvisioningInformationForEnterpriseUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse>;
    /**
     * enterpriseAdminGetSelfHostedRunnerForEnterprise - Get a self-hosted runner for an enterprise
     *
     * Gets a specific self-hosted runner configured in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#get-a-self-hosted-runner-for-an-enterprise - API method documentation
    **/
    enterpriseAdminGetSelfHostedRunnerForEnterprise(req: operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse>;
    /**
     * enterpriseAdminGetSelfHostedRunnerGroupForEnterprise - Get a self-hosted runner group for an enterprise
     *
     * Gets a specific self-hosted runner group for an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#get-a-self-hosted-runner-group-for-an-enterprise - API method documentation
    **/
    enterpriseAdminGetSelfHostedRunnerGroupForEnterprise(req: operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse>;
    /**
     * enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise - List organization access to a self-hosted runner group in an enterprise
     *
     * Lists the organizations with access to a self-hosted runner group.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-organization-access-to-a-self-hosted-runner-group-in-a-enterprise - API method documentation
    **/
    enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise(req: operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse>;
    /**
     * enterpriseAdminListProvisionedGroupsEnterprise - List provisioned SCIM groups for an enterprise
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-provisioned-scim-groups-for-an-enterprise - API method documentation
    **/
    enterpriseAdminListProvisionedGroupsEnterprise(req: operations.EnterpriseAdminListProvisionedGroupsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListProvisionedGroupsEnterpriseResponse>;
    /**
     * enterpriseAdminListProvisionedIdentitiesEnterprise - List SCIM provisioned identities for an enterprise
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * Retrieves a paginated list of all provisioned enterprise members, including pending invitations.
     *
     * When a user with a SAML-provisioned external identity leaves (or is removed from) an enterprise, the account's metadata is immediately removed. However, the returned list of user accounts might not always match the organization or enterprise member list you see on GitHub. This can happen in certain cases where an external identity associated with an organization will not match an organization member:
     *   - When a user with a SCIM-provisioned external identity is removed from an enterprise, the account's metadata is preserved to allow the user to re-join the organization in the future.
     *   - When inviting a user to join an organization, you can expect to see their external identity in the results before they accept the invitation, or if the invitation is cancelled (or never accepted).
     *   - When a user is invited over SCIM, an external identity is created that matches with the invitee's email address. However, this identity is only linked to a user account when the user accepts the invitation by going through SAML SSO.
     *
     * The returned list of external identities can include an entry for a `null` user. These are unlinked SAML identities that are created when a user goes through the following Single Sign-On (SSO) process but does not sign in to their GitHub account after completing SSO:
     *
     * 1. The user is granted access by the IdP and is not a member of the GitHub enterprise.
     *
     * 1. The user attempts to access the GitHub enterprise and initiates the SAML SSO process, and is not currently signed in to their GitHub account.
     *
     * 1. After successfully authenticating with the SAML SSO IdP, the `null` external identity entry is created and the user is prompted to sign in to their GitHub account:
     *    - If the user signs in, their GitHub account is linked to this entry.
     *    - If the user does not sign in (or does not create a new account when prompted), they are not added to the GitHub enterprise, and the external identity `null` entry remains in place.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-scim-provisioned-identities-for-an-enterprise - API method documentation
    **/
    enterpriseAdminListProvisionedIdentitiesEnterprise(req: operations.EnterpriseAdminListProvisionedIdentitiesEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse>;
    /**
     * enterpriseAdminListRunnerApplicationsForEnterprise - List runner applications for an enterprise
     *
     * Lists binaries for the runner application that you can download and run.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-runner-applications-for-an-enterprise - API method documentation
    **/
    enterpriseAdminListRunnerApplicationsForEnterprise(req: operations.EnterpriseAdminListRunnerApplicationsForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListRunnerApplicationsForEnterpriseResponse>;
    /**
     * enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise - List selected organizations enabled for GitHub Actions in an enterprise
     *
     * Lists the organizations that are selected to have GitHub Actions enabled in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-selected-organizations-enabled-for-github-actions-in-an-enterprise - API method documentation
    **/
    enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise(req: operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse>;
    /**
     * enterpriseAdminListSelfHostedRunnerGroupsForEnterprise - List self-hosted runner groups for an enterprise
     *
     * Lists all self-hosted runner groups for an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-self-hosted-runner-groups-for-an-enterprise - API method documentation
    **/
    enterpriseAdminListSelfHostedRunnerGroupsForEnterprise(req: operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse>;
    /**
     * enterpriseAdminListSelfHostedRunnersForEnterprise - List self-hosted runners for an enterprise
     *
     * Lists all self-hosted runners configured for an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-self-hosted-runners-for-an-enterprise - API method documentation
    **/
    enterpriseAdminListSelfHostedRunnersForEnterprise(req: operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse>;
    /**
     * enterpriseAdminListSelfHostedRunnersInGroupForEnterprise - List self-hosted runners in a group for an enterprise
     *
     * Lists the self-hosted runners that are in a specific enterprise group.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-self-hosted-runners-in-a-group-for-an-enterprise - API method documentation
    **/
    enterpriseAdminListSelfHostedRunnersInGroupForEnterprise(req: operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse>;
    /**
     * enterpriseAdminProvisionAndInviteEnterpriseGroup - Provision a SCIM enterprise group and invite users
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * Provision an enterprise group, and invite users to the group. This sends invitation emails to the email address of the invited users to join the GitHub organization that the SCIM group corresponds to.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#provision-a-scim-enterprise-group-and-invite-users - API method documentation
    **/
    enterpriseAdminProvisionAndInviteEnterpriseGroup(req: operations.EnterpriseAdminProvisionAndInviteEnterpriseGroupRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminProvisionAndInviteEnterpriseGroupResponse>;
    /**
     * enterpriseAdminProvisionAndInviteEnterpriseUser - Provision and invite a SCIM enterprise user
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * Provision enterprise membership for a user, and send organization invitation emails to the email address.
     *
     * You can optionally include the groups a user will be invited to join. If you do not provide a list of `groups`, the user is provisioned for the enterprise, but no organization invitation emails will be sent.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#provision-and-invite-a-scim-enterprise-user - API method documentation
    **/
    enterpriseAdminProvisionAndInviteEnterpriseUser(req: operations.EnterpriseAdminProvisionAndInviteEnterpriseUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminProvisionAndInviteEnterpriseUserResponse>;
    /**
     * enterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise - Remove organization access to a self-hosted runner group in an enterprise
     *
     * Removes an organization from the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#remove-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
    **/
    enterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise(req: operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse>;
    /**
     * enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise - Remove a self-hosted runner from a group for an enterprise
     *
     * Removes a self-hosted runner from a group configured in an enterprise. The runner is then returned to the default group.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#remove-a-self-hosted-runner-from-a-group-for-an-enterprise - API method documentation
    **/
    enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise(req: operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse>;
    /**
     * enterpriseAdminSetAllowedActionsEnterprise - Set allowed actions for an enterprise
     *
     * Sets the actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#set-allowed-actions-for-an-enterprise - API method documentation
    **/
    enterpriseAdminSetAllowedActionsEnterprise(req: operations.EnterpriseAdminSetAllowedActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetAllowedActionsEnterpriseResponse>;
    /**
     * enterpriseAdminSetGithubActionsPermissionsEnterprise - Set GitHub Actions permissions for an enterprise
     *
     * Sets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#set-github-actions-permissions-for-an-enterprise - API method documentation
    **/
    enterpriseAdminSetGithubActionsPermissionsEnterprise(req: operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse>;
    /**
     * enterpriseAdminSetInformationForProvisionedEnterpriseGroup - Set SCIM information for a provisioned enterprise group
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * Replaces an existing provisioned group’s information. You must provide all the information required for the group as if you were provisioning it for the first time. Any existing group information that you don't provide will be removed, including group membership. If you want to only update a specific attribute, use the [Update an attribute for a SCIM enterprise group](#update-an-attribute-for-a-scim-enterprise-group) endpoint instead.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-group - API method documentation
    **/
    enterpriseAdminSetInformationForProvisionedEnterpriseGroup(req: operations.EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse>;
    /**
     * enterpriseAdminSetInformationForProvisionedEnterpriseUser - Set SCIM information for a provisioned enterprise user
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * Replaces an existing provisioned user's information. You must provide all the information required for the user as if you were provisioning them for the first time. Any existing user information that you don't provide will be removed. If you want to only update a specific attribute, use the [Update an attribute for a SCIM user](#update-an-attribute-for-an-enterprise-scim-user) endpoint instead.
     *
     * You must at least provide the required values for the user: `userName`, `name`, and `emails`.
     *
     * **Warning:** Setting `active: false` removes the user from the enterprise, deletes the external identity, and deletes the associated `{scim_user_id}`.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-user - API method documentation
    **/
    enterpriseAdminSetInformationForProvisionedEnterpriseUser(req: operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse>;
    /**
     * enterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise - Set organization access for a self-hosted runner group in an enterprise
     *
     * Replaces the list of organizations that have access to a self-hosted runner configured in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#set-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
    **/
    enterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise(req: operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse>;
    /**
     * enterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise - Set selected organizations enabled for GitHub Actions in an enterprise
     *
     * Replaces the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#set-selected-organizations-enabled-for-github-actions-in-an-enterprise - API method documentation
    **/
    enterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise(req: operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse>;
    /**
     * enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise - Set self-hosted runners in a group for an enterprise
     *
     * Replaces the list of self-hosted runners that are part of an enterprise runner group.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#set-self-hosted-runners-in-a-group-for-an-enterprise - API method documentation
    **/
    enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise(req: operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse>;
    /**
     * enterpriseAdminUpdateAttributeForEnterpriseGroup - Update an attribute for a SCIM enterprise group
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * Allows you to change a provisioned group’s individual attributes. To change a group’s values, you must provide a specific Operations JSON format that contains at least one of the add, remove, or replace operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).
     *
     * https://docs.github.com/rest/reference/enterprise-admin#update-an-attribute-for-a-scim-enterprise-group - API method documentation
    **/
    enterpriseAdminUpdateAttributeForEnterpriseGroup(req: operations.EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse>;
    /**
     * enterpriseAdminUpdateAttributeForEnterpriseUser - Update an attribute for a SCIM enterprise user
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * Allows you to change a provisioned user's individual attributes. To change a user's values, you must provide a specific `Operations` JSON format that contains at least one of the `add`, `remove`, or `replace` operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).
     *
     * **Note:** Complicated SCIM `path` selectors that include filters are not supported. For example, a `path` selector defined as `"path": "emails[type eq \"work\"]"` will not work.
     *
     * **Warning:** If you set `active:false` using the `replace` operation (as shown in the JSON example below), it removes the user from the enterprise, deletes the external identity, and deletes the associated `:scim_user_id`.
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
     * https://docs.github.com/rest/reference/enterprise-admin#update-an-attribute-for-a-scim-enterprise-user - API method documentation
    **/
    enterpriseAdminUpdateAttributeForEnterpriseUser(req: operations.EnterpriseAdminUpdateAttributeForEnterpriseUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateAttributeForEnterpriseUserResponse>;
    /**
     * enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise - Update a self-hosted runner group for an enterprise
     *
     * Updates the `name` and `visibility` of a self-hosted runner group in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#update-a-self-hosted-runner-group-for-an-enterprise - API method documentation
    **/
    enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise(req: operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse>;
}
