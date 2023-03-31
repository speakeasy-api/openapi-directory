# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/1password.local/connect/1.5.7/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAPIActivityRequest(
    limit=10,
    offset=50,
)
    
res = s.activity.get_api_activity(req, operations.GetAPIActivitySecurity(
    connect_token="Bearer YOUR_BEARER_TOKEN_HERE",
))

if res.api_requests is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### activity

* `get_api_activity` - Retrieve a list of API Requests that have been made.

### files

* `download_file_by_id` - Get the content of a File
* `get_details_of_file_by_id` - Get the details of a File
* `get_item_files` - Get all the files inside an Item

### health

* `get_heartbeat` - Ping the server for liveness
* `get_server_health` - Get state of the server and its dependencies.

### items

* `create_vault_item` - Create a new Item
* `delete_vault_item` - Delete an Item
* `get_vault_item_by_id` - Get the details of an Item
* `get_vault_items` - Get all items for inside a Vault
* `patch_vault_item` - Update a subset of Item attributes
* `update_vault_item` - Update an Item

### metrics

* `get_prometheus_metrics` - Query server for exposed Prometheus metrics

### vaults

* `get_vault_by_id` - Get Vault details and metadata
* `get_vaults` - Get all Vaults
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
