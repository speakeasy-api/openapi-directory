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

import org.openapis.openapi.models.operations.UsersGetUserMetadataSecurity;
import org.openapis.openapi.models.operations.UsersGetUserMetadataRequest;
import org.openapis.openapi.models.operations.UsersGetUserMetadataResponse;
import org.openapis.openapi.models.shared.SchemeAPIToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersGetUserMetadataRequest req = new UsersGetUserMetadataRequest() {{
                security = new UsersGetUserMetadataSecurity() {{
                    apiToken = new SchemeAPIToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
            }};            

            UsersGetUserMetadataResponse res = sdk.account.usersGetUserMetadata(req);

            if (res.usersGetUserMetadata200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### account

* `usersGetUserMetadata`
* `appApiTokensDelete` - Delete the App Api Token object with the specific ID
* `appApiTokensList` - Returns App API tokens for the app
* `appApiTokensNew` - Creates a new App API token
* `appInvitationsAccept` - Accepts a pending invitation for the specified user
* `appInvitationsCreate` - Invites a new or existing user to an app
* `appInvitationsCreateByEmail` - Invites a new or existing user to an app
* `appInvitationsDelete` - Removes a user's invitation to an app
* `appInvitationsList` - Gets the pending invitations for the app
* `appInvitationsReject` - Rejects a pending invitation for the specified user
* `appInvitationsUpdatePermissions` - Update pending invitation permission
* `appsCreate` - Creates a new app and returns it to the caller
* `appsCreateForOrg` - Creates a new app for the organization and returns it to the caller
* `appsDelete` - Delete an app
* `appsDeleteAvatar` - Deletes the uploaded app avatar
* `appsGet` - Return a specific app with the given app name which belongs to the given owner.
* `appsGetForOrgUser` - Get a user apps information from an organization by name
* `appsGetTeams` - Returns the details of all teams that have access to the app.
* `appsList` - Returns a list of apps
* `appsListForOrg` - Returns a list of apps for the organization
* `appsListTesters` - Returns the testers associated with the app specified with the given app name which belongs to the given owner.
* `appsRemoveUser` - Removes the user from the app
* `appsTransferOwnershipJson` - Transfers ownership of an app to a different user or organization
* `appsTransferOwnershipRaw` - Transfers ownership of an app to a different user or organization
* `appsTransferToOrg` - Transfers ownership of an app to a new organization
* `appsUpdate` - Partially updates a single app
* `appsUpdateAvatar` - Sets the app avatar
* `appsUpdateUserPermissions` - Update user permission for the app
* `azureSubscriptionDeleteForApp` - Delete the azure subscriptions for the app
* `azureSubscriptionLinkForApp` - Link azure subscription to an app
* `azureSubscriptionListForApp` - Returns a list of azure subscriptions for the app
* `azureSubscriptionListForOrg` - Returns a list of azure subscriptions for the organization
* `azureSubscriptionListForUser` - Returns a list of azure subscriptions for the user
* `distributionGroupInvitationsAcceptAll` - Accepts all pending invitations to distribution groups for the specified user
* `distributionGroupsAddApps` - Add apps to distribution group in an org
* `distributionGroupsAddUser` - Adds the members to the specified distribution group
* `distributionGroupsAddUsersForOrg` - Accepts an array of user email addresses to get added to the specified group
* `distributionGroupsBulkDeleteApps` - Delete apps from distribution group in an org
* `distributionGroupsBulkDeleteUsers` - Delete testers from distribution group in an org
* `distributionGroupsCreate` - Creates a new distribution group and returns it to the caller
* `distributionGroupsCreateForOrg` - Creates a disribution goup which can be shared across apps under an organization
* `distributionGroupsDelete` - Deletes a distribution group
* `distributionGroupsDeleteForOrg` - Deletes a single distribution group from an org with a given distribution group name
* `distributionGroupsDetailsForOrg` - Returns a list of distribution groups with details for an organization
* `distributionGroupsGet` - Returns a single distribution group for a given distribution group name
* `distributionGroupsGetApps` - Get apps from a distribution group in an org
* `distributionGroupsGetForOrg` - Returns a single distribution group in org for a given distribution group name
* `distributionGroupsList` - Returns a list of distribution groups in the app specified
* `distributionGroupsListAllTestersForOrg` - Returns a unique list of users including the whole organization members plus testers in any shared group of that org
* `distributionGroupsListForOrg` - Returns a list of distribution groups in the org specified
* `distributionGroupsListUsers` - Returns a list of member details in the distribution group specified
* `distributionGroupsListUsersForOrg` - Returns a list of member in the distribution group specified
* `distributionGroupsPatchForOrg` - Update one given distribution group name in an org
* `distributionGroupsRemoveUser` - Remove the users from the distribution group
* `distributionGroupsResendInvite` - Resend distribution group app invite notification to previously invited testers
* `distributionGroupsResendSharedInvite` - Resend shared distribution group invite notification to previously invited testers
* `distributionGroupsUpdate` - Updates the attributes of distribution group
* `invitationsSent` - Returns all invitations sent by the caller
* `orgInvitations` - Removes a user's invitation to an organization
* `orgInvitationsAccept` - Accepts a pending organization invitation for the specified user
* `orgInvitationsCreate` - Invites a new or existing user to an organization
* `orgInvitationsDelete` - Removes a user's invitation to an organization
* `orgInvitationsListPending` - Gets the pending invitations for the organization
* `orgInvitationsReject` - Rejects a pending organization invitation
* `orgInvitationsSendNewInvitation` - Cancels an existing organization invitation for the user and sends a new one
* `orgInvitationsUpdate` - Allows the role of an invited user to be changed
* `organizationDeleteAvatar` - Deletes the uploaded organization avatar
* `organizationUpdateAvatar` - Sets the organization avatar
* `organizationsCreateOrUpdate` - Creates a new organization and returns it to the caller
* `organizationsDelete` - Deletes a single organization
* `organizationsGet` - Returns the details of a single organization
* `organizationsList` - Returns a list of organizations the requesting user has access to
* `organizationsListAdministered` - Returns a list organizations in which the requesting user is an admin
* `organizationsUpdate` - Returns a list of organizations the requesting user has access to
* `sharedconnectionConnections` - Gets all service connections of the service type for GDPR export.
* `teamsAddApp` - Adds an app to a team
* `teamsAddUser` - Adds a new user to a team that is owned by an organization
* `teamsCreateTeam` - Creates a team and returns it
* `teamsDelete` - Deletes a single team
* `teamsGetTeam` - Returns the details of a single team
* `teamsGetUsers` - Returns the users of a team which is owned by an organization
* `teamsListAll` - Returns the list of all teams in this org
* `teamsListApps` - Returns the apps a team has access to
* `teamsRemoveApp` - Removes an app from a team
* `teamsRemoveUser` - Removes a user from a team that is owned by an organization
* `teamsUpdate` - Updates a single team
* `teamsUpdatePermissions` - Updates the permissions the team has to the app
* `userApiTokensDelete` - Delete the user api_token object with the specific id
* `userApiTokensList` - Returns api tokens for the authenticated user
* `userApiTokensNew` - Creates a new User API token
* `usersGet` - Returns the user profile data
* `usersGetForOrg` - Get a user information from an organization by name - if there is explicit permission return it, if not if not return highest implicit permission
* `usersList` - Returns the users associated with the app specified with the given app name which belongs to the given owner.
* `usersListForOrg` - Returns a list of users that belong to an organization
* `usersRemoveFromOrg` - Removes a user from an organization.
* `usersUpdate` - Updates the user profile and returns the updated user data
* `usersUpdateOrgRole` - Updates the given organization user

### alerting

* `bugTrackerGetRepoIssueFromCrash` - Get project issue related to a crash group
* `bugtrackerGetSettings` - Get bug tracker settings for a particular app
* `notificationsGetAppEmailSettings` - Get Email notification settings of user for a particular app
* `notificationsGetUserEmailSettings` - Get Default email notification settings for the user
* `webhooksList` - Get web hooks configured for a particular app

### analytics

* `analyticsAudienceNameExists` - Returns whether audience definition exists.
* `analyticsCrashFreeDevicePercentages` - Percentage of crash-free device by day in the time range based on the selected versions. Api will return -1 if crash devices is greater than active devices.
* `analyticsCrashGroupCounts` - Available for UWP apps only.
* `analyticsCrashGroupModelCounts` - Available for UWP apps only.
* `analyticsCrashGroupOperatingSystemCounts` - Available for UWP apps only.
* `analyticsCrashGroupTotals` - Available for UWP apps only.
* `analyticsCrashGroupsTotals` - Overall crashes and affected users count of the selected crash groups with selected versions.
* `analyticsCreateOrUpdateAudience` - Creates or updates audience definition.
* `analyticsDeleteAudience` - Deletes audience definition.
* `analyticsDistributionReleaseCounts` - Count of total downloads for the provided distribution releases.
* `analyticsEventProperties` - Event properties.
* `analyticsEventsDelete` - Delete the set of Events with the specified event names.
* `analyticsEventsDeleteLogs` - Delete the set of Events with the specified event names.
* `analyticsGenericLogFlow` - Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.
* `analyticsGetAudience` - Gets audience definition.
* `analyticsListAudiences` - Get list of audiences.
* `analyticsListCustomProperties` - Get list of custom properties.
* `analyticsListDeviceProperties` - Get list of device properties.
* `analyticsListDevicePropertyValues` - Get list of device property values.
* `analyticsLogFlow` - Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.
* `analyticsTestAudience` - Tests audience definition.
* `appBlockLogs` - **Warning, this operation is not reversible.** 

A successful call to this API will permanently stop ingesting any logs received via SDK by app_id, and cannot be restored. We advise caution when using this API, it is designed to permanently disable an app_id.

* `crashesListSessionLogs` - Get session logs by crash ID
* `devicesBlockLogs` - **Warning, this operation is not reversible.**

 A successful call to this API will permanently stop ingesting any logs received via SDK for the given installation ID, and cannot be restored. We advise caution when using this API, it is designed to permanently disable collection from a specific installation of the app on a device, usually following the request from a user.


### billing

* `billingAggregatedInformationGetAll` - Aggregated Billing Information for the requesting user and the organizations in which the user is an admin.
* `billingAggregatedInformationGetByApp` - Aggregated Billing Information for owner of a given app.
* `billingAggregatedInformationGetForOrg` - Aggregated Billing Information for a given Organization.

### build

* `branchConfigurationsCreate` - Configures the branch for build
* `branchConfigurationsDelete` - Deletes the branch build configuration
* `branchConfigurationsGet` - Gets the branch configuration
* `branchConfigurationsUpdate` - Reconfigures the branch for build
* `buildConfigurationsGet` - Gets the build configuration in Azure pipeline YAML format
* `buildsCreate` - Create a build
* `buildsDistribute` - Distribute a build
* `buildsGet` - Returns the build detail for the given build ID
* `buildsGetDownloadUri` - Gets the download URI
* `buildsGetLog` - Get the build log
* `buildsGetStatusByAppId` - Application specific build service status
* `buildsListBranches` - Returns the list of Git branches for this application
* `buildsListByBranch` - Returns the list of builds for the branch
* `buildsListToolsetProjects` - Returns the projects in the repository for the branch, for all toolsets
* `buildsListToolsets` - Returns available toolsets for application
* `buildsListXamarinSDKBundles` - Gets the Xamarin SDK bundles available to this app
* `buildsListXcodeVersions` - Gets the Xcode versions available to this app
* `buildsUpdate` - Cancels a build
* `buildsWebhook` - Public webhook sink
* `commitsListByShaList` - Returns commit information for a batch of shas
* `fileAssetsCreate` - Create a new asset to upload a file
* `repositoriesList` - Gets the repositories available from the source code host
* `repositoryConfigurationsCreateOrUpdate` - Configures the repository for build
* `repositoryConfigurationsDelete` - Removes the configuration for the repository
* `repositoryConfigurationsList` - Returns the repository build configuration status of the app

### codepush

* `codePushAcquisitionGetAcquisitionStatus` - Returns the acquisition service status to the caller
* `codePushAcquisitionUpdateCheck` - Check for updates
* `codePushAcquisitionUpdateDeployStatus` - Report Deployment status metric
* `codePushAcquisitionUpdateDownloadStatus` - Report download of specified release
* `codePushDeploymentMetricsGet` - Gets all releases metrics for specified Deployment
* `codePushDeploymentReleaseRollback` - Rollback the latest or a specific release for an app deployment
* `codePushDeploymentReleasesCreate` - Create a new CodePush release for the specified deployment
* `codePushDeploymentReleasesDelete` - Clears a Deployment of releases
* `codePushDeploymentReleasesGet` - Gets the history of releases on a Deployment
* `codePushDeploymentUploadCreate` - Create a new CodePush release upload for the specified deployment
* `codePushDeploymentsCreate` - Creates a CodePush Deployment for the given app
* `codePushDeploymentsDelete` - Deletes a CodePush Deployment for the given app
* `codePushDeploymentsGet` - Gets a CodePush Deployment for the given app
* `codePushDeploymentsList` - Gets a list of CodePush deployments for the given app
* `codePushDeploymentsPromote` - Promote one release (default latest one) from one deployment to another
* `codePushDeploymentsUpdate` - Modifies a CodePush Deployment for the given app
* `deploymentReleasesUpdate` - Modifies a CodePush release metadata under the given Deployment
* `legacyCodePushAcquisitionUpdateCheck` - Check for updates
* `legacyCodePushAcquisitionUpdateDownloadStatus` - Report download of specified release
* `legacyCodePushAcquisitionUpdateInstallsStatus` - Report deploy of specified release

### crash

* `crashGroupsGet` - Gets a specific group.
* `crashGroupsGetStacktrace` - Gets a stacktrace for a specific crash.
* `crashGroupsList` - Gets a list of crash groups and whether the list contains all available groups.
* `crashGroupsUpdate` - Updates a group.
* `crashesDelete` - Delete a specific crash and related attachments and blobs for an app.
* `crashesGet` - Gets a specific crash for an app.
* `crashesGetAppCrashesInfo` - Gets whether the application has any crashes.
* `crashesGetAppVersions` - Gets a list of application versions.
* `crashesGetCrashAttachmentLocation` - Gets the URI location to download crash attachment.
* `crashesGetCrashTextAttachmentContent` - Gets content of the text attachment.
* `crashesGetNativeCrash` - Gets the native log of a specific crash.
* `crashesGetNativeCrashDownload` - Gets the native log of a specific crash as a text attachment.
* `crashesGetRawCrashLocation` - Gets the URI location to download json of a specific crash.
* `crashesGetStacktrace` - Gets a stacktrace for a specific crash.
* `crashesList` - Gets all crashes of a group.
* `crashesListAttachments` - Gets all attachments for a specific crash.
* `missingSymbolGroupsGet` - Gets missing symbol crash group by its id
* `missingSymbolGroupsInfo` - Gets application level statistics for all missing symbol groups
* `missingSymbolGroupsList` - Gets top N (ordered by crash count) of crash groups by missing symbol
* `symbolUploadsComplete` - Commits or aborts the symbol upload process for a new set of symbols for the specified application
* `symbolUploadsCreate` - Begins the symbol upload process for a new set of symbols for the specified application
* `symbolUploadsDelete` - Deletes a symbol upload by id for the specified application
* `symbolUploadsGet` - Gets a symbol upload by id for the specified application
* `symbolUploadsGetLocation` - Gets the URL to download the symbol upload
* `symbolUploadsList` - Gets a list of all uploads for the specified application
* `symbolsGet` - Returns a particular symbol by id (uuid) for the provided application
* `symbolsGetLocation` - Gets the URL to download the symbol
* `symbolsGetStatus` - Returns a particular symbol by id (uuid) for the provided application
* `symbolsIgnore` - Marks a symbol by id (uuid) as ignored
* `symbolsList` - Returns the list of all symbols for the provided application

### distribute

* `appleMappingTestFlightGroups` - Fetch all apple test flight groups
* `appleMappingCreate` - Create a mapping for an existing app in apple store for the specified application.
* `appleMappingDelete` - Delete mapping of apple app to an existing app in apple store.
* `appleMappingGet` - Get mapping of apple app to an existing app in apple store.
* `devicesDeviceDetails` - Returns the device details.
* `devicesGetReleaseUpdateDevicesStatus` - Returns the resign status to the caller
* `devicesList` - Returns all devices associated with the given distribution group
* `devicesListCsvFormat` - Returns all devices associated with the given distribution group.
* `devicesRegisterUserForDevice` - Registers a user for an existing device
* `devicesRemoveUserDevice` - Removes an existing device from a user
* `devicesUserDevicesList` - Returns all devices associated with the given user.
* `distibutionReleasesInstallAnalytics` - Notify download(s) for the provided distribution release(s).
* `provisioningProfile` - Return information about the provisioning profile. Only available for iOS.
* `releasesAddDistributionGroup` - Distributes a release to a group
* `releasesAddStore` - Distributes a release to a store
* `releasesAddTesters` - Distributes a release to a user
* `releasesAvailableToTester` - Return detailed information about releases avaiable to a tester.
* `releasesCreateReleaseUpload` - Initiate a new release upload. This API is part of multi-step upload process.
* `releasesDelete` - Deletes a release.
* `releasesDeleteDistributionGroup` - Delete the given distribution group from the release
* `releasesDeleteDistributionStore` - Delete the given distribution store from the release
* `releasesDeleteDistributionTester` - Delete the given tester from the release
* `releasesDeleteTesterFromDestinations` - Delete the given tester from the all releases
* `releasesDeleteWithDistributionGroupId` - Deletes a release with id 'release_id' in a given distribution group.
* `releasesGetIosManifest` - Returns the manifest.plist in XML format for installing the release on a device. Only available for iOS.
* `releasesGetLatestByDistributionGroup` - Return detailed information about a distributed release in a given distribution group.
* `releasesGetLatestByHash` - If 'latest' is not specified then it will return the specified release if it's enabled. If 'latest' is specified, regardless of whether a release hash is provided, the latest enabled release is returned.
* `releasesGetLatestByPublicDistributionGroup` - Get a release with 'latest' for the given public group.
* `releasesGetLatestByUser` - Get a release with id `release_id`. If `release_id` is `latest`, return the latest release that was distributed to the current user (from all the distribution groups).
* `releasesGetLatestPrivateRelease` - Get the latest release distributed to a private group the given user is a member of for the given app.
* `releasesGetLatestPublicRelease` - Get the latest public release for the given app.
* `releasesGetPublicGroupsForReleaseByHash` - Get all public distribution groups that a given release has been distributed to
* `releasesGetReleaseUploadStatus` - Get the current status of the release upload.
* `releasesGetSparkleFeed` - Gets the sparkle feed of the releases that are distributed to all the public distribution groups.
* `releasesList` - Return basic information about releases.
* `releasesListByDistributionGroup` - Return basic information about distributed releases in a given distribution group.
* `releasesListLatest` - Get the latest release from every distribution group associated with an application.
* `releasesPutDistributionGroup` - Update details about the specified distribution group associated with the release
* `releasesPutDistributionTester` - Update details about the specified tester associated with the release
* `releasesUpdate` - Updates a release.
* `releasesUpdateDetails` - Update details of a release.
* `releasesUpdateReleaseUploadStatus` - Update the current status of the release upload.
* `storeNotificationsGetNotificationByAppId` - Application specific store service status
* `storeReleasePublishLogsGet` - Returns publish logs for a particular release published to a particular store
* `storeReleasesDelete` - delete the release with release Id
* `storeReleasesGet` - Return releases published in a store for releaseId and storeId
* `storeReleasesGetLatest` - Returns the latest release published in a store.
* `storeReleasesGetPublishError` - Return the Error Details of release which failed in publishing.
* `storeReleasesGetRealTimeStatusByReleaseId` - Return the Real time Status publishing of release from store.
* `storeReleasesList` - Return all releases published  in a store
* `storesCreate` - Create a new external store for the specified application.
* `storesDelete` - delete the store based on specific store name.
* `storesGet` - Return the store details for specified store name.
* `storesList` - Get all the store details from Storage store table for a particular application.
* `storesPatch` - Update the store.

### errors

* `errorsAppBuildsList` - List of app builds
* `errorsAvailableVersions` - Get all available versions in the time range.
* `errorsCountsPerDay` - Count of crashes or errors by day in the time range based the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror.
* `errorsDeleteError` - Delete a specific error and related attachments and blobs for an app. Searchable data will not be deleted immediately and may take up to 30 days.
* `errorsErrorAttachmentLocation` - Error attachment location.
* `errorsErrorAttachmentText` - Error attachment text.
* `errorsErrorAttachments` - List error attachments.
* `errorsErrorDownload` - Download details for a specific error.
* `errorsErrorGroupsSearch` - Error groups list based on search parameters
* `errorsErrorLocation` - Error location.
* `errorsErrorSearch` - Errors list based on search parameters
* `errorsErrorStackTrace` - Error Stacktrace details.
* `errorsGetErrorDetails` - Error details.
* `errorsGroupCountsPerDay` - Count of errors by day in the time range of the selected error group with selected version
* `errorsGroupDetails` - Error group details
* `errorsGroupErrorFreeDevicePercentages` - Percentage of error-free devices by day in the time range. Api will return -1 if crash devices is greater than active devices
* `errorsGroupErrorStackTrace` - Gets the stack trace for the error group.
* `errorsGroupList` - List of error groups
* `errorsGroupModelCounts` - Top models of the selected error group.
* `errorsGroupOperatingSystemCounts` - Top OSes of the selected error group.
* `errorsLatestErrorDetails` - Latest error details.
* `errorsListForGroup` - Get all errors for group
* `errorsListSessionLogs` - Get session logs by error ID
* `errorsUpdateState` - Update error group state
* `errorsGetRetentionSettings` - gets the retention settings in days

### export

* `exportConfigurationsCreate` - Create new export configuration
* `exportConfigurationsDelete` - Delete export configuration.
* `exportConfigurationsDisable` - Disable export configuration.
* `exportConfigurationsEnable` - Enable export configuration.
* `exportConfigurationsGet` - Get export configuration.
* `exportConfigurationsList` - List export configurations.
* `exportConfigurationsPartialUpdate` - Partially update export configuration.

### gdpr

* `dataSubjectRightCancelDeleteRequest`
* `dataSubjectRightCancelExportRequest`
* `dataSubjectRightDeleteRequest`
* `dataSubjectRightDeleteStatusRequest`
* `dataSubjectRightExportRequest`
* `dataSubjectRightExportStatusRequest`

### test

* `testArchiveTestRun` - Logically deletes a test run
* `testCreateDeviceSelection` - Creates a short ID for a list of devices
* `testCreateDeviceSetOfOwner` - Creates a device set belonging to the owner
* `testCreateDeviceSetOfUser` - Creates a device set belonging to the user
* `testCreateSubscription` - Accept a free trial subscription
* `testCreateTestRun` - Creates a new test run
* `testCreateTestSeries` - Creates new test series for an application
* `testDeleteDeviceSetOfOwner` - Deletes a device set belonging to the owner
* `testDeleteDeviceSetOfUser` - Deletes a device set belonging to the user
* `testDeleteTestSeries` - Deletes a single test series
* `testGdprExportAccount` - Lists account data
* `testGdprExportAccounts` - Lists all the endpoints available for Test accounts data
* `testGdprExportApp` - Lists app data
* `testGdprExportApps` - Lists all the endpoints available for Test apps data
* `testGdprExportFeatureFlag` - Lists feature flag data
* `testGdprExportFileSetFile` - Lists file set file data
* `testGdprExportHashFile` - Lists hash file data
* `testGdprExportPipelineTest` - Lists pipeline test data
* `testGdprExportTestRun` - Lists test run data
* `testGetAllTestRunsForSeries` - Returns list of all test runs for a given test series
* `testGetAllTestSeries` - Returns list of all test series for an application
* `testGetDeviceConfigurations` - Returns a list of available devices
* `testGetDeviceSetOfOwner` - Gets a device set belonging to the owner
* `testGetDeviceSetOfUser` - Gets a device set belonging to the user
* `testGetSubscriptions` - Get information about the currently active subscriptions, if any
* `testGetTestReport` - Returns a single test report
* `testGetTestRun` - Returns a single test runs
* `testGetTestRunState` - Gets state of the test run
* `testGetTestRuns` - Returns a list of test runs
* `testListDeviceSetsOfOwner` - Lists device sets belonging to the owner
* `testListDeviceSetsOfUser` - Lists device sets belonging to the user
* `testPatchTestSeries` - Updates name and slug of a test series
* `testStartTestRun` - Starts test run
* `testStartUploadingFile` - Uploads file for a test run
* `testStopTestRun` - Stop a test run execution
* `testUpdateDeviceSetOfOwner` - Updates a device set belonging to the owner
* `testUpdateDeviceSetOfUser` - Updates a device set belonging to the user
* `testUploadHash` - Adds file with the given hash to a test run
* `testUploadHashesBatch` - Adds file with the given hash to a test run
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
