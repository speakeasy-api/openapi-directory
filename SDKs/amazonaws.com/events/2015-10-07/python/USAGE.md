<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.ActivateEventSourceRequest(
    activate_event_source_request=shared.ActivateEventSourceRequest(
        name="corrupti",
    ),
    x_amz_algorithm="provident",
    x_amz_content_sha256="distinctio",
    x_amz_credential="quibusdam",
    x_amz_date="unde",
    x_amz_security_token="nulla",
    x_amz_signature="corrupti",
    x_amz_signed_headers="illum",
    x_amz_target="AWSEvents.ActivateEventSource",
)
    
res = s.activate_event_source(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->