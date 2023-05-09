# Me

## Overview

The `Me` endpoint returns metadata about the authenticated User.

### Available Operations

* [DisconnectVendor](#disconnectvendor) - Disconnect Vendor
* [GetMe](#getme) - Get My User

## DisconnectVendor

Disconnect a single Vendor from the User's account.

All stored data about their Vendor account will be deleted, and any vehicles that were provided by that Vendor will disappear from the system.

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
    res, err := s.Me.DisconnectVendor(ctx, operations.DisconnectVendorRequest{
        Vendor: operations.DisconnectVendorVendorEnumTesla,
    }, operations.DisconnectVendorSecurity{
        UserAccessToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMe

Returns metadata about the authenticated User, including a list of vendors for which the user has provided credentials.

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
    res, err := s.Me.GetMe(ctx, operations.GetMeSecurity{
        UserAccessToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMe200ApplicationJSONObject != nil {
        // handle response
    }
}
```
