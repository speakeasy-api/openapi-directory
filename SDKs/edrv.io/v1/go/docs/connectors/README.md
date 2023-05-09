# Connectors

### Available Operations

* [DeleteConnector](#deleteconnector) - Delete a connector
* [GetConnector](#getconnector) - Get a connector
* [GetConnectors](#getconnectors) - List connectors
* [PatchConnector](#patchconnector) - Update a connector's data
* [PostConnectors](#postconnectors) - Create a new connector

## DeleteConnector

Delete a connector

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
    res, err := s.Connectors.DeleteConnector(ctx, operations.DeleteConnectorRequest{
        ID: "2601fb57-6b0d-45f0-930c-5fbb25870532",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetConnector

Get a connector

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
    res, err := s.Connectors.GetConnector(ctx, operations.GetConnectorRequest{
        ID: "02c73d5f-e9b9-40c2-8909-b3fe49a8d9cb",
        IncludeEvse: sdk.Bool(false),
        IncludeOrganization: sdk.Bool(false),
        IncludeRate: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetConnectors

List connectors

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
    res, err := s.Connectors.GetConnectors(ctx, operations.GetConnectorsRequest{
        CreatedAtDollarGte: types.MustTimeFromString("2022-01-24T10:05:07.174Z"),
        CreatedAtDollarLte: types.MustTimeFromString("2022-03-16T07:10:00.236Z"),
        IncludeEvse: sdk.Bool(false),
        IncludeOrganization: sdk.Bool(false),
        IncludeRate: sdk.Bool(false),
        PaginateEnabled: sdk.Bool(false),
        PaginateLimit: sdk.Int64(212390),
        PaginatePage: sdk.String("dolorem"),
        SortBy: sdk.String("dolor"),
        SortOrder: shared.SortOrder1EnumDesc.ToPointer(),
        UpdatedAtDollarGte: types.MustTimeFromString("2022-01-21T07:17:52.299Z"),
        UpdatedAtDollarLte: types.MustTimeFromString("2021-07-10T03:04:11.898Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchConnector

Update a connector's data

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
    res, err := s.Connectors.PatchConnector(ctx, operations.PatchConnectorRequest{
        RequestBody: operations.PatchConnectorRequestBody{
            Chargestation: sdk.String("voluptate"),
            Format: sdk.String("dignissimos"),
            Power: sdk.Int64(970237),
            PowerType: sdk.String("amet"),
            Rate: sdk.String("dolorum"),
            Type: sdk.String("numquam"),
        },
        ID: "100674eb-f692-480d-9ba7-7a89ebf737ae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatchConnector201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostConnectors

Create a new connector

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
    res, err := s.Connectors.PostConnectors(ctx, operations.PostConnectorsRequestBody{
        Chargestation: sdk.String("eius"),
        Format: sdk.String("aspernatur"),
        Power: sdk.Int64(20651),
        PowerType: sdk.String("amet"),
        Rate: sdk.String("optio"),
        Type: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostConnectors200ApplicationJSONObject != nil {
        // handle response
    }
}
```
