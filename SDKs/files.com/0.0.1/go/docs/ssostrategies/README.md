# SsoStrategies

## Overview

Operations about sso_strategies

### Available Operations

* [GetSsoStrategies](#getssostrategies) - List Sso Strategies
* [GetSsoStrategiesID](#getssostrategiesid) - Show Sso Strategy
* [PostSsoStrategiesIDSync](#postssostrategiesidsync) - Synchronize provisioning data with the SSO remote server.

## GetSsoStrategies

List Sso Strategies

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
    res, err := s.SsoStrategies.GetSsoStrategies(ctx, operations.GetSsoStrategiesRequest{
        Cursor: sdk.String("ab"),
        PerPage: sdk.Int(781480),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SsoStrategyEntities != nil {
        // handle response
    }
}
```

## GetSsoStrategiesID

Show Sso Strategy

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
    res, err := s.SsoStrategies.GetSsoStrategiesID(ctx, operations.GetSsoStrategiesIDRequest{
        ID: 421844,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SsoStrategyEntity != nil {
        // handle response
    }
}
```

## PostSsoStrategiesIDSync

Synchronize provisioning data with the SSO remote server.

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
    res, err := s.SsoStrategies.PostSsoStrategiesIDSync(ctx, operations.PostSsoStrategiesIDSyncRequest{
        ID: 751022,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
