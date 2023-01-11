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
        x_amz_algorithm="harum",
        x_amz_content_sha256="quisquam",
        x_amz_credential="expedita",
        x_amz_date="et",
        x_amz_security_token="voluptate",
        x_amz_signature="omnis",
        x_amz_signed_headers="dolores",
        x_amz_target="AWSEvents.ActivateEventSource",
    ),
    request=shared.ActivateEventSourceRequest(
        name="vel",
    ),
)
    
res = s.activate_event_source(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->