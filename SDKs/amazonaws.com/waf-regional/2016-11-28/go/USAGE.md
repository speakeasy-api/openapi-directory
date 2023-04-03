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

    req := operations.AssociateWebACLRequest{
        AssociateWebACLRequest: shared.AssociateWebACLRequest{
            ResourceArn: "corrupti",
            WebACLID: "provident",
        },
        XAmzAlgorithm: "distinctio",
        XAmzContentSha256: "quibusdam",
        XAmzCredential: "unde",
        XAmzDate: "nulla",
        XAmzSecurityToken: "corrupti",
        XAmzSignature: "illum",
        XAmzSignedHeaders: "vel",
        XAmzTarget: "AWSWAF_Regional_20161128.AssociateWebACL",
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