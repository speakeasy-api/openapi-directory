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
    res, err := s.AssociateConfigurationItemsToApplication(ctx, operations.AssociateConfigurationItemsToApplicationRequest{
        AssociateConfigurationItemsToApplicationRequest: shared.AssociateConfigurationItemsToApplicationRequest{
            ApplicationConfigurationID: "corrupti",
            ConfigurationIds: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.AssociateConfigurationItemsToApplicationXAmzTargetEnumAwsPoseidonServiceV20151101AssociateConfigurationItemsToApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateConfigurationItemsToApplicationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->