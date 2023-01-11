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
    
req = operations.CreateByteMatchSetRequest(
    headers=operations.CreateByteMatchSetHeaders(
        x_amz_algorithm="nesciunt",
        x_amz_content_sha256="velit",
        x_amz_credential="at",
        x_amz_date="repellat",
        x_amz_security_token="placeat",
        x_amz_signature="accusantium",
        x_amz_signed_headers="sunt",
        x_amz_target="AWSWAF_20150824.CreateByteMatchSet",
    ),
    request=shared.CreateByteMatchSetRequest(
        change_token="et",
        name="id",
    ),
)
    
res = s.create_byte_match_set(req)

if res.create_byte_match_set_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->