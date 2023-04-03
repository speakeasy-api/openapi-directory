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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GetApplicationComponentDetailsRequest{
        XAmzAlgorithm: "corrupti",
        XAmzContentSha256: "provident",
        XAmzCredential: "distinctio",
        XAmzDate: "quibusdam",
        XAmzSecurityToken: "unde",
        XAmzSignature: "nulla",
        XAmzSignedHeaders: "corrupti",
        ApplicationComponentID: "illum",
    }

    ctx := context.Background()
    res, err := s.GetApplicationComponentDetails(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApplicationComponentDetailsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->