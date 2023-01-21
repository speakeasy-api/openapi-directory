<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AssociateCreatedArtifactRequest{
        Headers: operations.AssociateCreatedArtifactHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWSMigrationHub.AssociateCreatedArtifact",
        },
        Request: shared.AssociateCreatedArtifactRequest{
            CreatedArtifact: shared.CreatedArtifact{
                Description: "fugit",
                Name: "et",
            },
            DryRun: true,
            MigrationTaskName: "rerum",
            ProgressUpdateStream: "dicta",
        },
    }
    
    res, err := s.AssociateCreatedArtifact(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateCreatedArtifactResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->