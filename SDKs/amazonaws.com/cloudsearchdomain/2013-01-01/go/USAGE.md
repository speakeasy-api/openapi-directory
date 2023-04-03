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

    req := operations.SearchRequest{
        XAmzAlgorithm: "corrupti",
        XAmzContentSha256: "provident",
        XAmzCredential: "distinctio",
        XAmzDate: "quibusdam",
        XAmzSecurityToken: "unde",
        XAmzSignature: "nulla",
        XAmzSignedHeaders: "corrupti",
        Cursor: "illum",
        Expr: "vel",
        Facet: "error",
        Format: "sdk",
        Fq: "deserunt",
        Highlight: "suscipit",
        Partial: false,
        Pretty: "true",
        Q: "iure",
        QOptions: "magnam",
        QParser: "dismax",
        Return: "ipsa",
        Size: 963663,
        Sort: "tempora",
        Start: 383441,
        Stats: "molestiae",
    }

    ctx := context.Background()
    res, err := s.Search(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->