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

    req := operations.HolidayRequest{
        PathParams: operations.HolidayPathParams{
            HolidayID: 2,
        },
        QueryParams: operations.HolidayQueryParams{
            Optional: "true",
            Year: 592845,
        },
    }

    ctx := context.Background()
    res, err := s.Holidays.Holiday(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Holiday200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->