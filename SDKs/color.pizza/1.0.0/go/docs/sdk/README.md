# SDK

## Overview

An API that provides names for colors based on their hex value

### Available Operations

* [Get](#get) - Get all colors of the default color name list
* [GetLists](#getlists) - Get all colors of the default color name list
* [GetNames](#getnames) - Get all colors of the default color name list
* [GetSwatch](#getswatch) - Generate a color swatch for any color

## Get

Get all colors of the default color name list

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
    res, err := s.SDK.Get(ctx, operations.GetRequest{
        List: shared.PossibleListsEnumSanzoWadaI.ToPointer(),
        Noduplicates: sdk.Bool(false),
        Values: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Get200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetLists

Get all colors of the default color name list

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetLists(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLists200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNames

Get all colors of the default color name list

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
    res, err := s.SDK.GetNames(ctx, operations.GetNamesRequest{
        List: shared.PossibleListsEnumNtc.ToPointer(),
        Name: "Johnnie Stamm",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNames200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSwatch

Generate a color swatch for any color

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
    res, err := s.SDK.GetSwatch(ctx, operations.GetSwatchRequest{
        Color: "deserunt",
        Name: sdk.String("Willie Gulgowski DVM"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSwatch200ImageSvgPlusXMLString != nil {
        // handle response
    }
}
```
