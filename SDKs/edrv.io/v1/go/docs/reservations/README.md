# Reservations

### Available Operations

* [GetReservation](#getreservation) - Get one reservation data
* [GetReservations](#getreservations) - Get Reservations data
* [Updatereservation](#updatereservation) - Use to request a update an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

## GetReservation

Get one reservation data

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
    res, err := s.Reservations.GetReservation(ctx, operations.GetReservationRequest{
        ID: "b7b194a2-76b2-4691-afe1-f08f4294e369",
        IncludeChargestation: sdk.Bool(false),
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

## GetReservations

Get Reservations data

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
    res, err := s.Reservations.GetReservations(ctx, operations.GetReservationsRequest{
        CreatedAtDollarGte: types.MustTimeFromString("2021-01-18T16:49:49.451Z"),
        CreatedAtDollarLte: types.MustTimeFromString("2022-09-23T08:26:30.493Z"),
        IncludeChargestation: sdk.Bool(false),
        IncludeOrganization: sdk.Bool(false),
        PaginateEnabled: sdk.Bool(false),
        PaginateLimit: sdk.Int64(455444),
        PaginatePage: sdk.String("reiciendis"),
        SortBy: sdk.String("ex"),
        SortOrder: shared.SortOrder1EnumDesc.ToPointer(),
        UpdatedAtDollarGte: types.MustTimeFromString("2022-02-10T20:44:13.580Z"),
        UpdatedAtDollarLte: types.MustTimeFromString("2021-08-01T17:10:22.856Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Updatereservation

Use to request a update an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

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
    res, err := s.Reservations.Updatereservation(ctx, operations.UpdatereservationRequest{
        RequestBody: operations.UpdatereservationRequestBody{
            Connector: sdk.Int64(310381),
            Driver: sdk.String("incidunt"),
            EndDate: sdk.String("ipsam"),
            Evse: sdk.Int64(894864),
        },
        ID: "80ca55ef-d20e-4457-a185-8b6a89fbe3a5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Updatereservation201ApplicationJSONObject != nil {
        // handle response
    }
}
```
