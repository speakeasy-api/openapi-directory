# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/adyen.com/StoredValueService/46/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.StoredValueStatusChangeRequest(
    amount=shared.Amount(
        currency="corrupti",
        value=592845,
    ),
    merchant_account="distinctio",
    payment_method={
        "unde": "nulla",
        "corrupti": "illum",
        "vel": "error",
        "deserunt": "suscipit",
    },
    recurring_detail_reference="iure",
    reference="magnam",
    shopper_interaction="POS",
    shopper_reference="ipsa",
    status="inactive",
    store="tempora",
)
    
res = s.general.post_change_status(req, operations.PostChangeStatusSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.stored_value_status_change_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### general

* `post_change_status` - Changes the status of the payment method.
* `post_check_balance` - Checks the balance.
* `post_issue` - Issues a new card.
* `post_load` - Loads the payment method.
* `post_merge_balance` - Merge the balance of two cards.
* `post_void_transaction` - Voids a transaction.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
