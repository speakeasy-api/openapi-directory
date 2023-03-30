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

    req := operations.AssociateEntitiesToExperienceRequest{
        Headers: operations.AssociateEntitiesToExperienceHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AWSKendraFrontendService.AssociateEntitiesToExperience",
        },
        Request: shared.AssociateEntitiesToExperienceRequest{
            EntityList: []shared.EntityConfiguration{
                shared.EntityConfiguration{
                    EntityID: "vel",
                    EntityType: "GROUP",
                },
                shared.EntityConfiguration{
                    EntityID: "deserunt",
                    EntityType: "USER",
                },
                shared.EntityConfiguration{
                    EntityID: "iure",
                    EntityType: "USER",
                },
                shared.EntityConfiguration{
                    EntityID: "debitis",
                    EntityType: "USER",
                },
            },
            ID: "delectus",
            IndexID: "tempora",
        },
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