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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSMigrationHub.AssociateCreatedArtifact",
        },
        Request: shared.AssociateCreatedArtifactRequest{
            CreatedArtifact: shared.CreatedArtifact{
                Description: "nihil",
                Name: "fuga",
            },
            DryRun: false,
            MigrationTaskName: "facilis",
            ProgressUpdateStream: "eum",
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