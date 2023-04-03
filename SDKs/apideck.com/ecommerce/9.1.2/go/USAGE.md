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
    s := sdk.New()

    req := operations.CustomersAllRequest{
        Cursor: "corrupti",
        Fields: "provident",
        Filter: &shared.EcommerceCustomersFilter{
            Email: "elon@musk.com",
            PhoneNumber: "111-111-1111",
        },
        Limit: 715190,
        Raw: false,
        XApideckAppID: "quibusdam",
        XApideckConsumerID: "unde",
        XApideckServiceID: "nulla",
    }

    ctx := context.Background()
    res, err := s.Customers.CustomersAll(ctx, req, operations.CustomersAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEcommerceCustomersResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->