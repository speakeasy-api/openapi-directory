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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "OpenSearchServerless.BatchGetCollection",
        },
        Request: shared.BatchGetCollectionRequest{
            Ids: []string{
                "vel",
                "error",
                "deserunt",
                "suscipit",
            },
            Names: []string{
                "magnam",
                "debitis",
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