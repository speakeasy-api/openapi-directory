<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AddEventSourceRequest(
    request_body=operations.AddEventSourceRequestBody(
        batch_size=548814,
        event_source="provident",
        function_name="distinctio",
        parameters={
            "unde": "nulla",
            "corrupti": "illum",
            "vel": "error",
            "deserunt": "suscipit",
        },
        role="iure",
    ),
    x_amz_algorithm="magnam",
    x_amz_content_sha256="debitis",
    x_amz_credential="ipsa",
    x_amz_date="delectus",
    x_amz_security_token="tempora",
    x_amz_signature="suscipit",
    x_amz_signed_headers="molestiae",
)
    
res = s.add_event_source(req)

if res.event_source_configuration is not None:
    # handle response
```
<!-- End SDK Example Usage -->