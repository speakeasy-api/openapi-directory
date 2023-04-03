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

    req := operations.AssociateConfigurationItemsToApplicationRequest{
        AssociateConfigurationItemsToApplicationRequest: shared.AssociateConfigurationItemsToApplicationRequest{
            ApplicationConfigurationID: "corrupti",
            ConfigurationIds: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
        },
        XAmzAlgorithm: "nulla",
        XAmzContentSha256: "corrupti",
        XAmzCredential: "illum",
        XAmzDate: "vel",
        XAmzSecurityToken: "error",
        XAmzSignature: "deserunt",
        XAmzSignedHeaders: "suscipit",
        XAmzTarget: "AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication",
    }

    ctx := context.Background()
    res, err := s.AssociateConfigurationItemsToApplication(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateConfigurationItemsToApplicationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->