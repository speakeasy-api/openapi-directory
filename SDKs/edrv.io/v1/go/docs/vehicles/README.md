# Vehicles

### Available Operations

* [GetVehicle](#getvehicle) - Get a vehicle's data
* [GetVehicleBattery](#getvehiclebattery) - Get a vehicle's battery
* [GetVehicleCharge](#getvehiclecharge) - Get a vehicle's charge
* [GetVehicleLocation](#getvehiclelocation) - Get a vehicle's location
* [GetVehicleOdometer](#getvehicleodometer) - Get a vehicle's odometer
* [GetVehicles](#getvehicles) - List all vehicles
* [PostCharge](#postcharge) - Change charge

## GetVehicle

Get a vehicle's data

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
    res, err := s.Vehicles.GetVehicle(ctx, operations.GetVehicleRequest{
        ID: "15199ebf-d0e9-4fe6-8632-ca3aed011799",
        IncludeDriver: sdk.Bool(false),
        IncludeOrganization: sdk.Bool(false),
        IncludeToken: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetVehicleBattery

Get a vehicle's battery

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
    res, err := s.Vehicles.GetVehicleBattery(ctx, operations.GetVehicleBatteryRequest{
        ID: "6312fde0-4771-4778-bf61-d017476360a1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetVehicleCharge

Get a vehicle's charge

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
    res, err := s.Vehicles.GetVehicleCharge(ctx, operations.GetVehicleChargeRequest{
        ID: "5db6a660-659a-41ad-aaab-5851d6c645b0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetVehicleLocation

Get a vehicle's location

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
    res, err := s.Vehicles.GetVehicleLocation(ctx, operations.GetVehicleLocationRequest{
        ID: "8b61891b-aa0f-4e1a-9e00-8e6f8c5f350d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetVehicleOdometer

Get a vehicle's odometer

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
    res, err := s.Vehicles.GetVehicleOdometer(ctx, operations.GetVehicleOdometerRequest{
        ID: "8cdb5a34-1814-4301-8421-813d5208ece7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetVehicles

List all vehicles

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Vehicles.GetVehicles(ctx, operations.GetVehiclesRequest{
        Active: sdk.Bool(false),
        CreatedAtDollarGte: types.MustTimeFromString("2022-07-17T01:27:56.063Z"),
        CreatedAtDollarLte: types.MustTimeFromString("2022-10-20T03:32:15.371Z"),
        IncludeDriver: sdk.Bool(false),
        IncludeOrganization: sdk.Bool(false),
        IncludeToken: sdk.Bool(false),
        PaginateEnabled: sdk.Bool(false),
        PaginateLimit: sdk.Int64(712927),
        PaginatePage: sdk.String("eum"),
        SortBy: sdk.String("vel"),
        SortOrder: shared.SortOrder1EnumAsc.ToPointer(),
        UpdatedAtDollarGte: types.MustTimeFromString("2022-08-26T10:54:10.191Z"),
        UpdatedAtDollarLte: types.MustTimeFromString("2022-03-21T18:14:19.097Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetVehicles200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostCharge

Change charge

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
    res, err := s.Vehicles.PostCharge(ctx, operations.PostChargeRequest{
        RequestBody: operations.PostChargeRequestBody{
            Action: operations.PostChargeRequestBodyActionEnumStart,
        },
        ID: "c6e205e1-6dea-4b3f-ac95-78a64584273a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostCharge200ApplicationJSONObject != nil {
        // handle response
    }
}
```
