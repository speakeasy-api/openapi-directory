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

    req := operations.BatchGetCollectionRequest{
        BatchGetCollectionRequest: shared.BatchGetCollectionRequest{
            Ids: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            Names: []string{
                "nulla",
                "corrupti",
                "illum",
            },
        },
        XAmzAlgorithm: "vel",
        XAmzContentSha256: "error",
        XAmzCredential: "deserunt",
        XAmzDate: "suscipit",
        XAmzSecurityToken: "iure",
        XAmzSignature: "magnam",
        XAmzSignedHeaders: "debitis",
        XAmzTarget: "OpenSearchServerless.BatchGetCollection",
    }

    ctx := context.Background()
    res, err := s.BatchGetCollection(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetCollectionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->