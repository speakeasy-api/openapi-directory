<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateHTTPNamespaceRequest(
    create_http_namespace_request=shared.CreateHTTPNamespaceRequest(
        creator_request_id="corrupti",
        description="provident",
        name="distinctio",
        tags=[
            shared.Tag(
                key="unde",
                value="nulla",
            ),
            shared.Tag(
                key="corrupti",
                value="illum",
            ),
            shared.Tag(
                key="vel",
                value="error",
            ),
            shared.Tag(
                key="deserunt",
                value="suscipit",
            ),
        ],
    ),
    x_amz_algorithm="iure",
    x_amz_content_sha256="magnam",
    x_amz_credential="debitis",
    x_amz_date="ipsa",
    x_amz_security_token="delectus",
    x_amz_signature="tempora",
    x_amz_signed_headers="suscipit",
    x_amz_target="Route53AutoNaming_v20170314.CreateHttpNamespace",
)
    
res = s.create_http_namespace(req)

if res.create_http_namespace_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->