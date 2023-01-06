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
            XAmzAlgorithm: "autem",
            XAmzContentSha256: "perferendis",
            XAmzCredential: "dolorem",
            XAmzDate: "odit",
            XAmzSecurityToken: "maxime",
            XAmzSignature: "et",
            XAmzSignedHeaders: "ipsa",
            XAmzTarget: "HealthLake.CreateFHIRDatastore",
        },
        Request: shared.CreateFhirDatastoreRequest{
            ClientToken: "est",
            DatastoreName: "velit",
            DatastoreTypeVersion: "R4",
            PreloadDataConfig: &shared.PreloadDataConfig{
                PreloadDataType: "SYNTHEA",
            },
            SseConfiguration: &shared.SseConfiguration{
                KmsEncryptionConfig: shared.KmsEncryptionConfig{
                    CmkType: "AWS_OWNED_KMS_KEY",
                    KmsKeyID: "omnis",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "velit",
                    Value: "illum",
                },
                shared.Tag{
                    Key: "eum",
                    Value: "quo",
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