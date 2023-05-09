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
    res, err := s.Holidays.Holiday(ctx, operations.HolidayRequest{
        HolidayID: 2,
        Optional: operations.HolidayOptionalEnumTrue.ToPointer(),
        Year: sdk.Int64(592845),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Holiday200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->