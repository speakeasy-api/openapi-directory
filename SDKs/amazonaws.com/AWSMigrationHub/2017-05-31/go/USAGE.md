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
            XAmzAlgorithm: "vel",
            XAmzContentSha256: "vel",
            XAmzCredential: "placeat",
            XAmzDate: "qui",
            XAmzSecurityToken: "nisi",
            XAmzSignature: "quis",
            XAmzSignedHeaders: "adipisci",
            XAmzTarget: "AWSMigrationHub.AssociateCreatedArtifact",
        },
        Request: shared.AssociateCreatedArtifactRequest{
            CreatedArtifact: shared.CreatedArtifact{
                Description: "rerum",
                Name: "et",
            },
            DryRun: true,
            MigrationTaskName: "numquam",
            ProgressUpdateStream: "laborum",
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