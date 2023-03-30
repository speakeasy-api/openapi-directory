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
        PathParams: operations.GETAnalyticsDataUsingGETPathParams{
            APIKey: "corrupti",
        },
        QueryParams: operations.GETAnalyticsDataUsingGETQueryParams{
            DataType: "sessionAnalytic",
            EndDate: "2022-07-12",
            Keys: "quibusdam",
            Precision: "DAILY",
            Stage: "PREVIEW",
            StartDate: "2022-09-12",
        },
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
## SDK Available Operations


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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
