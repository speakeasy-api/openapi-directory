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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AcceptDirectConnectGatewayAssociationProposalRequest{
        AcceptDirectConnectGatewayAssociationProposalRequest: shared.AcceptDirectConnectGatewayAssociationProposalRequest{
            AssociatedGatewayOwnerAccount: "corrupti",
            DirectConnectGatewayID: "provident",
            OverrideAllowedPrefixesToDirectConnectGateway: []shared.RouteFilterPrefix{
                shared.RouteFilterPrefix{
                    Cidr: "quibusdam",
                },
                shared.RouteFilterPrefix{
                    Cidr: "unde",
                },
                shared.RouteFilterPrefix{
                    Cidr: "nulla",
                },
            },
            ProposalID: "corrupti",
        },
        XAmzAlgorithm: "illum",
        XAmzContentSha256: "vel",
        XAmzCredential: "error",
        XAmzDate: "deserunt",
        XAmzSecurityToken: "suscipit",
        XAmzSignature: "iure",
        XAmzSignedHeaders: "magnam",
        XAmzTarget: "OvertureService.AcceptDirectConnectGatewayAssociationProposal",
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