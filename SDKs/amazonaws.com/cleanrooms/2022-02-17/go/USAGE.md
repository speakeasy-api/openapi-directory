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

    req := operations.BatchGetSchemaRequest{
        RequestBody: operations.BatchGetSchemaRequestBody{
            Names: []string{
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
        CollaborationIdentifier: "suscipit",
    }

    ctx := context.Background()
    res, err := s.BatchGetSchema(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetSchemaOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->