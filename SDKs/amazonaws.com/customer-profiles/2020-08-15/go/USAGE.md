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

    req := operations.AddProfileKeyRequest{
        DomainName: "corrupti",
        RequestBody: operations.AddProfileKeyRequestBody{
            KeyName: "provident",
            ProfileID: "distinctio",
            Values: []string{
                "unde",
                "nulla",
                "corrupti",
                "illum",
            },
        },
        XAmzAlgorithm: "vel",
        XAmzContentSha256: "error",
        XAmzCredential: "deserunt",
        XAmzDate: "suscipit",
        XAmzSecurityToken: "iure",
        XAmzSignature: "magnam",
        XAmzSignedHeaders: "debitis",
    }

    ctx := context.Background()
    res, err := s.AddProfileKey(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddProfileKeyResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->