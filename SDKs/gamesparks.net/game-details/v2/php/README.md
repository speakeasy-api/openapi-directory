# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETAnalyticsDataUsingGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAnalyticsDataUsingGETDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAnalyticsDataUsingGETPrecisionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAnalyticsDataUsingGETStageEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAnalyticsDataUsingGETRequest();
    $request->apiKey = 'corrupti';
    $request->dataType = GETAnalyticsDataUsingGETDataTypeEnum::SESSION_ANALYTIC;
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2021-04-24');
    $request->keys = 'unde';
    $request->precision = GETAnalyticsDataUsingGETPrecisionEnum::MONTHLY;
    $request->stage = GETAnalyticsDataUsingGETStageEnum::PREVIEW;
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2021-09-24');

    $response = $sdk->analytics->getAnalyticsDataUsingGET($request);

    if ($response->analyticsDataSwaggerModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [analytics](docs/analytics/README.md)

* [getAnalyticsDataUsingGET](docs/analytics/README.md#getanalyticsdatausingget) - Returns the results of executed query defined by the parameters passed in
* [getDataCountUsingGET](docs/analytics/README.md#getdatacountusingget) - Returns the count of executed query
* [getRetentionUsingGET](docs/analytics/README.md#getretentionusingget) - Returns the percentage of user retention over the last 30 days

### [billingDetails](docs/billingdetails/README.md)

* [getBillingDetails](docs/billingdetails/README.md#getbillingdetails) - Retrieves the Billing Details
* [putBillingDetails](docs/billingdetails/README.md#putbillingdetails) - Updates the Billing Details

### [credentials](docs/credentials/README.md)

* [updateCredentialSecretUsingPOST](docs/credentials/README.md#updatecredentialsecretusingpost) - Resets the secret of a credential

### [experiments](docs/experiments/README.md)

* [createExperimentUsingPOST](docs/experiments/README.md#createexperimentusingpost) - createExperiment
* [deleteExperimentUsingDELETE](docs/experiments/README.md#deleteexperimentusingdelete) - deleteExperiment
* [doActionExperimentUsingPOST](docs/experiments/README.md#doactionexperimentusingpost) - doActionExperiment
* [getExperimentUsingGET](docs/experiments/README.md#getexperimentusingget) - getExperiment
* [getExperimentsUsingGET](docs/experiments/README.md#getexperimentsusingget) - getExperiments
* [updateExperimentUsingPUT](docs/experiments/README.md#updateexperimentusingput) - updateExperiment

### [gamesAdmin](docs/gamesadmin/README.md)

* [getGamesEndpointsUsingGET](docs/gamesadmin/README.md#getgamesendpointsusingget) - getGamesEndpoints
* [listDeletedUsingGET](docs/gamesadmin/README.md#listdeletedusingget) - listDeleted
* [listUsingGET](docs/gamesadmin/README.md#listusingget) - list
* [restoreDeletedGameUsingPOST](docs/gamesadmin/README.md#restoredeletedgameusingpost) - restoreDeletedGame

### [manage](docs/manage/README.md)

* [copySnapshotToExistingGameUsingPOST](docs/manage/README.md#copysnapshottoexistinggameusingpost) - copySnapshotToExistingGame
* [createQueryUsingPOST](docs/manage/README.md#createqueryusingpost) - createQuery
* [createScreenUsingPOST](docs/manage/README.md#createscreenusingpost) - createScreen
* [createSnapshotUsingPOST](docs/manage/README.md#createsnapshotusingpost) - createSnapshot
* [createSnippetUsingPOST](docs/manage/README.md#createsnippetusingpost) - createSnippet
* [deleteQueryUsingDELETE](docs/manage/README.md#deletequeryusingdelete) - deleteQuery
* [deleteScreenUsingDELETE](docs/manage/README.md#deletescreenusingdelete) - deleteScreen
* [deleteSnapshotUsingDELETE](docs/manage/README.md#deletesnapshotusingdelete) - deleteSnapshot
* [deleteSnippetUsingDELETE](docs/manage/README.md#deletesnippetusingdelete) - deleteSnippet
* [getQueryUsingGET](docs/manage/README.md#getqueryusingget) - getQuery
* [getScreenUsingGET](docs/manage/README.md#getscreenusingget) - getScreen
* [getSnippetUsingGET](docs/manage/README.md#getsnippetusingget) - getSnippet
* [listExecutableScreensUsingGET](docs/manage/README.md#listexecutablescreensusingget) - listExecutableScreens
* [listQueriesUsingGET](docs/manage/README.md#listqueriesusingget) - listQueries
* [listScreensUsingGET](docs/manage/README.md#listscreensusingget) - listScreens
* [listSnapshotsUsingGET](docs/manage/README.md#listsnapshotsusingget) - listSnapshots
* [listSnippetsUsingGET](docs/manage/README.md#listsnippetsusingget) - listSnippets
* [publishSnapshotUsingPOST](docs/manage/README.md#publishsnapshotusingpost) - publishSnapshot
* [revertSnapshotUsingPOST](docs/manage/README.md#revertsnapshotusingpost) - revertSnapshot
* [updateQueryUsingPUT](docs/manage/README.md#updatequeryusingput) - updateQuery
* [updateScreenUsingPUT](docs/manage/README.md#updatescreenusingput) - updateScreen
* [updateSnippetUsingPUT](docs/manage/README.md#updatesnippetusingput) - updateSnippet

### [notifications](docs/notifications/README.md)

* [getGameSummaryUsingGET](docs/notifications/README.md#getgamesummaryusingget) - getGameSummary

### [pushNotificationTest](docs/pushnotificationtest/README.md)

* [testPushAmazonNotificationsUsingPOST](docs/pushnotificationtest/README.md#testpushamazonnotificationsusingpost) - testPushAmazonNotifications
* [testPushAppleDevNotificationsUsingPOST](docs/pushnotificationtest/README.md#testpushappledevnotificationsusingpost) - testPushAppleDevNotifications
* [testPushAppleProdNotificationsUsingPOST](docs/pushnotificationtest/README.md#testpushappleprodnotificationsusingpost) - testPushAppleProdNotifications
* [testPushGoogleNotificationsUsingPOST](docs/pushnotificationtest/README.md#testpushgooglenotificationsusingpost) - testPushGoogleNotifications
* [testViberIntegrationNotificationsUsingPOST](docs/pushnotificationtest/README.md#testviberintegrationnotificationsusingpost) - testViberIntegrationNotifications
* [testViberProductionNotificationsUsingPOST](docs/pushnotificationtest/README.md#testviberproductionnotificationsusingpost) - testViberProductionNotifications
* [testWindows8NotificationsUsingPOST](docs/pushnotificationtest/README.md#testwindows8notificationsusingpost) - testWindows8Notifications
* [testWindowsPhone8NotificationsUsingPOST](docs/pushnotificationtest/README.md#testwindowsphone8notificationsusingpost) - testWindowsPhone8Notifications

### [region](docs/region/README.md)

* [getGameRegionOptionsUsingGET](docs/region/README.md#getgameregionoptionsusingget) - getGameRegionOptions
* [getRegionOptionsUsingGET](docs/region/README.md#getregionoptionsusingget) - getRegionOptions
* [setGameRegionUsingPOST](docs/region/README.md#setgameregionusingpost) - setGameRegion

### [scripts](docs/scripts/README.md)

* [exportZipUsingGET](docs/scripts/README.md#exportzipusingget) - exportZip
* [getScriptDifferencesUsingGET](docs/scripts/README.md#getscriptdifferencesusingget) - getScriptDifferences
* [getScriptVersionsUsingGET](docs/scripts/README.md#getscriptversionsusingget) - getScriptVersions
* [getScriptVersionsUsingGET1](docs/scripts/README.md#getscriptversionsusingget1) - getScriptVersions
* [importAcceptUsingPOST](docs/scripts/README.md#importacceptusingpost) - importAccept
* [importZipUsingPOST](docs/scripts/README.md#importzipusingpost) - importZip

### [segmentQueryFilters](docs/segmentqueryfilters/README.md)

* [getSegmentQueryFiltersConfigUsingGET](docs/segmentqueryfilters/README.md#getsegmentqueryfiltersconfigusingget) - getSegmentQueryFiltersConfig
* [getSegmentQueryFiltersUsingGET](docs/segmentqueryfilters/README.md#getsegmentqueryfiltersusingget) - getSegmentQueryFilters
* [getSegmentQueryStandardFiltersUsingGET](docs/segmentqueryfilters/README.md#getsegmentquerystandardfiltersusingget) - getSegmentQueryStandardFilters
* [updateSegmentQueryFiltersConfigUsingPUT](docs/segmentqueryfilters/README.md#updatesegmentqueryfiltersconfigusingput) - updateSegmentQueryFiltersConfig

### [snapshots](docs/snapshots/README.md)

* [copySnapshotToExistingGameUsingPOST1](docs/snapshots/README.md#copysnapshottoexistinggameusingpost1) - copySnapshotToExistingGame
* [copySnapshotToNewGameUsingPOST](docs/snapshots/README.md#copysnapshottonewgameusingpost) - copySnapshotToNewGame
* [createSnapshotsUsingPOST](docs/snapshots/README.md#createsnapshotsusingpost) - createSnapshots
* [deleteSnapshotUsingDELETE1](docs/snapshots/README.md#deletesnapshotusingdelete1) - deleteSnapshot
* [getLiveSnapshotIdUsingGET](docs/snapshots/README.md#getlivesnapshotidusingget) - getLiveSnapshotId
* [getSnapshotUsingGET](docs/snapshots/README.md#getsnapshotusingget) - getSnapshot
* [getSnapshotsUsingGET](docs/snapshots/README.md#getsnapshotsusingget) - getSnapshots
* [getSnapshotsUsingGET1](docs/snapshots/README.md#getsnapshotsusingget1) - getSnapshots
* [publishSnapshotUsingPOST1](docs/snapshots/README.md#publishsnapshotusingpost1) - publishSnapshot
* [revertToSnapshotUsingPOST](docs/snapshots/README.md#reverttosnapshotusingpost) - revertToSnapshot
* [unpublishSnapshotUsingPOST](docs/snapshots/README.md#unpublishsnapshotusingpost) - unpublishSnapshot

### [testHarness](docs/testharness/README.md)

* [createTestHarnessScenarioUsingPOST](docs/testharness/README.md#createtestharnessscenariousingpost) - createTestHarnessScenario
* [deleteTestHarnessScenarioUsingDELETE](docs/testharness/README.md#deletetestharnessscenariousingdelete) - deleteTestHarnessScenario
* [getTestHarnessScenarioUsingGET](docs/testharness/README.md#gettestharnessscenariousingget) - getTestHarnessScenario
* [getTestHarnessScenariosUsingGET](docs/testharness/README.md#gettestharnessscenariosusingget) - getTestHarnessScenarios
* [updateTestHarnessScenarioUsingPUT](docs/testharness/README.md#updatetestharnessscenariousingput) - updateTestHarnessScenario
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
