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

    req := operations.BatchDeleteReadSetRequest{
        PathParams: operations.BatchDeleteReadSetPathParams{
            SequenceStoreID: "unde",
        },
        Headers: operations.BatchDeleteReadSetHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzContentSha256: "porro",
            XAmzCredential: "nulla",
            XAmzDate: "id",
            XAmzSecurityToken: "vero",
            XAmzSignature: "perspiciatis",
            XAmzSignedHeaders: "nulla",
        },
        Request: operations.BatchDeleteReadSetRequestBody{
            Ids: []string{
                "fuga",
                "facilis",
            },
        },
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