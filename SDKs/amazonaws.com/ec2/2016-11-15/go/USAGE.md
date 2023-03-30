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
                "provident",
                "distinctio",
                "quibusdam",
            },
            TransitGatewayAttachmentID: "unde",
            TransitGatewayMulticastDomainID: "nulla",
            Version: "2016-11-15",
        },
        Headers: operations.GETAcceptTransitGatewayMulticastDomainAssociationsHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "illum",
            XAmzCredential: "vel",
            XAmzDate: "error",
            XAmzSecurityToken: "deserunt",
            XAmzSignature: "suscipit",
            XAmzSignedHeaders: "iure",
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