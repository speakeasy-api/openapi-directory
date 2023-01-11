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
    
req = operations.DeleteThingShadowRequest(
    path_params=operations.DeleteThingShadowPathParams(
        thing_name="aliquam",
    ),
    query_params=operations.DeleteThingShadowQueryParams(
        name="quos",
    ),
    headers=operations.DeleteThingShadowHeaders(
        x_amz_algorithm="omnis",
        x_amz_content_sha256="illum",
        x_amz_credential="repellat",
        x_amz_date="id",
        x_amz_security_token="blanditiis",
        x_amz_signature="possimus",
        x_amz_signed_headers="eius",
    ),
)
    
res = s.delete_thing_shadow(req)

if res.delete_thing_shadow_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->