# Commands

### Available Operations

* [Cancelreservation](#cancelreservation) - Use to request a delete an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [GetCommands](#getcommands) - Get Commands data
* [GetVariables](#getvariables) - Get a charge station's config variables
* [PatchChargeStationVariable](#patchchargestationvariable) - Update config variables for a chargestation
* [Remotestart](#remotestart) - Use to request a remote start command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [Remotestop](#remotestop) - Use to request a remote stop command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [Reserve](#reserve) - Use to request a reserve command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [Reset](#reset) - Use to request a reset command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [Unlockconnector](#unlockconnector) - Use to request an unlock command for a connector. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

## Cancelreservation

Use to request a delete an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

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
    res, err := s.Commands.Cancelreservation(ctx, operations.CancelreservationRequestBody{
        Reservation: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Cancelreservation201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetCommands

Get Commands data

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
    res, err := s.Commands.GetCommands(ctx, operations.GetCommandsRequest{
        CreatedAtDollarGte: types.MustTimeFromString("2022-03-02T21:33:21.372Z"),
        CreatedAtDollarLte: types.MustTimeFromString("2022-12-28T14:02:06.064Z"),
        IncludeChargestation: sdk.Bool(false),
        IncludeDriver: sdk.Bool(false),
        IncludeOrganization: sdk.Bool(false),
        IncludeTransaction: sdk.Bool(false),
        PaginateEnabled: sdk.Bool(false),
        PaginateLimit: sdk.Int64(667411),
        PaginatePage: sdk.String("quibusdam"),
        SortBy: sdk.String("explicabo"),
        SortOrder: shared.SortOrder1EnumAsc.ToPointer(),
        UpdatedAtDollarGte: types.MustTimeFromString("2021-04-26T18:54:54.344Z"),
        UpdatedAtDollarLte: types.MustTimeFromString("2022-09-26T08:57:48.803Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetVariables

Get a charge station's config variables

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
    res, err := s.Commands.GetVariables(ctx, operations.GetVariablesRequest{
        ID: "269802d5-02a9-44bb-8f63-c969e9a3efa7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchChargeStationVariable

Update config variables for a chargestation

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
    res, err := s.Commands.PatchChargeStationVariable(ctx, operations.PatchChargeStationVariableRequest{
        RequestBody: operations.PatchChargeStationVariableRequestBody{
            Value: sdk.String("in"),
            Variable: operations.PatchChargeStationVariableRequestBodyVariableEnumTransactionMessageAttempts.ToPointer(),
        },
        ID: "fb14cd66-ae39-45ef-b9ba-88f3a6699707",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatchChargeStationVariable201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Remotestart

Use to request a remote start command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

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
    res, err := s.Commands.Remotestart(ctx, operations.RemotestartRequestBody{
        Chargestation: sdk.String("magnam"),
        Connector: sdk.String("distinctio"),
        Driver: sdk.String("id"),
        Token: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Remotestart201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Remotestop

Use to request a remote stop command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

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
    res, err := s.Commands.Remotestop(ctx, operations.RemotestopRequestBody{
        Chargestation: sdk.String("labore"),
        Driver: sdk.String("suscipit"),
        Transaction: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Reserve

Use to request a reserve command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

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
    res, err := s.Commands.Reserve(ctx, operations.ReserveRequestBody{
        Chargestation: sdk.String("nobis"),
        Connector: sdk.String("eum"),
        Driver: sdk.String("vero"),
        EndDate: sdk.String("aspernatur"),
        Token: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reserve201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Reset

Use to request a reset command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

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
    res, err := s.Commands.Reset(ctx, operations.ResetRequestBody{
        Chargestation: sdk.String("magnam"),
        Type: sdk.String("et"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reset201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Unlockconnector

Use to request an unlock command for a connector. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

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
    res, err := s.Commands.Unlockconnector(ctx, operations.UnlockconnectorRequestBody{
        Chargestation: sdk.String("excepturi"),
        Connector: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Unlockconnector201ApplicationJSONObject != nil {
        // handle response
    }
}
```
