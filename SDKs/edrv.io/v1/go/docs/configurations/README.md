# Configurations

### Available Operations

* [GetConfiguration](#getconfiguration) - Get one Configuration data
* [GetConfigurations](#getconfigurations) - Get Configurations data
* [PostConfigurations](#postconfigurations) - Create connector with parameters

## GetConfiguration

Get one Configuration data

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
    res, err := s.Configurations.GetConfiguration(ctx, operations.GetConfigurationRequest{
        ID: "9890afa5-63e2-4516-be4c-8b711e5b7fd2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetConfigurations

Get Configurations data

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
    res, err := s.Configurations.GetConfigurations(ctx, operations.GetConfigurationsRequest{
        CreatedAtDollarGte: types.MustTimeFromString("2020-05-25T09:38:49.528Z"),
        CreatedAtDollarLte: types.MustTimeFromString("2022-11-02T16:33:42.080Z"),
        PaginateEnabled: sdk.Bool(false),
        PaginateLimit: sdk.Int64(508315),
        PaginatePage: sdk.String("natus"),
        SortBy: sdk.String("magni"),
        SortOrder: shared.SortOrder1EnumDesc.ToPointer(),
        UpdatedAtDollarGte: types.MustTimeFromString("2020-06-16T10:20:37.479Z"),
        UpdatedAtDollarLte: types.MustTimeFromString("2020-07-30T23:39:27.609Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostConfigurations

Create connector with parameters

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
    res, err := s.Configurations.PostConfigurations(ctx, operations.PostConfigurationsRequestBody{
        Key: sdk.String("ea"),
        Value: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostConfigurations201ApplicationJSONObject != nil {
        // handle response
    }
}
```
