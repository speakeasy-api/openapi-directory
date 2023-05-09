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
    res, err := s.AssociateCreatedArtifact(ctx, operations.AssociateCreatedArtifactRequest{
        AssociateCreatedArtifactRequest: shared.AssociateCreatedArtifactRequest{
            CreatedArtifact: shared.CreatedArtifact{
                Description: sdk.String("corrupti"),
                Name: "Kelvin Sporer",
            },
            DryRun: sdk.Bool(false),
            MigrationTaskName: "corrupti",
            ProgressUpdateStream: "illum",
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.AssociateCreatedArtifactXAmzTargetEnumAwsMigrationHubAssociateCreatedArtifact,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateCreatedArtifactResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->