<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AcceptDirectConnectGatewayAssociationProposalRequest{
        Headers: operations.AcceptDirectConnectGatewayAssociationProposalHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "OvertureService.AcceptDirectConnectGatewayAssociationProposal",
        },
        Request: shared.AcceptDirectConnectGatewayAssociationProposalRequest{
            AssociatedGatewayOwnerAccount: "fugit",
            DirectConnectGatewayID: "et",
            OverrideAllowedPrefixesToDirectConnectGateway: []shared.RouteFilterPrefix{
                shared.RouteFilterPrefix{
                    Cidr: "rerum",
                },
            },
            ProposalID: "dicta",
        },
    }
    
    res, err := s.AcceptDirectConnectGatewayAssociationProposal(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptDirectConnectGatewayAssociationProposalResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->