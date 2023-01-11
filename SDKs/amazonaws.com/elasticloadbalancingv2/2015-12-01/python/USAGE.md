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
    
req = operations.GetDeleteListenerRequest(
    query_params=operations.GetDeleteListenerQueryParams(
        action="DeleteListener",
        listener_arn="voluptate",
        version="2015-12-01",
    ),
    headers=operations.GetDeleteListenerHeaders(
        x_amz_algorithm="autem",
        x_amz_content_sha256="sed",
        x_amz_credential="voluptas",
        x_amz_date="adipisci",
        x_amz_security_token="exercitationem",
        x_amz_signature="deserunt",
        x_amz_signed_headers="ex",
    ),
)
    
res = s.get_delete_listener(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->