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
    
req = operations.GetAddClientIDToOpenIDConnectProviderRequest(
    query_params=operations.GetAddClientIDToOpenIDConnectProviderQueryParams(
        action="AddClientIDToOpenIDConnectProvider",
        client_id="aperiam",
        open_id_connect_provider_arn="earum",
        version="2010-05-08",
    ),
    headers=operations.GetAddClientIDToOpenIDConnectProviderHeaders(
        x_amz_algorithm="earum",
        x_amz_content_sha256="est",
        x_amz_credential="error",
        x_amz_date="ipsa",
        x_amz_security_token="sint",
        x_amz_signature="saepe",
        x_amz_signed_headers="qui",
    ),
)
    
res = s.get_add_client_id_to_open_id_connect_provider(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->