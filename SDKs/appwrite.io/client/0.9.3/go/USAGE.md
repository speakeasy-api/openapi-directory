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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AccountCreate(ctx, operations.AccountCreateRequestBody{
        Email: "Larue_Rau85@yahoo.com",
        Name: sdk.String("Dallas Kassulke"),
        Password: "suscipit",
    }, operations.AccountCreateSecurity{
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->