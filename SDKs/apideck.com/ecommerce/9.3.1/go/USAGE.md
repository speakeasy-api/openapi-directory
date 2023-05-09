<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Customers.CustomersAll(ctx, operations.CustomersAllRequest{
        Cursor: sdk.String("corrupti"),
        Fields: sdk.String("provident"),
        Filter: &shared.EcommerceCustomersFilter{
            Email: sdk.String("elon@musk.com"),
            PhoneNumber: sdk.String("111-111-1111"),
        },
        Limit: sdk.Int64(715190),
        Raw: sdk.Bool(false),
        XApideckAppID: "quibusdam",
        XApideckConsumerID: "unde",
        XApideckServiceID: sdk.String("nulla"),
    }, operations.CustomersAllSecurity{
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