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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.BatchGetSchemaRequest{
        PathParams: operations.BatchGetSchemaPathParams{
            CollaborationIdentifier: "corrupti",
        },
        Headers: operations.BatchGetSchemaHeaders{
            XAmzAlgorithm: "provident",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "quibusdam",
            XAmzDate: "unde",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "corrupti",
            XAmzSignedHeaders: "illum",
        },
        Request: operations.BatchGetSchemaRequestBody{
            Names: []string{
                "error",
                "deserunt",
            },
        },
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