# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/gamesparks.net/game-details/v2/go
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

    req := operations.GETAnalyticsDataUsingGETRequest{
        APIKey: "corrupti",
        DataType: "sessionAnalytic",
        EndDate: "2021-04-24",
        Keys: "unde",
        Precision: "MONTHLY",
        Stage: "PREVIEW",
        StartDate: "2021-09-24",
    }

    ctx := context.Background()
    res, err := s.Analytics.GETAnalyticsDataUsingGET(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsDataSwaggerModels != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Analytics

* `GETAnalyticsDataUsingGET` - Returns the results of executed query defined by the parameters passed in
* `GETDataCountUsingGET` - Returns the count of executed query
* `GETRetentionUsingGET` - Returns the percentage of user retention over the last 30 days

### BillingDetails

* `GetBillingDetails` - Retrieves the Billing Details
* `PutBillingDetails` - Updates the Billing Details

### Credentials

* `UpdateCredentialSecretUsingPOST` - Resets the secret of a credential

### Experiments

* `CreateExperimentUsingPOST` - createExperiment
* `DELETEExperimentUsingDELETE` - deleteExperiment
* `DoActionExperimentUsingPOST` - doActionExperiment
* `GETExperimentUsingGET` - getExperiment
* `GETExperimentsUsingGET` - getExperiments
* `UpdateExperimentUsingPUT` - updateExperiment

### GamesAdmin

* `GETGamesEndpointsUsingGET` - getGamesEndpoints
* `ListDeletedUsingGET` - listDeleted
* `ListUsingGET` - list
* `RestoreDeletedGameUsingPOST` - restoreDeletedGame

### Manage

* `CopySnapshotToExistingGameUsingPOST` - copySnapshotToExistingGame
* `CreateQueryUsingPOST` - createQuery
* `CreateScreenUsingPOST` - createScreen
* `CreateSnapshotUsingPOST` - createSnapshot
* `CreateSnippetUsingPOST` - createSnippet
* `DELETEQueryUsingDELETE` - deleteQuery
* `DELETEScreenUsingDELETE` - deleteScreen
* `DELETESnapshotUsingDELETE` - deleteSnapshot
* `DELETESnippetUsingDELETE` - deleteSnippet
* `GETQueryUsingGET` - getQuery
* `GETScreenUsingGET` - getScreen
* `GETSnippetUsingGET` - getSnippet
* `ListExecutableScreensUsingGET` - listExecutableScreens
* `ListQueriesUsingGET` - listQueries
* `ListScreensUsingGET` - listScreens
* `ListSnapshotsUsingGET` - listSnapshots
* `ListSnippetsUsingGET` - listSnippets
* `PublishSnapshotUsingPOST` - publishSnapshot
* `RevertSnapshotUsingPOST` - revertSnapshot
* `UpdateQueryUsingPUT` - updateQuery
* `UpdateScreenUsingPUT` - updateScreen
* `UpdateSnippetUsingPUT` - updateSnippet

### Notifications

* `GETGameSummaryUsingGET` - getGameSummary

### PushNotificationTest

* `TestPushAmazonNotificationsUsingPOST` - testPushAmazonNotifications
* `TestPushAppleDevNotificationsUsingPOST` - testPushAppleDevNotifications
* `TestPushAppleProdNotificationsUsingPOST` - testPushAppleProdNotifications
* `TestPushGoogleNotificationsUsingPOST` - testPushGoogleNotifications
* `TestViberIntegrationNotificationsUsingPOST` - testViberIntegrationNotifications
* `TestViberProductionNotificationsUsingPOST` - testViberProductionNotifications
* `TestWindows8NotificationsUsingPOST` - testWindows8Notifications
* `TestWindowsPhone8NotificationsUsingPOST` - testWindowsPhone8Notifications

### Region

* `GETGameRegionOptionsUsingGET` - getGameRegionOptions
* `GETRegionOptionsUsingGET` - getRegionOptions
* `SetGameRegionUsingPOST` - setGameRegion

### Scripts

* `ExportZipUsingGET` - exportZip
* `GETScriptDifferencesUsingGET` - getScriptDifferences
* `GETScriptVersionsUsingGET` - getScriptVersions
* `GETScriptVersionsUsingGET1` - getScriptVersions
* `ImportAcceptUsingPOST` - importAccept
* `ImportZipUsingPOST` - importZip

### SegmentQueryFilters

* `GETSegmentQueryFiltersConfigUsingGET` - getSegmentQueryFiltersConfig
* `GETSegmentQueryFiltersUsingGET` - getSegmentQueryFilters
* `GETSegmentQueryStandardFiltersUsingGET` - getSegmentQueryStandardFilters
* `UpdateSegmentQueryFiltersConfigUsingPUT` - updateSegmentQueryFiltersConfig

### Snapshots

* `CopySnapshotToExistingGameUsingPOST1` - copySnapshotToExistingGame
* `CopySnapshotToNewGameUsingPOST` - copySnapshotToNewGame
* `CreateSnapshotsUsingPOST` - createSnapshots
* `DELETESnapshotUsingDELETE1` - deleteSnapshot
* `GETLiveSnapshotIDUsingGET` - getLiveSnapshotId
* `GETSnapshotUsingGET` - getSnapshot
* `GETSnapshotsUsingGET` - getSnapshots
* `GETSnapshotsUsingGET1` - getSnapshots
* `PublishSnapshotUsingPOST1` - publishSnapshot
* `RevertToSnapshotUsingPOST` - revertToSnapshot
* `UnpublishSnapshotUsingPOST` - unpublishSnapshot

### TestHarness

* `CreateTestHarnessScenarioUsingPOST` - createTestHarnessScenario
* `DELETETestHarnessScenarioUsingDELETE` - deleteTestHarnessScenario
* `GETTestHarnessScenarioUsingGET` - getTestHarnessScenario
* `GETTestHarnessScenariosUsingGET` - getTestHarnessScenarios
* `UpdateTestHarnessScenarioUsingPUT` - updateTestHarnessScenario
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
