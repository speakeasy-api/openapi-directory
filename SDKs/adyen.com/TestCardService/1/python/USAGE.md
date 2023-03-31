<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.CreateTestCardRangesRequest(
    account_code="corrupti",
    account_type_code="provident",
    test_card_ranges=[
        shared.TestCardRange(
            address=shared.AvsAddress(
                street_address="quibusdam",
                zip="unde",
            ),
            card_holder_name="nulla",
            cvc="corrupti",
            expiry_month="OCTOBER",
            expiry_year=423655,
            range_end="error",
            range_start="deserunt",
            three_d_directory_server_response="U",
            three_d_password="iure",
            three_d_username="magnam",
        ),
        shared.TestCardRange(
            address=shared.AvsAddress(
                street_address="debitis",
                zip="ipsa",
            ),
            card_holder_name="delectus",
            cvc="tempora",
            expiry_month="JANUARY",
            expiry_year=477665,
            range_end="minus",
            range_start="placeat",
            three_d_directory_server_response="U",
            three_d_password="iusto",
            three_d_username="excepturi",
        ),
        shared.TestCardRange(
            address=shared.AvsAddress(
                street_address="nisi",
                zip="recusandae",
            ),
            card_holder_name="temporibus",
            cvc="ab",
            expiry_month="JANUARY",
            expiry_year=87129,
            range_end="deserunt",
            range_start="perferendis",
            three_d_directory_server_response="U",
            three_d_password="repellendus",
            three_d_username="sapiente",
        ),
    ],
)
    
res = s.general.post_create_test_card_ranges(req, operations.PostCreateTestCardRangesSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.create_test_card_ranges_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->