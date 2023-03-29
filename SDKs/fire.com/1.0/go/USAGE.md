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
            BearerAuth: shared.SchemeBearerAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        }),
    )

    req := operations.CreateAPIApplicationRequest{
        Request: operations.CreateAPIApplicationNewAPIApplication{
            ApplicationName: "Batch Processing API",
            Enabled: true,
            Expiry: "2019-08-22T07:48:56.460Z",
            Ican: 548814,
            NumberOfPayeeApprovalsRequired: 1,
            NumberOfPaymentApprovalsRequired: 1,
            Permissions: []string{
                "porro",
                "nulla",
                "id",
            },
        },
    }

    ctx := context.Background()
    res, err := s.API.CreateAPIApplication(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIApplication != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->