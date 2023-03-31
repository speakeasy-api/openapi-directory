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
        token_service="MCTOKENSERVICE",
    ),
    selected_brand="totam",
    shopper_email="beatae",
    shopper_name=shared.Name(
        first_name="Haskell",
        last_name="Krajcik",
    ),
    shopper_reference="modi",
    social_security_number="qui",
)
    
res = s.initialization.post_store_detail(req, operations.PostStoreDetailSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.store_detail_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->