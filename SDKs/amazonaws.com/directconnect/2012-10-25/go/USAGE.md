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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "OvertureService.AcceptDirectConnectGatewayAssociationProposal",
        },
        Request: shared.AcceptDirectConnectGatewayAssociationProposalRequest{
            AssociatedGatewayOwnerAccount: "illum",
            DirectConnectGatewayID: "vel",
            OverrideAllowedPrefixesToDirectConnectGateway: []shared.RouteFilterPrefix{
                shared.RouteFilterPrefix{
                    Cidr: "deserunt",
                },
                shared.RouteFilterPrefix{
                    Cidr: "suscipit",
                },
                shared.RouteFilterPrefix{
                    Cidr: "iure",
                },
            },
            ProposalID: "magnam",
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