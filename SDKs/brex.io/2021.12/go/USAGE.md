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
    res, err := s.V1Company.CompanyAlternativeSearch(ctx, operations.CompanyAlternativeSearchRequest{
        RequestBody: &operations.CompanyAlternativeSearchRequestBody{
            Address: sdk.String("5786 Little Streets"),
            Name: sdk.String("Sabrina Oberbrunner"),
            Number: sdk.String("magnam"),
            Phone: sdk.String("1-292-547-8545 x39803"),
            URL: sdk.String("veritatis"),
            Vat: sdk.String("deserunt"),
        },
        Country: "perferendis",
    }, operations.CompanyAlternativeSearchSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyAlternativeSearch200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->