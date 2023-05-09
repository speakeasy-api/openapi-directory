# Chargers

### Available Operations

* [ControlChargerCharging](#controlchargercharging) - Control Charging
* [GetCharger](#getcharger) - Get Charger
* [GetChargers](#getchargers) - List Chargers

## ControlChargerCharging

Instruct the charger to start or stop charging

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Chargers.ControlChargerCharging(ctx, operations.ControlChargerChargingRequest{
        RequestBody: &operations.ControlChargerChargingRequestBody{
            Action: operations.ControlChargerChargingRequestBodyActionEnumStart,
        },
        ChargerID: "provident",
    }, operations.ControlChargerChargingSecurity{
        UserAccessToken: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCharger

Get Charger

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Chargers.GetCharger(ctx, operations.GetChargerRequest{
        ChargerID: "distinctio",
        Field: []shared.OnechargersGetParameters0Enum{
            shared.OnechargersGetParameters0EnumLocation,
            shared.OnechargersGetParameters0EnumLocation,
            shared.OnechargersGetParameters0EnumLocation,
            shared.OnechargersGetParameters0EnumLocation,
        },
    }, operations.GetChargerSecurity{
        UserAccessToken: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCharger200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetChargers

List Chargers

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Chargers.GetChargers(ctx, operations.GetChargersRequest{
        Field: []GetChargersFieldEnum{
            operations.GetChargersFieldEnumLocation,
            operations.GetChargersFieldEnumLocation,
        },
    }, operations.GetChargersSecurity{
        UserAccessToken: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Onechargers1Percent7BchargerIDPercent7DGetResponses200ContentApplication1jsonSchemas != nil {
        // handle response
    }
}
```
