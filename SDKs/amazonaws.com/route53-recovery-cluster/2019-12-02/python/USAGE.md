<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetRoutingControlStateRequest(
    get_routing_control_state_request=shared.GetRoutingControlStateRequest(
        routing_control_arn="corrupti",
    ),
    x_amz_algorithm="provident",
    x_amz_content_sha256="distinctio",
    x_amz_credential="quibusdam",
    x_amz_date="unde",
    x_amz_security_token="nulla",
    x_amz_signature="corrupti",
    x_amz_signed_headers="illum",
    x_amz_target="ToggleCustomerAPI.GetRoutingControlState",
)
    
res = s.get_routing_control_state(req)

if res.get_routing_control_state_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->