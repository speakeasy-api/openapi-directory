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

    req := operations.CreateDestinationRequest{
        RequestBody: operations.CreateDestinationRequestBody{
            AdditionalFixedProperties: "corrupti",
            ClientToken: "provident",
            Name: "distinctio",
            Site: "quibusdam",
            State: "DISABLED",
        },
        XAmzAlgorithm: "nulla",
        XAmzContentSha256: "corrupti",
        XAmzCredential: "illum",
        XAmzDate: "vel",
        XAmzSecurityToken: "error",
        XAmzSignature: "deserunt",
        XAmzSignedHeaders: "suscipit",
    }

    ctx := context.Background()
    res, err := s.CreateDestination(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDestinationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->