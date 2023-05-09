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
    res, err := s.Administrative.DoctorsList(ctx, operations.DoctorsListRequest{
        Cursor: sdk.String("corrupti"),
        Doctor: sdk.Int64(592845),
        PageSize: sdk.Int64(715190),
    }, operations.DoctorsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DoctorsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->