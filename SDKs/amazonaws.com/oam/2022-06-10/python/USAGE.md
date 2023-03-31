<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateLinkRequest(
    request_body=operations.CreateLinkRequestBody(
        label_template="corrupti",
        resource_types=[
            "AWS::XRay::Trace",
            "AWS::XRay::Trace",
            "AWS::Logs::LogGroup",
        ],
        sink_identifier="nulla",
        tags={
            "illum": "vel",
            "error": "deserunt",
            "suscipit": "iure",
        },
    ),
    x_amz_algorithm="magnam",
    x_amz_content_sha256="debitis",
    x_amz_credential="ipsa",
    x_amz_date="delectus",
    x_amz_security_token="tempora",
    x_amz_signature="suscipit",
    x_amz_signed_headers="molestiae",
)
    
res = s.create_link(req)

if res.create_link_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->