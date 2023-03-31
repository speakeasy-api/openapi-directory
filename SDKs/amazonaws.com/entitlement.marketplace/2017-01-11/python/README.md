# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/entitlement.marketplace/2017-01-11/python
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


req = operations.GetEntitlementsRequest(
    get_entitlements_request=shared.GetEntitlementsRequest(
        filter={
            "provident": [
                "quibusdam",
                "unde",
                "nulla",
            ],
            "corrupti": [
                "vel",
                "error",
                "deserunt",
                "suscipit",
            ],
            "iure": [
                "debitis",
                "ipsa",
            ],
        },
        max_results=963663,
        next_token="tempora",
        product_code="suscipit",
    ),
    x_amz_algorithm="molestiae",
    x_amz_content_sha256="minus",
    x_amz_credential="placeat",
    x_amz_date="voluptatum",
    x_amz_security_token="iusto",
    x_amz_signature="excepturi",
    x_amz_signed_headers="nisi",
    x_amz_target="AWSMPEntitlementService.GetEntitlements",
)
    
res = s.get_entitlements(req)

if res.get_entitlements_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `get_entitlements` - GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
