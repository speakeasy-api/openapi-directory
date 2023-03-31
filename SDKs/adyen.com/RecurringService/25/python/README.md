# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/adyen.com/RecurringService/25/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.DisableRequest(
    contract="corrupti",
    merchant_account="provident",
    recurring_detail_reference="distinctio",
    shopper_reference="quibusdam",
)
    
res = s.general.post_disable(req, operations.PostDisableSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.disable_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### general

* `post_disable` - Disable stored payment details
* `post_list_recurring_details` - Get stored payment details
* `post_notify_shopper` - Ask issuer to notify the shopper
* `post_schedule_account_updater` - Schedule running the Account Updater
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
