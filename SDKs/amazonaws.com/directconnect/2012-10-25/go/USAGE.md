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
            XAmzAlgorithm: "rerum",
            XAmzContentSha256: "reiciendis",
            XAmzCredential: "aut",
            XAmzDate: "unde",
            XAmzSecurityToken: "saepe",
            XAmzSignature: "ratione",
            XAmzSignedHeaders: "autem",
            XAmzTarget: "OvertureService.AcceptDirectConnectGatewayAssociationProposal",
        },
        Request: shared.AcceptDirectConnectGatewayAssociationProposalRequest{
            AssociatedGatewayOwnerAccount: "tempore",
            DirectConnectGatewayID: "veniam",
            OverrideAllowedPrefixesToDirectConnectGateway: map[string]interface{}{
                "corporis": "est",
                "iure": "adipisci",
                "est": "temporibus",
            },
            ProposalID: "consequatur",
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