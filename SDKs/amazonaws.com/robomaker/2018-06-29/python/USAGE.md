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
    
req = operations.BatchDeleteWorldsRequest(
    headers=operations.BatchDeleteWorldsHeaders(
        x_amz_algorithm="et",
        x_amz_content_sha256="ea",
        x_amz_credential="sapiente",
        x_amz_date="consequatur",
        x_amz_security_token="et",
        x_amz_signature="voluptate",
        x_amz_signed_headers="dolore",
    ),
    request=operations.BatchDeleteWorldsRequestBody(
        worlds=[
            "quia",
            "eum",
            "iure",
        ],
    ),
)
    
res = s.batch_delete_worlds(req)

if res.batch_delete_worlds_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->