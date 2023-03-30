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
        Security: operations.CustomersAllSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.CustomersAllQueryParams{
            Cursor: "unde",
            Fields: "deserunt",
            Filter: &shared.EcommerceCustomersFilter{
                Email: "elon@musk.com",
                PhoneNumber: "111-111-1111",
            },
            Limit: 715190,
            Raw: false,
        },
        Headers: operations.CustomersAllHeaders{
            XApideckAppID: "nulla",
            XApideckConsumerID: "id",
            XApideckServiceID: "vero",
        },
    }

    ctx := context.Background()
    res, err := s.Customers.CustomersAll(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEcommerceCustomersResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->