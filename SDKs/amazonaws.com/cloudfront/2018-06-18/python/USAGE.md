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
    
req = operations.CreateCloudFrontOriginAccessIdentity20180618Request(
    headers=operations.CreateCloudFrontOriginAccessIdentity20180618Headers(
        x_amz_algorithm="enim",
        x_amz_content_sha256="necessitatibus",
        x_amz_credential="non",
        x_amz_date="nam",
        x_amz_security_token="in",
        x_amz_signature="eum",
        x_amz_signed_headers="hic",
    ),
    request="ut".encode(),
)
    
res = s.create_cloud_front_origin_access_identity2018_06_18(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->