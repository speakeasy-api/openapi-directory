# Statistics

### Available Operations

* [GetStatisticsCharging](#getstatisticscharging) - Get User Charging Statistics

## GetStatisticsCharging

Returns a normalized timeseries of statistics about power consumption and price for the User.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Statistics.GetStatisticsCharging(ctx, operations.GetStatisticsChargingRequest{
        ChargingLocationID: sdk.String("debitis"),
        EndDate: types.MustDateFromString("2022-01-14"),
        Resolution: operations.GetStatisticsChargingResolutionEnumDay.ToPointer(),
        StartDate: types.MustDateFromString("2022-07-10"),
        VehicleID: sdk.String("minus"),
    }, operations.GetStatisticsChargingSecurity{
        UserAccessToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStatisticsCharging200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
