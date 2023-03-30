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

    req := operations.DeleteHumanLoopRequest{
        PathParams: operations.DeleteHumanLoopPathParams{
            HumanLoopName: "corrupti",
        },
        Headers: operations.DeleteHumanLoopHeaders{
            XAmzAlgorithm: "provident",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "quibusdam",
            XAmzDate: "unde",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "corrupti",
            XAmzSignedHeaders: "illum",
        },
    }

    ctx := context.Background()
    res, err := s.DeleteHumanLoop(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteHumanLoopResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->