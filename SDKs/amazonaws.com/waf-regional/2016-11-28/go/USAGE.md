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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSWAF_Regional_20161128.AssociateWebACL",
        },
        Request: shared.AssociateWebACLRequest{
            ResourceArn: "nihil",
            WebACLID: "fuga",
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