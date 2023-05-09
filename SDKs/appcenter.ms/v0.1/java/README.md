# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersGetUserMetadataResponse;
import org.openapis.openapi.models.operations.UsersGetUserMetadataSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersGetUserMetadataResponse res = sdk.account.usersGetUserMetadata(new UsersGetUserMetadataSecurity("corrupti") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.usersGetUserMetadata200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [account](docs/account/README.md)

* [usersGetUserMetadata](docs/account/README.md#usersgetusermetadata)
* [appApiTokensDelete](docs/account/README.md#appapitokensdelete) - Delete the App Api Token object with the specific ID
* [appApiTokensList](docs/account/README.md#appapitokenslist) - Returns App API tokens for the app
* [appApiTokensNew](docs/account/README.md#appapitokensnew) - Creates a new App API token
* [appInvitationsAccept](docs/account/README.md#appinvitationsaccept) - Accepts a pending invitation for the specified user
* [appInvitationsCreate](docs/account/README.md#appinvitationscreate) - Invites a new or existing user to an app
* [~~appInvitationsCreateByEmail~~](docs/account/README.md#appinvitationscreatebyemail) - Invites a new or existing user to an app :warning: **Deprecated**
* [appInvitationsDelete](docs/account/README.md#appinvitationsdelete) - Removes a user's invitation to an app
* [appInvitationsList](docs/account/README.md#appinvitationslist) - Gets the pending invitations for the app
* [appInvitationsReject](docs/account/README.md#appinvitationsreject) - Rejects a pending invitation for the specified user
* [appInvitationsUpdatePermissions](docs/account/README.md#appinvitationsupdatepermissions) - Update pending invitation permission
* [appsCreate](docs/account/README.md#appscreate) - Creates a new app and returns it to the caller
* [appsCreateForOrg](docs/account/README.md#appscreatefororg) - Creates a new app for the organization and returns it to the caller
* [appsDelete](docs/account/README.md#appsdelete) - Delete an app
* [appsDeleteAvatar](docs/account/README.md#appsdeleteavatar) - Deletes the uploaded app avatar
* [appsGet](docs/account/README.md#appsget) - Return a specific app with the given app name which belongs to the given owner.
* [appsGetForOrgUser](docs/account/README.md#appsgetfororguser) - Get a user apps information from an organization by name
* [appsGetTeams](docs/account/README.md#appsgetteams) - Returns the details of all teams that have access to the app.
* [appsList](docs/account/README.md#appslist) - Returns a list of apps
* [appsListForOrg](docs/account/README.md#appslistfororg) - Returns a list of apps for the organization
* [appsListTesters](docs/account/README.md#appslisttesters) - Returns the testers associated with the app specified with the given app name which belongs to the given owner.
* [appsRemoveUser](docs/account/README.md#appsremoveuser) - Removes the user from the app
* [appsTransferOwnershipJson](docs/account/README.md#appstransferownershipjson) - Transfers ownership of an app to a different user or organization
* [appsTransferOwnershipRaw](docs/account/README.md#appstransferownershipraw) - Transfers ownership of an app to a different user or organization
* [appsTransferToOrg](docs/account/README.md#appstransfertoorg) - Transfers ownership of an app to a new organization
* [appsUpdate](docs/account/README.md#appsupdate) - Partially updates a single app
* [appsUpdateAvatar](docs/account/README.md#appsupdateavatar) - Sets the app avatar
* [appsUpdateUserPermissions](docs/account/README.md#appsupdateuserpermissions) - Update user permission for the app
* [azureSubscriptionDeleteForApp](docs/account/README.md#azuresubscriptiondeleteforapp) - Delete the azure subscriptions for the app
* [azureSubscriptionLinkForApp](docs/account/README.md#azuresubscriptionlinkforapp) - Link azure subscription to an app
* [azureSubscriptionListForApp](docs/account/README.md#azuresubscriptionlistforapp) - Returns a list of azure subscriptions for the app
* [azureSubscriptionListForOrg](docs/account/README.md#azuresubscriptionlistfororg) - Returns a list of azure subscriptions for the organization
* [azureSubscriptionListForUser](docs/account/README.md#azuresubscriptionlistforuser) - Returns a list of azure subscriptions for the user
* [distributionGroupInvitationsAcceptAll](docs/account/README.md#distributiongroupinvitationsacceptall) - Accepts all pending invitations to distribution groups for the specified user
* [distributionGroupsAddApps](docs/account/README.md#distributiongroupsaddapps) - Add apps to distribution group in an org
* [distributionGroupsAddUser](docs/account/README.md#distributiongroupsadduser) - Adds the members to the specified distribution group
* [distributionGroupsAddUsersForOrg](docs/account/README.md#distributiongroupsaddusersfororg) - Accepts an array of user email addresses to get added to the specified group
* [distributionGroupsBulkDeleteApps](docs/account/README.md#distributiongroupsbulkdeleteapps) - Delete apps from distribution group in an org
* [distributionGroupsBulkDeleteUsers](docs/account/README.md#distributiongroupsbulkdeleteusers) - Delete testers from distribution group in an org
* [distributionGroupsCreate](docs/account/README.md#distributiongroupscreate) - Creates a new distribution group and returns it to the caller
* [distributionGroupsCreateForOrg](docs/account/README.md#distributiongroupscreatefororg) - Creates a disribution goup which can be shared across apps under an organization
* [distributionGroupsDelete](docs/account/README.md#distributiongroupsdelete) - Deletes a distribution group
* [distributionGroupsDeleteForOrg](docs/account/README.md#distributiongroupsdeletefororg) - Deletes a single distribution group from an org with a given distribution group name
* [distributionGroupsDetailsForOrg](docs/account/README.md#distributiongroupsdetailsfororg) - Returns a list of distribution groups with details for an organization
* [distributionGroupsGet](docs/account/README.md#distributiongroupsget) - Returns a single distribution group for a given distribution group name
* [distributionGroupsGetApps](docs/account/README.md#distributiongroupsgetapps) - Get apps from a distribution group in an org
* [distributionGroupsGetForOrg](docs/account/README.md#distributiongroupsgetfororg) - Returns a single distribution group in org for a given distribution group name
* [distributionGroupsList](docs/account/README.md#distributiongroupslist) - Returns a list of distribution groups in the app specified
* [distributionGroupsListAllTestersForOrg](docs/account/README.md#distributiongroupslistalltestersfororg) - Returns a unique list of users including the whole organization members plus testers in any shared group of that org
* [distributionGroupsListForOrg](docs/account/README.md#distributiongroupslistfororg) - Returns a list of distribution groups in the org specified
* [distributionGroupsListUsers](docs/account/README.md#distributiongroupslistusers) - Returns a list of member details in the distribution group specified
* [distributionGroupsListUsersForOrg](docs/account/README.md#distributiongroupslistusersfororg) - Returns a list of member in the distribution group specified
* [distributionGroupsPatchForOrg](docs/account/README.md#distributiongroupspatchfororg) - Update one given distribution group name in an org
* [distributionGroupsRemoveUser](docs/account/README.md#distributiongroupsremoveuser) - Remove the users from the distribution group
* [distributionGroupsResendInvite](docs/account/README.md#distributiongroupsresendinvite) - Resend distribution group app invite notification to previously invited testers
* [distributionGroupsResendSharedInvite](docs/account/README.md#distributiongroupsresendsharedinvite) - Resend shared distribution group invite notification to previously invited testers
* [distributionGroupsUpdate](docs/account/README.md#distributiongroupsupdate) - Updates the attributes of distribution group
* [invitationsSent](docs/account/README.md#invitationssent) - Returns all invitations sent by the caller
* [orgInvitations](docs/account/README.md#orginvitations) - Removes a user's invitation to an organization
* [orgInvitationsAccept](docs/account/README.md#orginvitationsaccept) - Accepts a pending organization invitation for the specified user
* [orgInvitationsCreate](docs/account/README.md#orginvitationscreate) - Invites a new or existing user to an organization
* [orgInvitationsDelete](docs/account/README.md#orginvitationsdelete) - Removes a user's invitation to an organization
* [orgInvitationsListPending](docs/account/README.md#orginvitationslistpending) - Gets the pending invitations for the organization
* [orgInvitationsReject](docs/account/README.md#orginvitationsreject) - Rejects a pending organization invitation
* [orgInvitationsSendNewInvitation](docs/account/README.md#orginvitationssendnewinvitation) - Cancels an existing organization invitation for the user and sends a new one
* [orgInvitationsUpdate](docs/account/README.md#orginvitationsupdate) - Allows the role of an invited user to be changed
* [organizationDeleteAvatar](docs/account/README.md#organizationdeleteavatar) - Deletes the uploaded organization avatar
* [organizationUpdateAvatar](docs/account/README.md#organizationupdateavatar) - Sets the organization avatar
* [organizationsCreateOrUpdate](docs/account/README.md#organizationscreateorupdate) - Creates a new organization and returns it to the caller
* [organizationsDelete](docs/account/README.md#organizationsdelete) - Deletes a single organization
* [organizationsGet](docs/account/README.md#organizationsget) - Returns the details of a single organization
* [organizationsList](docs/account/README.md#organizationslist) - Returns a list of organizations the requesting user has access to
* [organizationsListAdministered](docs/account/README.md#organizationslistadministered) - Returns a list organizations in which the requesting user is an admin
* [organizationsUpdate](docs/account/README.md#organizationsupdate) - Returns a list of organizations the requesting user has access to
* [sharedconnectionConnections](docs/account/README.md#sharedconnectionconnections) - Gets all service connections of the service type for GDPR export.
* [teamsAddApp](docs/account/README.md#teamsaddapp) - Adds an app to a team
* [teamsAddUser](docs/account/README.md#teamsadduser) - Adds a new user to a team that is owned by an organization
* [teamsCreateTeam](docs/account/README.md#teamscreateteam) - Creates a team and returns it
* [teamsDelete](docs/account/README.md#teamsdelete) - Deletes a single team
* [teamsGetTeam](docs/account/README.md#teamsgetteam) - Returns the details of a single team
* [teamsGetUsers](docs/account/README.md#teamsgetusers) - Returns the users of a team which is owned by an organization
* [teamsListAll](docs/account/README.md#teamslistall) - Returns the list of all teams in this org
* [teamsListApps](docs/account/README.md#teamslistapps) - Returns the apps a team has access to
* [teamsRemoveApp](docs/account/README.md#teamsremoveapp) - Removes an app from a team
* [teamsRemoveUser](docs/account/README.md#teamsremoveuser) - Removes a user from a team that is owned by an organization
* [teamsUpdate](docs/account/README.md#teamsupdate) - Updates a single team
* [teamsUpdatePermissions](docs/account/README.md#teamsupdatepermissions) - Updates the permissions the team has to the app
* [userApiTokensDelete](docs/account/README.md#userapitokensdelete) - Delete the user api_token object with the specific id
* [userApiTokensList](docs/account/README.md#userapitokenslist) - Returns api tokens for the authenticated user
* [userApiTokensNew](docs/account/README.md#userapitokensnew) - Creates a new User API token
* [usersGet](docs/account/README.md#usersget) - Returns the user profile data
* [usersGetForOrg](docs/account/README.md#usersgetfororg) - Get a user information from an organization by name - if there is explicit permission return it, if not if not return highest implicit permission
* [usersList](docs/account/README.md#userslist) - Returns the users associated with the app specified with the given app name which belongs to the given owner.
* [usersListForOrg](docs/account/README.md#userslistfororg) - Returns a list of users that belong to an organization
* [usersRemoveFromOrg](docs/account/README.md#usersremovefromorg) - Removes a user from an organization.
* [usersUpdate](docs/account/README.md#usersupdate) - Updates the user profile and returns the updated user data
* [usersUpdateOrgRole](docs/account/README.md#usersupdateorgrole) - Updates the given organization user

### [alerting](docs/alerting/README.md)

* [bugTrackerGetRepoIssueFromCrash](docs/alerting/README.md#bugtrackergetrepoissuefromcrash) - Get project issue related to a crash group
* [bugtrackerGetSettings](docs/alerting/README.md#bugtrackergetsettings) - Get bug tracker settings for a particular app
* [notificationsGetAppEmailSettings](docs/alerting/README.md#notificationsgetappemailsettings) - Get Email notification settings of user for a particular app
* [notificationsGetUserEmailSettings](docs/alerting/README.md#notificationsgetuseremailsettings) - Get Default email notification settings for the user
* [webhooksList](docs/alerting/README.md#webhookslist) - Get web hooks configured for a particular app

### [analytics](docs/analytics/README.md)

* [analyticsAudienceNameExists](docs/analytics/README.md#analyticsaudiencenameexists) - Returns whether audience definition exists.
* [~~analyticsCrashCounts~~](docs/analytics/README.md#analyticscrashcounts) - Available for UWP apps only. :warning: **Deprecated**
* [~~analyticsCrashFreeDevicePercentages~~](docs/analytics/README.md#analyticscrashfreedevicepercentages) - Percentage of crash-free device by day in the time range based on the selected versions. Api will return -1 if crash devices is greater than active devices. :warning: **Deprecated**
* [~~analyticsCrashGroupCounts~~](docs/analytics/README.md#analyticscrashgroupcounts) - Available for UWP apps only. :warning: **Deprecated**
* [~~analyticsCrashGroupModelCounts~~](docs/analytics/README.md#analyticscrashgroupmodelcounts) - Available for UWP apps only. :warning: **Deprecated**
* [~~analyticsCrashGroupOperatingSystemCounts~~](docs/analytics/README.md#analyticscrashgroupoperatingsystemcounts) - Available for UWP apps only. :warning: **Deprecated**
* [~~analyticsCrashGroupTotals~~](docs/analytics/README.md#analyticscrashgrouptotals) - Available for UWP apps only. :warning: **Deprecated**
* [analyticsCrashGroupsTotals](docs/analytics/README.md#analyticscrashgroupstotals) - Overall crashes and affected users count of the selected crash groups with selected versions.
* [analyticsCreateOrUpdateAudience](docs/analytics/README.md#analyticscreateorupdateaudience) - Creates or updates audience definition.
* [analyticsDeleteAudience](docs/analytics/README.md#analyticsdeleteaudience) - Deletes audience definition.
* [analyticsDeviceCounts](docs/analytics/README.md#analyticsdevicecounts) - Count of active devices by interval in the time range.
* [analyticsDistributionReleaseCounts](docs/analytics/README.md#analyticsdistributionreleasecounts) - Count of total downloads for the provided distribution releases.
* [analyticsEventCount](docs/analytics/README.md#analyticseventcount) - Count of events by interval in the time range.
* [analyticsEventDeviceCount](docs/analytics/README.md#analyticseventdevicecount) - Count of devices for an event by interval in the time range.
* [analyticsEventPerDeviceCount](docs/analytics/README.md#analyticseventperdevicecount) - Count of events per device by interval in the time range.
* [analyticsEventPerSessionCount](docs/analytics/README.md#analyticseventpersessioncount) - Count of events per session by interval in the time range.
* [analyticsEventProperties](docs/analytics/README.md#analyticseventproperties) - Event properties.
* [analyticsEventPropertyCounts](docs/analytics/README.md#analyticseventpropertycounts) - Event properties value counts during the time range in descending order.
* [analyticsEvents](docs/analytics/README.md#analyticsevents) - Count of active events in the time range ordered by event.
* [analyticsEventsDelete](docs/analytics/README.md#analyticseventsdelete) - Delete the set of Events with the specified event names.
* [analyticsEventsDeleteLogs](docs/analytics/README.md#analyticseventsdeletelogs) - Delete the set of Events with the specified event names.
* [analyticsGenericLogFlow](docs/analytics/README.md#analyticsgenericlogflow) - Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.
* [analyticsGetAudience](docs/analytics/README.md#analyticsgetaudience) - Gets audience definition.
* [analyticsLanguageCounts](docs/analytics/README.md#analyticslanguagecounts) - Languages in the time range.
* [analyticsListAudiences](docs/analytics/README.md#analyticslistaudiences) - Get list of audiences.
* [analyticsListCustomProperties](docs/analytics/README.md#analyticslistcustomproperties) - Get list of custom properties.
* [analyticsListDeviceProperties](docs/analytics/README.md#analyticslistdeviceproperties) - Get list of device properties.
* [analyticsListDevicePropertyValues](docs/analytics/README.md#analyticslistdevicepropertyvalues) - Get list of device property values.
* [analyticsLogFlow](docs/analytics/README.md#analyticslogflow) - Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.
* [analyticsModelCounts](docs/analytics/README.md#analyticsmodelcounts) - Models in the time range.
* [analyticsOperatingSystemCounts](docs/analytics/README.md#analyticsoperatingsystemcounts) - OSes in the time range.
* [analyticsPerDeviceCounts](docs/analytics/README.md#analyticsperdevicecounts) - Count of sessions per device in the time range.
* [analyticsPlaceCounts](docs/analytics/README.md#analyticsplacecounts) - Places in the time range.
* [analyticsSessionCounts](docs/analytics/README.md#analyticssessioncounts) - Count of sessions in the time range.
* [analyticsSessionDurationsDistribution](docs/analytics/README.md#analyticssessiondurationsdistribution) - Gets session duration.
* [analyticsTestAudience](docs/analytics/README.md#analyticstestaudience) - Tests audience definition.
* [analyticsVersions](docs/analytics/README.md#analyticsversions) - Count of active versions in the time range ordered by version.
* [appBlockLogs](docs/analytics/README.md#appblocklogs) - **Warning, this operation is not reversible.** 

A successful call to this API will permanently stop ingesting any logs received via SDK by app_id, and cannot be restored. We advise caution when using this API, it is designed to permanently disable an app_id.

* [crashesListSessionLogs](docs/analytics/README.md#crasheslistsessionlogs) - Get session logs by crash ID
* [devicesBlockLogs](docs/analytics/README.md#devicesblocklogs) - **Warning, this operation is not reversible.**

 A successful call to this API will permanently stop ingesting any logs received via SDK for the given installation ID, and cannot be restored. We advise caution when using this API, it is designed to permanently disable collection from a specific installation of the app on a device, usually following the request from a user.


### [billing](docs/billing/README.md)

* [billingAggregatedInformationGetAll](docs/billing/README.md#billingaggregatedinformationgetall) - Aggregated Billing Information for the requesting user and the organizations in which the user is an admin.
* [billingAggregatedInformationGetByApp](docs/billing/README.md#billingaggregatedinformationgetbyapp) - Aggregated Billing Information for owner of a given app.
* [billingAggregatedInformationGetForOrg](docs/billing/README.md#billingaggregatedinformationgetfororg) - Aggregated Billing Information for a given Organization.

### [build](docs/build/README.md)

* [branchConfigurationsCreate](docs/build/README.md#branchconfigurationscreate) - Configures the branch for build
* [branchConfigurationsDelete](docs/build/README.md#branchconfigurationsdelete) - Deletes the branch build configuration
* [branchConfigurationsGet](docs/build/README.md#branchconfigurationsget) - Gets the branch configuration
* [branchConfigurationsUpdate](docs/build/README.md#branchconfigurationsupdate) - Reconfigures the branch for build
* [buildConfigurationsGet](docs/build/README.md#buildconfigurationsget) - Gets the build configuration in Azure pipeline YAML format
* [buildsCreate](docs/build/README.md#buildscreate) - Create a build
* [buildsDistribute](docs/build/README.md#buildsdistribute) - Distribute a build
* [buildsGet](docs/build/README.md#buildsget) - Returns the build detail for the given build ID
* [buildsGetDownloadUri](docs/build/README.md#buildsgetdownloaduri) - Gets the download URI
* [buildsGetLog](docs/build/README.md#buildsgetlog) - Get the build log
* [buildsGetStatusByAppId](docs/build/README.md#buildsgetstatusbyappid) - Application specific build service status
* [buildsListBranches](docs/build/README.md#buildslistbranches) - Returns the list of Git branches for this application
* [buildsListByBranch](docs/build/README.md#buildslistbybranch) - Returns the list of builds for the branch
* [buildsListToolsetProjects](docs/build/README.md#buildslisttoolsetprojects) - Returns the projects in the repository for the branch, for all toolsets
* [buildsListToolsets](docs/build/README.md#buildslisttoolsets) - Returns available toolsets for application
* [~~buildsListXamarinSDKBundles~~](docs/build/README.md#buildslistxamarinsdkbundles) - Gets the Xamarin SDK bundles available to this app :warning: **Deprecated**
* [~~buildsListXcodeVersions~~](docs/build/README.md#buildslistxcodeversions) - Gets the Xcode versions available to this app :warning: **Deprecated**
* [buildsUpdate](docs/build/README.md#buildsupdate) - Cancels a build
* [buildsWebhook](docs/build/README.md#buildswebhook) - Public webhook sink
* [commitsListByShaList](docs/build/README.md#commitslistbyshalist) - Returns commit information for a batch of shas
* [fileAssetsCreate](docs/build/README.md#fileassetscreate) - Create a new asset to upload a file
* [repositoriesList](docs/build/README.md#repositorieslist) - Gets the repositories available from the source code host
* [repositoryConfigurationsCreateOrUpdate](docs/build/README.md#repositoryconfigurationscreateorupdate) - Configures the repository for build
* [repositoryConfigurationsDelete](docs/build/README.md#repositoryconfigurationsdelete) - Removes the configuration for the repository
* [repositoryConfigurationsList](docs/build/README.md#repositoryconfigurationslist) - Returns the repository build configuration status of the app

### [codepush](docs/codepush/README.md)

* [codePushAcquisitionGetAcquisitionStatus](docs/codepush/README.md#codepushacquisitiongetacquisitionstatus) - Returns the acquisition service status to the caller
* [codePushAcquisitionUpdateCheck](docs/codepush/README.md#codepushacquisitionupdatecheck) - Check for updates
* [codePushAcquisitionUpdateDeployStatus](docs/codepush/README.md#codepushacquisitionupdatedeploystatus) - Report Deployment status metric
* [codePushAcquisitionUpdateDownloadStatus](docs/codepush/README.md#codepushacquisitionupdatedownloadstatus) - Report download of specified release
* [codePushDeploymentMetricsGet](docs/codepush/README.md#codepushdeploymentmetricsget) - Gets all releases metrics for specified Deployment
* [codePushDeploymentReleaseRollback](docs/codepush/README.md#codepushdeploymentreleaserollback) - Rollback the latest or a specific release for an app deployment
* [codePushDeploymentReleasesCreate](docs/codepush/README.md#codepushdeploymentreleasescreate) - Create a new CodePush release for the specified deployment
* [codePushDeploymentReleasesDelete](docs/codepush/README.md#codepushdeploymentreleasesdelete) - Clears a Deployment of releases
* [codePushDeploymentReleasesGet](docs/codepush/README.md#codepushdeploymentreleasesget) - Gets the history of releases on a Deployment
* [codePushDeploymentUploadCreate](docs/codepush/README.md#codepushdeploymentuploadcreate) - Create a new CodePush release upload for the specified deployment
* [codePushDeploymentsCreate](docs/codepush/README.md#codepushdeploymentscreate) - Creates a CodePush Deployment for the given app
* [codePushDeploymentsDelete](docs/codepush/README.md#codepushdeploymentsdelete) - Deletes a CodePush Deployment for the given app
* [codePushDeploymentsGet](docs/codepush/README.md#codepushdeploymentsget) - Gets a CodePush Deployment for the given app
* [codePushDeploymentsList](docs/codepush/README.md#codepushdeploymentslist) - Gets a list of CodePush deployments for the given app
* [codePushDeploymentsPromote](docs/codepush/README.md#codepushdeploymentspromote) - Promote one release (default latest one) from one deployment to another
* [codePushDeploymentsUpdate](docs/codepush/README.md#codepushdeploymentsupdate) - Modifies a CodePush Deployment for the given app
* [deploymentReleasesUpdate](docs/codepush/README.md#deploymentreleasesupdate) - Modifies a CodePush release metadata under the given Deployment
* [legacyCodePushAcquisitionUpdateCheck](docs/codepush/README.md#legacycodepushacquisitionupdatecheck) - Check for updates
* [legacyCodePushAcquisitionUpdateDownloadStatus](docs/codepush/README.md#legacycodepushacquisitionupdatedownloadstatus) - Report download of specified release
* [legacyCodePushAcquisitionUpdateInstallsStatus](docs/codepush/README.md#legacycodepushacquisitionupdateinstallsstatus) - Report deploy of specified release

### [crash](docs/crash/README.md)

* [~~crashGroupsGet~~](docs/crash/README.md#crashgroupsget) - Gets a specific group. :warning: **Deprecated**
* [~~crashGroupsGetStacktrace~~](docs/crash/README.md#crashgroupsgetstacktrace) - Gets a stacktrace for a specific crash. :warning: **Deprecated**
* [~~crashGroupsList~~](docs/crash/README.md#crashgroupslist) - Gets a list of crash groups and whether the list contains all available groups. :warning: **Deprecated**
* [~~crashGroupsUpdate~~](docs/crash/README.md#crashgroupsupdate) - Updates a group. :warning: **Deprecated**
* [~~crashesDelete~~](docs/crash/README.md#crashesdelete) - Delete a specific crash and related attachments and blobs for an app. :warning: **Deprecated**
* [~~crashesGet~~](docs/crash/README.md#crashesget) - Gets a specific crash for an app. :warning: **Deprecated**
* [~~crashesGetAppCrashesInfo~~](docs/crash/README.md#crashesgetappcrashesinfo) - Gets whether the application has any crashes. :warning: **Deprecated**
* [~~crashesGetAppVersions~~](docs/crash/README.md#crashesgetappversions) - Gets a list of application versions. :warning: **Deprecated**
* [~~crashesGetCrashAttachmentLocation~~](docs/crash/README.md#crashesgetcrashattachmentlocation) - Gets the URI location to download crash attachment. :warning: **Deprecated**
* [~~crashesGetCrashTextAttachmentContent~~](docs/crash/README.md#crashesgetcrashtextattachmentcontent) - Gets content of the text attachment. :warning: **Deprecated**
* [~~crashesGetNativeCrash~~](docs/crash/README.md#crashesgetnativecrash) - Gets the native log of a specific crash. :warning: **Deprecated**
* [~~crashesGetNativeCrashDownload~~](docs/crash/README.md#crashesgetnativecrashdownload) - Gets the native log of a specific crash as a text attachment. :warning: **Deprecated**
* [~~crashesGetRawCrashLocation~~](docs/crash/README.md#crashesgetrawcrashlocation) - Gets the URI location to download json of a specific crash. :warning: **Deprecated**
* [~~crashesGetStacktrace~~](docs/crash/README.md#crashesgetstacktrace) - Gets a stacktrace for a specific crash. :warning: **Deprecated**
* [~~crashesList~~](docs/crash/README.md#crasheslist) - Gets all crashes of a group. :warning: **Deprecated**
* [~~crashesListAttachments~~](docs/crash/README.md#crasheslistattachments) - Gets all attachments for a specific crash. :warning: **Deprecated**
* [missingSymbolGroupsGet](docs/crash/README.md#missingsymbolgroupsget) - Gets missing symbol crash group by its id
* [missingSymbolGroupsInfo](docs/crash/README.md#missingsymbolgroupsinfo) - Gets application level statistics for all missing symbol groups
* [missingSymbolGroupsList](docs/crash/README.md#missingsymbolgroupslist) - Gets top N (ordered by crash count) of crash groups by missing symbol
* [symbolUploadsComplete](docs/crash/README.md#symboluploadscomplete) - Commits or aborts the symbol upload process for a new set of symbols for the specified application
* [symbolUploadsCreate](docs/crash/README.md#symboluploadscreate) - Begins the symbol upload process for a new set of symbols for the specified application
* [symbolUploadsDelete](docs/crash/README.md#symboluploadsdelete) - Deletes a symbol upload by id for the specified application
* [symbolUploadsGet](docs/crash/README.md#symboluploadsget) - Gets a symbol upload by id for the specified application
* [symbolUploadsGetLocation](docs/crash/README.md#symboluploadsgetlocation) - Gets the URL to download the symbol upload
* [symbolUploadsList](docs/crash/README.md#symboluploadslist) - Gets a list of all uploads for the specified application
* [symbolsGet](docs/crash/README.md#symbolsget) - Returns a particular symbol by id (uuid) for the provided application
* [symbolsGetLocation](docs/crash/README.md#symbolsgetlocation) - Gets the URL to download the symbol
* [symbolsGetStatus](docs/crash/README.md#symbolsgetstatus) - Returns a particular symbol by id (uuid) for the provided application
* [symbolsIgnore](docs/crash/README.md#symbolsignore) - Marks a symbol by id (uuid) as ignored
* [symbolsList](docs/crash/README.md#symbolslist) - Returns the list of all symbols for the provided application

### [distribute](docs/distribute/README.md)

* [~~appleMappingTestFlightGroups~~](docs/distribute/README.md#applemappingtestflightgroups) - Fetch all apple test flight groups :warning: **Deprecated**
* [appleMappingCreate](docs/distribute/README.md#applemappingcreate) - Create a mapping for an existing app in apple store for the specified application.
* [appleMappingDelete](docs/distribute/README.md#applemappingdelete) - Delete mapping of apple app to an existing app in apple store.
* [appleMappingGet](docs/distribute/README.md#applemappingget) - Get mapping of apple app to an existing app in apple store.
* [devicesDeviceDetails](docs/distribute/README.md#devicesdevicedetails) - Returns the device details.
* [devicesGetReleaseUpdateDevicesStatus](docs/distribute/README.md#devicesgetreleaseupdatedevicesstatus) - Returns the resign status to the caller
* [devicesList](docs/distribute/README.md#deviceslist) - Returns all devices associated with the given distribution group
* [devicesListCsvFormat](docs/distribute/README.md#deviceslistcsvformat) - Returns all devices associated with the given distribution group.
* [devicesRegisterUserForDevice](docs/distribute/README.md#devicesregisteruserfordevice) - Registers a user for an existing device
* [devicesRemoveUserDevice](docs/distribute/README.md#devicesremoveuserdevice) - Removes an existing device from a user
* [devicesUserDevicesList](docs/distribute/README.md#devicesuserdeviceslist) - Returns all devices associated with the given user.
* [distibutionReleasesInstallAnalytics](docs/distribute/README.md#distibutionreleasesinstallanalytics) - Notify download(s) for the provided distribution release(s).
* [provisioningProfile](docs/distribute/README.md#provisioningprofile) - Return information about the provisioning profile. Only available for iOS.
* [releasesAddDistributionGroup](docs/distribute/README.md#releasesadddistributiongroup) - Distributes a release to a group
* [releasesAddStore](docs/distribute/README.md#releasesaddstore) - Distributes a release to a store
* [releasesAddTesters](docs/distribute/README.md#releasesaddtesters) - Distributes a release to a user
* [~~releasesAvailableToTester~~](docs/distribute/README.md#releasesavailabletotester) - Return detailed information about releases avaiable to a tester. :warning: **Deprecated**
* [releasesCreateReleaseUpload](docs/distribute/README.md#releasescreatereleaseupload) - Initiate a new release upload. This API is part of multi-step upload process.
* [releasesDelete](docs/distribute/README.md#releasesdelete) - Deletes a release.
* [releasesDeleteDistributionGroup](docs/distribute/README.md#releasesdeletedistributiongroup) - Delete the given distribution group from the release
* [releasesDeleteDistributionStore](docs/distribute/README.md#releasesdeletedistributionstore) - Delete the given distribution store from the release
* [releasesDeleteDistributionTester](docs/distribute/README.md#releasesdeletedistributiontester) - Delete the given tester from the release
* [releasesDeleteTesterFromDestinations](docs/distribute/README.md#releasesdeletetesterfromdestinations) - Delete the given tester from the all releases
* [releasesDeleteWithDistributionGroupId](docs/distribute/README.md#releasesdeletewithdistributiongroupid) - Deletes a release with id 'release_id' in a given distribution group.
* [releasesGetIosManifest](docs/distribute/README.md#releasesgetiosmanifest) - Returns the manifest.plist in XML format for installing the release on a device. Only available for iOS.
* [releasesGetLatestByDistributionGroup](docs/distribute/README.md#releasesgetlatestbydistributiongroup) - Return detailed information about a distributed release in a given distribution group.
* [releasesGetLatestByHash](docs/distribute/README.md#releasesgetlatestbyhash) - If 'latest' is not specified then it will return the specified release if it's enabled. If 'latest' is specified, regardless of whether a release hash is provided, the latest enabled release is returned.
* [releasesGetLatestByPublicDistributionGroup](docs/distribute/README.md#releasesgetlatestbypublicdistributiongroup) - Get a release with 'latest' for the given public group.
* [releasesGetLatestByUser](docs/distribute/README.md#releasesgetlatestbyuser) - Get a release with id `release_id`. If `release_id` is `latest`, return the latest release that was distributed to the current user (from all the distribution groups).
* [releasesGetLatestPrivateRelease](docs/distribute/README.md#releasesgetlatestprivaterelease) - Get the latest release distributed to a private group the given user is a member of for the given app.
* [~~releasesGetLatestPublicRelease~~](docs/distribute/README.md#releasesgetlatestpublicrelease) - Get the latest public release for the given app. :warning: **Deprecated**
* [releasesGetPublicGroupsForReleaseByHash](docs/distribute/README.md#releasesgetpublicgroupsforreleasebyhash) - Get all public distribution groups that a given release has been distributed to
* [releasesGetReleaseUploadStatus](docs/distribute/README.md#releasesgetreleaseuploadstatus) - Get the current status of the release upload.
* [releasesGetSparkleFeed](docs/distribute/README.md#releasesgetsparklefeed) - Gets the sparkle feed of the releases that are distributed to all the public distribution groups.
* [releasesList](docs/distribute/README.md#releaseslist) - Return basic information about releases.
* [releasesListByDistributionGroup](docs/distribute/README.md#releaseslistbydistributiongroup) - Return basic information about distributed releases in a given distribution group.
* [releasesListLatest](docs/distribute/README.md#releaseslistlatest) - Get the latest release from every distribution group associated with an application.
* [releasesPutDistributionGroup](docs/distribute/README.md#releasesputdistributiongroup) - Update details about the specified distribution group associated with the release
* [releasesPutDistributionTester](docs/distribute/README.md#releasesputdistributiontester) - Update details about the specified tester associated with the release
* [releasesUpdate](docs/distribute/README.md#releasesupdate) - Updates a release.
* [releasesUpdateDetails](docs/distribute/README.md#releasesupdatedetails) - Update details of a release.
* [releasesUpdateReleaseUploadStatus](docs/distribute/README.md#releasesupdatereleaseuploadstatus) - Update the current status of the release upload.
* [storeNotificationsGetNotificationByAppId](docs/distribute/README.md#storenotificationsgetnotificationbyappid) - Application specific store service status
* [storeReleasePublishLogsGet](docs/distribute/README.md#storereleasepublishlogsget) - Returns publish logs for a particular release published to a particular store
* [storeReleasesDelete](docs/distribute/README.md#storereleasesdelete) - delete the release with release Id
* [storeReleasesGet](docs/distribute/README.md#storereleasesget) - Return releases published in a store for releaseId and storeId
* [storeReleasesGetLatest](docs/distribute/README.md#storereleasesgetlatest) - Returns the latest release published in a store.
* [storeReleasesGetPublishError](docs/distribute/README.md#storereleasesgetpublisherror) - Return the Error Details of release which failed in publishing.
* [storeReleasesGetRealTimeStatusByReleaseId](docs/distribute/README.md#storereleasesgetrealtimestatusbyreleaseid) - Return the Real time Status publishing of release from store.
* [storeReleasesList](docs/distribute/README.md#storereleaseslist) - Return all releases published  in a store
* [storesCreate](docs/distribute/README.md#storescreate) - Create a new external store for the specified application.
* [storesDelete](docs/distribute/README.md#storesdelete) - delete the store based on specific store name.
* [storesGet](docs/distribute/README.md#storesget) - Return the store details for specified store name.
* [storesList](docs/distribute/README.md#storeslist) - Get all the store details from Storage store table for a particular application.
* [storesPatch](docs/distribute/README.md#storespatch) - Update the store.

### [errors](docs/errors/README.md)

* [errorsAppBuildsList](docs/errors/README.md#errorsappbuildslist) - List of app builds
* [errorsAvailableVersions](docs/errors/README.md#errorsavailableversions) - Get all available versions in the time range.
* [errorsCountsPerDay](docs/errors/README.md#errorscountsperday) - Count of crashes or errors by day in the time range based the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror.
* [errorsDeleteError](docs/errors/README.md#errorsdeleteerror) - Delete a specific error and related attachments and blobs for an app. Searchable data will not be deleted immediately and may take up to 30 days.
* [errorsErrorAttachmentLocation](docs/errors/README.md#errorserrorattachmentlocation) - Error attachment location.
* [errorsErrorAttachmentText](docs/errors/README.md#errorserrorattachmenttext) - Error attachment text.
* [errorsErrorAttachments](docs/errors/README.md#errorserrorattachments) - List error attachments.
* [errorsErrorDownload](docs/errors/README.md#errorserrordownload) - Download details for a specific error.
* [errorsErrorFreeDevicePercentages](docs/errors/README.md#errorserrorfreedevicepercentages) - Percentage of error-free devices by day in the time range based on the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror. API will return -1 if crash devices is greater than active devices
* [errorsErrorGroupsSearch](docs/errors/README.md#errorserrorgroupssearch) - Error groups list based on search parameters
* [errorsErrorLocation](docs/errors/README.md#errorserrorlocation) - Error location.
* [errorsErrorSearch](docs/errors/README.md#errorserrorsearch) - Errors list based on search parameters
* [errorsErrorStackTrace](docs/errors/README.md#errorserrorstacktrace) - Error Stacktrace details.
* [errorsGetErrorDetails](docs/errors/README.md#errorsgeterrordetails) - Error details.
* [errorsGroupCountsPerDay](docs/errors/README.md#errorsgroupcountsperday) - Count of errors by day in the time range of the selected error group with selected version
* [errorsGroupDetails](docs/errors/README.md#errorsgroupdetails) - Error group details
* [errorsGroupErrorFreeDevicePercentages](docs/errors/README.md#errorsgrouperrorfreedevicepercentages) - Percentage of error-free devices by day in the time range. Api will return -1 if crash devices is greater than active devices
* [errorsGroupErrorStackTrace](docs/errors/README.md#errorsgrouperrorstacktrace) - Gets the stack trace for the error group.
* [errorsGroupList](docs/errors/README.md#errorsgrouplist) - List of error groups
* [errorsGroupModelCounts](docs/errors/README.md#errorsgroupmodelcounts) - Top models of the selected error group.
* [errorsGroupOperatingSystemCounts](docs/errors/README.md#errorsgroupoperatingsystemcounts) - Top OSes of the selected error group.
* [errorsLatestErrorDetails](docs/errors/README.md#errorslatesterrordetails) - Latest error details.
* [errorsListForGroup](docs/errors/README.md#errorslistforgroup) - Get all errors for group
* [errorsListSessionLogs](docs/errors/README.md#errorslistsessionlogs) - Get session logs by error ID
* [errorsUpdateState](docs/errors/README.md#errorsupdatestate) - Update error group state
* [errorsGetRetentionSettings](docs/errors/README.md#errorsgetretentionsettings) - gets the retention settings in days

### [export](docs/export/README.md)

* [exportConfigurationsCreate](docs/export/README.md#exportconfigurationscreate) - Create new export configuration
* [exportConfigurationsDelete](docs/export/README.md#exportconfigurationsdelete) - Delete export configuration.
* [exportConfigurationsDisable](docs/export/README.md#exportconfigurationsdisable) - Disable export configuration.
* [exportConfigurationsEnable](docs/export/README.md#exportconfigurationsenable) - Enable export configuration.
* [exportConfigurationsGet](docs/export/README.md#exportconfigurationsget) - Get export configuration.
* [exportConfigurationsList](docs/export/README.md#exportconfigurationslist) - List export configurations.
* [exportConfigurationsPartialUpdate](docs/export/README.md#exportconfigurationspartialupdate) - Partially update export configuration.

### [gdpr](docs/gdpr/README.md)

* [dataSubjectRightCancelDeleteRequest](docs/gdpr/README.md#datasubjectrightcanceldeleterequest)
* [dataSubjectRightCancelExportRequest](docs/gdpr/README.md#datasubjectrightcancelexportrequest)
* [dataSubjectRightDeleteRequest](docs/gdpr/README.md#datasubjectrightdeleterequest)
* [dataSubjectRightDeleteStatusRequest](docs/gdpr/README.md#datasubjectrightdeletestatusrequest)
* [dataSubjectRightExportRequest](docs/gdpr/README.md#datasubjectrightexportrequest)
* [dataSubjectRightExportStatusRequest](docs/gdpr/README.md#datasubjectrightexportstatusrequest)

### [test](docs/test/README.md)

* [testArchiveTestRun](docs/test/README.md#testarchivetestrun) - Logically deletes a test run
* [testCreateDeviceSelection](docs/test/README.md#testcreatedeviceselection) - Creates a short ID for a list of devices
* [testCreateDeviceSetOfOwner](docs/test/README.md#testcreatedevicesetofowner) - Creates a device set belonging to the owner
* [testCreateDeviceSetOfUser](docs/test/README.md#testcreatedevicesetofuser) - Creates a device set belonging to the user
* [testCreateSubscription](docs/test/README.md#testcreatesubscription) - Accept a free trial subscription
* [testCreateTestRun](docs/test/README.md#testcreatetestrun) - Creates a new test run
* [testCreateTestSeries](docs/test/README.md#testcreatetestseries) - Creates new test series for an application
* [testDeleteDeviceSetOfOwner](docs/test/README.md#testdeletedevicesetofowner) - Deletes a device set belonging to the owner
* [testDeleteDeviceSetOfUser](docs/test/README.md#testdeletedevicesetofuser) - Deletes a device set belonging to the user
* [testDeleteTestSeries](docs/test/README.md#testdeletetestseries) - Deletes a single test series
* [testGdprExportAccount](docs/test/README.md#testgdprexportaccount) - Lists account data
* [testGdprExportAccounts](docs/test/README.md#testgdprexportaccounts) - Lists all the endpoints available for Test accounts data
* [testGdprExportApp](docs/test/README.md#testgdprexportapp) - Lists app data
* [testGdprExportApps](docs/test/README.md#testgdprexportapps) - Lists all the endpoints available for Test apps data
* [testGdprExportFeatureFlag](docs/test/README.md#testgdprexportfeatureflag) - Lists feature flag data
* [testGdprExportFileSetFile](docs/test/README.md#testgdprexportfilesetfile) - Lists file set file data
* [testGdprExportHashFile](docs/test/README.md#testgdprexporthashfile) - Lists hash file data
* [testGdprExportPipelineTest](docs/test/README.md#testgdprexportpipelinetest) - Lists pipeline test data
* [testGdprExportTestRun](docs/test/README.md#testgdprexporttestrun) - Lists test run data
* [testGetAllTestRunsForSeries](docs/test/README.md#testgetalltestrunsforseries) - Returns list of all test runs for a given test series
* [testGetAllTestSeries](docs/test/README.md#testgetalltestseries) - Returns list of all test series for an application
* [testGetDeviceConfigurations](docs/test/README.md#testgetdeviceconfigurations) - Returns a list of available devices
* [testGetDeviceSetOfOwner](docs/test/README.md#testgetdevicesetofowner) - Gets a device set belonging to the owner
* [testGetDeviceSetOfUser](docs/test/README.md#testgetdevicesetofuser) - Gets a device set belonging to the user
* [testGetSubscriptions](docs/test/README.md#testgetsubscriptions) - Get information about the currently active subscriptions, if any
* [testGetTestReport](docs/test/README.md#testgettestreport) - Returns a single test report
* [testGetTestRun](docs/test/README.md#testgettestrun) - Returns a single test runs
* [testGetTestRunState](docs/test/README.md#testgettestrunstate) - Gets state of the test run
* [testGetTestRuns](docs/test/README.md#testgettestruns) - Returns a list of test runs
* [testListDeviceSetsOfOwner](docs/test/README.md#testlistdevicesetsofowner) - Lists device sets belonging to the owner
* [testListDeviceSetsOfUser](docs/test/README.md#testlistdevicesetsofuser) - Lists device sets belonging to the user
* [testPatchTestSeries](docs/test/README.md#testpatchtestseries) - Updates name and slug of a test series
* [testStartTestRun](docs/test/README.md#teststarttestrun) - Starts test run
* [testStartUploadingFile](docs/test/README.md#teststartuploadingfile) - Uploads file for a test run
* [testStopTestRun](docs/test/README.md#teststoptestrun) - Stop a test run execution
* [testUpdateDeviceSetOfOwner](docs/test/README.md#testupdatedevicesetofowner) - Updates a device set belonging to the owner
* [testUpdateDeviceSetOfUser](docs/test/README.md#testupdatedevicesetofuser) - Updates a device set belonging to the user
* [testUploadHash](docs/test/README.md#testuploadhash) - Adds file with the given hash to a test run
* [testUploadHashesBatch](docs/test/README.md#testuploadhashesbatch) - Adds file with the given hash to a test run
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
