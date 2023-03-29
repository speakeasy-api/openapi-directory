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

    req := operations.AssociateCustomDomainRequest{
        Headers: operations.AssociateCustomDomainHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AppRunner.AssociateCustomDomain",
        },
        Request: shared.AssociateCustomDomainRequest{
            DomainName: "nihil",
            EnableWWWSubdomain: false,
            ServiceArn: "fuga",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateCustomDomain(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateCustomDomainResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->