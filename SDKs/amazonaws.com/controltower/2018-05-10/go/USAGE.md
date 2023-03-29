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

    req := operations.DisableControlRequest{
        Headers: operations.DisableControlHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.DisableControlRequestBody{
            ControlIdentifier: "nulla",
            TargetIdentifier: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.DisableControl(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableControlOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->