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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.BatchGetTracesRequest{
        NextToken: "corrupti",
        RequestBody: operations.BatchGetTracesRequestBody{
            NextToken: "provident",
            TraceIds: []string{
                "quibusdam",
                "unde",
                "nulla",
            },
        },
        XAmzAlgorithm: "corrupti",
        XAmzContentSha256: "illum",
        XAmzCredential: "vel",
        XAmzDate: "error",
        XAmzSecurityToken: "deserunt",
        XAmzSignature: "suscipit",
        XAmzSignedHeaders: "iure",
    }

    ctx := context.Background()
    res, err := s.BatchGetTraces(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetTracesResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->