# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/adyen.com/TfmAPIService/1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.AssignTerminalsRequest(
    company_account="corrupti",
    merchant_account="provident",
    merchant_inventory=False,
    store="distinctio",
    terminals=[
        "unde",
        "nulla",
        "corrupti",
        "illum",
    ],
)
    
res = s.general.post_assign_terminals(req, operations.PostAssignTerminalsSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.assign_terminals_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### general

* `post_assign_terminals` - Assign terminals
* `post_find_terminal` - Get the account or store of a terminal
* `post_get_stores_under_account` - Get the stores of an account
* `post_get_terminal_details` - Get the details of a terminal
* `post_get_terminals_under_account` - Get the list of terminals
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
