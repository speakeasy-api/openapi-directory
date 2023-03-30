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

    req := operations.AssociateDefaultViewRequest{
        Headers: operations.AssociateDefaultViewHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.AssociateDefaultViewRequestBody{
            ViewArn: "illum",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateDefaultView(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateDefaultViewOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->