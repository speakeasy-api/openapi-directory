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
            ApplicationName: "repellat",
            Enabled: true,
            Expiry: "2007-02-05T03:26:50Z",
            Ican: 4405335760754809355,
            NumberOfPayeeApprovalsRequired: 620736082703045283,
            NumberOfPaymentApprovalsRequired: 1823518455980936632,
            Permissions: []string{
                "dolores",
                "perferendis",
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