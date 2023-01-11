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
    
req = operations.GetRoutingControlStateRequest(
    headers=operations.GetRoutingControlStateHeaders(
        x_amz_algorithm="sed",
        x_amz_content_sha256="expedita",
        x_amz_credential="maxime",
        x_amz_date="eos",
        x_amz_security_token="aut",
        x_amz_signature="autem",
        x_amz_signed_headers="deleniti",
        x_amz_target="ToggleCustomerAPI.GetRoutingControlState",
    ),
    request=shared.GetRoutingControlStateRequest(
        routing_control_arn="asperiores",
    ),
)
    
res = s.get_routing_control_state(req)

if res.get_routing_control_state_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->