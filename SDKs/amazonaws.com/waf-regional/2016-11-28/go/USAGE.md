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

    req := operations.AssociateWebACLRequest{
        Headers: operations.AssociateWebACLHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AWSWAF_Regional_20161128.AssociateWebACL",
        },
        Request: shared.AssociateWebACLRequest{
            ResourceArn: "illum",
            WebACLID: "vel",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateWebACL(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateWebACLResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->