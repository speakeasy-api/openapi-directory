# SDK

## Overview

This REST-API enables you to query information about travel centers in Germany.

### Available Operations

* [GetReisezentren](#getreisezentren) - Get all station infos
* [GetReisezentrenLocLatLon](#getreisezentrenloclatlon) - Get information about a station near a location
* [GetReisezentrenLocLatLonDist](#getreisezentrenloclatlondist) - Get stations in a given radius
* [GetReisezentrenID](#getreisezentrenid) - Get information about a specific station

## GetReisezentren

Get all station infos

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
    res, err := s.SDK.GetReisezentren(ctx, operations.GetReisezentrenRequest{
        Name: sdk.String("Johnnie Stamm"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TravelCenterList != nil {
        // handle response
    }
}
```

## GetReisezentrenLocLatLon

Get information about a station near a location

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
    res, err := s.SDK.GetReisezentrenLocLatLon(ctx, operations.GetReisezentrenLocLatLonRequest{
        Lat: 6458.94,
        Lon: 3843.82,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TravelCenter != nil {
        // handle response
    }
}
```

## GetReisezentrenLocLatLonDist

Get stations in a given radius

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
    res, err := s.SDK.GetReisezentrenLocLatLonDist(ctx, operations.GetReisezentrenLocLatLonDistRequest{
        Dist: 4375.87,
        Lat: 2975.34,
        Lon: 8917.73,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TravelCenter != nil {
        // handle response
    }
}
```

## GetReisezentrenID

Get information about a specific station

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
    res, err := s.SDK.GetReisezentrenID(ctx, operations.GetReisezentrenIDRequest{
        ID: "0f467cc8-796e-4d15-9a05-dfc2ddf7cc78",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
