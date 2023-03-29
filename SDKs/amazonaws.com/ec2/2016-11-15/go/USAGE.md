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

    req := operations.GETAcceptTransitGatewayMulticastDomainAssociationsRequest{
        QueryParams: operations.GETAcceptTransitGatewayMulticastDomainAssociationsQueryParams{
            Action: "AcceptTransitGatewayMulticastDomainAssociations",
            DryRun: false,
            SubnetIds: []string{
                "porro",
                "nulla",
                "id",
            },
            TransitGatewayAttachmentID: "vero",
            TransitGatewayMulticastDomainID: "perspiciatis",
            Version: "2016-11-15",
        },
        Headers: operations.GETAcceptTransitGatewayMulticastDomainAssociationsHeaders{
            XAmzAlgorithm: "nihil",
            XAmzContentSha256: "fuga",
            XAmzCredential: "facilis",
            XAmzDate: "eum",
            XAmzSecurityToken: "iusto",
            XAmzSignature: "ullam",
            XAmzSignedHeaders: "saepe",
        },
    }

    ctx := context.Background()
    res, err := s.GETAcceptTransitGatewayMulticastDomainAssociations(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->