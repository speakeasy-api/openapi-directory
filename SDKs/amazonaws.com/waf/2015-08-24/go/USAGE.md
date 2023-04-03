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

    req := operations.CreateByteMatchSetRequest{
        CreateByteMatchSetRequest: shared.CreateByteMatchSetRequest{
            ChangeToken: "corrupti",
            Name: "provident",
        },
        XAmzAlgorithm: "distinctio",
        XAmzContentSha256: "quibusdam",
        XAmzCredential: "unde",
        XAmzDate: "nulla",
        XAmzSecurityToken: "corrupti",
        XAmzSignature: "illum",
        XAmzSignedHeaders: "vel",
        XAmzTarget: "AWSWAF_20150824.CreateByteMatchSet",
    }

    ctx := context.Background()
    res, err := s.CreateByteMatchSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateByteMatchSetResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->