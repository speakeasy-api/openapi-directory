# Drivers

### Available Operations

* [DeleteDriver](#deletedriver) - Delete a driver
* [GetDriver](#getdriver) - Get a driver's data
* [GetDrivers](#getdrivers) - List all drivers
* [PatchDriver](#patchdriver) - Update a driver's data
* [PostDrivers](#postdrivers) - Create a new driver

## DeleteDriver

Delete a driver

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
    res, err := s.Drivers.DeleteDriver(ctx, operations.DeleteDriverRequest{
        ID: "5e6a95d8-a0d4-446c-a2af-7a73cf3be453",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDriver

Get a driver's data

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
    res, err := s.Drivers.GetDriver(ctx, operations.GetDriverRequest{
        ID: "f870b326-b5a7-4342-9cdb-1a8422bb679d",
        IncludeGroup: sdk.Bool(false),
        IncludeOrganization: sdk.Bool(false),
        IncludeTokens: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDrivers

List all drivers

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
    res, err := s.Drivers.GetDrivers(ctx, operations.GetDriversRequest{
        Active: sdk.Bool(false),
        CreatedAtDollarGte: types.MustTimeFromString("2022-10-18T05:22:32.548Z"),
        CreatedAtDollarLte: types.MustTimeFromString("2022-11-01T18:57:36.196Z"),
        IncludeGroup: sdk.Bool(false),
        IncludeOrganization: sdk.Bool(false),
        IncludeTokens: sdk.Bool(false),
        PaginateEnabled: sdk.Bool(false),
        PaginateLimit: sdk.Int64(488056),
        PaginatePage: sdk.String("sunt"),
        SortBy: sdk.String("ullam"),
        SortOrder: shared.SortOrder1EnumAsc.ToPointer(),
        UpdatedAtDollarGte: types.MustTimeFromString("2022-11-28T15:41:44.846Z"),
        UpdatedAtDollarLte: types.MustTimeFromString("2020-10-05T00:59:28.911Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDrivers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PatchDriver

Update a driver's data

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
    res, err := s.Drivers.PatchDriver(ctx, operations.PatchDriverRequest{
        RequestBody: operations.PatchDriverRequestBody{
            Active: sdk.Bool(false),
            Address: &operations.PatchDriverRequestBodyAddress{
                City: sdk.String("Boscoside"),
                Country: sdk.String("Cuba"),
                PostalCode: sdk.String("75750"),
                StreetAndNumber: sdk.String("delectus"),
            },
            Email: sdk.String("Eladio67@gmail.com"),
            Firstname: sdk.String("Barbara"),
            Lastname: sdk.String("Berge"),
            Phone: &operations.PatchDriverRequestBodyPhone{
                Home: sdk.String("aut"),
                Mobile: sdk.String("906-879-2751 x0545"),
                Work: sdk.String("voluptatibus"),
            },
            Source: sdk.String("quisquam"),
            Tokens: []interface{}{
                "omnis",
                "quis",
                "ipsum",
                "delectus",
            },
        },
        ID: "73ef7fbc-7abd-474d-939c-0f5d2cff7c70",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatchDriver200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostDrivers

Create a new driver

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
    res, err := s.Drivers.PostDrivers(ctx, operations.PostDriversRequestBody{
        Active: sdk.Bool(false),
        Address: &operations.PostDriversRequestBodyAddress{
            City: sdk.String("Gloverbury"),
            Country: sdk.String("Iran"),
            PostalCode: sdk.String("48214"),
            StreetAndNumber: sdk.String("laudantium"),
        },
        Email: sdk.String("Dana40@gmail.com"),
        Firstname: "Sage",
        Lastname: "Marks",
        Phone: &operations.PostDriversRequestBodyPhone{
            Home: sdk.String("voluptatibus"),
            Mobile: sdk.String("(979) 573-3303 x472"),
            Work: sdk.String("recusandae"),
        },
        Source: operations.PostDriversRequestBodySourceEnumPhysical,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostDrivers200ApplicationJSONObject != nil {
        // handle response
    }
}
```
