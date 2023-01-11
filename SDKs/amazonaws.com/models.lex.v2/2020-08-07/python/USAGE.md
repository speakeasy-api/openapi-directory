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
    
req = operations.BuildBotLocaleRequest(
    path_params=operations.BuildBotLocalePathParams(
        bot_id="dolor",
        bot_version="voluptatibus",
        locale_id="aut",
    ),
    headers=operations.BuildBotLocaleHeaders(
        x_amz_algorithm="repellendus",
        x_amz_content_sha256="et",
        x_amz_credential="sunt",
        x_amz_date="exercitationem",
        x_amz_security_token="voluptatem",
        x_amz_signature="natus",
        x_amz_signed_headers="ea",
    ),
)
    
res = s.build_bot_locale(req)

if res.build_bot_locale_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->