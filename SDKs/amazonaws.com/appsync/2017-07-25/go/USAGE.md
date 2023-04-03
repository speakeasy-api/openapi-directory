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

    req := operations.AssociateAPIRequest{
        RequestBody: operations.AssociateAPIRequestBody{
            APIID: "corrupti",
        },
        XAmzAlgorithm: "provident",
        XAmzContentSha256: "distinctio",
        XAmzCredential: "quibusdam",
        XAmzDate: "unde",
        XAmzSecurityToken: "nulla",
        XAmzSignature: "corrupti",
        XAmzSignedHeaders: "illum",
        DomainName: "vel",
    }

    ctx := context.Background()
    res, err := s.AssociateAPI(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateAPIResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->