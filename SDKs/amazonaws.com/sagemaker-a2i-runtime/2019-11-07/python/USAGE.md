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
    
req = operations.DeleteHumanLoopRequest(
    path_params=operations.DeleteHumanLoopPathParams(
        human_loop_name="exercitationem",
    ),
    headers=operations.DeleteHumanLoopHeaders(
        x_amz_algorithm="hic",
        x_amz_content_sha256="doloribus",
        x_amz_credential="porro",
        x_amz_date="est",
        x_amz_security_token="deserunt",
        x_amz_signature="eum",
        x_amz_signed_headers="sit",
    ),
)
    
res = s.delete_human_loop(req)

if res.delete_human_loop_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->