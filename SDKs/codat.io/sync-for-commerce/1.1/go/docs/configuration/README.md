# Configuration

## Overview

Expressively configure preferences for any given sync for commerce company.

### Available Operations

* [GetConfiguration](#getconfiguration) - Retrieve config preferences set for a company.
* [GetSyncStatus](#getsyncstatus) - Get status for a company's syncs
* [SetConfiguration](#setconfiguration) - Create or update configuration.

## GetConfiguration

Retrieve current config preferences.

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
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Configuration.GetConfiguration(ctx, operations.GetConfigurationRequest{
        CompanyID: "da1ffe78-f097-4b00-b4f1-5471b5e6e13b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Configuration != nil {
        // handle response
    }
}
```

## GetSyncStatus

Check the sync history and sync status for a company.

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
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Configuration.GetSyncStatus(ctx, operations.GetSyncStatusRequest{
        CompanyID: "99d488e1-e91e-4450-ad2a-bd44269802d5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetConfiguration

Make changes to configuration preferences.

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
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Configuration.SetConfiguration(ctx, operations.SetConfigurationRequest{
        CompanyID: "02a94bb4-f63c-4969-a9a3-efa77dfb14cd",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Configuration != nil {
        // handle response
    }
}
```
