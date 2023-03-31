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