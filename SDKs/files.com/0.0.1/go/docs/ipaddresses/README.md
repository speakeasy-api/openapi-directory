# IPAddresses

## Overview

Operations about ip_addresses

### Available Operations

* [GetIPAddresses](#getipaddresses) - List IP Addresses associated with the current site
* [GetIPAddressesExavaultReserved](#getipaddressesexavaultreserved) - List all possible public ExaVault IP addresses
* [GetIPAddressesReserved](#getipaddressesreserved) - List all possible public IP addresses

## GetIPAddresses

List IP Addresses associated with the current site

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
    res, err := s.IPAddresses.GetIPAddresses(ctx, operations.GetIPAddressesRequest{
        Cursor: sdk.String("tempora"),
        PerPage: sdk.Int(455444),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPAddressEntities != nil {
        // handle response
    }
}
```

## GetIPAddressesExavaultReserved

List all possible public ExaVault IP addresses

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
    res, err := s.IPAddresses.GetIPAddressesExavaultReserved(ctx, operations.GetIPAddressesExavaultReservedRequest{
        Cursor: sdk.String("reiciendis"),
        PerPage: sdk.Int(401713),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicIPAddressEntities != nil {
        // handle response
    }
}
```

## GetIPAddressesReserved

List all possible public IP addresses

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
    res, err := s.IPAddresses.GetIPAddressesReserved(ctx, operations.GetIPAddressesReservedRequest{
        Cursor: sdk.String("sit"),
        PerPage: sdk.Int(248413),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicIPAddressEntities != nil {
        // handle response
    }
}
```
