# WindowsHostings

## Overview

Manage your windows hostings.

### Available Operations

* [GetWindowsHosting](#getwindowshosting) - Windows hosting detail
* [GetWindowsHostings](#getwindowshostings) - Overview of windows hostings

## GetWindowsHosting

Windows hosting detail

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
    res, err := s.WindowsHostings.GetWindowsHosting(ctx, operations.GetWindowsHostingRequest{
        DomainNamePathParameter: "vero",
        DomainNameQueryParameter: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WindowsHostingDetail != nil {
        // handle response
    }
}
```

## GetWindowsHostings

Overview of windows hostings

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
    res, err := s.WindowsHostings.GetWindowsHostings(ctx, operations.GetWindowsHostingsRequest{
        Skip: sdk.Int(338159),
        Take: sdk.Int(218403),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WindowsHostings != nil {
        // handle response
    }
}
```
