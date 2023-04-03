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

    req := operations.AssociateCustomDomainRequest{
        AssociateCustomDomainRequest: shared.AssociateCustomDomainRequest{
            DomainName: "corrupti",
            EnableWWWSubdomain: false,
            ServiceArn: "provident",
        },
        XAmzAlgorithm: "distinctio",
        XAmzContentSha256: "quibusdam",
        XAmzCredential: "unde",
        XAmzDate: "nulla",
        XAmzSecurityToken: "corrupti",
        XAmzSignature: "illum",
        XAmzSignedHeaders: "vel",
        XAmzTarget: "AppRunner.AssociateCustomDomain",
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