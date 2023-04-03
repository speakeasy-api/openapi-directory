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

    req := operations.BatchDeleteReadSetRequest{
        RequestBody: operations.BatchDeleteReadSetRequestBody{
            Ids: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
        },
        XAmzAlgorithm: "unde",
        XAmzContentSha256: "nulla",
        XAmzCredential: "corrupti",
        XAmzDate: "illum",
        XAmzSecurityToken: "vel",
        XAmzSignature: "error",
        XAmzSignedHeaders: "deserunt",
        SequenceStoreID: "suscipit",
    }

    ctx := context.Background()
    res, err := s.BatchDeleteReadSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteReadSetResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->