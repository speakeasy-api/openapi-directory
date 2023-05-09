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
    res, err := s.BatchGetTraces(ctx, operations.BatchGetTracesRequest{
        NextToken: sdk.String("corrupti"),
        RequestBody: operations.BatchGetTracesRequestBody{
            NextToken: sdk.String("provident"),
            TraceIds: []string{
                "quibusdam",
                "unde",
                "nulla",
            },
        },
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetTracesResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->