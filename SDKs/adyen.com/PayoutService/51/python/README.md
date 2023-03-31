# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/adyen.com/PayoutService/51/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.StoreDetailRequest(
    additional_data={
        "provident": "distinctio",
        "quibusdam": "unde",
        "nulla": "corrupti",
    },
    bank=shared.BankAccount(
        bank_account_number="illum",
        bank_city="vel",
        bank_location_id="error",
        bank_name="deserunt",
        bic="suscipit",
        country_code="iure",
        iban="magnam",
        owner_name="debitis",
        tax_id="ipsa",
    ),
    billing_address=shared.Address(
        city="Edinburg",
        country="Holy See (Vatican City State)",
        house_number_or_name="molestiae",
        postal_code="85453-9803",
        state_or_province="veritatis",
        street="0389 Connelly Trace",
    ),
    card=shared.Card(
        cvc="at",
        expiry_month="maiores",
        expiry_year="molestiae",
        holder_name="quod",
        issue_number="quod",
        number="esse",
        start_month="totam",
        start_year="porro",
    ),
    date_of_birth="2022-10-06T15:49:54.663Z",
    entity_type="Company",
    fraud_offset=639921,
    merchant_account="occaecati",
    nationality="fugit",
    recurring=shared.Recurring(
        contract="RECURRING",
        recurring_detail_name="hic",
        recurring_expiry="2021-06-08T13:49:32.889Z",
        recurring_frequency="beatae",
        token_service="VISATOKENSERVICE",
    ),
    selected_brand="molestiae",
    shopper_email="modi",
    shopper_name=shared.Name(
        first_name="Christy",
        last_name="Ryan",
    ),
    shopper_reference="cum",
    social_security_number="esse",
)
    
res = s.initialization.post_store_detail(req, operations.PostStoreDetailSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.store_detail_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### initialization

* `post_store_detail` - Store payout details
* `post_store_detail_and_submit_third_party` - Store details and submit a payout
* `post_submit_third_party` - Submit a payout

### instant_payouts

* `post_payout` - Make an instant card payout

### reviewing

* `post_confirm_third_party` - Confirm a payout
* `post_decline_third_party` - Cancel a payout
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
