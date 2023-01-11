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
    
req = operations.DeleteConnectionRequest(
    path_params=operations.DeleteConnectionPathParams(
        connection_id="magni",
    ),
    headers=operations.DeleteConnectionHeaders(
        x_amz_algorithm="recusandae",
        x_amz_content_sha256="illum",
        x_amz_credential="consequatur",
        x_amz_date="dolores",
        x_amz_security_token="hic",
        x_amz_signature="nihil",
        x_amz_signed_headers="explicabo",
    ),
)
    
res = s.delete_connection(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->