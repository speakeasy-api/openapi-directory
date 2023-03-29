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

    req := operations.AcceptEulasRequest{
        PathParams: operations.AcceptEulasPathParams{
            StudioID: "unde",
        },
        Headers: operations.AcceptEulasHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzClientToken: "porro",
            XAmzContentSha256: "nulla",
            XAmzCredential: "id",
            XAmzDate: "vero",
            XAmzSecurityToken: "perspiciatis",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "nihil",
        },
        Request: operations.AcceptEulasRequestBody{
            EulaIds: []string{
                "facilis",
                "eum",
                "iusto",
            },
        },
    }

    ctx := context.Background()
    res, err := s.AcceptEulas(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptEulasResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->