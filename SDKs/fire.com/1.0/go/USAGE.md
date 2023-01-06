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
            ApplicationName: "doloribus",
            Enabled: false,
            Expiry: "2004-04-17T06:57:06Z",
            Ican: 7515335467021667958,
            NumberOfPayeeApprovalsRequired: 257416497730283408,
            NumberOfPaymentApprovalsRequired: 8491975279685254001,
            Permissions: []string{
                "aspernatur",
                "non",
                "sint",
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