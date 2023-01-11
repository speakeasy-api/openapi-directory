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
    
req = operations.CreateCloudFrontOriginAccessIdentity20161125Request(
    headers=operations.CreateCloudFrontOriginAccessIdentity20161125Headers(
        x_amz_algorithm="aut",
        x_amz_content_sha256="architecto",
        x_amz_credential="omnis",
        x_amz_date="ut",
        x_amz_security_token="sunt",
        x_amz_signature="modi",
        x_amz_signed_headers="nisi",
    ),
    request="dolores".encode(),
)
    
res = s.create_cloud_front_origin_access_identity2016_11_25(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->