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

    req := operations.AllocateStaticIPRequest{
        Headers: operations.AllocateStaticIPHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "Lightsail_20161128.AllocateStaticIp",
        },
        Request: shared.AllocateStaticIPRequest{
            StaticIPName: "illum",
        },
    }

    ctx := context.Background()
    res, err := s.AllocateStaticIP(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AllocateStaticIPResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->