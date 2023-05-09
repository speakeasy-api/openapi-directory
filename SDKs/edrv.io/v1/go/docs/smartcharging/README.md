# SmartCharging

### Available Operations

* [Deletechargingschedule](#deletechargingschedule) - Delete a smart charging schedule
* [Setchargingschedule](#setchargingschedule) - Set one of charging power or current of a specific chargestation connector

## Deletechargingschedule

Delete a smart charging schedule

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SmartCharging.Deletechargingschedule(ctx, operations.DeletechargingscheduleRequestBody{
        ID: sdk.String("aa8e4824-d0ab-4407-9088-e51862065e90"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deletechargingschedule201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Setchargingschedule

Set one of charging power or current of a specific chargestation connector

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SmartCharging.Setchargingschedule(ctx, operations.SetchargingscheduleRequestBody{
        Connector: sdk.String("incidunt"),
        Schedule: []SetchargingscheduleRequestBodySchedule{
            operations.SetchargingscheduleRequestBodySchedule{
                EndDate: sdk.String("dolorem"),
                Limit: sdk.Float64(6908.94),
                StartDate: sdk.String("dicta"),
                Unit: sdk.String("architecto"),
            },
            operations.SetchargingscheduleRequestBodySchedule{
                EndDate: sdk.String("occaecati"),
                Limit: sdk.Float64(2897.76),
                StartDate: sdk.String("quidem"),
                Unit: sdk.String("atque"),
            },
            operations.SetchargingscheduleRequestBodySchedule{
                EndDate: sdk.String("laborum"),
                Limit: sdk.Float64(7241.48),
                StartDate: sdk.String("tenetur"),
                Unit: sdk.String("laboriosam"),
            },
            operations.SetchargingscheduleRequestBodySchedule{
                EndDate: sdk.String("alias"),
                Limit: sdk.Float64(2270.84),
                StartDate: sdk.String("deserunt"),
                Unit: sdk.String("voluptate"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Setchargingschedule201ApplicationJSONObject != nil {
        // handle response
    }
}
```
