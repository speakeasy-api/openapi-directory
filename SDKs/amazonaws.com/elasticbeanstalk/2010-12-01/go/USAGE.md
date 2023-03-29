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

    req := operations.GETAbortEnvironmentUpdateRequest{
        QueryParams: operations.GETAbortEnvironmentUpdateQueryParams{
            Action: "AbortEnvironmentUpdate",
            EnvironmentID: "deserunt",
            EnvironmentName: "porro",
            Version: "2010-12-01",
        },
        Headers: operations.GETAbortEnvironmentUpdateHeaders{
            XAmzAlgorithm: "id",
            XAmzContentSha256: "vero",
            XAmzCredential: "perspiciatis",
            XAmzDate: "nulla",
            XAmzSecurityToken: "nihil",
            XAmzSignature: "fuga",
            XAmzSignedHeaders: "facilis",
        },
    }

    ctx := context.Background()
    res, err := s.GETAbortEnvironmentUpdate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->