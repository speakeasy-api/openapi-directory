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
    
req = operations.AddProfileKeyRequest(
    path_params=operations.AddProfileKeyPathParams(
        domain_name="rem",
    ),
    headers=operations.AddProfileKeyHeaders(
        x_amz_algorithm="laudantium",
        x_amz_content_sha256="corporis",
        x_amz_credential="qui",
        x_amz_date="adipisci",
        x_amz_security_token="qui",
        x_amz_signature="iste",
        x_amz_signed_headers="minima",
    ),
    request=operations.AddProfileKeyRequestBody(
        key_name="blanditiis",
        profile_id="sit",
        values=[
            "earum",
            "fugiat",
            "dolores",
        ],
    ),
)
    
res = s.add_profile_key(req)

if res.add_profile_key_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->