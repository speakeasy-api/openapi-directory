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
    
req = operations.AcceptDirectConnectGatewayAssociationProposalRequest(
    headers=operations.AcceptDirectConnectGatewayAssociationProposalHeaders(
        x_amz_algorithm="eaque",
        x_amz_content_sha256="nihil",
        x_amz_credential="labore",
        x_amz_date="minima",
        x_amz_security_token="iure",
        x_amz_signature="ipsam",
        x_amz_signed_headers="quia",
        x_amz_target="OvertureService.AcceptDirectConnectGatewayAssociationProposal",
    ),
    request=shared.AcceptDirectConnectGatewayAssociationProposalRequest(
        associated_gateway_owner_account="dolor",
        direct_connect_gateway_id="nostrum",
        override_allowed_prefixes_to_direct_connect_gateway=[
            shared.RouteFilterPrefix(
                cidr="ut",
            ),
            shared.RouteFilterPrefix(
                cidr="neque",
            ),
        ],
        proposal_id="pariatur",
    ),
)
    
res = s.accept_direct_connect_gateway_association_proposal(req)

if res.accept_direct_connect_gateway_association_proposal_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->