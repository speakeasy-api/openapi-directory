<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AcceptDirectConnectGatewayAssociationProposalRequest(
    accept_direct_connect_gateway_association_proposal_request=shared.AcceptDirectConnectGatewayAssociationProposalRequest(
        associated_gateway_owner_account="corrupti",
        direct_connect_gateway_id="provident",
        override_allowed_prefixes_to_direct_connect_gateway=[
            shared.RouteFilterPrefix(
                cidr="quibusdam",
            ),
            shared.RouteFilterPrefix(
                cidr="unde",
            ),
            shared.RouteFilterPrefix(
                cidr="nulla",
            ),
        ],
        proposal_id="corrupti",
    ),
    x_amz_algorithm="illum",
    x_amz_content_sha256="vel",
    x_amz_credential="error",
    x_amz_date="deserunt",
    x_amz_security_token="suscipit",
    x_amz_signature="iure",
    x_amz_signed_headers="magnam",
    x_amz_target="OvertureService.AcceptDirectConnectGatewayAssociationProposal",
)
    
res = s.accept_direct_connect_gateway_association_proposal(req)

if res.accept_direct_connect_gateway_association_proposal_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->