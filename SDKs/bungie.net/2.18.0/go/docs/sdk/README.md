# SDK

## Overview

These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.

Our Wiki page about OAuth through Bungie.net.
<https://github.com/Bungie-net/api/wiki/OAuth-Documentation>
### Available Operations

* [DotGetAvailableLocales](#dotgetavailablelocales) - List of available localization cultures
* [DotGetCommonSettings](#dotgetcommonsettings) - Get the common settings used by the Bungie.Net environment.
* [DotGetGlobalAlerts](#dotgetglobalalerts) - Gets any active global alert for display in the forum banners, help pages, etc. Usually used for DOC alerts.
* [DotGetUserSystemOverrides](#dotgetusersystemoverrides) - Get the user-specific system overrides that should be respected alongside common systems.

## DotGetAvailableLocales

List of available localization cultures

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
    res, err := s.SDK.DotGetAvailableLocales(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## DotGetCommonSettings

Get the common settings used by the Bungie.Net environment.

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
    res, err := s.SDK.DotGetCommonSettings(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## DotGetGlobalAlerts

Gets any active global alert for display in the forum banners, help pages, etc. Usually used for DOC alerts.

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
    res, err := s.SDK.DotGetGlobalAlerts(ctx, operations.DotGetGlobalAlertsRequest{
        Includestreaming: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## DotGetUserSystemOverrides

Get the user-specific system overrides that should be respected alongside common systems.

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
    res, err := s.SDK.DotGetUserSystemOverrides(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
