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
    
    req := operations.CreateFhirDatastoreRequest{
        Headers: operations.CreateFhirDatastoreHeaders{
            XAmzAlgorithm: "et",
            XAmzContentSha256: "est",
            XAmzCredential: "eos",
            XAmzDate: "quas",
            XAmzSecurityToken: "commodi",
            XAmzSignature: "eum",
            XAmzSignedHeaders: "ex",
            XAmzTarget: "HealthLake.CreateFHIRDatastore",
        },
        Request: shared.CreateFhirDatastoreRequest{
            ClientToken: "deleniti",
            DatastoreName: "quam",
            DatastoreTypeVersion: "R4",
            PreloadDataConfig: &shared.PreloadDataConfig{
                PreloadDataType: "SYNTHEA",
            },
            SseConfiguration: &shared.SseConfiguration{
                KmsEncryptionConfig: shared.KmsEncryptionConfig{
                    CmkType: "AWS_OWNED_KMS_KEY",
                    KmsKeyID: "molestiae",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "magnam",
                    Value: "voluptatem",
                },
                shared.Tag{
                    Key: "nihil",
                    Value: "et",
                },
                shared.Tag{
                    Key: "recusandae",
                    Value: "error",
                },
            },
        },
    }
    
    res, err := s.CreateFhirDatastore(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFHIRDatastoreResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->