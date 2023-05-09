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
    res, err := s.CreateParallelData(ctx, operations.CreateParallelDataRequest{
        CreateParallelDataRequest: shared.CreateParallelDataRequest{
            ClientToken: "corrupti",
            Description: sdk.String("provident"),
            EncryptionKey: &shared.EncryptionKey{
                ID: "bd9d8d69-a674-4e0f-867c-c8796ed151a0",
                Type: shared.EncryptionKeyTypeEnumKms,
            },
            Name: "Estelle Will",
            ParallelDataConfig: shared.ParallelDataConfig{
                Format: shared.ParallelDataFormatEnumTmx,
                S3URI: "at",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "molestiae",
                    Value: "quod",
                },
                shared.Tag{
                    Key: "quod",
                    Value: "esse",
                },
                shared.Tag{
                    Key: "totam",
                    Value: "porro",
                },
                shared.Tag{
                    Key: "dolorum",
                    Value: "dicta",
                },
            },
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("optio"),
        XAmzTarget: operations.CreateParallelDataXAmzTargetEnumAwsShineFrontendService20170701CreateParallelData,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateParallelDataResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->