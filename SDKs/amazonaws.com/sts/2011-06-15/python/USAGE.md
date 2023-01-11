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
    
req = operations.GetDecodeAuthorizationMessageRequest(
    query_params=operations.GetDecodeAuthorizationMessageQueryParams(
        action="DecodeAuthorizationMessage",
        encoded_message="autem",
        version="2011-06-15",
    ),
    headers=operations.GetDecodeAuthorizationMessageHeaders(
        x_amz_algorithm="consequatur",
        x_amz_content_sha256="delectus",
        x_amz_credential="qui",
        x_amz_date="et",
        x_amz_security_token="quaerat",
        x_amz_signature="voluptatem",
        x_amz_signed_headers="et",
    ),
)
    
res = s.get_decode_authorization_message(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->