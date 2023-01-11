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
    
req = operations.CreateAPICacheRequest(
    path_params=operations.CreateAPICachePathParams(
        api_id="aut",
    ),
    headers=operations.CreateAPICacheHeaders(
        x_amz_algorithm="et",
        x_amz_content_sha256="qui",
        x_amz_credential="atque",
        x_amz_date="praesentium",
        x_amz_security_token="perferendis",
        x_amz_signature="ab",
        x_amz_signed_headers="cumque",
    ),
    request=operations.CreateAPICacheRequestBody(
        api_caching_behavior="FULL_REQUEST_CACHING",
        at_rest_encryption_enabled=False,
        transit_encryption_enabled=True,
        ttl=1541276666071085218,
        type="SMALL",
    ),
)
    
res = s.create_api_cache(req)

if res.create_api_cache_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->