# ChargeStations

### Available Operations

* [DeleteChargeStation](#deletechargestation) - Use to delete a charge station
* [GetChargeStation](#getchargestation) - Get a single charge station's data
* [GetChargeStationConnectors](#getchargestationconnectors) - List connectors for a chargestation
* [GetChargeStations](#getchargestations) - List all Chargestations
* [PatchChargeStation](#patchchargestation) - Update a charge station's data
* [PostChargeStations](#postchargestations) - Create a new charge station

## DeleteChargeStation

Use to delete a charge station

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
    res, err := s.ChargeStations.DeleteChargeStation(ctx, operations.DeleteChargeStationRequest{
        ID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetChargeStation

Get a single charge station's data

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
    res, err := s.ChargeStations.GetChargeStation(ctx, operations.GetChargeStationRequest{
        ID: "cb739205-9293-496f-aa75-96eb10faaa23",
        IncludeEvses: sdk.Bool(false),
        IncludeLocation: sdk.Bool(false),
        IncludeOrganization: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetChargeStationConnectors

List connectors for a chargestation

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
    res, err := s.ChargeStations.GetChargeStationConnectors(ctx, operations.GetChargeStationConnectorsRequest{
        ID: "52c59559-07af-4f1a-ba2f-a9467739251a",
        IncludeEvse: sdk.Bool(false),
        IncludeOrganization: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetChargeStations

List all Chargestations

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
    res, err := s.ChargeStations.GetChargeStations(ctx, operations.GetChargeStationsRequest{
        Active: sdk.Bool(false),
        CreatedAtDollarGte: types.MustTimeFromString("2022-05-14T10:37:30.872Z"),
        CreatedAtDollarLte: types.MustTimeFromString("2022-03-22T21:41:36.666Z"),
        IncludeEvses: sdk.Bool(false),
        IncludeLocation: sdk.Bool(false),
        IncludeOrganization: sdk.Bool(false),
        Location: sdk.String("sequi"),
        Online: sdk.Bool(false),
        Organization: sdk.String("tenetur"),
        PaginateEnabled: sdk.Bool(false),
        PaginateLimit: sdk.Int64(368725),
        PaginatePage: sdk.String("id"),
        Public: sdk.Bool(false),
        SortBy: sdk.String("possimus"),
        SortOrder: shared.SortOrder1EnumDesc.ToPointer(),
        UpdatedAtDollarGte: types.MustTimeFromString("2022-05-18T15:52:05.226Z"),
        UpdatedAtDollarLte: types.MustTimeFromString("2020-12-24T08:13:29.299Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchChargeStation

Update a charge station's data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ChargeStations.PatchChargeStation(ctx, operations.PatchChargeStationRequest{
        ID: "1ffe78f0-97b0-4074-b154-71b5e6e13b99",
        Schema1: shared.Schema1{
            Location: sdk.String("pariatur"),
            Manufacturer: sdk.String("modi"),
            Model: sdk.String("praesentium"),
            Protocol: sdk.String("rem"),
            Public: sdk.Bool(false),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatchChargeStation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostChargeStations

Create a new charge station

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ChargeStations.PostChargeStations(ctx, shared.Schema1{
        Location: sdk.String("voluptates"),
        Manufacturer: sdk.String("quasi"),
        Model: sdk.String("repudiandae"),
        Protocol: sdk.String("sint"),
        Public: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostChargeStations201ApplicationJSONObject != nil {
        // handle response
    }
}
```
