<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateApplicationRequest(
    request_body=operations.CreateApplicationRequestBody(
        application_description="corrupti",
        application_name="provident",
        client_token="distinctio",
        role_arn="quibusdam",
        tags={
            "nulla": "corrupti",
            "illum": "vel",
            "error": "deserunt",
        },
    ),
    x_amz_algorithm="suscipit",
    x_amz_content_sha256="iure",
    x_amz_credential="magnam",
    x_amz_date="debitis",
    x_amz_security_token="ipsa",
    x_amz_signature="delectus",
    x_amz_signed_headers="tempora",
)
    
res = s.create_application(req)

if res.create_application_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->