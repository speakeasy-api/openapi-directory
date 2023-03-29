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

    req := operations.BatchGetCollectionRequest{
        Headers: operations.BatchGetCollectionHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "OpenSearchServerless.BatchGetCollection",
        },
        Request: shared.BatchGetCollectionRequest{
            Ids: []string{
                "fuga",
                "facilis",
            },
            Names: []string{
                "iusto",
                "ullam",
            },
        },
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