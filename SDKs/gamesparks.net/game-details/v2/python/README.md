# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/gamesparks.net/game-details/v2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GETAnalyticsDataUsingGETRequest(
    api_key="corrupti",
    data_type="sessionAnalytic",
    end_date="2021-04-24",
    keys="unde",
    precision="MONTHLY",
    stage="PREVIEW",
    start_date="2021-09-24",
)
    
res = s.analytics.get_analytics_data_using_get(req)

if res.analytics_data_swagger_models is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### analytics

* `get_analytics_data_using_get` - Returns the results of executed query defined by the parameters passed in
* `get_data_count_using_get` - Returns the count of executed query
* `get_retention_using_get` - Returns the percentage of user retention over the last 30 days

### billing_details

* `get_billing_details` - Retrieves the Billing Details
* `put_billing_details` - Updates the Billing Details

### credentials

* `update_credential_secret_using_post` - Resets the secret of a credential

### experiments

* `create_experiment_using_post` - createExperiment
* `delete_experiment_using_delete` - deleteExperiment
* `do_action_experiment_using_post` - doActionExperiment
* `get_experiment_using_get` - getExperiment
* `get_experiments_using_get` - getExperiments
* `update_experiment_using_put` - updateExperiment

### games_admin

* `get_games_endpoints_using_get` - getGamesEndpoints
* `list_deleted_using_get` - listDeleted
* `list_using_get` - list
* `restore_deleted_game_using_post` - restoreDeletedGame

### manage

* `copy_snapshot_to_existing_game_using_post` - copySnapshotToExistingGame
* `create_query_using_post` - createQuery
* `create_screen_using_post` - createScreen
* `create_snapshot_using_post` - createSnapshot
* `create_snippet_using_post` - createSnippet
* `delete_query_using_delete` - deleteQuery
* `delete_screen_using_delete` - deleteScreen
* `delete_snapshot_using_delete` - deleteSnapshot
* `delete_snippet_using_delete` - deleteSnippet
* `get_query_using_get` - getQuery
* `get_screen_using_get` - getScreen
* `get_snippet_using_get` - getSnippet
* `list_executable_screens_using_get` - listExecutableScreens
* `list_queries_using_get` - listQueries
* `list_screens_using_get` - listScreens
* `list_snapshots_using_get` - listSnapshots
* `list_snippets_using_get` - listSnippets
* `publish_snapshot_using_post` - publishSnapshot
* `revert_snapshot_using_post` - revertSnapshot
* `update_query_using_put` - updateQuery
* `update_screen_using_put` - updateScreen
* `update_snippet_using_put` - updateSnippet

### notifications

* `get_game_summary_using_get` - getGameSummary

### push_notification_test

* `test_push_amazon_notifications_using_post` - testPushAmazonNotifications
* `test_push_apple_dev_notifications_using_post` - testPushAppleDevNotifications
* `test_push_apple_prod_notifications_using_post` - testPushAppleProdNotifications
* `test_push_google_notifications_using_post` - testPushGoogleNotifications
* `test_viber_integration_notifications_using_post` - testViberIntegrationNotifications
* `test_viber_production_notifications_using_post` - testViberProductionNotifications
* `test_windows8_notifications_using_post` - testWindows8Notifications
* `test_windows_phone8_notifications_using_post` - testWindowsPhone8Notifications

### region

* `get_game_region_options_using_get` - getGameRegionOptions
* `get_region_options_using_get` - getRegionOptions
* `set_game_region_using_post` - setGameRegion

### scripts

* `export_zip_using_get` - exportZip
* `get_script_differences_using_get` - getScriptDifferences
* `get_script_versions_using_get` - getScriptVersions
* `get_script_versions_using_get_1` - getScriptVersions
* `import_accept_using_post` - importAccept
* `import_zip_using_post` - importZip

### segment_query_filters

* `get_segment_query_filters_config_using_get` - getSegmentQueryFiltersConfig
* `get_segment_query_filters_using_get` - getSegmentQueryFilters
* `get_segment_query_standard_filters_using_get` - getSegmentQueryStandardFilters
* `update_segment_query_filters_config_using_put` - updateSegmentQueryFiltersConfig

### snapshots

* `copy_snapshot_to_existing_game_using_post_1` - copySnapshotToExistingGame
* `copy_snapshot_to_new_game_using_post` - copySnapshotToNewGame
* `create_snapshots_using_post` - createSnapshots
* `delete_snapshot_using_delete_1` - deleteSnapshot
* `get_live_snapshot_id_using_get` - getLiveSnapshotId
* `get_snapshot_using_get` - getSnapshot
* `get_snapshots_using_get` - getSnapshots
* `get_snapshots_using_get_1` - getSnapshots
* `publish_snapshot_using_post_1` - publishSnapshot
* `revert_to_snapshot_using_post` - revertToSnapshot
* `unpublish_snapshot_using_post` - unpublishSnapshot

### test_harness

* `create_test_harness_scenario_using_post` - createTestHarnessScenario
* `delete_test_harness_scenario_using_delete` - deleteTestHarnessScenario
* `get_test_harness_scenario_using_get` - getTestHarnessScenario
* `get_test_harness_scenarios_using_get` - getTestHarnessScenarios
* `update_test_harness_scenario_using_put` - updateTestHarnessScenario
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
