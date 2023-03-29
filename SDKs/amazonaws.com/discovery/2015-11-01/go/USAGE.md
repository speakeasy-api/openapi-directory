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

    req := operations.AssociateConfigurationItemsToApplicationRequest{
        Headers: operations.AssociateConfigurationItemsToApplicationHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication",
        },
        Request: shared.AssociateConfigurationItemsToApplicationRequest{
            ApplicationConfigurationID: "nihil",
            ConfigurationIds: []string{
                "facilis",
                "eum",
                "iusto",
            },
        },
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