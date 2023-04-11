import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Enterprise Administration
 */
export declare class EnterpriseAdmin {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get announcement banner for enterprise
     *
     * @remarks
     * Gets the announcement banner currently set for the enterprise.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/announcement-banners#get-announcement-banner-for-enterprise} - API method documentation
     */
    announcementBannersGetAnnouncementBannerForEnterprise(req: operations.AnnouncementBannersGetAnnouncementBannerForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.AnnouncementBannersGetAnnouncementBannerForEnterpriseResponse>;
    /**
     * Remove announcement banner from enterprise
     *
     * @remarks
     * Removes the announcement banner currently set for the enterprise.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/announcement-banners/enterprises#remove-announcement-banner-from-enterprise} - API method documentation
     */
    announcementBannersRemoveAnnouncementBannerForEnterprise(req: operations.AnnouncementBannersRemoveAnnouncementBannerForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.AnnouncementBannersRemoveAnnouncementBannerForEnterpriseResponse>;
    /**
     * Set announcement banner for enterprise
     *
     * @remarks
     * Sets the announcement banner to display for the enterprise.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/announcement-banners/enterprises#set-announcement-banner-for-enterprise} - API method documentation
     */
    announcementBannersSetAnnouncementBannerForEnterprise(req: operations.AnnouncementBannersSetAnnouncementBannerForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.AnnouncementBannersSetAnnouncementBannerForEnterpriseResponse>;
    /**
     * Add custom labels to a self-hosted runner for an enterprise
     *
     * @remarks
     * Add custom labels to a self-hosted runner configured in an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-an-enterprise} - API method documentation
     */
    enterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprise(req: operations.EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseResponse>;
    /**
     * Add organization access to a self-hosted runner group in an enterprise
     *
     * @remarks
     * Adds an organization to the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#add-organization-access-to-a-self-hosted-runner-group-in-an-enterprise} - API method documentation
     */
    enterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise(req: operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse>;
    /**
     * Add a self-hosted runner to a group for an enterprise
     *
     * @remarks
     * Adds a self-hosted runner to a runner group configured in an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise`
     * scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-enterprise} - API method documentation
     */
    enterpriseAdminAddSelfHostedRunnerToGroupForEnterprise(req: operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse>;
    /**
     * Create a registration token for an enterprise
     *
     * @remarks
     * Returns a token that you can pass to the `config` script. The token expires after one hour.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * #### Example using registration token
     *
     * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
     *
     * ```
     * ./config.sh --url https://github.com/enterprises/octo-enterprise --token TOKEN
     * ```
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#create-a-registration-token-for-an-enterprise} - API method documentation
     */
    enterpriseAdminCreateRegistrationTokenForEnterprise(req: operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse>;
    /**
     * Create a remove token for an enterprise
     *
     * @remarks
     * Returns a token that you can pass to the `config` script to remove a self-hosted runner from an enterprise. The token expires after one hour.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
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
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#create-a-remove-token-for-an-enterprise} - API method documentation
     */
    enterpriseAdminCreateRemoveTokenForEnterprise(req: operations.EnterpriseAdminCreateRemoveTokenForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateRemoveTokenForEnterpriseResponse>;
    /**
     * Create a self-hosted runner group for an enterprise
     *
     * @remarks
     * Creates a new self-hosted runner group for an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#create-self-hosted-runner-group-for-an-enterprise} - API method documentation
     */
    enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise(req: operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse>;
    /**
     * Delete a self-hosted runner from an enterprise
     *
     * @remarks
     * Forces the removal of a self-hosted runner from an enterprise. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#delete-self-hosted-runner-from-an-enterprise} - API method documentation
     */
    enterpriseAdminDeleteSelfHostedRunnerFromEnterprise(req: operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponse>;
    /**
     * Delete a self-hosted runner group from an enterprise
     *
     * @remarks
     * Deletes a self-hosted runner group for an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#delete-a-self-hosted-runner-group-from-an-enterprise} - API method documentation
     */
    enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise(req: operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponse>;
    /**
     * Disable a selected organization for GitHub Actions in an enterprise
     *
     * @remarks
     * Removes an organization from the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#disable-a-selected-organization-for-github-actions-in-an-enterprise} - API method documentation
     */
    enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise(req: operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse>;
    /**
     * Enable a selected organization for GitHub Actions in an enterprise
     *
     * @remarks
     * Adds an organization to the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#enable-a-selected-organization-for-github-actions-in-an-enterprise} - API method documentation
     */
    enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise(req: operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse>;
    /**
     * Get allowed actions and reusable workflows for an enterprise
     *
     * @remarks
     * Gets the selected actions and reusable workflows that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#get-allowed-actions-for-an-enterprise} - API method documentation
     */
    enterpriseAdminGetAllowedActionsEnterprise(req: operations.EnterpriseAdminGetAllowedActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetAllowedActionsEnterpriseResponse>;
    /**
     * Get the audit log for an enterprise
     *
     * @remarks
     * Gets the audit log for an enterprise. To use this endpoint, you must be an enterprise admin, and you must use an access token with the `read:audit_log` scope.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/enterprise-admin#get-the-audit-log-for-an-enterprise} - API method documentation
     */
    enterpriseAdminGetAuditLog(req: operations.EnterpriseAdminGetAuditLogRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetAuditLogResponse>;
    /**
     * List enterprise consumed licenses
     *
     * @remarks
     * Lists the license consumption information for all users, including those from connected servers, associated with an enterprise.
     * To use this endpoint, you must be an enterprise admin, and you must use an access
     * token with the `read:enterprise` scope.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/enterprise-admin#list-enterprise-consumed-licenses} - API method documentation
     */
    enterpriseAdminGetConsumedLicenses(req: operations.EnterpriseAdminGetConsumedLicensesRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetConsumedLicensesResponse>;
    /**
     * Get GitHub Actions permissions for an enterprise
     *
     * @remarks
     * Gets the GitHub Actions permissions policy for organizations and allowed actions and reusable workflows in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#get-github-actions-permissions-for-an-enterprise} - API method documentation
     */
    enterpriseAdminGetGithubActionsPermissionsEnterprise(req: operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse>;
    /**
     * Get a license sync status
     *
     * @remarks
     * Gets information about the status of a license sync job for an enterprise.
     * To use this endpoint, you must be an enterprise admin, and you must use an access
     * token with the `read:enterprise` scope.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/enterprise-admin#get-a-license-sync-status} - API method documentation
     */
    enterpriseAdminGetLicenseSyncStatus(req: operations.EnterpriseAdminGetLicenseSyncStatusRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetLicenseSyncStatusResponse>;
    /**
     * Get a self-hosted runner for an enterprise
     *
     * @remarks
     * Gets a specific self-hosted runner configured in an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#get-a-self-hosted-runner-for-an-enterprise} - API method documentation
     */
    enterpriseAdminGetSelfHostedRunnerForEnterprise(req: operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse>;
    /**
     * Get a self-hosted runner group for an enterprise
     *
     * @remarks
     * Gets a specific self-hosted runner group for an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#get-a-self-hosted-runner-group-for-an-enterprise} - API method documentation
     */
    enterpriseAdminGetSelfHostedRunnerGroupForEnterprise(req: operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse>;
    /**
     * Get GitHub Enterprise Server statistics
     *
     * @remarks
     * Returns aggregate usage metrics for your GitHub Enterprise Server 3.5+ instance for a specified time period up to 365 days.
     *
     * To use this endpoint, your GitHub Enterprise Server instance must be connected to GitHub Enterprise Cloud using GitHub Connect. You must enable Server Statistics, and for the API request provide your enterprise account name or organization name connected to the GitHub Enterprise Server. For more information, see "[Enabling Server Statistics for your enterprise](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)" in the GitHub Enterprise Server documentation.
     *
     * You'll need to use a personal access token:
     *   - If you connected your GitHub Enterprise Server to an enterprise account and enabled Server Statistics, you'll need a personal access token with the `read:enterprise` permission.
     *   - If you connected your GitHub Enterprise Server to an organization account and enabled Server Statistics, you'll need a personal access token with the `read:org` permission.
     *
     * For more information on creating a personal access token, see "[Creating a personal access token](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/enterprise-admin#get-github-enterprise-server-statistics} - API method documentation
     */
    enterpriseAdminGetServerStatistics(req: operations.EnterpriseAdminGetServerStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetServerStatisticsResponse>;
    /**
     * List labels for a self-hosted runner for an enterprise
     *
     * @remarks
     * Lists all labels for a self-hosted runner configured in an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#list-labels-for-a-self-hosted-runner-for-an-enterprise} - API method documentation
     */
    enterpriseAdminListLabelsForSelfHostedRunnerForEnterprise(req: operations.EnterpriseAdminListLabelsForSelfHostedRunnerForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListLabelsForSelfHostedRunnerForEnterpriseResponse>;
    /**
     * List organization access to a self-hosted runner group in an enterprise
     *
     * @remarks
     * Lists the organizations with access to a self-hosted runner group.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#list-organization-access-to-a-self-hosted-runner-group-in-a-enterprise} - API method documentation
     */
    enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise(req: operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse>;
    /**
     * List runner applications for an enterprise
     *
     * @remarks
     * Lists binaries for the runner application that you can download and run.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#list-runner-applications-for-an-enterprise} - API method documentation
     */
    enterpriseAdminListRunnerApplicationsForEnterprise(req: operations.EnterpriseAdminListRunnerApplicationsForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListRunnerApplicationsForEnterpriseResponse>;
    /**
     * List selected organizations enabled for GitHub Actions in an enterprise
     *
     * @remarks
     * Lists the organizations that are selected to have GitHub Actions enabled in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#list-selected-organizations-enabled-for-github-actions-in-an-enterprise} - API method documentation
     */
    enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise(req: operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse>;
    /**
     * List self-hosted runner groups for an enterprise
     *
     * @remarks
     * Lists all self-hosted runner groups for an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#list-self-hosted-runner-groups-for-an-enterprise} - API method documentation
     */
    enterpriseAdminListSelfHostedRunnerGroupsForEnterprise(req: operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse>;
    /**
     * List self-hosted runners for an enterprise
     *
     * @remarks
     * Lists all self-hosted runners configured for an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#list-self-hosted-runners-for-an-enterprise} - API method documentation
     */
    enterpriseAdminListSelfHostedRunnersForEnterprise(req: operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse>;
    /**
     * List self-hosted runners in a group for an enterprise
     *
     * @remarks
     * Lists the self-hosted runners that are in a specific enterprise group.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-enterprise} - API method documentation
     */
    enterpriseAdminListSelfHostedRunnersInGroupForEnterprise(req: operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse>;
    /**
     * Remove all custom labels from a self-hosted runner for an enterprise
     *
     * @remarks
     * Remove all custom labels from a self-hosted runner configured in an
     * enterprise. Returns the remaining read-only labels from the runner.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-an-enterprise} - API method documentation
     */
    enterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterprise(req: operations.EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseResponse>;
    /**
     * Remove a custom label from a self-hosted runner for an enterprise
     *
     * @remarks
     * Remove a custom label from a self-hosted runner configured
     * in an enterprise. Returns the remaining labels from the runner.
     *
     * This endpoint returns a `404 Not Found` status if the custom label is not
     * present on the runner.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-an-enterprise} - API method documentation
     */
    enterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterprise(req: operations.EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseResponse>;
    /**
     * Remove organization access to a self-hosted runner group in an enterprise
     *
     * @remarks
     * Removes an organization from the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#remove-organization-access-to-a-self-hosted-runner-group-in-an-enterprise} - API method documentation
     */
    enterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise(req: operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse>;
    /**
     * Remove a self-hosted runner from a group for an enterprise
     *
     * @remarks
     * Removes a self-hosted runner from a group configured in an enterprise. The runner is then returned to the default group.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-enterprise} - API method documentation
     */
    enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise(req: operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse>;
    /**
     * Set allowed actions and reusable workflows for an enterprise
     *
     * @remarks
     * Sets the actions and reusable workflows that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#set-allowed-actions-for-an-enterprise} - API method documentation
     */
    enterpriseAdminSetAllowedActionsEnterprise(req: operations.EnterpriseAdminSetAllowedActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetAllowedActionsEnterpriseResponse>;
    /**
     * Set custom labels for a self-hosted runner for an enterprise
     *
     * @remarks
     * Remove all previous custom labels and set the new custom labels for a specific
     * self-hosted runner configured in an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-an-enterprise} - API method documentation
     */
    enterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprise(req: operations.EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseResponse>;
    /**
     * Set GitHub Actions permissions for an enterprise
     *
     * @remarks
     * Sets the GitHub Actions permissions policy for organizations and allowed actions and reusable workflows in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#set-github-actions-permissions-for-an-enterprise} - API method documentation
     */
    enterpriseAdminSetGithubActionsPermissionsEnterprise(req: operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse>;
    /**
     * Set organization access for a self-hosted runner group in an enterprise
     *
     * @remarks
     * Replaces the list of organizations that have access to a self-hosted runner configured in an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#set-organization-access-to-a-self-hosted-runner-group-in-an-enterprise} - API method documentation
     */
    enterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise(req: operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse>;
    /**
     * Set selected organizations enabled for GitHub Actions in an enterprise
     *
     * @remarks
     * Replaces the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#set-selected-organizations-enabled-for-github-actions-in-an-enterprise} - API method documentation
     */
    enterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise(req: operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse>;
    /**
     * Set self-hosted runners in a group for an enterprise
     *
     * @remarks
     * Replaces the list of self-hosted runners that are part of an enterprise runner group.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-enterprise} - API method documentation
     */
    enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise(req: operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse>;
    /**
     * Update a self-hosted runner group for an enterprise
     *
     * @remarks
     * Updates the `name` and `visibility` of a self-hosted runner group in an enterprise.
     *
     * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#update-a-self-hosted-runner-group-for-an-enterprise} - API method documentation
     */
    enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise(req: operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse>;
    /**
     * Get code security and analysis features for an enterprise
     *
     * @remarks
     * Gets code security and analysis settings for the specified enterprise.
     * To use this endpoint, you must be an administrator of the enterprise, and you must use an access token with the `admin:enterprise` scope.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/enterprise-admin#get-code-security-analysis-features-for-an-enterprise} - API method documentation
     */
    secretScanningGetSecurityAnalysisSettingsForEnterprise(req: operations.SecretScanningGetSecurityAnalysisSettingsForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.SecretScanningGetSecurityAnalysisSettingsForEnterpriseResponse>;
    /**
     * Update code security and analysis features for an enterprise
     *
     * @remarks
     * Updates the settings for advanced security, Dependabot alerts, secret scanning, and push protection for new repositories in an enterprise.
     * To use this endpoint, you must be an administrator of the enterprise, and you must use an access token with the `admin:enterprise` scope.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/enterprise-admin#update-code-security-and-analysis-features-for-an-enterprise} - API method documentation
     */
    secretScanningPatchSecurityAnalysisSettingsForEnterprise(req: operations.SecretScanningPatchSecurityAnalysisSettingsForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.SecretScanningPatchSecurityAnalysisSettingsForEnterpriseResponse>;
    /**
     * Enable or disable a security feature
     *
     * @remarks
     * Enables or disables the specified security feature for all repositories in an enterprise.
     *
     * To use this endpoint, you must be an administrator of the enterprise, and you must use an access token with the `admin:enterprise` scope.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/enterprise-admin#enable-or-disable-a-security-feature} - API method documentation
     */
    secretScanningPostSecurityProductEnablementForEnterprise(req: operations.SecretScanningPostSecurityProductEnablementForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.SecretScanningPostSecurityProductEnablementForEnterpriseResponse>;
}
