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

    req := operations.CompanyAlternativeSearchRequest{
        RequestBody: &operations.CompanyAlternativeSearchRequestBody{
            Address: "5786 Little Streets",
            Name: "vel",
            Number: "error",
            Phone: "1-542-909-2347 x8545",
            URL: "nisi",
            Vat: "recusandae",
        },
        Country: "temporibus",
    }

    ctx := context.Background()
    res, err := s.V1Company.CompanyAlternativeSearch(ctx, req, operations.CompanyAlternativeSearchSecurity{
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