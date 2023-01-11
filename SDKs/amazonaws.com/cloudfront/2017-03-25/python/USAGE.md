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
    
req = operations.CreateCloudFrontOriginAccessIdentity20170325Request(
    headers=operations.CreateCloudFrontOriginAccessIdentity20170325Headers(
        x_amz_algorithm="eos",
        x_amz_content_sha256="dolorem",
        x_amz_credential="in",
        x_amz_date="est",
        x_amz_security_token="quos",
        x_amz_signature="id",
        x_amz_signed_headers="repellat",
    ),
    request="repellendus".encode(),
)
    
res = s.create_cloud_front_origin_access_identity2017_03_25(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->