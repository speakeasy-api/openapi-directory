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

    req := operations.BatchGetNamedQueryRequest{
        Headers: operations.BatchGetNamedQueryHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AmazonAthena.BatchGetNamedQuery",
        },
        Request: shared.BatchGetNamedQueryInput{
            NamedQueryIds: []string{
                "fuga",
                "facilis",
            },
        },
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