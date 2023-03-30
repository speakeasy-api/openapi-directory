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
            Oauth: shared.SchemeOauth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        }),
    )

    req := operations.GetContactRequest{
        PathParams: operations.GetContactPathParams{
            ID: "corrupti",
        },
    }

    ctx := context.Background()
    res, err := s.Contacts.GetContact(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StudentContactResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->