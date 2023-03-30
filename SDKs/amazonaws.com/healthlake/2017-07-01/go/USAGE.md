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

    req := operations.CreateFHIRDatastoreRequest{
        Headers: operations.CreateFHIRDatastoreHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "HealthLake.CreateFHIRDatastore",
        },
        Request: shared.CreateFHIRDatastoreRequest{
            ClientToken: "illum",
            DatastoreName: "vel",
            DatastoreTypeVersion: "R4",
            PreloadDataConfig: &shared.PreloadDataConfig{
                PreloadDataType: "SYNTHEA",
            },
            SseConfiguration: &shared.SseConfiguration{
                KmsEncryptionConfig: shared.KmsEncryptionConfig{
                    CmkType: "AWS_OWNED_KMS_KEY",
                    KmsKeyID: "deserunt",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iure",
                    Value: "magnam",
                },
                shared.Tag{
                    Key: "debitis",
                    Value: "ipsa",
                },
            },
        },
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