# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/appcenter.ms/v0.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.UsersGetUserMetadata(ctx, operations.UsersGetUserMetadataSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UsersGetUserMetadata200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Account](docs/account/README.md)

* [UsersGetUserMetadata](docs/account/README.md#usersgetusermetadata)
* [AppAPITokensDelete](docs/account/README.md#appapitokensdelete) - Delete the App Api Token object with the specific ID
* [AppAPITokensList](docs/account/README.md#appapitokenslist) - Returns App API tokens for the app
* [AppAPITokensNew](docs/account/README.md#appapitokensnew) - Creates a new App API token
* [AppInvitationsAccept](docs/account/README.md#appinvitationsaccept) - Accepts a pending invitation for the specified user
* [AppInvitationsCreate](docs/account/README.md#appinvitationscreate) - Invites a new or existing user to an app
* [~~AppInvitationsCreateByEmail~~](docs/account/README.md#appinvitationscreatebyemail) - Invites a new or existing user to an app :warning: **Deprecated**
* [AppInvitationsDelete](docs/account/README.md#appinvitationsdelete) - Removes a user's invitation to an app
* [AppInvitationsList](docs/account/README.md#appinvitationslist) - Gets the pending invitations for the app
* [AppInvitationsReject](docs/account/README.md#appinvitationsreject) - Rejects a pending invitation for the specified user
* [AppInvitationsUpdatePermissions](docs/account/README.md#appinvitationsupdatepermissions) - Update pending invitation permission
* [AppsCreate](docs/account/README.md#appscreate) - Creates a new app and returns it to the caller
* [AppsCreateForOrg](docs/account/README.md#appscreatefororg) - Creates a new app for the organization and returns it to the caller
* [AppsDelete](docs/account/README.md#appsdelete) - Delete an app
* [AppsDeleteAvatar](docs/account/README.md#appsdeleteavatar) - Deletes the uploaded app avatar
* [AppsGet](docs/account/README.md#appsget) - Return a specific app with the given app name which belongs to the given owner.
* [AppsGetForOrgUser](docs/account/README.md#appsgetfororguser) - Get a user apps information from an organization by name
* [AppsGetTeams](docs/account/README.md#appsgetteams) - Returns the details of all teams that have access to the app.
* [AppsList](docs/account/README.md#appslist) - Returns a list of apps
* [AppsListForOrg](docs/account/README.md#appslistfororg) - Returns a list of apps for the organization
* [AppsListTesters](docs/account/README.md#appslisttesters) - Returns the testers associated with the app specified with the given app name which belongs to the given owner.
* [AppsRemoveUser](docs/account/README.md#appsremoveuser) - Removes the user from the app
* [AppsTransferOwnershipJSON](docs/account/README.md#appstransferownershipjson) - Transfers ownership of an app to a different user or organization
* [AppsTransferOwnershipRaw](docs/account/README.md#appstransferownershipraw) - Transfers ownership of an app to a different user or organization
* [AppsTransferToOrg](docs/account/README.md#appstransfertoorg) - Transfers ownership of an app to a new organization
* [AppsUpdate](docs/account/README.md#appsupdate) - Partially updates a single app
* [AppsUpdateAvatar](docs/account/README.md#appsupdateavatar) - Sets the app avatar
* [AppsUpdateUserPermissions](docs/account/README.md#appsupdateuserpermissions) - Update user permission for the app
* [AzureSubscriptionDeleteForApp](docs/account/README.md#azuresubscriptiondeleteforapp) - Delete the azure subscriptions for the app
* [AzureSubscriptionLinkForApp](docs/account/README.md#azuresubscriptionlinkforapp) - Link azure subscription to an app
* [AzureSubscriptionListForApp](docs/account/README.md#azuresubscriptionlistforapp) - Returns a list of azure subscriptions for the app
* [AzureSubscriptionListForOrg](docs/account/README.md#azuresubscriptionlistfororg) - Returns a list of azure subscriptions for the organization
* [AzureSubscriptionListForUser](docs/account/README.md#azuresubscriptionlistforuser) - Returns a list of azure subscriptions for the user
* [DistributionGroupInvitationsAcceptAll](docs/account/README.md#distributiongroupinvitationsacceptall) - Accepts all pending invitations to distribution groups for the specified user
* [DistributionGroupsAddApps](docs/account/README.md#distributiongroupsaddapps) - Add apps to distribution group in an org
* [DistributionGroupsAddUser](docs/account/README.md#distributiongroupsadduser) - Adds the members to the specified distribution group
* [DistributionGroupsAddUsersForOrg](docs/account/README.md#distributiongroupsaddusersfororg) - Accepts an array of user email addresses to get added to the specified group
* [DistributionGroupsBulkDeleteApps](docs/account/README.md#distributiongroupsbulkdeleteapps) - Delete apps from distribution group in an org
* [DistributionGroupsBulkDeleteUsers](docs/account/README.md#distributiongroupsbulkdeleteusers) - Delete testers from distribution group in an org
* [DistributionGroupsCreate](docs/account/README.md#distributiongroupscreate) - Creates a new distribution group and returns it to the caller
* [DistributionGroupsCreateForOrg](docs/account/README.md#distributiongroupscreatefororg) - Creates a disribution goup which can be shared across apps under an organization
* [DistributionGroupsDelete](docs/account/README.md#distributiongroupsdelete) - Deletes a distribution group
* [DistributionGroupsDeleteForOrg](docs/account/README.md#distributiongroupsdeletefororg) - Deletes a single distribution group from an org with a given distribution group name
* [DistributionGroupsDetailsForOrg](docs/account/README.md#distributiongroupsdetailsfororg) - Returns a list of distribution groups with details for an organization
* [DistributionGroupsGet](docs/account/README.md#distributiongroupsget) - Returns a single distribution group for a given distribution group name
* [DistributionGroupsGetApps](docs/account/README.md#distributiongroupsgetapps) - Get apps from a distribution group in an org
* [DistributionGroupsGetForOrg](docs/account/README.md#distributiongroupsgetfororg) - Returns a single distribution group in org for a given distribution group name
* [DistributionGroupsList](docs/account/README.md#distributiongroupslist) - Returns a list of distribution groups in the app specified
* [DistributionGroupsListAllTestersForOrg](docs/account/README.md#distributiongroupslistalltestersfororg) - Returns a unique list of users including the whole organization members plus testers in any shared group of that org
* [DistributionGroupsListForOrg](docs/account/README.md#distributiongroupslistfororg) - Returns a list of distribution groups in the org specified
* [DistributionGroupsListUsers](docs/account/README.md#distributiongroupslistusers) - Returns a list of member details in the distribution group specified
* [DistributionGroupsListUsersForOrg](docs/account/README.md#distributiongroupslistusersfororg) - Returns a list of member in the distribution group specified
* [DistributionGroupsPatchForOrg](docs/account/README.md#distributiongroupspatchfororg) - Update one given distribution group name in an org
* [DistributionGroupsRemoveUser](docs/account/README.md#distributiongroupsremoveuser) - Remove the users from the distribution group
* [DistributionGroupsResendInvite](docs/account/README.md#distributiongroupsresendinvite) - Resend distribution group app invite notification to previously invited testers
* [DistributionGroupsResendSharedInvite](docs/account/README.md#distributiongroupsresendsharedinvite) - Resend shared distribution group invite notification to previously invited testers
* [DistributionGroupsUpdate](docs/account/README.md#distributiongroupsupdate) - Updates the attributes of distribution group
* [InvitationsSent](docs/account/README.md#invitationssent) - Returns all invitations sent by the caller
* [OrgInvitations](docs/account/README.md#orginvitations) - Removes a user's invitation to an organization
* [OrgInvitationsAccept](docs/account/README.md#orginvitationsaccept) - Accepts a pending organization invitation for the specified user
* [OrgInvitationsCreate](docs/account/README.md#orginvitationscreate) - Invites a new or existing user to an organization
* [OrgInvitationsDelete](docs/account/README.md#orginvitationsdelete) - Removes a user's invitation to an organization
* [OrgInvitationsListPending](docs/account/README.md#orginvitationslistpending) - Gets the pending invitations for the organization
* [OrgInvitationsReject](docs/account/README.md#orginvitationsreject) - Rejects a pending organization invitation
* [OrgInvitationsSendNewInvitation](docs/account/README.md#orginvitationssendnewinvitation) - Cancels an existing organization invitation for the user and sends a new one
* [OrgInvitationsUpdate](docs/account/README.md#orginvitationsupdate) - Allows the role of an invited user to be changed
* [OrganizationDeleteAvatar](docs/account/README.md#organizationdeleteavatar) - Deletes the uploaded organization avatar
* [OrganizationUpdateAvatar](docs/account/README.md#organizationupdateavatar) - Sets the organization avatar
* [OrganizationsCreateOrUpdate](docs/account/README.md#organizationscreateorupdate) - Creates a new organization and returns it to the caller
* [OrganizationsDelete](docs/account/README.md#organizationsdelete) - Deletes a single organization
* [OrganizationsGet](docs/account/README.md#organizationsget) - Returns the details of a single organization
* [OrganizationsList](docs/account/README.md#organizationslist) - Returns a list of organizations the requesting user has access to
* [OrganizationsListAdministered](docs/account/README.md#organizationslistadministered) - Returns a list organizations in which the requesting user is an admin
* [OrganizationsUpdate](docs/account/README.md#organizationsupdate) - Returns a list of organizations the requesting user has access to
* [SharedconnectionConnections](docs/account/README.md#sharedconnectionconnections) - Gets all service connections of the service type for GDPR export.
* [TeamsAddApp](docs/account/README.md#teamsaddapp) - Adds an app to a team
* [TeamsAddUser](docs/account/README.md#teamsadduser) - Adds a new user to a team that is owned by an organization
* [TeamsCreateTeam](docs/account/README.md#teamscreateteam) - Creates a team and returns it
* [TeamsDelete](docs/account/README.md#teamsdelete) - Deletes a single team
* [TeamsGetTeam](docs/account/README.md#teamsgetteam) - Returns the details of a single team
* [TeamsGetUsers](docs/account/README.md#teamsgetusers) - Returns the users of a team which is owned by an organization
* [TeamsListAll](docs/account/README.md#teamslistall) - Returns the list of all teams in this org
* [TeamsListApps](docs/account/README.md#teamslistapps) - Returns the apps a team has access to
* [TeamsRemoveApp](docs/account/README.md#teamsremoveapp) - Removes an app from a team
* [TeamsRemoveUser](docs/account/README.md#teamsremoveuser) - Removes a user from a team that is owned by an organization
* [TeamsUpdate](docs/account/README.md#teamsupdate) - Updates a single team
* [TeamsUpdatePermissions](docs/account/README.md#teamsupdatepermissions) - Updates the permissions the team has to the app
* [UserAPITokensDelete](docs/account/README.md#userapitokensdelete) - Delete the user api_token object with the specific id
* [UserAPITokensList](docs/account/README.md#userapitokenslist) - Returns api tokens for the authenticated user
* [UserAPITokensNew](docs/account/README.md#userapitokensnew) - Creates a new User API token
* [UsersGet](docs/account/README.md#usersget) - Returns the user profile data
* [UsersGetForOrg](docs/account/README.md#usersgetfororg) - Get a user information from an organization by name - if there is explicit permission return it, if not if not return highest implicit permission
* [UsersList](docs/account/README.md#userslist) - Returns the users associated with the app specified with the given app name which belongs to the given owner.
* [UsersListForOrg](docs/account/README.md#userslistfororg) - Returns a list of users that belong to an organization
* [UsersRemoveFromOrg](docs/account/README.md#usersremovefromorg) - Removes a user from an organization.
* [UsersUpdate](docs/account/README.md#usersupdate) - Updates the user profile and returns the updated user data
* [UsersUpdateOrgRole](docs/account/README.md#usersupdateorgrole) - Updates the given organization user

### [Alerting](docs/alerting/README.md)

* [BugTrackerGetRepoIssueFromCrash](docs/alerting/README.md#bugtrackergetrepoissuefromcrash) - Get project issue related to a crash group
* [BugtrackerGetSettings](docs/alerting/README.md#bugtrackergetsettings) - Get bug tracker settings for a particular app
* [NotificationsGetAppEmailSettings](docs/alerting/README.md#notificationsgetappemailsettings) - Get Email notification settings of user for a particular app
* [NotificationsGetUserEmailSettings](docs/alerting/README.md#notificationsgetuseremailsettings) - Get Default email notification settings for the user
* [WebhooksList](docs/alerting/README.md#webhookslist) - Get web hooks configured for a particular app

### [Analytics](docs/analytics/README.md)

* [AnalyticsAudienceNameExists](docs/analytics/README.md#analyticsaudiencenameexists) - Returns whether audience definition exists.
* [~~AnalyticsCrashCounts~~](docs/analytics/README.md#analyticscrashcounts) - Available for UWP apps only. :warning: **Deprecated**
* [~~AnalyticsCrashFreeDevicePercentages~~](docs/analytics/README.md#analyticscrashfreedevicepercentages) - Percentage of crash-free device by day in the time range based on the selected versions. Api will return -1 if crash devices is greater than active devices. :warning: **Deprecated**
* [~~AnalyticsCrashGroupCounts~~](docs/analytics/README.md#analyticscrashgroupcounts) - Available for UWP apps only. :warning: **Deprecated**
* [~~AnalyticsCrashGroupModelCounts~~](docs/analytics/README.md#analyticscrashgroupmodelcounts) - Available for UWP apps only. :warning: **Deprecated**
* [~~AnalyticsCrashGroupOperatingSystemCounts~~](docs/analytics/README.md#analyticscrashgroupoperatingsystemcounts) - Available for UWP apps only. :warning: **Deprecated**
* [~~AnalyticsCrashGroupTotals~~](docs/analytics/README.md#analyticscrashgrouptotals) - Available for UWP apps only. :warning: **Deprecated**
* [AnalyticsCrashGroupsTotals](docs/analytics/README.md#analyticscrashgroupstotals) - Overall crashes and affected users count of the selected crash groups with selected versions.
* [AnalyticsCreateOrUpdateAudience](docs/analytics/README.md#analyticscreateorupdateaudience) - Creates or updates audience definition.
* [AnalyticsDeleteAudience](docs/analytics/README.md#analyticsdeleteaudience) - Deletes audience definition.
* [AnalyticsDeviceCounts](docs/analytics/README.md#analyticsdevicecounts) - Count of active devices by interval in the time range.
* [AnalyticsDistributionReleaseCounts](docs/analytics/README.md#analyticsdistributionreleasecounts) - Count of total downloads for the provided distribution releases.
* [AnalyticsEventCount](docs/analytics/README.md#analyticseventcount) - Count of events by interval in the time range.
* [AnalyticsEventDeviceCount](docs/analytics/README.md#analyticseventdevicecount) - Count of devices for an event by interval in the time range.
* [AnalyticsEventPerDeviceCount](docs/analytics/README.md#analyticseventperdevicecount) - Count of events per device by interval in the time range.
* [AnalyticsEventPerSessionCount](docs/analytics/README.md#analyticseventpersessioncount) - Count of events per session by interval in the time range.
* [AnalyticsEventProperties](docs/analytics/README.md#analyticseventproperties) - Event properties.
* [AnalyticsEventPropertyCounts](docs/analytics/README.md#analyticseventpropertycounts) - Event properties value counts during the time range in descending order.
* [AnalyticsEvents](docs/analytics/README.md#analyticsevents) - Count of active events in the time range ordered by event.
* [AnalyticsEventsDelete](docs/analytics/README.md#analyticseventsdelete) - Delete the set of Events with the specified event names.
* [AnalyticsEventsDeleteLogs](docs/analytics/README.md#analyticseventsdeletelogs) - Delete the set of Events with the specified event names.
* [AnalyticsGenericLogFlow](docs/analytics/README.md#analyticsgenericlogflow) - Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.
* [AnalyticsGetAudience](docs/analytics/README.md#analyticsgetaudience) - Gets audience definition.
* [AnalyticsLanguageCounts](docs/analytics/README.md#analyticslanguagecounts) - Languages in the time range.
* [AnalyticsListAudiences](docs/analytics/README.md#analyticslistaudiences) - Get list of audiences.
* [AnalyticsListCustomProperties](docs/analytics/README.md#analyticslistcustomproperties) - Get list of custom properties.
* [AnalyticsListDeviceProperties](docs/analytics/README.md#analyticslistdeviceproperties) - Get list of device properties.
* [AnalyticsListDevicePropertyValues](docs/analytics/README.md#analyticslistdevicepropertyvalues) - Get list of device property values.
* [AnalyticsLogFlow](docs/analytics/README.md#analyticslogflow) - Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.
* [AnalyticsModelCounts](docs/analytics/README.md#analyticsmodelcounts) - Models in the time range.
* [AnalyticsOperatingSystemCounts](docs/analytics/README.md#analyticsoperatingsystemcounts) - OSes in the time range.
* [AnalyticsPerDeviceCounts](docs/analytics/README.md#analyticsperdevicecounts) - Count of sessions per device in the time range.
* [AnalyticsPlaceCounts](docs/analytics/README.md#analyticsplacecounts) - Places in the time range.
* [AnalyticsSessionCounts](docs/analytics/README.md#analyticssessioncounts) - Count of sessions in the time range.
* [AnalyticsSessionDurationsDistribution](docs/analytics/README.md#analyticssessiondurationsdistribution) - Gets session duration.
* [AnalyticsTestAudience](docs/analytics/README.md#analyticstestaudience) - Tests audience definition.
* [AnalyticsVersions](docs/analytics/README.md#analyticsversions) - Count of active versions in the time range ordered by version.
* [AppBlockLogs](docs/analytics/README.md#appblocklogs) - **Warning, this operation is not reversible.** 

A successful call to this API will permanently stop ingesting any logs received via SDK by app_id, and cannot be restored. We advise caution when using this API, it is designed to permanently disable an app_id.

* [CrashesListSessionLogs](docs/analytics/README.md#crasheslistsessionlogs) - Get session logs by crash ID
* [DevicesBlockLogs](docs/analytics/README.md#devicesblocklogs) - **Warning, this operation is not reversible.**

 A successful call to this API will permanently stop ingesting any logs received via SDK for the given installation ID, and cannot be restored. We advise caution when using this API, it is designed to permanently disable collection from a specific installation of the app on a device, usually following the request from a user.


### [Billing](docs/billing/README.md)

* [BillingAggregatedInformationGetAll](docs/billing/README.md#billingaggregatedinformationgetall) - Aggregated Billing Information for the requesting user and the organizations in which the user is an admin.
* [BillingAggregatedInformationGetByApp](docs/billing/README.md#billingaggregatedinformationgetbyapp) - Aggregated Billing Information for owner of a given app.
* [BillingAggregatedInformationGetForOrg](docs/billing/README.md#billingaggregatedinformationgetfororg) - Aggregated Billing Information for a given Organization.

### [Build](docs/build/README.md)

* [BranchConfigurationsCreate](docs/build/README.md#branchconfigurationscreate) - Configures the branch for build
* [BranchConfigurationsDelete](docs/build/README.md#branchconfigurationsdelete) - Deletes the branch build configuration
* [BranchConfigurationsGet](docs/build/README.md#branchconfigurationsget) - Gets the branch configuration
* [BranchConfigurationsUpdate](docs/build/README.md#branchconfigurationsupdate) - Reconfigures the branch for build
* [BuildConfigurationsGet](docs/build/README.md#buildconfigurationsget) - Gets the build configuration in Azure pipeline YAML format
* [BuildsCreate](docs/build/README.md#buildscreate) - Create a build
* [BuildsDistribute](docs/build/README.md#buildsdistribute) - Distribute a build
* [BuildsGet](docs/build/README.md#buildsget) - Returns the build detail for the given build ID
* [BuildsGetDownloadURI](docs/build/README.md#buildsgetdownloaduri) - Gets the download URI
* [BuildsGetLog](docs/build/README.md#buildsgetlog) - Get the build log
* [BuildsGetStatusByAppID](docs/build/README.md#buildsgetstatusbyappid) - Application specific build service status
* [BuildsListBranches](docs/build/README.md#buildslistbranches) - Returns the list of Git branches for this application
* [BuildsListByBranch](docs/build/README.md#buildslistbybranch) - Returns the list of builds for the branch
* [BuildsListToolsetProjects](docs/build/README.md#buildslisttoolsetprojects) - Returns the projects in the repository for the branch, for all toolsets
* [BuildsListToolsets](docs/build/README.md#buildslisttoolsets) - Returns available toolsets for application
* [~~BuildsListXamarinSDKBundles~~](docs/build/README.md#buildslistxamarinsdkbundles) - Gets the Xamarin SDK bundles available to this app :warning: **Deprecated**
* [~~BuildsListXcodeVersions~~](docs/build/README.md#buildslistxcodeversions) - Gets the Xcode versions available to this app :warning: **Deprecated**
* [BuildsUpdate](docs/build/README.md#buildsupdate) - Cancels a build
* [BuildsWebhook](docs/build/README.md#buildswebhook) - Public webhook sink
* [CommitsListByShaList](docs/build/README.md#commitslistbyshalist) - Returns commit information for a batch of shas
* [FileAssetsCreate](docs/build/README.md#fileassetscreate) - Create a new asset to upload a file
* [RepositoriesList](docs/build/README.md#repositorieslist) - Gets the repositories available from the source code host
* [RepositoryConfigurationsCreateOrUpdate](docs/build/README.md#repositoryconfigurationscreateorupdate) - Configures the repository for build
* [RepositoryConfigurationsDelete](docs/build/README.md#repositoryconfigurationsdelete) - Removes the configuration for the repository
* [RepositoryConfigurationsList](docs/build/README.md#repositoryconfigurationslist) - Returns the repository build configuration status of the app

### [Codepush](docs/codepush/README.md)

* [CodePushAcquisitionGetAcquisitionStatus](docs/codepush/README.md#codepushacquisitiongetacquisitionstatus) - Returns the acquisition service status to the caller
* [CodePushAcquisitionUpdateCheck](docs/codepush/README.md#codepushacquisitionupdatecheck) - Check for updates
* [CodePushAcquisitionUpdateDeployStatus](docs/codepush/README.md#codepushacquisitionupdatedeploystatus) - Report Deployment status metric
* [CodePushAcquisitionUpdateDownloadStatus](docs/codepush/README.md#codepushacquisitionupdatedownloadstatus) - Report download of specified release
* [CodePushDeploymentMetricsGet](docs/codepush/README.md#codepushdeploymentmetricsget) - Gets all releases metrics for specified Deployment
* [CodePushDeploymentReleaseRollback](docs/codepush/README.md#codepushdeploymentreleaserollback) - Rollback the latest or a specific release for an app deployment
* [CodePushDeploymentReleasesCreate](docs/codepush/README.md#codepushdeploymentreleasescreate) - Create a new CodePush release for the specified deployment
* [CodePushDeploymentReleasesDelete](docs/codepush/README.md#codepushdeploymentreleasesdelete) - Clears a Deployment of releases
* [CodePushDeploymentReleasesGet](docs/codepush/README.md#codepushdeploymentreleasesget) - Gets the history of releases on a Deployment
* [CodePushDeploymentUploadCreate](docs/codepush/README.md#codepushdeploymentuploadcreate) - Create a new CodePush release upload for the specified deployment
* [CodePushDeploymentsCreate](docs/codepush/README.md#codepushdeploymentscreate) - Creates a CodePush Deployment for the given app
* [CodePushDeploymentsDelete](docs/codepush/README.md#codepushdeploymentsdelete) - Deletes a CodePush Deployment for the given app
* [CodePushDeploymentsGet](docs/codepush/README.md#codepushdeploymentsget) - Gets a CodePush Deployment for the given app
* [CodePushDeploymentsList](docs/codepush/README.md#codepushdeploymentslist) - Gets a list of CodePush deployments for the given app
* [CodePushDeploymentsPromote](docs/codepush/README.md#codepushdeploymentspromote) - Promote one release (default latest one) from one deployment to another
* [CodePushDeploymentsUpdate](docs/codepush/README.md#codepushdeploymentsupdate) - Modifies a CodePush Deployment for the given app
* [DeploymentReleasesUpdate](docs/codepush/README.md#deploymentreleasesupdate) - Modifies a CodePush release metadata under the given Deployment
* [LegacyCodePushAcquisitionUpdateCheck](docs/codepush/README.md#legacycodepushacquisitionupdatecheck) - Check for updates
* [LegacyCodePushAcquisitionUpdateDownloadStatus](docs/codepush/README.md#legacycodepushacquisitionupdatedownloadstatus) - Report download of specified release
* [LegacyCodePushAcquisitionUpdateInstallsStatus](docs/codepush/README.md#legacycodepushacquisitionupdateinstallsstatus) - Report deploy of specified release

### [Crash](docs/crash/README.md)

* [~~CrashGroupsGet~~](docs/crash/README.md#crashgroupsget) - Gets a specific group. :warning: **Deprecated**
* [~~CrashGroupsGetStacktrace~~](docs/crash/README.md#crashgroupsgetstacktrace) - Gets a stacktrace for a specific crash. :warning: **Deprecated**
* [~~CrashGroupsList~~](docs/crash/README.md#crashgroupslist) - Gets a list of crash groups and whether the list contains all available groups. :warning: **Deprecated**
* [~~CrashGroupsUpdate~~](docs/crash/README.md#crashgroupsupdate) - Updates a group. :warning: **Deprecated**
* [~~CrashesDelete~~](docs/crash/README.md#crashesdelete) - Delete a specific crash and related attachments and blobs for an app. :warning: **Deprecated**
* [~~CrashesGet~~](docs/crash/README.md#crashesget) - Gets a specific crash for an app. :warning: **Deprecated**
* [~~CrashesGetAppCrashesInfo~~](docs/crash/README.md#crashesgetappcrashesinfo) - Gets whether the application has any crashes. :warning: **Deprecated**
* [~~CrashesGetAppVersions~~](docs/crash/README.md#crashesgetappversions) - Gets a list of application versions. :warning: **Deprecated**
* [~~CrashesGetCrashAttachmentLocation~~](docs/crash/README.md#crashesgetcrashattachmentlocation) - Gets the URI location to download crash attachment. :warning: **Deprecated**
* [~~CrashesGetCrashTextAttachmentContent~~](docs/crash/README.md#crashesgetcrashtextattachmentcontent) - Gets content of the text attachment. :warning: **Deprecated**
* [~~CrashesGetNativeCrash~~](docs/crash/README.md#crashesgetnativecrash) - Gets the native log of a specific crash. :warning: **Deprecated**
* [~~CrashesGetNativeCrashDownload~~](docs/crash/README.md#crashesgetnativecrashdownload) - Gets the native log of a specific crash as a text attachment. :warning: **Deprecated**
* [~~CrashesGetRawCrashLocation~~](docs/crash/README.md#crashesgetrawcrashlocation) - Gets the URI location to download json of a specific crash. :warning: **Deprecated**
* [~~CrashesGetStacktrace~~](docs/crash/README.md#crashesgetstacktrace) - Gets a stacktrace for a specific crash. :warning: **Deprecated**
* [~~CrashesList~~](docs/crash/README.md#crasheslist) - Gets all crashes of a group. :warning: **Deprecated**
* [~~CrashesListAttachments~~](docs/crash/README.md#crasheslistattachments) - Gets all attachments for a specific crash. :warning: **Deprecated**
* [MissingSymbolGroupsGet](docs/crash/README.md#missingsymbolgroupsget) - Gets missing symbol crash group by its id
* [MissingSymbolGroupsInfo](docs/crash/README.md#missingsymbolgroupsinfo) - Gets application level statistics for all missing symbol groups
* [MissingSymbolGroupsList](docs/crash/README.md#missingsymbolgroupslist) - Gets top N (ordered by crash count) of crash groups by missing symbol
* [SymbolUploadsComplete](docs/crash/README.md#symboluploadscomplete) - Commits or aborts the symbol upload process for a new set of symbols for the specified application
* [SymbolUploadsCreate](docs/crash/README.md#symboluploadscreate) - Begins the symbol upload process for a new set of symbols for the specified application
* [SymbolUploadsDelete](docs/crash/README.md#symboluploadsdelete) - Deletes a symbol upload by id for the specified application
* [SymbolUploadsGet](docs/crash/README.md#symboluploadsget) - Gets a symbol upload by id for the specified application
* [SymbolUploadsGetLocation](docs/crash/README.md#symboluploadsgetlocation) - Gets the URL to download the symbol upload
* [SymbolUploadsList](docs/crash/README.md#symboluploadslist) - Gets a list of all uploads for the specified application
* [SymbolsGet](docs/crash/README.md#symbolsget) - Returns a particular symbol by id (uuid) for the provided application
* [SymbolsGetLocation](docs/crash/README.md#symbolsgetlocation) - Gets the URL to download the symbol
* [SymbolsGetStatus](docs/crash/README.md#symbolsgetstatus) - Returns a particular symbol by id (uuid) for the provided application
* [SymbolsIgnore](docs/crash/README.md#symbolsignore) - Marks a symbol by id (uuid) as ignored
* [SymbolsList](docs/crash/README.md#symbolslist) - Returns the list of all symbols for the provided application

### [Distribute](docs/distribute/README.md)

* [~~AppleMappingTestFlightGroups~~](docs/distribute/README.md#applemappingtestflightgroups) - Fetch all apple test flight groups :warning: **Deprecated**
* [AppleMappingCreate](docs/distribute/README.md#applemappingcreate) - Create a mapping for an existing app in apple store for the specified application.
* [AppleMappingDelete](docs/distribute/README.md#applemappingdelete) - Delete mapping of apple app to an existing app in apple store.
* [AppleMappingGet](docs/distribute/README.md#applemappingget) - Get mapping of apple app to an existing app in apple store.
* [DevicesDeviceDetails](docs/distribute/README.md#devicesdevicedetails) - Returns the device details.
* [DevicesGetReleaseUpdateDevicesStatus](docs/distribute/README.md#devicesgetreleaseupdatedevicesstatus) - Returns the resign status to the caller
* [DevicesList](docs/distribute/README.md#deviceslist) - Returns all devices associated with the given distribution group
* [DevicesListCsvFormat](docs/distribute/README.md#deviceslistcsvformat) - Returns all devices associated with the given distribution group.
* [DevicesRegisterUserForDevice](docs/distribute/README.md#devicesregisteruserfordevice) - Registers a user for an existing device
* [DevicesRemoveUserDevice](docs/distribute/README.md#devicesremoveuserdevice) - Removes an existing device from a user
* [DevicesUserDevicesList](docs/distribute/README.md#devicesuserdeviceslist) - Returns all devices associated with the given user.
* [DistibutionReleasesInstallAnalytics](docs/distribute/README.md#distibutionreleasesinstallanalytics) - Notify download(s) for the provided distribution release(s).
* [ProvisioningProfile](docs/distribute/README.md#provisioningprofile) - Return information about the provisioning profile. Only available for iOS.
* [ReleasesAddDistributionGroup](docs/distribute/README.md#releasesadddistributiongroup) - Distributes a release to a group
* [ReleasesAddStore](docs/distribute/README.md#releasesaddstore) - Distributes a release to a store
* [ReleasesAddTesters](docs/distribute/README.md#releasesaddtesters) - Distributes a release to a user
* [~~ReleasesAvailableToTester~~](docs/distribute/README.md#releasesavailabletotester) - Return detailed information about releases avaiable to a tester. :warning: **Deprecated**
* [ReleasesCreateReleaseUpload](docs/distribute/README.md#releasescreatereleaseupload) - Initiate a new release upload. This API is part of multi-step upload process.
* [ReleasesDelete](docs/distribute/README.md#releasesdelete) - Deletes a release.
* [ReleasesDeleteDistributionGroup](docs/distribute/README.md#releasesdeletedistributiongroup) - Delete the given distribution group from the release
* [ReleasesDeleteDistributionStore](docs/distribute/README.md#releasesdeletedistributionstore) - Delete the given distribution store from the release
* [ReleasesDeleteDistributionTester](docs/distribute/README.md#releasesdeletedistributiontester) - Delete the given tester from the release
* [ReleasesDeleteTesterFromDestinations](docs/distribute/README.md#releasesdeletetesterfromdestinations) - Delete the given tester from the all releases
* [ReleasesDeleteWithDistributionGroupID](docs/distribute/README.md#releasesdeletewithdistributiongroupid) - Deletes a release with id 'release_id' in a given distribution group.
* [ReleasesGetIosManifest](docs/distribute/README.md#releasesgetiosmanifest) - Returns the manifest.plist in XML format for installing the release on a device. Only available for iOS.
* [ReleasesGetLatestByDistributionGroup](docs/distribute/README.md#releasesgetlatestbydistributiongroup) - Return detailed information about a distributed release in a given distribution group.
* [ReleasesGetLatestByHash](docs/distribute/README.md#releasesgetlatestbyhash) - If 'latest' is not specified then it will return the specified release if it's enabled. If 'latest' is specified, regardless of whether a release hash is provided, the latest enabled release is returned.
* [ReleasesGetLatestByPublicDistributionGroup](docs/distribute/README.md#releasesgetlatestbypublicdistributiongroup) - Get a release with 'latest' for the given public group.
* [ReleasesGetLatestByUser](docs/distribute/README.md#releasesgetlatestbyuser) - Get a release with id `release_id`. If `release_id` is `latest`, return the latest release that was distributed to the current user (from all the distribution groups).
* [ReleasesGetLatestPrivateRelease](docs/distribute/README.md#releasesgetlatestprivaterelease) - Get the latest release distributed to a private group the given user is a member of for the given app.
* [~~ReleasesGetLatestPublicRelease~~](docs/distribute/README.md#releasesgetlatestpublicrelease) - Get the latest public release for the given app. :warning: **Deprecated**
* [ReleasesGetPublicGroupsForReleaseByHash](docs/distribute/README.md#releasesgetpublicgroupsforreleasebyhash) - Get all public distribution groups that a given release has been distributed to
* [ReleasesGetReleaseUploadStatus](docs/distribute/README.md#releasesgetreleaseuploadstatus) - Get the current status of the release upload.
* [ReleasesGetSparkleFeed](docs/distribute/README.md#releasesgetsparklefeed) - Gets the sparkle feed of the releases that are distributed to all the public distribution groups.
* [ReleasesList](docs/distribute/README.md#releaseslist) - Return basic information about releases.
* [ReleasesListByDistributionGroup](docs/distribute/README.md#releaseslistbydistributiongroup) - Return basic information about distributed releases in a given distribution group.
* [ReleasesListLatest](docs/distribute/README.md#releaseslistlatest) - Get the latest release from every distribution group associated with an application.
* [ReleasesPutDistributionGroup](docs/distribute/README.md#releasesputdistributiongroup) - Update details about the specified distribution group associated with the release
* [ReleasesPutDistributionTester](docs/distribute/README.md#releasesputdistributiontester) - Update details about the specified tester associated with the release
* [ReleasesUpdate](docs/distribute/README.md#releasesupdate) - Updates a release.
* [ReleasesUpdateDetails](docs/distribute/README.md#releasesupdatedetails) - Update details of a release.
* [ReleasesUpdateReleaseUploadStatus](docs/distribute/README.md#releasesupdatereleaseuploadstatus) - Update the current status of the release upload.
* [StoreNotificationsGetNotificationByAppID](docs/distribute/README.md#storenotificationsgetnotificationbyappid) - Application specific store service status
* [StoreReleasePublishLogsGet](docs/distribute/README.md#storereleasepublishlogsget) - Returns publish logs for a particular release published to a particular store
* [StoreReleasesDelete](docs/distribute/README.md#storereleasesdelete) - delete the release with release Id
* [StoreReleasesGet](docs/distribute/README.md#storereleasesget) - Return releases published in a store for releaseId and storeId
* [StoreReleasesGetLatest](docs/distribute/README.md#storereleasesgetlatest) - Returns the latest release published in a store.
* [StoreReleasesGetPublishError](docs/distribute/README.md#storereleasesgetpublisherror) - Return the Error Details of release which failed in publishing.
* [StoreReleasesGetRealTimeStatusByReleaseID](docs/distribute/README.md#storereleasesgetrealtimestatusbyreleaseid) - Return the Real time Status publishing of release from store.
* [StoreReleasesList](docs/distribute/README.md#storereleaseslist) - Return all releases published  in a store
* [StoresCreate](docs/distribute/README.md#storescreate) - Create a new external store for the specified application.
* [StoresDelete](docs/distribute/README.md#storesdelete) - delete the store based on specific store name.
* [StoresGet](docs/distribute/README.md#storesget) - Return the store details for specified store name.
* [StoresList](docs/distribute/README.md#storeslist) - Get all the store details from Storage store table for a particular application.
* [StoresPatch](docs/distribute/README.md#storespatch) - Update the store.

### [Errors](docs/errors/README.md)

* [ErrorsAppBuildsList](docs/errors/README.md#errorsappbuildslist) - List of app builds
* [ErrorsAvailableVersions](docs/errors/README.md#errorsavailableversions) - Get all available versions in the time range.
* [ErrorsCountsPerDay](docs/errors/README.md#errorscountsperday) - Count of crashes or errors by day in the time range based the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror.
* [ErrorsDeleteError](docs/errors/README.md#errorsdeleteerror) - Delete a specific error and related attachments and blobs for an app. Searchable data will not be deleted immediately and may take up to 30 days.
* [ErrorsErrorAttachmentLocation](docs/errors/README.md#errorserrorattachmentlocation) - Error attachment location.
* [ErrorsErrorAttachmentText](docs/errors/README.md#errorserrorattachmenttext) - Error attachment text.
* [ErrorsErrorAttachments](docs/errors/README.md#errorserrorattachments) - List error attachments.
* [ErrorsErrorDownload](docs/errors/README.md#errorserrordownload) - Download details for a specific error.
* [ErrorsErrorFreeDevicePercentages](docs/errors/README.md#errorserrorfreedevicepercentages) - Percentage of error-free devices by day in the time range based on the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror. API will return -1 if crash devices is greater than active devices
* [ErrorsErrorGroupsSearch](docs/errors/README.md#errorserrorgroupssearch) - Error groups list based on search parameters
* [ErrorsErrorLocation](docs/errors/README.md#errorserrorlocation) - Error location.
* [ErrorsErrorSearch](docs/errors/README.md#errorserrorsearch) - Errors list based on search parameters
* [ErrorsErrorStackTrace](docs/errors/README.md#errorserrorstacktrace) - Error Stacktrace details.
* [ErrorsGetErrorDetails](docs/errors/README.md#errorsgeterrordetails) - Error details.
* [ErrorsGroupCountsPerDay](docs/errors/README.md#errorsgroupcountsperday) - Count of errors by day in the time range of the selected error group with selected version
* [ErrorsGroupDetails](docs/errors/README.md#errorsgroupdetails) - Error group details
* [ErrorsGroupErrorFreeDevicePercentages](docs/errors/README.md#errorsgrouperrorfreedevicepercentages) - Percentage of error-free devices by day in the time range. Api will return -1 if crash devices is greater than active devices
* [ErrorsGroupErrorStackTrace](docs/errors/README.md#errorsgrouperrorstacktrace) - Gets the stack trace for the error group.
* [ErrorsGroupList](docs/errors/README.md#errorsgrouplist) - List of error groups
* [ErrorsGroupModelCounts](docs/errors/README.md#errorsgroupmodelcounts) - Top models of the selected error group.
* [ErrorsGroupOperatingSystemCounts](docs/errors/README.md#errorsgroupoperatingsystemcounts) - Top OSes of the selected error group.
* [ErrorsLatestErrorDetails](docs/errors/README.md#errorslatesterrordetails) - Latest error details.
* [ErrorsListForGroup](docs/errors/README.md#errorslistforgroup) - Get all errors for group
* [ErrorsListSessionLogs](docs/errors/README.md#errorslistsessionlogs) - Get session logs by error ID
* [ErrorsUpdateState](docs/errors/README.md#errorsupdatestate) - Update error group state
* [ErrorsGetRetentionSettings](docs/errors/README.md#errorsgetretentionsettings) - gets the retention settings in days

### [Export](docs/export/README.md)

* [ExportConfigurationsCreate](docs/export/README.md#exportconfigurationscreate) - Create new export configuration
* [ExportConfigurationsDelete](docs/export/README.md#exportconfigurationsdelete) - Delete export configuration.
* [ExportConfigurationsDisable](docs/export/README.md#exportconfigurationsdisable) - Disable export configuration.
* [ExportConfigurationsEnable](docs/export/README.md#exportconfigurationsenable) - Enable export configuration.
* [ExportConfigurationsGet](docs/export/README.md#exportconfigurationsget) - Get export configuration.
* [ExportConfigurationsList](docs/export/README.md#exportconfigurationslist) - List export configurations.
* [ExportConfigurationsPartialUpdate](docs/export/README.md#exportconfigurationspartialupdate) - Partially update export configuration.

### [Gdpr](docs/gdpr/README.md)

* [DataSubjectRightCancelDeleteRequest](docs/gdpr/README.md#datasubjectrightcanceldeleterequest)
* [DataSubjectRightCancelExportRequest](docs/gdpr/README.md#datasubjectrightcancelexportrequest)
* [DataSubjectRightDeleteRequest](docs/gdpr/README.md#datasubjectrightdeleterequest)
* [DataSubjectRightDeleteStatusRequest](docs/gdpr/README.md#datasubjectrightdeletestatusrequest)
* [DataSubjectRightExportRequest](docs/gdpr/README.md#datasubjectrightexportrequest)
* [DataSubjectRightExportStatusRequest](docs/gdpr/README.md#datasubjectrightexportstatusrequest)

### [Test](docs/test/README.md)

* [TestArchiveTestRun](docs/test/README.md#testarchivetestrun) - Logically deletes a test run
* [TestCreateDeviceSelection](docs/test/README.md#testcreatedeviceselection) - Creates a short ID for a list of devices
* [TestCreateDeviceSetOfOwner](docs/test/README.md#testcreatedevicesetofowner) - Creates a device set belonging to the owner
* [TestCreateDeviceSetOfUser](docs/test/README.md#testcreatedevicesetofuser) - Creates a device set belonging to the user
* [TestCreateSubscription](docs/test/README.md#testcreatesubscription) - Accept a free trial subscription
* [TestCreateTestRun](docs/test/README.md#testcreatetestrun) - Creates a new test run
* [TestCreateTestSeries](docs/test/README.md#testcreatetestseries) - Creates new test series for an application
* [TestDeleteDeviceSetOfOwner](docs/test/README.md#testdeletedevicesetofowner) - Deletes a device set belonging to the owner
* [TestDeleteDeviceSetOfUser](docs/test/README.md#testdeletedevicesetofuser) - Deletes a device set belonging to the user
* [TestDeleteTestSeries](docs/test/README.md#testdeletetestseries) - Deletes a single test series
* [TestGdprExportAccount](docs/test/README.md#testgdprexportaccount) - Lists account data
* [TestGdprExportAccounts](docs/test/README.md#testgdprexportaccounts) - Lists all the endpoints available for Test accounts data
* [TestGdprExportApp](docs/test/README.md#testgdprexportapp) - Lists app data
* [TestGdprExportApps](docs/test/README.md#testgdprexportapps) - Lists all the endpoints available for Test apps data
* [TestGdprExportFeatureFlag](docs/test/README.md#testgdprexportfeatureflag) - Lists feature flag data
* [TestGdprExportFileSetFile](docs/test/README.md#testgdprexportfilesetfile) - Lists file set file data
* [TestGdprExportHashFile](docs/test/README.md#testgdprexporthashfile) - Lists hash file data
* [TestGdprExportPipelineTest](docs/test/README.md#testgdprexportpipelinetest) - Lists pipeline test data
* [TestGdprExportTestRun](docs/test/README.md#testgdprexporttestrun) - Lists test run data
* [TestGetAllTestRunsForSeries](docs/test/README.md#testgetalltestrunsforseries) - Returns list of all test runs for a given test series
* [TestGetAllTestSeries](docs/test/README.md#testgetalltestseries) - Returns list of all test series for an application
* [TestGetDeviceConfigurations](docs/test/README.md#testgetdeviceconfigurations) - Returns a list of available devices
* [TestGetDeviceSetOfOwner](docs/test/README.md#testgetdevicesetofowner) - Gets a device set belonging to the owner
* [TestGetDeviceSetOfUser](docs/test/README.md#testgetdevicesetofuser) - Gets a device set belonging to the user
* [TestGetSubscriptions](docs/test/README.md#testgetsubscriptions) - Get information about the currently active subscriptions, if any
* [TestGetTestReport](docs/test/README.md#testgettestreport) - Returns a single test report
* [TestGetTestRun](docs/test/README.md#testgettestrun) - Returns a single test runs
* [TestGetTestRunState](docs/test/README.md#testgettestrunstate) - Gets state of the test run
* [TestGetTestRuns](docs/test/README.md#testgettestruns) - Returns a list of test runs
* [TestListDeviceSetsOfOwner](docs/test/README.md#testlistdevicesetsofowner) - Lists device sets belonging to the owner
* [TestListDeviceSetsOfUser](docs/test/README.md#testlistdevicesetsofuser) - Lists device sets belonging to the user
* [TestPatchTestSeries](docs/test/README.md#testpatchtestseries) - Updates name and slug of a test series
* [TestStartTestRun](docs/test/README.md#teststarttestrun) - Starts test run
* [TestStartUploadingFile](docs/test/README.md#teststartuploadingfile) - Uploads file for a test run
* [TestStopTestRun](docs/test/README.md#teststoptestrun) - Stop a test run execution
* [TestUpdateDeviceSetOfOwner](docs/test/README.md#testupdatedevicesetofowner) - Updates a device set belonging to the owner
* [TestUpdateDeviceSetOfUser](docs/test/README.md#testupdatedevicesetofuser) - Updates a device set belonging to the user
* [TestUploadHash](docs/test/README.md#testuploadhash) - Adds file with the given hash to a test run
* [TestUploadHashesBatch](docs/test/README.md#testuploadhashesbatch) - Adds file with the given hash to a test run
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
