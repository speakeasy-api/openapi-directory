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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Analytics.GETAnalyticsDataUsingGET(ctx, operations.GETAnalyticsDataUsingGETRequest{
        APIKey: "corrupti",
        DataType: operations.GETAnalyticsDataUsingGETDataTypeEnumSessionAnalytic,
        EndDate: types.MustDateFromString("2021-04-24"),
        Keys: sdk.String("unde"),
        Precision: operations.GETAnalyticsDataUsingGETPrecisionEnumMonthly,
        Stage: operations.GETAnalyticsDataUsingGETStageEnumPreview,
        StartDate: types.MustDateFromString("2021-09-24"),
    })
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


### [Analytics](docs/analytics/README.md)

* [GETAnalyticsDataUsingGET](docs/analytics/README.md#getanalyticsdatausingget) - Returns the results of executed query defined by the parameters passed in
* [GETDataCountUsingGET](docs/analytics/README.md#getdatacountusingget) - Returns the count of executed query
* [GETRetentionUsingGET](docs/analytics/README.md#getretentionusingget) - Returns the percentage of user retention over the last 30 days

### [BillingDetails](docs/billingdetails/README.md)

* [GetBillingDetails](docs/billingdetails/README.md#getbillingdetails) - Retrieves the Billing Details
* [PutBillingDetails](docs/billingdetails/README.md#putbillingdetails) - Updates the Billing Details

### [Credentials](docs/credentials/README.md)

* [UpdateCredentialSecretUsingPOST](docs/credentials/README.md#updatecredentialsecretusingpost) - Resets the secret of a credential

### [Experiments](docs/experiments/README.md)

* [CreateExperimentUsingPOST](docs/experiments/README.md#createexperimentusingpost) - createExperiment
* [DELETEExperimentUsingDELETE](docs/experiments/README.md#deleteexperimentusingdelete) - deleteExperiment
* [DoActionExperimentUsingPOST](docs/experiments/README.md#doactionexperimentusingpost) - doActionExperiment
* [GETExperimentUsingGET](docs/experiments/README.md#getexperimentusingget) - getExperiment
* [GETExperimentsUsingGET](docs/experiments/README.md#getexperimentsusingget) - getExperiments
* [UpdateExperimentUsingPUT](docs/experiments/README.md#updateexperimentusingput) - updateExperiment

### [GamesAdmin](docs/gamesadmin/README.md)

* [GETGamesEndpointsUsingGET](docs/gamesadmin/README.md#getgamesendpointsusingget) - getGamesEndpoints
* [ListDeletedUsingGET](docs/gamesadmin/README.md#listdeletedusingget) - listDeleted
* [ListUsingGET](docs/gamesadmin/README.md#listusingget) - list
* [RestoreDeletedGameUsingPOST](docs/gamesadmin/README.md#restoredeletedgameusingpost) - restoreDeletedGame

### [Manage](docs/manage/README.md)

* [CopySnapshotToExistingGameUsingPOST](docs/manage/README.md#copysnapshottoexistinggameusingpost) - copySnapshotToExistingGame
* [CreateQueryUsingPOST](docs/manage/README.md#createqueryusingpost) - createQuery
* [CreateScreenUsingPOST](docs/manage/README.md#createscreenusingpost) - createScreen
* [CreateSnapshotUsingPOST](docs/manage/README.md#createsnapshotusingpost) - createSnapshot
* [CreateSnippetUsingPOST](docs/manage/README.md#createsnippetusingpost) - createSnippet
* [DELETEQueryUsingDELETE](docs/manage/README.md#deletequeryusingdelete) - deleteQuery
* [DELETEScreenUsingDELETE](docs/manage/README.md#deletescreenusingdelete) - deleteScreen
* [DELETESnapshotUsingDELETE](docs/manage/README.md#deletesnapshotusingdelete) - deleteSnapshot
* [DELETESnippetUsingDELETE](docs/manage/README.md#deletesnippetusingdelete) - deleteSnippet
* [GETQueryUsingGET](docs/manage/README.md#getqueryusingget) - getQuery
* [GETScreenUsingGET](docs/manage/README.md#getscreenusingget) - getScreen
* [GETSnippetUsingGET](docs/manage/README.md#getsnippetusingget) - getSnippet
* [ListExecutableScreensUsingGET](docs/manage/README.md#listexecutablescreensusingget) - listExecutableScreens
* [ListQueriesUsingGET](docs/manage/README.md#listqueriesusingget) - listQueries
* [ListScreensUsingGET](docs/manage/README.md#listscreensusingget) - listScreens
* [ListSnapshotsUsingGET](docs/manage/README.md#listsnapshotsusingget) - listSnapshots
* [ListSnippetsUsingGET](docs/manage/README.md#listsnippetsusingget) - listSnippets
* [PublishSnapshotUsingPOST](docs/manage/README.md#publishsnapshotusingpost) - publishSnapshot
* [RevertSnapshotUsingPOST](docs/manage/README.md#revertsnapshotusingpost) - revertSnapshot
* [UpdateQueryUsingPUT](docs/manage/README.md#updatequeryusingput) - updateQuery
* [UpdateScreenUsingPUT](docs/manage/README.md#updatescreenusingput) - updateScreen
* [UpdateSnippetUsingPUT](docs/manage/README.md#updatesnippetusingput) - updateSnippet

### [Notifications](docs/notifications/README.md)

* [GETGameSummaryUsingGET](docs/notifications/README.md#getgamesummaryusingget) - getGameSummary

### [PushNotificationTest](docs/pushnotificationtest/README.md)

* [TestPushAmazonNotificationsUsingPOST](docs/pushnotificationtest/README.md#testpushamazonnotificationsusingpost) - testPushAmazonNotifications
* [TestPushAppleDevNotificationsUsingPOST](docs/pushnotificationtest/README.md#testpushappledevnotificationsusingpost) - testPushAppleDevNotifications
* [TestPushAppleProdNotificationsUsingPOST](docs/pushnotificationtest/README.md#testpushappleprodnotificationsusingpost) - testPushAppleProdNotifications
* [TestPushGoogleNotificationsUsingPOST](docs/pushnotificationtest/README.md#testpushgooglenotificationsusingpost) - testPushGoogleNotifications
* [TestViberIntegrationNotificationsUsingPOST](docs/pushnotificationtest/README.md#testviberintegrationnotificationsusingpost) - testViberIntegrationNotifications
* [TestViberProductionNotificationsUsingPOST](docs/pushnotificationtest/README.md#testviberproductionnotificationsusingpost) - testViberProductionNotifications
* [TestWindows8NotificationsUsingPOST](docs/pushnotificationtest/README.md#testwindows8notificationsusingpost) - testWindows8Notifications
* [TestWindowsPhone8NotificationsUsingPOST](docs/pushnotificationtest/README.md#testwindowsphone8notificationsusingpost) - testWindowsPhone8Notifications

### [Region](docs/region/README.md)

* [GETGameRegionOptionsUsingGET](docs/region/README.md#getgameregionoptionsusingget) - getGameRegionOptions
* [GETRegionOptionsUsingGET](docs/region/README.md#getregionoptionsusingget) - getRegionOptions
* [SetGameRegionUsingPOST](docs/region/README.md#setgameregionusingpost) - setGameRegion

### [Scripts](docs/scripts/README.md)

* [ExportZipUsingGET](docs/scripts/README.md#exportzipusingget) - exportZip
* [GETScriptDifferencesUsingGET](docs/scripts/README.md#getscriptdifferencesusingget) - getScriptDifferences
* [GETScriptVersionsUsingGET](docs/scripts/README.md#getscriptversionsusingget) - getScriptVersions
* [GETScriptVersionsUsingGET1](docs/scripts/README.md#getscriptversionsusingget1) - getScriptVersions
* [ImportAcceptUsingPOST](docs/scripts/README.md#importacceptusingpost) - importAccept
* [ImportZipUsingPOST](docs/scripts/README.md#importzipusingpost) - importZip

### [SegmentQueryFilters](docs/segmentqueryfilters/README.md)

* [GETSegmentQueryFiltersConfigUsingGET](docs/segmentqueryfilters/README.md#getsegmentqueryfiltersconfigusingget) - getSegmentQueryFiltersConfig
* [GETSegmentQueryFiltersUsingGET](docs/segmentqueryfilters/README.md#getsegmentqueryfiltersusingget) - getSegmentQueryFilters
* [GETSegmentQueryStandardFiltersUsingGET](docs/segmentqueryfilters/README.md#getsegmentquerystandardfiltersusingget) - getSegmentQueryStandardFilters
* [UpdateSegmentQueryFiltersConfigUsingPUT](docs/segmentqueryfilters/README.md#updatesegmentqueryfiltersconfigusingput) - updateSegmentQueryFiltersConfig

### [Snapshots](docs/snapshots/README.md)

* [CopySnapshotToExistingGameUsingPOST1](docs/snapshots/README.md#copysnapshottoexistinggameusingpost1) - copySnapshotToExistingGame
* [CopySnapshotToNewGameUsingPOST](docs/snapshots/README.md#copysnapshottonewgameusingpost) - copySnapshotToNewGame
* [CreateSnapshotsUsingPOST](docs/snapshots/README.md#createsnapshotsusingpost) - createSnapshots
* [DELETESnapshotUsingDELETE1](docs/snapshots/README.md#deletesnapshotusingdelete1) - deleteSnapshot
* [GETLiveSnapshotIDUsingGET](docs/snapshots/README.md#getlivesnapshotidusingget) - getLiveSnapshotId
* [GETSnapshotUsingGET](docs/snapshots/README.md#getsnapshotusingget) - getSnapshot
* [GETSnapshotsUsingGET](docs/snapshots/README.md#getsnapshotsusingget) - getSnapshots
* [GETSnapshotsUsingGET1](docs/snapshots/README.md#getsnapshotsusingget1) - getSnapshots
* [PublishSnapshotUsingPOST1](docs/snapshots/README.md#publishsnapshotusingpost1) - publishSnapshot
* [RevertToSnapshotUsingPOST](docs/snapshots/README.md#reverttosnapshotusingpost) - revertToSnapshot
* [UnpublishSnapshotUsingPOST](docs/snapshots/README.md#unpublishsnapshotusingpost) - unpublishSnapshot

### [TestHarness](docs/testharness/README.md)

* [CreateTestHarnessScenarioUsingPOST](docs/testharness/README.md#createtestharnessscenariousingpost) - createTestHarnessScenario
* [DELETETestHarnessScenarioUsingDELETE](docs/testharness/README.md#deletetestharnessscenariousingdelete) - deleteTestHarnessScenario
* [GETTestHarnessScenarioUsingGET](docs/testharness/README.md#gettestharnessscenariousingget) - getTestHarnessScenario
* [GETTestHarnessScenariosUsingGET](docs/testharness/README.md#gettestharnessscenariosusingget) - getTestHarnessScenarios
* [UpdateTestHarnessScenarioUsingPUT](docs/testharness/README.md#updatetestharnessscenariousingput) - updateTestHarnessScenario
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
