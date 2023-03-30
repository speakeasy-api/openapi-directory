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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.UsersGetUserMetadataRequest{
        Security: operations.UsersGetUserMetadataSecurity{
            APIToken: shared.SchemeAPIToken{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Account.UsersGetUserMetadata(ctx, req)
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
## SDK Available Operations


### Account

* `UsersGetUserMetadata`
* `AppAPITokensDelete` - Delete the App Api Token object with the specific ID
* `AppAPITokensList` - Returns App API tokens for the app
* `AppAPITokensNew` - Creates a new App API token
* `AppInvitationsAccept` - Accepts a pending invitation for the specified user
* `AppInvitationsCreate` - Invites a new or existing user to an app
* `AppInvitationsCreateByEmail` - Invites a new or existing user to an app
* `AppInvitationsDelete` - Removes a user's invitation to an app
* `AppInvitationsList` - Gets the pending invitations for the app
* `AppInvitationsReject` - Rejects a pending invitation for the specified user
* `AppInvitationsUpdatePermissions` - Update pending invitation permission
* `AppsCreate` - Creates a new app and returns it to the caller
* `AppsCreateForOrg` - Creates a new app for the organization and returns it to the caller
* `AppsDelete` - Delete an app
* `AppsDeleteAvatar` - Deletes the uploaded app avatar
* `AppsGet` - Return a specific app with the given app name which belongs to the given owner.
* `AppsGetForOrgUser` - Get a user apps information from an organization by name
* `AppsGetTeams` - Returns the details of all teams that have access to the app.
* `AppsList` - Returns a list of apps
* `AppsListForOrg` - Returns a list of apps for the organization
* `AppsListTesters` - Returns the testers associated with the app specified with the given app name which belongs to the given owner.
* `AppsRemoveUser` - Removes the user from the app
* `AppsTransferOwnershipJSON` - Transfers ownership of an app to a different user or organization
* `AppsTransferOwnershipRaw` - Transfers ownership of an app to a different user or organization
* `AppsTransferToOrg` - Transfers ownership of an app to a new organization
* `AppsUpdate` - Partially updates a single app
* `AppsUpdateAvatar` - Sets the app avatar
* `AppsUpdateUserPermissions` - Update user permission for the app
* `AzureSubscriptionDeleteForApp` - Delete the azure subscriptions for the app
* `AzureSubscriptionLinkForApp` - Link azure subscription to an app
* `AzureSubscriptionListForApp` - Returns a list of azure subscriptions for the app
* `AzureSubscriptionListForOrg` - Returns a list of azure subscriptions for the organization
* `AzureSubscriptionListForUser` - Returns a list of azure subscriptions for the user
* `DistributionGroupInvitationsAcceptAll` - Accepts all pending invitations to distribution groups for the specified user
* `DistributionGroupsAddApps` - Add apps to distribution group in an org
* `DistributionGroupsAddUser` - Adds the members to the specified distribution group
* `DistributionGroupsAddUsersForOrg` - Accepts an array of user email addresses to get added to the specified group
* `DistributionGroupsBulkDeleteApps` - Delete apps from distribution group in an org
* `DistributionGroupsBulkDeleteUsers` - Delete testers from distribution group in an org
* `DistributionGroupsCreate` - Creates a new distribution group and returns it to the caller
* `DistributionGroupsCreateForOrg` - Creates a disribution goup which can be shared across apps under an organization
* `DistributionGroupsDelete` - Deletes a distribution group
* `DistributionGroupsDeleteForOrg` - Deletes a single distribution group from an org with a given distribution group name
* `DistributionGroupsDetailsForOrg` - Returns a list of distribution groups with details for an organization
* `DistributionGroupsGet` - Returns a single distribution group for a given distribution group name
* `DistributionGroupsGetApps` - Get apps from a distribution group in an org
* `DistributionGroupsGetForOrg` - Returns a single distribution group in org for a given distribution group name
* `DistributionGroupsList` - Returns a list of distribution groups in the app specified
* `DistributionGroupsListAllTestersForOrg` - Returns a unique list of users including the whole organization members plus testers in any shared group of that org
* `DistributionGroupsListForOrg` - Returns a list of distribution groups in the org specified
* `DistributionGroupsListUsers` - Returns a list of member details in the distribution group specified
* `DistributionGroupsListUsersForOrg` - Returns a list of member in the distribution group specified
* `DistributionGroupsPatchForOrg` - Update one given distribution group name in an org
* `DistributionGroupsRemoveUser` - Remove the users from the distribution group
* `DistributionGroupsResendInvite` - Resend distribution group app invite notification to previously invited testers
* `DistributionGroupsResendSharedInvite` - Resend shared distribution group invite notification to previously invited testers
* `DistributionGroupsUpdate` - Updates the attributes of distribution group
* `InvitationsSent` - Returns all invitations sent by the caller
* `OrgInvitations` - Removes a user's invitation to an organization
* `OrgInvitationsAccept` - Accepts a pending organization invitation for the specified user
* `OrgInvitationsCreate` - Invites a new or existing user to an organization
* `OrgInvitationsDelete` - Removes a user's invitation to an organization
* `OrgInvitationsListPending` - Gets the pending invitations for the organization
* `OrgInvitationsReject` - Rejects a pending organization invitation
* `OrgInvitationsSendNewInvitation` - Cancels an existing organization invitation for the user and sends a new one
* `OrgInvitationsUpdate` - Allows the role of an invited user to be changed
* `OrganizationDeleteAvatar` - Deletes the uploaded organization avatar
* `OrganizationUpdateAvatar` - Sets the organization avatar
* `OrganizationsCreateOrUpdate` - Creates a new organization and returns it to the caller
* `OrganizationsDelete` - Deletes a single organization
* `OrganizationsGet` - Returns the details of a single organization
* `OrganizationsList` - Returns a list of organizations the requesting user has access to
* `OrganizationsListAdministered` - Returns a list organizations in which the requesting user is an admin
* `OrganizationsUpdate` - Returns a list of organizations the requesting user has access to
* `SharedconnectionConnections` - Gets all service connections of the service type for GDPR export.
* `TeamsAddApp` - Adds an app to a team
* `TeamsAddUser` - Adds a new user to a team that is owned by an organization
* `TeamsCreateTeam` - Creates a team and returns it
* `TeamsDelete` - Deletes a single team
* `TeamsGetTeam` - Returns the details of a single team
* `TeamsGetUsers` - Returns the users of a team which is owned by an organization
* `TeamsListAll` - Returns the list of all teams in this org
* `TeamsListApps` - Returns the apps a team has access to
* `TeamsRemoveApp` - Removes an app from a team
* `TeamsRemoveUser` - Removes a user from a team that is owned by an organization
* `TeamsUpdate` - Updates a single team
* `TeamsUpdatePermissions` - Updates the permissions the team has to the app
* `UserAPITokensDelete` - Delete the user api_token object with the specific id
* `UserAPITokensList` - Returns api tokens for the authenticated user
* `UserAPITokensNew` - Creates a new User API token
* `UsersGet` - Returns the user profile data
* `UsersGetForOrg` - Get a user information from an organization by name - if there is explicit permission return it, if not if not return highest implicit permission
* `UsersList` - Returns the users associated with the app specified with the given app name which belongs to the given owner.
* `UsersListForOrg` - Returns a list of users that belong to an organization
* `UsersRemoveFromOrg` - Removes a user from an organization.
* `UsersUpdate` - Updates the user profile and returns the updated user data
* `UsersUpdateOrgRole` - Updates the given organization user

### Alerting

* `BugTrackerGetRepoIssueFromCrash` - Get project issue related to a crash group
* `BugtrackerGetSettings` - Get bug tracker settings for a particular app
* `NotificationsGetAppEmailSettings` - Get Email notification settings of user for a particular app
* `NotificationsGetUserEmailSettings` - Get Default email notification settings for the user
* `WebhooksList` - Get web hooks configured for a particular app

### Analytics

* `AnalyticsAudienceNameExists` - Returns whether audience definition exists.
* `AnalyticsCrashFreeDevicePercentages` - Percentage of crash-free device by day in the time range based on the selected versions. Api will return -1 if crash devices is greater than active devices.
* `AnalyticsCrashGroupCounts` - Available for UWP apps only.
* `AnalyticsCrashGroupModelCounts` - Available for UWP apps only.
* `AnalyticsCrashGroupOperatingSystemCounts` - Available for UWP apps only.
* `AnalyticsCrashGroupTotals` - Available for UWP apps only.
* `AnalyticsCrashGroupsTotals` - Overall crashes and affected users count of the selected crash groups with selected versions.
* `AnalyticsCreateOrUpdateAudience` - Creates or updates audience definition.
* `AnalyticsDeleteAudience` - Deletes audience definition.
* `AnalyticsDistributionReleaseCounts` - Count of total downloads for the provided distribution releases.
* `AnalyticsEventProperties` - Event properties.
* `AnalyticsEventsDelete` - Delete the set of Events with the specified event names.
* `AnalyticsEventsDeleteLogs` - Delete the set of Events with the specified event names.
* `AnalyticsGenericLogFlow` - Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.
* `AnalyticsGetAudience` - Gets audience definition.
* `AnalyticsListAudiences` - Get list of audiences.
* `AnalyticsListCustomProperties` - Get list of custom properties.
* `AnalyticsListDeviceProperties` - Get list of device properties.
* `AnalyticsListDevicePropertyValues` - Get list of device property values.
* `AnalyticsLogFlow` - Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.
* `AnalyticsTestAudience` - Tests audience definition.
* `AppBlockLogs` - **Warning, this operation is not reversible.** 

A successful call to this API will permanently stop ingesting any logs received via SDK by app_id, and cannot be restored. We advise caution when using this API, it is designed to permanently disable an app_id.

* `CrashesListSessionLogs` - Get session logs by crash ID
* `DevicesBlockLogs` - **Warning, this operation is not reversible.**

 A successful call to this API will permanently stop ingesting any logs received via SDK for the given installation ID, and cannot be restored. We advise caution when using this API, it is designed to permanently disable collection from a specific installation of the app on a device, usually following the request from a user.


### Billing

* `BillingAggregatedInformationGetAll` - Aggregated Billing Information for the requesting user and the organizations in which the user is an admin.
* `BillingAggregatedInformationGetByApp` - Aggregated Billing Information for owner of a given app.
* `BillingAggregatedInformationGetForOrg` - Aggregated Billing Information for a given Organization.

### Build

* `BranchConfigurationsCreate` - Configures the branch for build
* `BranchConfigurationsDelete` - Deletes the branch build configuration
* `BranchConfigurationsGet` - Gets the branch configuration
* `BranchConfigurationsUpdate` - Reconfigures the branch for build
* `BuildConfigurationsGet` - Gets the build configuration in Azure pipeline YAML format
* `BuildsCreate` - Create a build
* `BuildsDistribute` - Distribute a build
* `BuildsGet` - Returns the build detail for the given build ID
* `BuildsGetDownloadURI` - Gets the download URI
* `BuildsGetLog` - Get the build log
* `BuildsGetStatusByAppID` - Application specific build service status
* `BuildsListBranches` - Returns the list of Git branches for this application
* `BuildsListByBranch` - Returns the list of builds for the branch
* `BuildsListToolsetProjects` - Returns the projects in the repository for the branch, for all toolsets
* `BuildsListToolsets` - Returns available toolsets for application
* `BuildsListXamarinSDKBundles` - Gets the Xamarin SDK bundles available to this app
* `BuildsListXcodeVersions` - Gets the Xcode versions available to this app
* `BuildsUpdate` - Cancels a build
* `BuildsWebhook` - Public webhook sink
* `CommitsListByShaList` - Returns commit information for a batch of shas
* `FileAssetsCreate` - Create a new asset to upload a file
* `RepositoriesList` - Gets the repositories available from the source code host
* `RepositoryConfigurationsCreateOrUpdate` - Configures the repository for build
* `RepositoryConfigurationsDelete` - Removes the configuration for the repository
* `RepositoryConfigurationsList` - Returns the repository build configuration status of the app

### Codepush

* `CodePushAcquisitionGetAcquisitionStatus` - Returns the acquisition service status to the caller
* `CodePushAcquisitionUpdateCheck` - Check for updates
* `CodePushAcquisitionUpdateDeployStatus` - Report Deployment status metric
* `CodePushAcquisitionUpdateDownloadStatus` - Report download of specified release
* `CodePushDeploymentMetricsGet` - Gets all releases metrics for specified Deployment
* `CodePushDeploymentReleaseRollback` - Rollback the latest or a specific release for an app deployment
* `CodePushDeploymentReleasesCreate` - Create a new CodePush release for the specified deployment
* `CodePushDeploymentReleasesDelete` - Clears a Deployment of releases
* `CodePushDeploymentReleasesGet` - Gets the history of releases on a Deployment
* `CodePushDeploymentUploadCreate` - Create a new CodePush release upload for the specified deployment
* `CodePushDeploymentsCreate` - Creates a CodePush Deployment for the given app
* `CodePushDeploymentsDelete` - Deletes a CodePush Deployment for the given app
* `CodePushDeploymentsGet` - Gets a CodePush Deployment for the given app
* `CodePushDeploymentsList` - Gets a list of CodePush deployments for the given app
* `CodePushDeploymentsPromote` - Promote one release (default latest one) from one deployment to another
* `CodePushDeploymentsUpdate` - Modifies a CodePush Deployment for the given app
* `DeploymentReleasesUpdate` - Modifies a CodePush release metadata under the given Deployment
* `LegacyCodePushAcquisitionUpdateCheck` - Check for updates
* `LegacyCodePushAcquisitionUpdateDownloadStatus` - Report download of specified release
* `LegacyCodePushAcquisitionUpdateInstallsStatus` - Report deploy of specified release

### Crash

* `CrashGroupsGet` - Gets a specific group.
* `CrashGroupsGetStacktrace` - Gets a stacktrace for a specific crash.
* `CrashGroupsList` - Gets a list of crash groups and whether the list contains all available groups.
* `CrashGroupsUpdate` - Updates a group.
* `CrashesDelete` - Delete a specific crash and related attachments and blobs for an app.
* `CrashesGet` - Gets a specific crash for an app.
* `CrashesGetAppCrashesInfo` - Gets whether the application has any crashes.
* `CrashesGetAppVersions` - Gets a list of application versions.
* `CrashesGetCrashAttachmentLocation` - Gets the URI location to download crash attachment.
* `CrashesGetCrashTextAttachmentContent` - Gets content of the text attachment.
* `CrashesGetNativeCrash` - Gets the native log of a specific crash.
* `CrashesGetNativeCrashDownload` - Gets the native log of a specific crash as a text attachment.
* `CrashesGetRawCrashLocation` - Gets the URI location to download json of a specific crash.
* `CrashesGetStacktrace` - Gets a stacktrace for a specific crash.
* `CrashesList` - Gets all crashes of a group.
* `CrashesListAttachments` - Gets all attachments for a specific crash.
* `MissingSymbolGroupsGet` - Gets missing symbol crash group by its id
* `MissingSymbolGroupsInfo` - Gets application level statistics for all missing symbol groups
* `MissingSymbolGroupsList` - Gets top N (ordered by crash count) of crash groups by missing symbol
* `SymbolUploadsComplete` - Commits or aborts the symbol upload process for a new set of symbols for the specified application
* `SymbolUploadsCreate` - Begins the symbol upload process for a new set of symbols for the specified application
* `SymbolUploadsDelete` - Deletes a symbol upload by id for the specified application
* `SymbolUploadsGet` - Gets a symbol upload by id for the specified application
* `SymbolUploadsGetLocation` - Gets the URL to download the symbol upload
* `SymbolUploadsList` - Gets a list of all uploads for the specified application
* `SymbolsGet` - Returns a particular symbol by id (uuid) for the provided application
* `SymbolsGetLocation` - Gets the URL to download the symbol
* `SymbolsGetStatus` - Returns a particular symbol by id (uuid) for the provided application
* `SymbolsIgnore` - Marks a symbol by id (uuid) as ignored
* `SymbolsList` - Returns the list of all symbols for the provided application

### Distribute

* `AppleMappingTestFlightGroups` - Fetch all apple test flight groups
* `AppleMappingCreate` - Create a mapping for an existing app in apple store for the specified application.
* `AppleMappingDelete` - Delete mapping of apple app to an existing app in apple store.
* `AppleMappingGet` - Get mapping of apple app to an existing app in apple store.
* `DevicesDeviceDetails` - Returns the device details.
* `DevicesGetReleaseUpdateDevicesStatus` - Returns the resign status to the caller
* `DevicesList` - Returns all devices associated with the given distribution group
* `DevicesListCsvFormat` - Returns all devices associated with the given distribution group.
* `DevicesRegisterUserForDevice` - Registers a user for an existing device
* `DevicesRemoveUserDevice` - Removes an existing device from a user
* `DevicesUserDevicesList` - Returns all devices associated with the given user.
* `DistibutionReleasesInstallAnalytics` - Notify download(s) for the provided distribution release(s).
* `ProvisioningProfile` - Return information about the provisioning profile. Only available for iOS.
* `ReleasesAddDistributionGroup` - Distributes a release to a group
* `ReleasesAddStore` - Distributes a release to a store
* `ReleasesAddTesters` - Distributes a release to a user
* `ReleasesAvailableToTester` - Return detailed information about releases avaiable to a tester.
* `ReleasesCreateReleaseUpload` - Initiate a new release upload. This API is part of multi-step upload process.
* `ReleasesDelete` - Deletes a release.
* `ReleasesDeleteDistributionGroup` - Delete the given distribution group from the release
* `ReleasesDeleteDistributionStore` - Delete the given distribution store from the release
* `ReleasesDeleteDistributionTester` - Delete the given tester from the release
* `ReleasesDeleteTesterFromDestinations` - Delete the given tester from the all releases
* `ReleasesDeleteWithDistributionGroupID` - Deletes a release with id 'release_id' in a given distribution group.
* `ReleasesGetIosManifest` - Returns the manifest.plist in XML format for installing the release on a device. Only available for iOS.
* `ReleasesGetLatestByDistributionGroup` - Return detailed information about a distributed release in a given distribution group.
* `ReleasesGetLatestByHash` - If 'latest' is not specified then it will return the specified release if it's enabled. If 'latest' is specified, regardless of whether a release hash is provided, the latest enabled release is returned.
* `ReleasesGetLatestByPublicDistributionGroup` - Get a release with 'latest' for the given public group.
* `ReleasesGetLatestByUser` - Get a release with id `release_id`. If `release_id` is `latest`, return the latest release that was distributed to the current user (from all the distribution groups).
* `ReleasesGetLatestPrivateRelease` - Get the latest release distributed to a private group the given user is a member of for the given app.
* `ReleasesGetLatestPublicRelease` - Get the latest public release for the given app.
* `ReleasesGetPublicGroupsForReleaseByHash` - Get all public distribution groups that a given release has been distributed to
* `ReleasesGetReleaseUploadStatus` - Get the current status of the release upload.
* `ReleasesGetSparkleFeed` - Gets the sparkle feed of the releases that are distributed to all the public distribution groups.
* `ReleasesList` - Return basic information about releases.
* `ReleasesListByDistributionGroup` - Return basic information about distributed releases in a given distribution group.
* `ReleasesListLatest` - Get the latest release from every distribution group associated with an application.
* `ReleasesPutDistributionGroup` - Update details about the specified distribution group associated with the release
* `ReleasesPutDistributionTester` - Update details about the specified tester associated with the release
* `ReleasesUpdate` - Updates a release.
* `ReleasesUpdateDetails` - Update details of a release.
* `ReleasesUpdateReleaseUploadStatus` - Update the current status of the release upload.
* `StoreNotificationsGetNotificationByAppID` - Application specific store service status
* `StoreReleasePublishLogsGet` - Returns publish logs for a particular release published to a particular store
* `StoreReleasesDelete` - delete the release with release Id
* `StoreReleasesGet` - Return releases published in a store for releaseId and storeId
* `StoreReleasesGetLatest` - Returns the latest release published in a store.
* `StoreReleasesGetPublishError` - Return the Error Details of release which failed in publishing.
* `StoreReleasesGetRealTimeStatusByReleaseID` - Return the Real time Status publishing of release from store.
* `StoreReleasesList` - Return all releases published  in a store
* `StoresCreate` - Create a new external store for the specified application.
* `StoresDelete` - delete the store based on specific store name.
* `StoresGet` - Return the store details for specified store name.
* `StoresList` - Get all the store details from Storage store table for a particular application.
* `StoresPatch` - Update the store.

### Errors

* `ErrorsAppBuildsList` - List of app builds
* `ErrorsAvailableVersions` - Get all available versions in the time range.
* `ErrorsCountsPerDay` - Count of crashes or errors by day in the time range based the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror.
* `ErrorsDeleteError` - Delete a specific error and related attachments and blobs for an app. Searchable data will not be deleted immediately and may take up to 30 days.
* `ErrorsErrorAttachmentLocation` - Error attachment location.
* `ErrorsErrorAttachmentText` - Error attachment text.
* `ErrorsErrorAttachments` - List error attachments.
* `ErrorsErrorDownload` - Download details for a specific error.
* `ErrorsErrorGroupsSearch` - Error groups list based on search parameters
* `ErrorsErrorLocation` - Error location.
* `ErrorsErrorSearch` - Errors list based on search parameters
* `ErrorsErrorStackTrace` - Error Stacktrace details.
* `ErrorsGetErrorDetails` - Error details.
* `ErrorsGroupCountsPerDay` - Count of errors by day in the time range of the selected error group with selected version
* `ErrorsGroupDetails` - Error group details
* `ErrorsGroupErrorFreeDevicePercentages` - Percentage of error-free devices by day in the time range. Api will return -1 if crash devices is greater than active devices
* `ErrorsGroupErrorStackTrace` - Gets the stack trace for the error group.
* `ErrorsGroupList` - List of error groups
* `ErrorsGroupModelCounts` - Top models of the selected error group.
* `ErrorsGroupOperatingSystemCounts` - Top OSes of the selected error group.
* `ErrorsLatestErrorDetails` - Latest error details.
* `ErrorsListForGroup` - Get all errors for group
* `ErrorsListSessionLogs` - Get session logs by error ID
* `ErrorsUpdateState` - Update error group state
* `ErrorsGetRetentionSettings` - gets the retention settings in days

### Export

* `ExportConfigurationsCreate` - Create new export configuration
* `ExportConfigurationsDelete` - Delete export configuration.
* `ExportConfigurationsDisable` - Disable export configuration.
* `ExportConfigurationsEnable` - Enable export configuration.
* `ExportConfigurationsGet` - Get export configuration.
* `ExportConfigurationsList` - List export configurations.
* `ExportConfigurationsPartialUpdate` - Partially update export configuration.

### Gdpr

* `DataSubjectRightCancelDeleteRequest`
* `DataSubjectRightCancelExportRequest`
* `DataSubjectRightDeleteRequest`
* `DataSubjectRightDeleteStatusRequest`
* `DataSubjectRightExportRequest`
* `DataSubjectRightExportStatusRequest`

### Test

* `TestArchiveTestRun` - Logically deletes a test run
* `TestCreateDeviceSelection` - Creates a short ID for a list of devices
* `TestCreateDeviceSetOfOwner` - Creates a device set belonging to the owner
* `TestCreateDeviceSetOfUser` - Creates a device set belonging to the user
* `TestCreateSubscription` - Accept a free trial subscription
* `TestCreateTestRun` - Creates a new test run
* `TestCreateTestSeries` - Creates new test series for an application
* `TestDeleteDeviceSetOfOwner` - Deletes a device set belonging to the owner
* `TestDeleteDeviceSetOfUser` - Deletes a device set belonging to the user
* `TestDeleteTestSeries` - Deletes a single test series
* `TestGdprExportAccount` - Lists account data
* `TestGdprExportAccounts` - Lists all the endpoints available for Test accounts data
* `TestGdprExportApp` - Lists app data
* `TestGdprExportApps` - Lists all the endpoints available for Test apps data
* `TestGdprExportFeatureFlag` - Lists feature flag data
* `TestGdprExportFileSetFile` - Lists file set file data
* `TestGdprExportHashFile` - Lists hash file data
* `TestGdprExportPipelineTest` - Lists pipeline test data
* `TestGdprExportTestRun` - Lists test run data
* `TestGetAllTestRunsForSeries` - Returns list of all test runs for a given test series
* `TestGetAllTestSeries` - Returns list of all test series for an application
* `TestGetDeviceConfigurations` - Returns a list of available devices
* `TestGetDeviceSetOfOwner` - Gets a device set belonging to the owner
* `TestGetDeviceSetOfUser` - Gets a device set belonging to the user
* `TestGetSubscriptions` - Get information about the currently active subscriptions, if any
* `TestGetTestReport` - Returns a single test report
* `TestGetTestRun` - Returns a single test runs
* `TestGetTestRunState` - Gets state of the test run
* `TestGetTestRuns` - Returns a list of test runs
* `TestListDeviceSetsOfOwner` - Lists device sets belonging to the owner
* `TestListDeviceSetsOfUser` - Lists device sets belonging to the user
* `TestPatchTestSeries` - Updates name and slug of a test series
* `TestStartTestRun` - Starts test run
* `TestStartUploadingFile` - Uploads file for a test run
* `TestStopTestRun` - Stop a test run execution
* `TestUpdateDeviceSetOfOwner` - Updates a device set belonging to the owner
* `TestUpdateDeviceSetOfUser` - Updates a device set belonging to the user
* `TestUploadHash` - Adds file with the given hash to a test run
* `TestUploadHashesBatch` - Adds file with the given hash to a test run
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
