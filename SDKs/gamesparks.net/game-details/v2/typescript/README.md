# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/gamesparks.net/game-details/v2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/gamesparks.net/game-details/v2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GETAnalyticsDataUsingGETRequest,
  GETAnalyticsDataUsingGETResponse,
  GETAnalyticsDataUsingGETDataTypeEnum,
  GETAnalyticsDataUsingGETPrecisionEnum,
  GETAnalyticsDataUsingGETStageEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GETAnalyticsDataUsingGETRequest = {
  apiKey: "corrupti",
  dataType: GETAnalyticsDataUsingGETDataTypeEnum.SessionAnalytic,
  endDate: "2021-04-24",
  keys: "unde",
  precision: GETAnalyticsDataUsingGETPrecisionEnum.Monthly,
  stage: GETAnalyticsDataUsingGETStageEnum.Preview,
  startDate: "2021-09-24",
};

sdk.analytics.getAnalyticsDataUsingGET(req).then((res: GETAnalyticsDataUsingGETResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### analytics

* `getAnalyticsDataUsingGET` - Returns the results of executed query defined by the parameters passed in
* `getDataCountUsingGET` - Returns the count of executed query
* `getRetentionUsingGET` - Returns the percentage of user retention over the last 30 days

### billingDetails

* `getBillingDetails` - Retrieves the Billing Details
* `putBillingDetails` - Updates the Billing Details

### credentials

* `updateCredentialSecretUsingPOST` - Resets the secret of a credential

### experiments

* `createExperimentUsingPOST` - createExperiment
* `deleteExperimentUsingDELETE` - deleteExperiment
* `doActionExperimentUsingPOST` - doActionExperiment
* `getExperimentUsingGET` - getExperiment
* `getExperimentsUsingGET` - getExperiments
* `updateExperimentUsingPUT` - updateExperiment

### gamesAdmin

* `getGamesEndpointsUsingGET` - getGamesEndpoints
* `listDeletedUsingGET` - listDeleted
* `listUsingGET` - list
* `restoreDeletedGameUsingPOST` - restoreDeletedGame

### manage

* `copySnapshotToExistingGameUsingPOST` - copySnapshotToExistingGame
* `createQueryUsingPOST` - createQuery
* `createScreenUsingPOST` - createScreen
* `createSnapshotUsingPOST` - createSnapshot
* `createSnippetUsingPOST` - createSnippet
* `deleteQueryUsingDELETE` - deleteQuery
* `deleteScreenUsingDELETE` - deleteScreen
* `deleteSnapshotUsingDELETE` - deleteSnapshot
* `deleteSnippetUsingDELETE` - deleteSnippet
* `getQueryUsingGET` - getQuery
* `getScreenUsingGET` - getScreen
* `getSnippetUsingGET` - getSnippet
* `listExecutableScreensUsingGET` - listExecutableScreens
* `listQueriesUsingGET` - listQueries
* `listScreensUsingGET` - listScreens
* `listSnapshotsUsingGET` - listSnapshots
* `listSnippetsUsingGET` - listSnippets
* `publishSnapshotUsingPOST` - publishSnapshot
* `revertSnapshotUsingPOST` - revertSnapshot
* `updateQueryUsingPUT` - updateQuery
* `updateScreenUsingPUT` - updateScreen
* `updateSnippetUsingPUT` - updateSnippet

### notifications

* `getGameSummaryUsingGET` - getGameSummary

### pushNotificationTest

* `testPushAmazonNotificationsUsingPOST` - testPushAmazonNotifications
* `testPushAppleDevNotificationsUsingPOST` - testPushAppleDevNotifications
* `testPushAppleProdNotificationsUsingPOST` - testPushAppleProdNotifications
* `testPushGoogleNotificationsUsingPOST` - testPushGoogleNotifications
* `testViberIntegrationNotificationsUsingPOST` - testViberIntegrationNotifications
* `testViberProductionNotificationsUsingPOST` - testViberProductionNotifications
* `testWindows8NotificationsUsingPOST` - testWindows8Notifications
* `testWindowsPhone8NotificationsUsingPOST` - testWindowsPhone8Notifications

### region

* `getGameRegionOptionsUsingGET` - getGameRegionOptions
* `getRegionOptionsUsingGET` - getRegionOptions
* `setGameRegionUsingPOST` - setGameRegion

### scripts

* `exportZipUsingGET` - exportZip
* `getScriptDifferencesUsingGET` - getScriptDifferences
* `getScriptVersionsUsingGET` - getScriptVersions
* `getScriptVersionsUsingGET1` - getScriptVersions
* `importAcceptUsingPOST` - importAccept
* `importZipUsingPOST` - importZip

### segmentQueryFilters

* `getSegmentQueryFiltersConfigUsingGET` - getSegmentQueryFiltersConfig
* `getSegmentQueryFiltersUsingGET` - getSegmentQueryFilters
* `getSegmentQueryStandardFiltersUsingGET` - getSegmentQueryStandardFilters
* `updateSegmentQueryFiltersConfigUsingPUT` - updateSegmentQueryFiltersConfig

### snapshots

* `copySnapshotToExistingGameUsingPOST1` - copySnapshotToExistingGame
* `copySnapshotToNewGameUsingPOST` - copySnapshotToNewGame
* `createSnapshotsUsingPOST` - createSnapshots
* `deleteSnapshotUsingDELETE1` - deleteSnapshot
* `getLiveSnapshotIdUsingGET` - getLiveSnapshotId
* `getSnapshotUsingGET` - getSnapshot
* `getSnapshotsUsingGET` - getSnapshots
* `getSnapshotsUsingGET1` - getSnapshots
* `publishSnapshotUsingPOST1` - publishSnapshot
* `revertToSnapshotUsingPOST` - revertToSnapshot
* `unpublishSnapshotUsingPOST` - unpublishSnapshot

### testHarness

* `createTestHarnessScenarioUsingPOST` - createTestHarnessScenario
* `deleteTestHarnessScenarioUsingDELETE` - deleteTestHarnessScenario
* `getTestHarnessScenarioUsingGET` - getTestHarnessScenario
* `getTestHarnessScenariosUsingGET` - getTestHarnessScenarios
* `updateTestHarnessScenarioUsingPUT` - updateTestHarnessScenario
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

