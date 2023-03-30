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
        Security: operations.CompanyAlternativeSearchSecurity{
            UserKey: shared.SchemeUserKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.CompanyAlternativeSearchPathParams{
            Country: "corrupti",
        },
        Request: &operations.CompanyAlternativeSearchRequestBody{
            Address: "7868 Stamm Junctions",
            Name: "error",
            Number: "deserunt",
            Phone: "1-528-292-3478 x545",
            URL: "nisi",
            Vat: "recusandae",
        },
    }

    ctx := context.Background()
    res, err := s.V1Company.CompanyAlternativeSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyAlternativeSearch200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->