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
    res, err := s.AssociateEntitiesToExperience(ctx, operations.AssociateEntitiesToExperienceRequest{
        AssociateEntitiesToExperienceRequest: shared.AssociateEntitiesToExperienceRequest{
            EntityList: []shared.EntityConfiguration{
                shared.EntityConfiguration{
                    EntityID: "provident",
                    EntityType: shared.EntityTypeEnumGroup,
                },
                shared.EntityConfiguration{
                    EntityID: "quibusdam",
                    EntityType: shared.EntityTypeEnumGroup,
                },
                shared.EntityConfiguration{
                    EntityID: "nulla",
                    EntityType: shared.EntityTypeEnumGroup,
                },
            },
            ID: "d69a674e-0f46-47cc-8796-ed151a05dfc2",
            IndexID: "at",
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.AssociateEntitiesToExperienceXAmzTargetEnumAwsKendraFrontendServiceAssociateEntitiesToExperience,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateEntitiesToExperienceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->