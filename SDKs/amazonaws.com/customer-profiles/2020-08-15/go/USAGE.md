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

    req := operations.AddProfileKeyRequest{
        PathParams: operations.AddProfileKeyPathParams{
            DomainName: "corrupti",
        },
        Headers: operations.AddProfileKeyHeaders{
            XAmzAlgorithm: "provident",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "quibusdam",
            XAmzDate: "unde",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "corrupti",
            XAmzSignedHeaders: "illum",
        },
        Request: operations.AddProfileKeyRequestBody{
            KeyName: "vel",
            ProfileID: "error",
            Values: []string{
                "suscipit",
                "iure",
                "magnam",
            },
        },
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