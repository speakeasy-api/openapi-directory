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

    req := operations.AssociateCreatedArtifactRequest{
        Headers: operations.AssociateCreatedArtifactHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AWSMigrationHub.AssociateCreatedArtifact",
        },
        Request: shared.AssociateCreatedArtifactRequest{
            CreatedArtifact: shared.CreatedArtifact{
                Description: "illum",
                Name: "vel",
            },
            DryRun: false,
            MigrationTaskName: "error",
            ProgressUpdateStream: "deserunt",
        },
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