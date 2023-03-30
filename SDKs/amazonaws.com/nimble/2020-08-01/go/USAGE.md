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
            StudioID: "corrupti",
        },
        Headers: operations.AcceptEulasHeaders{
            XAmzAlgorithm: "provident",
            XAmzClientToken: "distinctio",
            XAmzContentSha256: "quibusdam",
            XAmzCredential: "unde",
            XAmzDate: "nulla",
            XAmzSecurityToken: "corrupti",
            XAmzSignature: "illum",
            XAmzSignedHeaders: "vel",
        },
        Request: operations.AcceptEulasRequestBody{
            EulaIds: []string{
                "deserunt",
                "suscipit",
                "iure",
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