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
    
req = operations.CreateCloudFrontOriginAccessIdentity20190326Request(
    headers=operations.CreateCloudFrontOriginAccessIdentity20190326Headers(
        x_amz_algorithm="placeat",
        x_amz_content_sha256="odio",
        x_amz_credential="autem",
        x_amz_date="eligendi",
        x_amz_security_token="animi",
        x_amz_signature="est",
        x_amz_signed_headers="voluptas",
    ),
    request="ea".encode(),
)
    
res = s.create_cloud_front_origin_access_identity2019_03_26(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->