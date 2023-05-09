# ChargingLocations

## Overview

Charging Locations are created by a user to denote locations where they pay for the power used to charge their vehicle. Smart Charging is active at these locations only.

### Available Operations

* [DeleteCharginglocationsCharginglocationid](#deletecharginglocationscharginglocationid) - Delete Charging Location
* [GetCharginglocations](#getcharginglocations) - List Charging Locations
* [GetCharginglocationsCharginglocationid](#getcharginglocationscharginglocationid) - Get Charging Location
* [PostCharginglocations](#postcharginglocations) - Create Charging Location
* [PutCharginglocationsCharginglocationid](#putcharginglocationscharginglocationid) - Update Charging Location

## DeleteCharginglocationsCharginglocationid

Delete a Charging Location

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
    res, err := s.ChargingLocations.DeleteCharginglocationsCharginglocationid(ctx, operations.DeleteCharginglocationsCharginglocationidRequest{
        ChargingLocationID: "suscipit",
    }, operations.DeleteCharginglocationsCharginglocationidSecurity{
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

## GetCharginglocations

Returns a list of Charging Locations registered to the User

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
    res, err := s.ChargingLocations.GetCharginglocations(ctx, operations.GetCharginglocationsSecurity{
        UserAccessToken: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OnechargingLocationsPostRequestBodyContentApplication1jsonSchemas != nil {
        // handle response
    }
}
```

## GetCharginglocationsCharginglocationid

Get Charging Location

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
    res, err := s.ChargingLocations.GetCharginglocationsCharginglocationid(ctx, operations.GetCharginglocationsCharginglocationidRequest{
        ChargingLocationID: "iure",
    }, operations.GetCharginglocationsCharginglocationidSecurity{
        UserAccessToken: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema != nil {
        // handle response
    }
}
```

## PostCharginglocations

Create Charging Location

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
    res, err := s.ChargingLocations.PostCharginglocations(ctx, operations.PostCharginglocationsRequestBodyInput{
        Latitude: sdk.Float64(59.911491),
        Longitude: sdk.Float64(10.757933),
        Name: sdk.String("Home"),
    }, operations.PostCharginglocationsSecurity{
        UserAccessToken: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema != nil {
        // handle response
    }
}
```

## PutCharginglocationsCharginglocationid

Updates a charging location with new configuration

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
    res, err := s.ChargingLocations.PutCharginglocationsCharginglocationid(ctx, operations.PutCharginglocationsCharginglocationidRequest{
        ChargingLocationID: "magnam",
        OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput: &shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput{
            Latitude: sdk.Float64(59.911491),
            Longitude: sdk.Float64(10.757933),
            Name: sdk.String("Home"),
        },
    }, operations.PutCharginglocationsCharginglocationidSecurity{
        UserAccessToken: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema != nil {
        // handle response
    }
}
```
