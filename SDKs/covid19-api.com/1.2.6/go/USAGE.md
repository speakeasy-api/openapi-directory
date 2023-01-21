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
    
    req := operations.GetDailyReportAllCountriesRequest{
        QueryParams: operations.GetDailyReportAllCountriesQueryParams{
            Date: "sit",
            DateFormat: "DD-MM-YYYY",
            Format: "xml",
        },
    }
    
    res, err := s.Country.GetDailyReportAllCountries(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDailyReportAllCountries200ApplicationJSONObjects != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->