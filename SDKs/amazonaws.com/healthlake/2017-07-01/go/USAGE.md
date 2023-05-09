<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateFHIRDatastore(ctx, operations.CreateFHIRDatastoreRequest{
        CreateFHIRDatastoreRequest: shared.CreateFHIRDatastoreRequest{
            ClientToken: sdk.String("corrupti"),
            DatastoreName: sdk.String("provident"),
            DatastoreTypeVersion: shared.FHIRVersionEnumR4,
            PreloadDataConfig: &shared.PreloadDataConfig{
                PreloadDataType: shared.PreloadDataTypeEnumSynthea,
            },
            SseConfiguration: &shared.SseConfiguration{
                KmsEncryptionConfig: shared.KmsEncryptionConfig{
                    CmkType: shared.CmkTypeEnumAwsOwnedKmsKey,
                    KmsKeyID: sdk.String("quibusdam"),
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
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.CreateFHIRDatastoreXAmzTargetEnumHealthLakeCreateFhirDatastore,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFHIRDatastoreResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->