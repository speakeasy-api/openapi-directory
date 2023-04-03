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

    req := operations.AssociateCreatedArtifactRequest{
        AssociateCreatedArtifactRequest: shared.AssociateCreatedArtifactRequest{
            CreatedArtifact: shared.CreatedArtifact{
                Description: "corrupti",
                Name: "provident",
            },
            DryRun: false,
            MigrationTaskName: "distinctio",
            ProgressUpdateStream: "quibusdam",
        },
        XAmzAlgorithm: "unde",
        XAmzContentSha256: "nulla",
        XAmzCredential: "corrupti",
        XAmzDate: "illum",
        XAmzSecurityToken: "vel",
        XAmzSignature: "error",
        XAmzSignedHeaders: "deserunt",
        XAmzTarget: "AWSMigrationHub.AssociateCreatedArtifact",
    }

    ctx := context.Background()
    res, err := s.AssociateCreatedArtifact(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateCreatedArtifactResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->