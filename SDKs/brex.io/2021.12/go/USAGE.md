<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.CompanyAlternativeSearchRequest{
        Security: operations.CompanyAlternativeSearchSecurity{
            UserKey: shared.SchemeUserKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.CompanyAlternativeSearchPathParams{
            Country: "quia",
        },
        Request: &operations.CompanyAlternativeSearchRequestBody{
            Address: "velit",
            Name: "sed",
            Number: "occaecati",
            Phone: "quidem",
            URL: "maxime",
            Vat: "eos",
        },
    }
    
    res, err := s.V1Company.CompanyAlternativeSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyAlternativeSearch200ApplicationJSONAnies != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->