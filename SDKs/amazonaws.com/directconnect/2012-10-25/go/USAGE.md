<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AcceptDirectConnectGatewayAssociationProposal(ctx, operations.AcceptDirectConnectGatewayAssociationProposalRequest{
        AcceptDirectConnectGatewayAssociationProposalRequest: shared.AcceptDirectConnectGatewayAssociationProposalRequest{
            AssociatedGatewayOwnerAccount: "corrupti",
            DirectConnectGatewayID: "provident",
            OverrideAllowedPrefixesToDirectConnectGateway: []shared.RouteFilterPrefix{
                shared.RouteFilterPrefix{
                    Cidr: sdk.String("quibusdam"),
                },
                shared.RouteFilterPrefix{
                    Cidr: sdk.String("unde"),
                },
                shared.RouteFilterPrefix{
                    Cidr: sdk.String("nulla"),
                },
            },
            ProposalID: "corrupti",
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnumOvertureServiceAcceptDirectConnectGatewayAssociationProposal,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptDirectConnectGatewayAssociationProposalResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->