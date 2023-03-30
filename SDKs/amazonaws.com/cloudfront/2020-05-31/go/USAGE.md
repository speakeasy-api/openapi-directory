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

    req := operations.AssociateAlias20200531Request{
        PathParams: operations.AssociateAlias20200531PathParams{
            TargetDistributionID: "corrupti",
        },
        QueryParams: operations.AssociateAlias20200531QueryParams{
            Alias: "provident",
        },
        Headers: operations.AssociateAlias20200531Headers{
            XAmzAlgorithm: "distinctio",
            XAmzContentSha256: "quibusdam",
            XAmzCredential: "unde",
            XAmzDate: "nulla",
            XAmzSecurityToken: "corrupti",
            XAmzSignature: "illum",
            XAmzSignedHeaders: "vel",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateAlias20200531(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->