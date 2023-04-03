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

    req := operations.AssociateEntitiesToExperienceRequest{
        AssociateEntitiesToExperienceRequest: shared.AssociateEntitiesToExperienceRequest{
            EntityList: []shared.EntityConfiguration{
                shared.EntityConfiguration{
                    EntityID: "provident",
                    EntityType: "GROUP",
                },
                shared.EntityConfiguration{
                    EntityID: "quibusdam",
                    EntityType: "GROUP",
                },
                shared.EntityConfiguration{
                    EntityID: "nulla",
                    EntityType: "GROUP",
                },
            },
            ID: "illum",
            IndexID: "vel",
        },
        XAmzAlgorithm: "error",
        XAmzContentSha256: "deserunt",
        XAmzCredential: "suscipit",
        XAmzDate: "iure",
        XAmzSecurityToken: "magnam",
        XAmzSignature: "debitis",
        XAmzSignedHeaders: "ipsa",
        XAmzTarget: "AWSKendraFrontendService.AssociateEntitiesToExperience",
    }

    ctx := context.Background()
    res, err := s.AssociateEntitiesToExperience(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateEntitiesToExperienceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->