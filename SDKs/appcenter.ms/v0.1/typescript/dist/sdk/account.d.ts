import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Account {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    usersGetUserMetadata(config?: AxiosRequestConfig): Promise<operations.UsersGetUserMetadataResponse>;
    /**
     * Delete the App Api Token object with the specific ID
     */
    appApiTokensDelete(req: operations.AppApiTokensDeleteRequest, security: operations.AppApiTokensDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AppApiTokensDeleteResponse>;
    /**
     * Returns App API tokens for the app
     */
    appApiTokensList(req: operations.AppApiTokensListRequest, security: operations.AppApiTokensListSecurity, config?: AxiosRequestConfig): Promise<operations.AppApiTokensListResponse>;
    /**
     * Creates a new App API token
     */
    appApiTokensNew(req: operations.AppApiTokensNewRequest, security: operations.AppApiTokensNewSecurity, config?: AxiosRequestConfig): Promise<operations.AppApiTokensNewResponse>;
    /**
     * Accepts a pending invitation for the specified user
     */
    appInvitationsAccept(req: operations.AppInvitationsAcceptRequest, security: operations.AppInvitationsAcceptSecurity, config?: AxiosRequestConfig): Promise<operations.AppInvitationsAcceptResponse>;
    /**
     * Invites a new or existing user to an app
     */
    appInvitationsCreate(req: operations.AppInvitationsCreateRequest, security: operations.AppInvitationsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AppInvitationsCreateResponse>;
    /**
     * Invites a new or existing user to an app
     */
    appInvitationsCreateByEmail(req: operations.AppInvitationsCreateByEmailRequest, security: operations.AppInvitationsCreateByEmailSecurity, config?: AxiosRequestConfig): Promise<operations.AppInvitationsCreateByEmailResponse>;
    /**
     * Removes a user's invitation to an app
     */
    appInvitationsDelete(req: operations.AppInvitationsDeleteRequest, security: operations.AppInvitationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AppInvitationsDeleteResponse>;
    /**
     * Gets the pending invitations for the app
     */
    appInvitationsList(req: operations.AppInvitationsListRequest, security: operations.AppInvitationsListSecurity, config?: AxiosRequestConfig): Promise<operations.AppInvitationsListResponse>;
    /**
     * Rejects a pending invitation for the specified user
     */
    appInvitationsReject(req: operations.AppInvitationsRejectRequest, security: operations.AppInvitationsRejectSecurity, config?: AxiosRequestConfig): Promise<operations.AppInvitationsRejectResponse>;
    /**
     * Update pending invitation permission
     */
    appInvitationsUpdatePermissions(req: operations.AppInvitationsUpdatePermissionsRequest, security: operations.AppInvitationsUpdatePermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.AppInvitationsUpdatePermissionsResponse>;
    /**
     * Creates a new app and returns it to the caller
     */
    appsCreate(req: operations.AppsCreateRequestBody, security: operations.AppsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AppsCreateResponse>;
    /**
     * Creates a new app for the organization and returns it to the caller
     */
    appsCreateForOrg(req: operations.AppsCreateForOrgRequest, security: operations.AppsCreateForOrgSecurity, config?: AxiosRequestConfig): Promise<operations.AppsCreateForOrgResponse>;
    /**
     * Delete an app
     */
    appsDelete(req: operations.AppsDeleteRequest, security: operations.AppsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AppsDeleteResponse>;
    /**
     * Deletes the uploaded app avatar
     */
    appsDeleteAvatar(req: operations.AppsDeleteAvatarRequest, security: operations.AppsDeleteAvatarSecurity, config?: AxiosRequestConfig): Promise<operations.AppsDeleteAvatarResponse>;
    /**
     * Return a specific app with the given app name which belongs to the given owner.
     */
    appsGet(req: operations.AppsGetRequest, security: operations.AppsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AppsGetResponse>;
    /**
     * Get a user apps information from an organization by name
     */
    appsGetForOrgUser(req: operations.AppsGetForOrgUserRequest, security: operations.AppsGetForOrgUserSecurity, config?: AxiosRequestConfig): Promise<operations.AppsGetForOrgUserResponse>;
    /**
     * Returns the details of all teams that have access to the app.
     */
    appsGetTeams(req: operations.AppsGetTeamsRequest, security: operations.AppsGetTeamsSecurity, config?: AxiosRequestConfig): Promise<operations.AppsGetTeamsResponse>;
    /**
     * Returns a list of apps
     */
    appsList(req: operations.AppsListRequest, security: operations.AppsListSecurity, config?: AxiosRequestConfig): Promise<operations.AppsListResponse>;
    /**
     * Returns a list of apps for the organization
     */
    appsListForOrg(req: operations.AppsListForOrgRequest, security: operations.AppsListForOrgSecurity, config?: AxiosRequestConfig): Promise<operations.AppsListForOrgResponse>;
    /**
     * Returns the testers associated with the app specified with the given app name which belongs to the given owner.
     */
    appsListTesters(req: operations.AppsListTestersRequest, security: operations.AppsListTestersSecurity, config?: AxiosRequestConfig): Promise<operations.AppsListTestersResponse>;
    /**
     * Removes the user from the app
     */
    appsRemoveUser(req: operations.AppsRemoveUserRequest, security: operations.AppsRemoveUserSecurity, config?: AxiosRequestConfig): Promise<operations.AppsRemoveUserResponse>;
    /**
     * Transfers ownership of an app to a different user or organization
     */
    appsTransferOwnershipJson(req: operations.AppsTransferOwnershipJsonRequest, security: operations.AppsTransferOwnershipJsonSecurity, config?: AxiosRequestConfig): Promise<operations.AppsTransferOwnershipJsonResponse>;
    /**
     * Transfers ownership of an app to a different user or organization
     */
    appsTransferOwnershipRaw(req: operations.AppsTransferOwnershipRawRequest, security: operations.AppsTransferOwnershipRawSecurity, config?: AxiosRequestConfig): Promise<operations.AppsTransferOwnershipRawResponse>;
    /**
     * Transfers ownership of an app to a new organization
     */
    appsTransferToOrg(req: operations.AppsTransferToOrgRequest, security: operations.AppsTransferToOrgSecurity, config?: AxiosRequestConfig): Promise<operations.AppsTransferToOrgResponse>;
    /**
     * Partially updates a single app
     */
    appsUpdate(req: operations.AppsUpdateRequest, security: operations.AppsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AppsUpdateResponse>;
    /**
     * Sets the app avatar
     */
    appsUpdateAvatar(req: operations.AppsUpdateAvatarRequest, security: operations.AppsUpdateAvatarSecurity, config?: AxiosRequestConfig): Promise<operations.AppsUpdateAvatarResponse>;
    /**
     * Update user permission for the app
     */
    appsUpdateUserPermissions(req: operations.AppsUpdateUserPermissionsRequest, security: operations.AppsUpdateUserPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.AppsUpdateUserPermissionsResponse>;
    /**
     * Delete the azure subscriptions for the app
     */
    azureSubscriptionDeleteForApp(req: operations.AzureSubscriptionDeleteForAppRequest, security: operations.AzureSubscriptionDeleteForAppSecurity, config?: AxiosRequestConfig): Promise<operations.AzureSubscriptionDeleteForAppResponse>;
    /**
     * Link azure subscription to an app
     */
    azureSubscriptionLinkForApp(req: operations.AzureSubscriptionLinkForAppRequest, security: operations.AzureSubscriptionLinkForAppSecurity, config?: AxiosRequestConfig): Promise<operations.AzureSubscriptionLinkForAppResponse>;
    /**
     * Returns a list of azure subscriptions for the app
     */
    azureSubscriptionListForApp(req: operations.AzureSubscriptionListForAppRequest, security: operations.AzureSubscriptionListForAppSecurity, config?: AxiosRequestConfig): Promise<operations.AzureSubscriptionListForAppResponse>;
    /**
     * Returns a list of azure subscriptions for the organization
     */
    azureSubscriptionListForOrg(req: operations.AzureSubscriptionListForOrgRequest, security: operations.AzureSubscriptionListForOrgSecurity, config?: AxiosRequestConfig): Promise<operations.AzureSubscriptionListForOrgResponse>;
    /**
     * Returns a list of azure subscriptions for the user
     */
    azureSubscriptionListForUser(config?: AxiosRequestConfig): Promise<operations.AzureSubscriptionListForUserResponse>;
    /**
     * Accepts all pending invitations to distribution groups for the specified user
     */
    distributionGroupInvitationsAcceptAll(req: Record<string, any>, security: operations.DistributionGroupInvitationsAcceptAllSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupInvitationsAcceptAllResponse>;
    /**
     * Add apps to distribution group in an org
     */
    distributionGroupsAddApps(req: operations.DistributionGroupsAddAppsRequest, security: operations.DistributionGroupsAddAppsSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsAddAppsResponse>;
    /**
     * Adds the members to the specified distribution group
     */
    distributionGroupsAddUser(req: operations.DistributionGroupsAddUserRequest, security: operations.DistributionGroupsAddUserSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsAddUserResponse>;
    /**
     * Accepts an array of user email addresses to get added to the specified group
     */
    distributionGroupsAddUsersForOrg(req: operations.DistributionGroupsAddUsersForOrgRequest, security: operations.DistributionGroupsAddUsersForOrgSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsAddUsersForOrgResponse>;
    /**
     * Delete apps from distribution group in an org
     */
    distributionGroupsBulkDeleteApps(req: operations.DistributionGroupsBulkDeleteAppsRequest, security: operations.DistributionGroupsBulkDeleteAppsSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsBulkDeleteAppsResponse>;
    /**
     * Delete testers from distribution group in an org
     */
    distributionGroupsBulkDeleteUsers(req: operations.DistributionGroupsBulkDeleteUsersRequest, security: operations.DistributionGroupsBulkDeleteUsersSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsBulkDeleteUsersResponse>;
    /**
     * Creates a new distribution group and returns it to the caller
     */
    distributionGroupsCreate(req: operations.DistributionGroupsCreateRequest, security: operations.DistributionGroupsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsCreateResponse>;
    /**
     * Creates a disribution goup which can be shared across apps under an organization
     */
    distributionGroupsCreateForOrg(req: operations.DistributionGroupsCreateForOrgRequest, security: operations.DistributionGroupsCreateForOrgSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsCreateForOrgResponse>;
    /**
     * Deletes a distribution group
     */
    distributionGroupsDelete(req: operations.DistributionGroupsDeleteRequest, security: operations.DistributionGroupsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsDeleteResponse>;
    /**
     * Deletes a single distribution group from an org with a given distribution group name
     */
    distributionGroupsDeleteForOrg(req: operations.DistributionGroupsDeleteForOrgRequest, security: operations.DistributionGroupsDeleteForOrgSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsDeleteForOrgResponse>;
    /**
     * Returns a list of distribution groups with details for an organization
     */
    distributionGroupsDetailsForOrg(req: operations.DistributionGroupsDetailsForOrgRequest, security: operations.DistributionGroupsDetailsForOrgSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsDetailsForOrgResponse>;
    /**
     * Returns a single distribution group for a given distribution group name
     */
    distributionGroupsGet(req: operations.DistributionGroupsGetRequest, security: operations.DistributionGroupsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsGetResponse>;
    /**
     * Get apps from a distribution group in an org
     */
    distributionGroupsGetApps(req: operations.DistributionGroupsGetAppsRequest, security: operations.DistributionGroupsGetAppsSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsGetAppsResponse>;
    /**
     * Returns a single distribution group in org for a given distribution group name
     */
    distributionGroupsGetForOrg(req: operations.DistributionGroupsGetForOrgRequest, security: operations.DistributionGroupsGetForOrgSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsGetForOrgResponse>;
    /**
     * Returns a list of distribution groups in the app specified
     */
    distributionGroupsList(req: operations.DistributionGroupsListRequest, security: operations.DistributionGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsListResponse>;
    /**
     * Returns a unique list of users including the whole organization members plus testers in any shared group of that org
     */
    distributionGroupsListAllTestersForOrg(req: operations.DistributionGroupsListAllTestersForOrgRequest, security: operations.DistributionGroupsListAllTestersForOrgSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsListAllTestersForOrgResponse>;
    /**
     * Returns a list of distribution groups in the org specified
     */
    distributionGroupsListForOrg(req: operations.DistributionGroupsListForOrgRequest, security: operations.DistributionGroupsListForOrgSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsListForOrgResponse>;
    /**
     * Returns a list of member details in the distribution group specified
     */
    distributionGroupsListUsers(req: operations.DistributionGroupsListUsersRequest, security: operations.DistributionGroupsListUsersSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsListUsersResponse>;
    /**
     * Returns a list of member in the distribution group specified
     */
    distributionGroupsListUsersForOrg(req: operations.DistributionGroupsListUsersForOrgRequest, security: operations.DistributionGroupsListUsersForOrgSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsListUsersForOrgResponse>;
    /**
     * Update one given distribution group name in an org
     */
    distributionGroupsPatchForOrg(req: operations.DistributionGroupsPatchForOrgRequest, security: operations.DistributionGroupsPatchForOrgSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsPatchForOrgResponse>;
    /**
     * Remove the users from the distribution group
     */
    distributionGroupsRemoveUser(req: operations.DistributionGroupsRemoveUserRequest, security: operations.DistributionGroupsRemoveUserSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsRemoveUserResponse>;
    /**
     * Resend distribution group app invite notification to previously invited testers
     */
    distributionGroupsResendInvite(req: operations.DistributionGroupsResendInviteRequest, security: operations.DistributionGroupsResendInviteSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsResendInviteResponse>;
    /**
     * Resend shared distribution group invite notification to previously invited testers
     */
    distributionGroupsResendSharedInvite(req: operations.DistributionGroupsResendSharedInviteRequest, security: operations.DistributionGroupsResendSharedInviteSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsResendSharedInviteResponse>;
    /**
     * Updates the attributes of distribution group
     */
    distributionGroupsUpdate(req: operations.DistributionGroupsUpdateRequest, security: operations.DistributionGroupsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DistributionGroupsUpdateResponse>;
    /**
     * Returns all invitations sent by the caller
     */
    invitationsSent(config?: AxiosRequestConfig): Promise<operations.InvitationsSentResponse>;
    /**
     * Removes a user's invitation to an organization
     */
    orgInvitations(req: operations.OrgInvitationsRequest, security: operations.OrgInvitationsSecurity, config?: AxiosRequestConfig): Promise<operations.OrgInvitationsResponse>;
    /**
     * Accepts a pending organization invitation for the specified user
     */
    orgInvitationsAccept(req: operations.OrgInvitationsAcceptRequest, security: operations.OrgInvitationsAcceptSecurity, config?: AxiosRequestConfig): Promise<operations.OrgInvitationsAcceptResponse>;
    /**
     * Invites a new or existing user to an organization
     */
    orgInvitationsCreate(req: operations.OrgInvitationsCreateRequest, security: operations.OrgInvitationsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.OrgInvitationsCreateResponse>;
    /**
     * Removes a user's invitation to an organization
     */
    orgInvitationsDelete(req: operations.OrgInvitationsDeleteRequest, security: operations.OrgInvitationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.OrgInvitationsDeleteResponse>;
    /**
     * Gets the pending invitations for the organization
     */
    orgInvitationsListPending(req: operations.OrgInvitationsListPendingRequest, security: operations.OrgInvitationsListPendingSecurity, config?: AxiosRequestConfig): Promise<operations.OrgInvitationsListPendingResponse>;
    /**
     * Rejects a pending organization invitation
     */
    orgInvitationsReject(req: operations.OrgInvitationsRejectRequest, security: operations.OrgInvitationsRejectSecurity, config?: AxiosRequestConfig): Promise<operations.OrgInvitationsRejectResponse>;
    /**
     * Cancels an existing organization invitation for the user and sends a new one
     */
    orgInvitationsSendNewInvitation(req: operations.OrgInvitationsSendNewInvitationRequest, security: operations.OrgInvitationsSendNewInvitationSecurity, config?: AxiosRequestConfig): Promise<operations.OrgInvitationsSendNewInvitationResponse>;
    /**
     * Allows the role of an invited user to be changed
     */
    orgInvitationsUpdate(req: operations.OrgInvitationsUpdateRequest, security: operations.OrgInvitationsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.OrgInvitationsUpdateResponse>;
    /**
     * Deletes the uploaded organization avatar
     */
    organizationDeleteAvatar(req: operations.OrganizationDeleteAvatarRequest, security: operations.OrganizationDeleteAvatarSecurity, config?: AxiosRequestConfig): Promise<operations.OrganizationDeleteAvatarResponse>;
    /**
     * Sets the organization avatar
     */
    organizationUpdateAvatar(req: operations.OrganizationUpdateAvatarRequest, security: operations.OrganizationUpdateAvatarSecurity, config?: AxiosRequestConfig): Promise<operations.OrganizationUpdateAvatarResponse>;
    /**
     * Creates a new organization and returns it to the caller
     */
    organizationsCreateOrUpdate(req: operations.OrganizationsCreateOrUpdateRequestBody, security: operations.OrganizationsCreateOrUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.OrganizationsCreateOrUpdateResponse>;
    /**
     * Deletes a single organization
     */
    organizationsDelete(req: operations.OrganizationsDeleteRequest, security: operations.OrganizationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.OrganizationsDeleteResponse>;
    /**
     * Returns the details of a single organization
     */
    organizationsGet(req: operations.OrganizationsGetRequest, security: operations.OrganizationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.OrganizationsGetResponse>;
    /**
     * Returns a list of organizations the requesting user has access to
     */
    organizationsList(config?: AxiosRequestConfig): Promise<operations.OrganizationsListResponse>;
    /**
     * Returns a list organizations in which the requesting user is an admin
     */
    organizationsListAdministered(config?: AxiosRequestConfig): Promise<operations.OrganizationsListAdministeredResponse>;
    /**
     * Returns a list of organizations the requesting user has access to
     */
    organizationsUpdate(req: operations.OrganizationsUpdateRequest, security: operations.OrganizationsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.OrganizationsUpdateResponse>;
    /**
     * Gets all service connections of the service type for GDPR export.
     */
    sharedconnectionConnections(config?: AxiosRequestConfig): Promise<operations.SharedconnectionConnectionsResponse>;
    /**
     * Adds an app to a team
     */
    teamsAddApp(req: operations.TeamsAddAppRequest, security: operations.TeamsAddAppSecurity, config?: AxiosRequestConfig): Promise<operations.TeamsAddAppResponse>;
    /**
     * Adds a new user to a team that is owned by an organization
     */
    teamsAddUser(req: operations.TeamsAddUserRequest, security: operations.TeamsAddUserSecurity, config?: AxiosRequestConfig): Promise<operations.TeamsAddUserResponse>;
    /**
     * Creates a team and returns it
     */
    teamsCreateTeam(req: operations.TeamsCreateTeamRequest, security: operations.TeamsCreateTeamSecurity, config?: AxiosRequestConfig): Promise<operations.TeamsCreateTeamResponse>;
    /**
     * Deletes a single team
     */
    teamsDelete(req: operations.TeamsDeleteRequest, security: operations.TeamsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.TeamsDeleteResponse>;
    /**
     * Returns the details of a single team
     */
    teamsGetTeam(req: operations.TeamsGetTeamRequest, security: operations.TeamsGetTeamSecurity, config?: AxiosRequestConfig): Promise<operations.TeamsGetTeamResponse>;
    /**
     * Returns the users of a team which is owned by an organization
     */
    teamsGetUsers(req: operations.TeamsGetUsersRequest, security: operations.TeamsGetUsersSecurity, config?: AxiosRequestConfig): Promise<operations.TeamsGetUsersResponse>;
    /**
     * Returns the list of all teams in this org
     */
    teamsListAll(req: operations.TeamsListAllRequest, security: operations.TeamsListAllSecurity, config?: AxiosRequestConfig): Promise<operations.TeamsListAllResponse>;
    /**
     * Returns the apps a team has access to
     */
    teamsListApps(req: operations.TeamsListAppsRequest, security: operations.TeamsListAppsSecurity, config?: AxiosRequestConfig): Promise<operations.TeamsListAppsResponse>;
    /**
     * Removes an app from a team
     */
    teamsRemoveApp(req: operations.TeamsRemoveAppRequest, security: operations.TeamsRemoveAppSecurity, config?: AxiosRequestConfig): Promise<operations.TeamsRemoveAppResponse>;
    /**
     * Removes a user from a team that is owned by an organization
     */
    teamsRemoveUser(req: operations.TeamsRemoveUserRequest, security: operations.TeamsRemoveUserSecurity, config?: AxiosRequestConfig): Promise<operations.TeamsRemoveUserResponse>;
    /**
     * Updates a single team
     */
    teamsUpdate(req: operations.TeamsUpdateRequest, security: operations.TeamsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateResponse>;
    /**
     * Updates the permissions the team has to the app
     */
    teamsUpdatePermissions(req: operations.TeamsUpdatePermissionsRequest, security: operations.TeamsUpdatePermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.TeamsUpdatePermissionsResponse>;
    /**
     * Delete the user api_token object with the specific id
     */
    userApiTokensDelete(req: operations.UserApiTokensDeleteRequest, security: operations.UserApiTokensDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.UserApiTokensDeleteResponse>;
    /**
     * Returns api tokens for the authenticated user
     */
    userApiTokensList(config?: AxiosRequestConfig): Promise<operations.UserApiTokensListResponse>;
    /**
     * Creates a new User API token
     */
    userApiTokensNew(req: operations.UserApiTokensNewRequestBody, security: operations.UserApiTokensNewSecurity, config?: AxiosRequestConfig): Promise<operations.UserApiTokensNewResponse>;
    /**
     * Returns the user profile data
     */
    usersGet(config?: AxiosRequestConfig): Promise<operations.UsersGetResponse>;
    /**
     * Get a user information from an organization by name - if there is explicit permission return it, if not if not return highest implicit permission
     */
    usersGetForOrg(req: operations.UsersGetForOrgRequest, security: operations.UsersGetForOrgSecurity, config?: AxiosRequestConfig): Promise<operations.UsersGetForOrgResponse>;
    /**
     * Returns the users associated with the app specified with the given app name which belongs to the given owner.
     */
    usersList(req: operations.UsersListRequest, security: operations.UsersListSecurity, config?: AxiosRequestConfig): Promise<operations.UsersListResponse>;
    /**
     * Returns a list of users that belong to an organization
     */
    usersListForOrg(req: operations.UsersListForOrgRequest, security: operations.UsersListForOrgSecurity, config?: AxiosRequestConfig): Promise<operations.UsersListForOrgResponse>;
    /**
     * Removes a user from an organization.
     */
    usersRemoveFromOrg(req: operations.UsersRemoveFromOrgRequest, security: operations.UsersRemoveFromOrgSecurity, config?: AxiosRequestConfig): Promise<operations.UsersRemoveFromOrgResponse>;
    /**
     * Updates the user profile and returns the updated user data
     */
    usersUpdate(req: operations.UsersUpdateRequestBody, security: operations.UsersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.UsersUpdateResponse>;
    /**
     * Updates the given organization user
     */
    usersUpdateOrgRole(req: operations.UsersUpdateOrgRoleRequest, security: operations.UsersUpdateOrgRoleSecurity, config?: AxiosRequestConfig): Promise<operations.UsersUpdateOrgRoleResponse>;
}
