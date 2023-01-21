<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                BearerAuth: shared.SchemeBearerAuth{
                    Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateAPIApplicationRequest{
        Request: operations.CreateAPIApplicationNewAPIApplication{
            ApplicationName: "sit",
            Enabled: false,
            Expiry: "1978-05-13T03:50:47Z",
            Ican: 501233450539197794,
            NumberOfPayeeApprovalsRequired: 3390393562759376202,
            NumberOfPaymentApprovalsRequired: 2669985732393126063,
            Permissions: []string{
                "voluptas",
                "fugit",
            },
        },
    }
    
    res, err := s.API.CreateAPIApplication(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIApplication != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->