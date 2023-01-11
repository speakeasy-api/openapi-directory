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
    
req = operations.GetAcceptTransitGatewayPeeringAttachmentRequest(
    query_params=operations.GetAcceptTransitGatewayPeeringAttachmentQueryParams(
        action="AcceptTransitGatewayPeeringAttachment",
        dry_run=False,
        transit_gateway_attachment_id="ut",
        version="2016-11-15",
    ),
    headers=operations.GetAcceptTransitGatewayPeeringAttachmentHeaders(
        x_amz_algorithm="assumenda",
        x_amz_content_sha256="autem",
        x_amz_credential="ut",
        x_amz_date="labore",
        x_amz_security_token="amet",
        x_amz_signature="in",
        x_amz_signed_headers="provident",
    ),
)
    
res = s.get_accept_transit_gateway_peering_attachment(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->