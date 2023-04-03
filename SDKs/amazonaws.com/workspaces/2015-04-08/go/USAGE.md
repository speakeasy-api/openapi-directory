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

    req := operations.AssociateConnectionAliasRequest{
        AssociateConnectionAliasRequest: shared.AssociateConnectionAliasRequest{
            AliasID: "corrupti",
            ResourceID: "provident",
        },
        XAmzAlgorithm: "distinctio",
        XAmzContentSha256: "quibusdam",
        XAmzCredential: "unde",
        XAmzDate: "nulla",
        XAmzSecurityToken: "corrupti",
        XAmzSignature: "illum",
        XAmzSignedHeaders: "vel",
        XAmzTarget: "WorkspacesService.AssociateConnectionAlias",
    }

    ctx := context.Background()
    res, err := s.AssociateConnectionAlias(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateConnectionAliasResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->