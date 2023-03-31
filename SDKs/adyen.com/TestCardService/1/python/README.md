# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/adyen.com/TestCardService/1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### general

* `post_create_test_card_ranges` - Creates one or more test card ranges.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
