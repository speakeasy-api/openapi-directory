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
    
req = operations.CreateHTTPNamespaceRequest(
    headers=operations.CreateHTTPNamespaceHeaders(
        x_amz_algorithm="sapiente",
        x_amz_content_sha256="at",
        x_amz_credential="fuga",
        x_amz_date="dicta",
        x_amz_security_token="optio",
        x_amz_signature="aut",
        x_amz_signed_headers="eum",
        x_amz_target="Route53AutoNaming_v20170314.CreateHttpNamespace",
    ),
    request=shared.CreateHTTPNamespaceRequest(
        creator_request_id="non",
        description="corrupti",
        name="nam",
        tags=[
            shared.Tag(
                key="adipisci",
                value="enim",
            ),
            shared.Tag(
                key="laborum",
                value="rerum",
            ),
            shared.Tag(
                key="iure",
                value="sequi",
            ),
        ],
    ),
)
    
res = s.create_http_namespace(req)

if res.create_http_namespace_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->