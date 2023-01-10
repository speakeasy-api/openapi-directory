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
            XAmzAlgorithm: "eaque",
            XAmzContentSha256: "nihil",
            XAmzCredential: "labore",
            XAmzDate: "minima",
            XAmzSecurityToken: "iure",
            XAmzSignature: "ipsam",
            XAmzSignedHeaders: "quia",
            XAmzTarget: "OvertureService.AcceptDirectConnectGatewayAssociationProposal",
        },
        Request: shared.AcceptDirectConnectGatewayAssociationProposalRequest{
            AssociatedGatewayOwnerAccount: "dolor",
            DirectConnectGatewayID: "nostrum",
            OverrideAllowedPrefixesToDirectConnectGateway: []shared.RouteFilterPrefix{
                shared.RouteFilterPrefix{
                    Cidr: "ut",
                },
                shared.RouteFilterPrefix{
                    Cidr: "neque",
                },
            },
            ProposalID: "pariatur",
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