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
    res, err := s.CancelTask(ctx, operations.CancelTaskRequest{
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("unde"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        TaskID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelTaskOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->