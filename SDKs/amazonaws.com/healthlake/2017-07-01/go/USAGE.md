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

    req := operations.CreateFHIRDatastoreRequest{
        CreateFHIRDatastoreRequest: shared.CreateFHIRDatastoreRequest{
            ClientToken: "corrupti",
            DatastoreName: "provident",
            DatastoreTypeVersion: "R4",
            PreloadDataConfig: &shared.PreloadDataConfig{
                PreloadDataType: "SYNTHEA",
            },
            SseConfiguration: &shared.SseConfiguration{
                KmsEncryptionConfig: shared.KmsEncryptionConfig{
                    CmkType: "AWS_OWNED_KMS_KEY",
                    KmsKeyID: "quibusdam",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "nulla",
                    Value: "corrupti",
                },
                shared.Tag{
                    Key: "illum",
                    Value: "vel",
                },
                shared.Tag{
                    Key: "error",
                    Value: "deserunt",
                },
            },
        },
        XAmzAlgorithm: "suscipit",
        XAmzContentSha256: "iure",
        XAmzCredential: "magnam",
        XAmzDate: "debitis",
        XAmzSecurityToken: "ipsa",
        XAmzSignature: "delectus",
        XAmzSignedHeaders: "tempora",
        XAmzTarget: "HealthLake.CreateFHIRDatastore",
    }

    ctx := context.Background()
    res, err := s.CreateFHIRDatastore(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFHIRDatastoreResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->