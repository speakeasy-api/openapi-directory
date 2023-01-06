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
                BasicAuth: shared.SchemeBasicAuth{
                    Password: "YOUR_PASSWORD_HERE",
                    Username: "YOUR_USERNAME_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AccessAddRequest{
        PathParams: operations.AccessAddPathParams{
            Agents: "eius",
            Mask: "earum",
            User: "error",
        },
    }
    
    res, err := s.Access.AccessAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessAdd200ApplicationJSONString != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->