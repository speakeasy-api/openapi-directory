<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.DescribeAcceleratorOfferingsRequest(
    request_body=operations.DescribeAcceleratorOfferingsRequestBody(
        accelerator_types=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
        location_type="availability-zone",
    ),
    x_amz_algorithm="nulla",
    x_amz_content_sha256="corrupti",
    x_amz_credential="illum",
    x_amz_date="vel",
    x_amz_security_token="error",
    x_amz_signature="deserunt",
    x_amz_signed_headers="suscipit",
)
    
res = s.describe_accelerator_offerings(req)

if res.describe_accelerator_offerings_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->