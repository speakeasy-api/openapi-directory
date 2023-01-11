<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.BatchCheckLayerAvailabilityRequest(
    headers=operations.BatchCheckLayerAvailabilityHeaders(
        x_amz_algorithm="adipisci",
        x_amz_content_sha256="dolorem",
        x_amz_credential="quas",
        x_amz_date="eum",
        x_amz_security_token="distinctio",
        x_amz_signature="nostrum",
        x_amz_signed_headers="sed",
        x_amz_target="SpencerFrontendService.BatchCheckLayerAvailability",
    ),
    request=shared.BatchCheckLayerAvailabilityRequest(
        layer_digests=[
            "totam",
            "sit",
        ],
        registry_id="et",
        repository_name="et",
    ),
)
    
res = s.batch_check_layer_availability(req)

if res.batch_check_layer_availability_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->