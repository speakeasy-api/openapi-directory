<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AcceptDirectConnectGatewayAssociationProposalRequest{
        Headers: operations.AcceptDirectConnectGatewayAssociationProposalHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "OvertureService.AcceptDirectConnectGatewayAssociationProposal",
        },
        Request: shared.AcceptDirectConnectGatewayAssociationProposalRequest{
            AssociatedGatewayOwnerAccount: "nihil",
            DirectConnectGatewayID: "fuga",
            OverrideAllowedPrefixesToDirectConnectGateway: []shared.RouteFilterPrefix{
                shared.RouteFilterPrefix{
                    Cidr: "eum",
                },
                shared.RouteFilterPrefix{
                    Cidr: "iusto",
                },
                shared.RouteFilterPrefix{
                    Cidr: "ullam",
                },
            },
            ProposalID: "saepe",
        },
    }

    ctx := context.Background()
    res, err := s.AcceptDirectConnectGatewayAssociationProposal(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptDirectConnectGatewayAssociationProposalResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->