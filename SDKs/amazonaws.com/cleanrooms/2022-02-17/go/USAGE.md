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
            CollaborationIdentifier: "unde",
        },
        Headers: operations.BatchGetSchemaHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzContentSha256: "porro",
            XAmzCredential: "nulla",
            XAmzDate: "id",
            XAmzSecurityToken: "vero",
            XAmzSignature: "perspiciatis",
            XAmzSignedHeaders: "nulla",
        },
        Request: operations.BatchGetSchemaRequestBody{
            Names: []string{
                "fuga",
                "facilis",
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