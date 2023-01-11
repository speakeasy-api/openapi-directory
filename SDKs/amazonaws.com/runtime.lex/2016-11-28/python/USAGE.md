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
    
req = operations.DeleteSessionRequest(
    path_params=operations.DeleteSessionPathParams(
        bot_alias="ex",
        bot_name="magnam",
        user_id="a",
    ),
    headers=operations.DeleteSessionHeaders(
        x_amz_algorithm="et",
        x_amz_content_sha256="omnis",
        x_amz_credential="dicta",
        x_amz_date="in",
        x_amz_security_token="et",
        x_amz_signature="enim",
        x_amz_signed_headers="saepe",
    ),
)
    
res = s.delete_session(req)

if res.delete_session_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->