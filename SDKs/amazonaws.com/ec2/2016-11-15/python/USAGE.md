<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.GETAcceptTransitGatewayMulticastDomainAssociationsRequest(
    action="AcceptTransitGatewayMulticastDomainAssociations",
    dry_run=False,
    subnet_ids=[
        "provident",
        "distinctio",
        "quibusdam",
    ],
    transit_gateway_attachment_id="unde",
    transit_gateway_multicast_domain_id="nulla",
    version="2016-11-15",
    x_amz_algorithm="corrupti",
    x_amz_content_sha256="illum",
    x_amz_credential="vel",
    x_amz_date="error",
    x_amz_security_token="deserunt",
    x_amz_signature="suscipit",
    x_amz_signed_headers="iure",
)
    
res = s.get_accept_transit_gateway_multicast_domain_associations(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->