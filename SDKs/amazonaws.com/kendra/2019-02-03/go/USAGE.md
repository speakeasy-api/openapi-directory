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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSKendraFrontendService.AssociateEntitiesToExperience",
        },
        Request: shared.AssociateEntitiesToExperienceRequest{
            EntityList: []shared.EntityConfiguration{
                shared.EntityConfiguration{
                    EntityID: "fuga",
                    EntityType: "GROUP",
                },
                shared.EntityConfiguration{
                    EntityID: "eum",
                    EntityType: "USER",
                },
            },
            ID: "ullam",
            IndexID: "saepe",
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