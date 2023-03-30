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

    req := operations.AssociateServiceRoleToAccountRequest{
        Headers: operations.AssociateServiceRoleToAccountHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.AssociateServiceRoleToAccountRequestBody{
            RoleArn: "illum",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateServiceRoleToAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateServiceRoleToAccountResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->