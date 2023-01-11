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
    
req = operations.ChangeServerLifeCycleStateRequest(
    headers=operations.ChangeServerLifeCycleStateHeaders(
        x_amz_algorithm="natus",
        x_amz_content_sha256="corrupti",
        x_amz_credential="quis",
        x_amz_date="consequatur",
        x_amz_security_token="tenetur",
        x_amz_signature="alias",
        x_amz_signed_headers="similique",
    ),
    request=operations.ChangeServerLifeCycleStateRequestBody(
        life_cycle=operations.ChangeServerLifeCycleStateRequestBodyLifeCycle(
            state="READY_FOR_TEST",
        ),
        source_server_id="fugit",
    ),
)
    
res = s.change_server_life_cycle_state(req)

if res.source_server is not None:
    # handle response
```
<!-- End SDK Example Usage -->