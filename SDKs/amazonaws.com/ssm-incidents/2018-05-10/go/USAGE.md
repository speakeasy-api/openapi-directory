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
    res, err := s.CreateReplicationSet(ctx, operations.CreateReplicationSetRequest{
        RequestBody: operations.CreateReplicationSetRequestBody{
            ClientToken: sdk.String("corrupti"),
            Regions: map[string]shared.RegionMapInputValue{
                "distinctio": shared.RegionMapInputValue{
                    SseKmsKeyID: sdk.String("quibusdam"),
                },
                "unde": shared.RegionMapInputValue{
                    SseKmsKeyID: sdk.String("nulla"),
                },
                "corrupti": shared.RegionMapInputValue{
                    SseKmsKeyID: sdk.String("illum"),
                },
            },
            Tags: map[string]string{
                "error": "deserunt",
                "suscipit": "iure",
            },
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateReplicationSetOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->