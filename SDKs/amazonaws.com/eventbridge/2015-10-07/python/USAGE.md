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
    
req = operations.ActivateEventSourceRequest(
    headers=operations.ActivateEventSourceHeaders(
        x_amz_algorithm="et",
        x_amz_content_sha256="rerum",
        x_amz_credential="est",
        x_amz_date="neque",
        x_amz_security_token="dolor",
        x_amz_signature="nobis",
        x_amz_signed_headers="ipsam",
        x_amz_target="AWSEvents.ActivateEventSource",
    ),
    request=shared.ActivateEventSourceRequest(
        name="nihil",
    ),
)
    
res = s.activate_event_source(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->