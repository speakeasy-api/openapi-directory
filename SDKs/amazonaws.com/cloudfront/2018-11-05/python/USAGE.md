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
    
req = operations.CreateCloudFrontOriginAccessIdentity20181105Request(
    headers=operations.CreateCloudFrontOriginAccessIdentity20181105Headers(
        x_amz_algorithm="et",
        x_amz_content_sha256="odio",
        x_amz_credential="voluptate",
        x_amz_date="velit",
        x_amz_security_token="commodi",
        x_amz_signature="iste",
        x_amz_signed_headers="vero",
    ),
    request="blanditiis".encode(),
)
    
res = s.create_cloud_front_origin_access_identity2018_11_05(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->