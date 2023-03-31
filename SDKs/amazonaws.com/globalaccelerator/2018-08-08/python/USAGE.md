<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AddCustomRoutingEndpointsRequest(
    add_custom_routing_endpoints_request=shared.AddCustomRoutingEndpointsRequest(
        endpoint_configurations=[
            shared.CustomRoutingEndpointConfiguration(
                endpoint_id="provident",
            ),
            shared.CustomRoutingEndpointConfiguration(
                endpoint_id="distinctio",
            ),
            shared.CustomRoutingEndpointConfiguration(
                endpoint_id="quibusdam",
            ),
        ],
        endpoint_group_arn="unde",
    ),
    x_amz_algorithm="nulla",
    x_amz_content_sha256="corrupti",
    x_amz_credential="illum",
    x_amz_date="vel",
    x_amz_security_token="error",
    x_amz_signature="deserunt",
    x_amz_signed_headers="suscipit",
    x_amz_target="GlobalAccelerator_V20180706.AddCustomRoutingEndpoints",
)
    
res = s.add_custom_routing_endpoints(req)

if res.add_custom_routing_endpoints_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->