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
    
req = operations.AddCustomRoutingEndpointsRequest(
    headers=operations.AddCustomRoutingEndpointsHeaders(
        x_amz_algorithm="modi",
        x_amz_content_sha256="cum",
        x_amz_credential="similique",
        x_amz_date="voluptatibus",
        x_amz_security_token="quisquam",
        x_amz_signature="quis",
        x_amz_signed_headers="autem",
        x_amz_target="GlobalAccelerator_V20180706.AddCustomRoutingEndpoints",
    ),
    request=shared.AddCustomRoutingEndpointsRequest(
        endpoint_configurations=[
            shared.CustomRoutingEndpointConfiguration(
                endpoint_id="ducimus",
            ),
            shared.CustomRoutingEndpointConfiguration(
                endpoint_id="provident",
            ),
            shared.CustomRoutingEndpointConfiguration(
                endpoint_id="commodi",
            ),
        ],
        endpoint_group_arn="ut",
    ),
)
    
res = s.add_custom_routing_endpoints(req)

if res.add_custom_routing_endpoints_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->