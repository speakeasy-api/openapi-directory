<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.GETAcceptTransitGatewayMulticastDomainAssociations(ctx, operations.GETAcceptTransitGatewayMulticastDomainAssociationsRequest{
        Action: operations.GETAcceptTransitGatewayMulticastDomainAssociationsActionEnumAcceptTransitGatewayMulticastDomainAssociations,
        DryRun: sdk.Bool(false),
        SubnetIds: []string{
            "provident",
            "distinctio",
            "quibusdam",
        },
        TransitGatewayAttachmentID: sdk.String("unde"),
        TransitGatewayMulticastDomainID: sdk.String("nulla"),
        Version: operations.GETAcceptTransitGatewayMulticastDomainAssociationsVersionEnumTwoThousandAndSixteen1115,
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->