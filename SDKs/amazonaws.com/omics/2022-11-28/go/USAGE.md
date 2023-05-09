<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BatchDeleteReadSet(ctx, operations.BatchDeleteReadSetRequest{
        RequestBody: operations.BatchDeleteReadSetRequestBody{
            Ids: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
        },
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        SequenceStoreID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteReadSetResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->