# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/getpostman.com/1.20.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateAPIRequest(
    request_body=operations.CreateAPIRequestBody(
        api=operations.CreateAPIRequestBodyAPI(
            description="This is description.",
            name="Sync Service API",
            summary="This is supposed to be a short summary.",
        ),
    ),
    workspace="{{workspaceId}}",
)
    
res = s.api.create_api(req)

if res.create_api_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### api

* `create_api` - Create API
* `create_api_version` - Create API Version
* `create_collection_from_schema` - Create collection from schema
* `create_relations` - Create relations
* `create_schema` - Create Schema
* `delete_an_api` - Delete an API
* `delete_an_api_version` - Delete an API Version
* `get_all_ap_is` - Get all APIs
* `get_all_api_versions` - Get All API Versions
* `get_an_api_version` - Get an API Version
* `get_contract_test_relations` - Get contract test relations
* `get_documentation_relations` - Get  documentation relations
* `get_environment_relations` - Get environment relations
* `get_integration_test_relations` - Get integration test relations
* `get_linked_relations` - Get linked relations
* `get_monitor_relations` - Get monitor relations
* `get_schema` - Get Schema
* `get_test_suite_relations` - Get test suite relations
* `single_api` - Single API
* `sync_relations_with_schema` - Sync relations with schema
* `update_an_api` - Update an API
* `update_an_api_version` - Update an API Version
* `update_schema` - Update Schema

### api_version

* `create_api_version` - Create API Version
* `delete_an_api_version` - Delete an API Version
* `get_all_api_versions` - Get All API Versions
* `get_an_api_version` - Get an API Version
* `update_an_api_version` - Update an API Version

### collections

* `all_collections` - All Collections
* `create_a_fork` - Create a Fork
* `create_collection` - Create Collection
* `delete_collection` - Delete Collection
* `merge_a_fork` - Merge a Fork
* `single_collection` - Single Collection 
* `update_collection` - Update Collection

### environments

* `all_environments` - All Environments
* `create_environment` - Create Environment
* `delete_environment` - Delete Environment
* `single_environment` - Single Environment
* `update_environment` - Update Environment

### import_

* `import_exported_data` - Import exported data
* `import_external_api_specification` - Import external API specification

### mocks

* `all_mocks` - All Mocks
* `create_mock` - Create Mock
* `delete_mock` - Delete Mock
* `publish_mock` - Publish Mock
* `single_mock` - Single Mock
* `unpublish_mock` - Unpublish Mock
* `update_mock` - Update Mock

### monitors

* `all_monitors` - All Monitors
* `create_monitor` - Create Monitor
* `delete_monitor` - Delete Monitor
* `run_a_monitor` - Run a Monitor
* `single_monitor` - Single Monitor
* `update_monitor` - Update Monitor

### relations

* `create_relations` - Create relations
* `get_contract_test_relations` - Get contract test relations
* `get_documentation_relations` - Get  documentation relations
* `get_environment_relations` - Get environment relations
* `get_integration_test_relations` - Get integration test relations
* `get_linked_relations` - Get linked relations
* `get_monitor_relations` - Get monitor relations
* `get_test_suite_relations` - Get test suite relations
* `sync_relations_with_schema` - Sync relations with schema

### schema

* `create_collection_from_schema` - Create collection from schema
* `create_schema` - Create Schema
* `get_schema` - Get Schema
* `update_schema` - Update Schema

### user

* `api_key_owner` - API Key Owner

### webhooks

* `create_webhook` - Create Webhook

### workspaces

* `all_workspaces` - All workspaces
* `create_workspace` - Create Workspace
* `delete_workspace` - Delete Workspace
* `single_workspace` - Single workspace
* `update_workspace` - Update Workspace
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
