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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "HealthLake.CreateFHIRDatastore",
        },
        Request: shared.CreateFHIRDatastoreRequest{
            ClientToken: "nihil",
            DatastoreName: "fuga",
            DatastoreTypeVersion: "R4",
            PreloadDataConfig: &shared.PreloadDataConfig{
                PreloadDataType: "SYNTHEA",
            },
            SseConfiguration: &shared.SseConfiguration{
                KmsEncryptionConfig: shared.KmsEncryptionConfig{
                    CmkType: "CUSTOMER_MANAGED_KMS_KEY",
                    KmsKeyID: "ullam",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "inventore",
                    Value: "sapiente",
                },
                shared.Tag{
                    Key: "enim",
                    Value: "eum",
                },
                shared.Tag{
                    Key: "voluptatum",
                    Value: "autem",
                },
                shared.Tag{
                    Key: "vel",
                    Value: "non",
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