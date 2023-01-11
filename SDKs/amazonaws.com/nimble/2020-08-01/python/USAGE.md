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
    
req = operations.AcceptEulasRequest(
    path_params=operations.AcceptEulasPathParams(
        studio_id="asperiores",
    ),
    headers=operations.AcceptEulasHeaders(
        x_amz_algorithm="tempore",
        x_amz_client_token="tempore",
        x_amz_content_sha256="assumenda",
        x_amz_credential="deleniti",
        x_amz_date="ea",
        x_amz_security_token="aut",
        x_amz_signature="dignissimos",
        x_amz_signed_headers="voluptatem",
    ),
    request=operations.AcceptEulasRequestBody(
        eula_ids=[
            "quo",
            "atque",
        ],
    ),
)
    
res = s.accept_eulas(req)

if res.accept_eulas_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->