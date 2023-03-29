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

    req := operations.DeleteThingShadowRequest{
        PathParams: operations.DeleteThingShadowPathParams{
            ThingName: "unde",
        },
        QueryParams: operations.DeleteThingShadowQueryParams{
            Name: "deserunt",
        },
        Headers: operations.DeleteThingShadowHeaders{
            XAmzAlgorithm: "porro",
            XAmzContentSha256: "nulla",
            XAmzCredential: "id",
            XAmzDate: "vero",
            XAmzSecurityToken: "perspiciatis",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.DeleteThingShadow(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteThingShadowResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->