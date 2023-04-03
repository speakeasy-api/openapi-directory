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

    req := operations.BatchGetNamedQueryRequest{
        BatchGetNamedQueryInput: shared.BatchGetNamedQueryInput{
            NamedQueryIds: []string{
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
        XAmzTarget: "AmazonAthena.BatchGetNamedQuery",
    }

    ctx := context.Background()
    res, err := s.BatchGetNamedQuery(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetNamedQueryOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->