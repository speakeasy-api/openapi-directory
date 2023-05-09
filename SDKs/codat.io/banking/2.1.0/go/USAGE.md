<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AccountBalances.ListAccountBalances(ctx, operations.ListAccountBalancesRequest{
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        ConnectionID: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        OrderBy: sdk.String("-modifiedDate"),
        Page: 1,
        PageSize: sdk.Int(100),
        Query: sdk.String("corrupti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountBalances != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->