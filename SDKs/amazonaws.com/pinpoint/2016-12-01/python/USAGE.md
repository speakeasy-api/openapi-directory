<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateAppRequest(
    request_body=operations.CreateAppRequestBody(
        create_application_request=operations.CreateAppRequestBodyCreateApplicationRequest(
            name="corrupti",
            tags={
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
        ),
    ),
    x_amz_algorithm="vel",
    x_amz_content_sha256="error",
    x_amz_credential="deserunt",
    x_amz_date="suscipit",
    x_amz_security_token="iure",
    x_amz_signature="magnam",
    x_amz_signed_headers="debitis",
)
    
res = s.create_app(req)

if res.create_app_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->