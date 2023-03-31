# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/savingsplans/2019-06-28/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateSavingsPlanRequest(
    request_body=operations.CreateSavingsPlanRequestBody(
        client_token="corrupti",
        commitment="provident",
        purchase_time="2021-04-24T16:27:50.833Z",
        savings_plan_offering_id="unde",
        tags={
            "corrupti": "illum",
            "vel": "error",
            "deserunt": "suscipit",
            "iure": "magnam",
        },
        upfront_payment_amount="debitis",
    ),
    x_amz_algorithm="ipsa",
    x_amz_content_sha256="delectus",
    x_amz_credential="tempora",
    x_amz_date="suscipit",
    x_amz_security_token="molestiae",
    x_amz_signature="minus",
    x_amz_signed_headers="placeat",
)
    
res = s.create_savings_plan(req)

if res.create_savings_plan_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_savings_plan` - Creates a Savings Plan.
* `delete_queued_savings_plan` - Deletes the queued purchase for the specified Savings Plan.
* `describe_savings_plan_rates` - Describes the specified Savings Plans rates.
* `describe_savings_plans` - Describes the specified Savings Plans.
* `describe_savings_plans_offering_rates` - Describes the specified Savings Plans offering rates.
* `describe_savings_plans_offerings` - Describes the specified Savings Plans offerings.
* `list_tags_for_resource` - Lists the tags for the specified resource.
* `tag_resource` - Adds the specified tags to the specified resource.
* `untag_resource` - Removes the specified tags from the specified resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
