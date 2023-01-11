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
    
req = operations.BulkPublishRequest(
    path_params=operations.BulkPublishPathParams(
        identity_pool_id="molestias",
    ),
    headers=operations.BulkPublishHeaders(
        x_amz_algorithm="et",
        x_amz_content_sha256="quia",
        x_amz_credential="ipsa",
        x_amz_date="sit",
        x_amz_security_token="repellat",
        x_amz_signature="non",
        x_amz_signed_headers="facilis",
    ),
)
    
res = s.bulk_publish(req)

if res.bulk_publish_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->