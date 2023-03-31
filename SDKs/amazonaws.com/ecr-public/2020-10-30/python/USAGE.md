<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.BatchCheckLayerAvailabilityRequest(
    batch_check_layer_availability_request=shared.BatchCheckLayerAvailabilityRequest(
        layer_digests=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
        registry_id="unde",
        repository_name="nulla",
    ),
    x_amz_algorithm="corrupti",
    x_amz_content_sha256="illum",
    x_amz_credential="vel",
    x_amz_date="error",
    x_amz_security_token="deserunt",
    x_amz_signature="suscipit",
    x_amz_signed_headers="iure",
    x_amz_target="SpencerFrontendService.BatchCheckLayerAvailability",
)
    
res = s.batch_check_layer_availability(req)

if res.batch_check_layer_availability_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->