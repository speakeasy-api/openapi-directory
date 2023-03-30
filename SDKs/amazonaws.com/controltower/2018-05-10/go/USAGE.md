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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.DisableControlRequestBody{
            ControlIdentifier: "illum",
            TargetIdentifier: "vel",
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