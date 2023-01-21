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
                Oauth: shared.SchemeOauth{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetContactRequest{
        PathParams: operations.GetContactPathParams{
            ID: "sit",
        },
    }
    
    res, err := s.Contacts.GetContact(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StudentContactResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->