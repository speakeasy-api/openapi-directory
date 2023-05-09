# Info

## Overview

TLD Statistics

### Available Operations

* [GetInfoTld](#getinfotld) - Returns overall Tld info
* [GetInfoTldZone](#getinfotldzone) - Returns statistics for specific zone
* [GetAPIInfoItem](#getapiinfoitem)
* [GetStatisticsCollection](#getstatisticscollection) - Returns overall stagtistics
* [GetStatisticsItem](#getstatisticsitem) - Returns statistics for specific zone

## GetInfoTld

Returns overall Tld info

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
    res, err := s.Info.GetInfoTld(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ZoneInfos != nil {
        // handle response
    }
}
```

## GetInfoTldZone

Returns statistics for specific zone

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
    res, err := s.Info.GetInfoTldZone(ctx, operations.GetInfoTldZoneRequest{
        Limit: sdk.Int64(758616),
        Page: sdk.String("totam"),
        Zone: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ZoneInfo != nil {
        // handle response
    }
}
```

## GetAPIInfoItem

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
    res, err := s.Info.GetAPIInfoItem(ctx, operations.GetAPIInfoItemRequest{
        APIKey: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeyInfo != nil {
        // handle response
    }
}
```

## GetStatisticsCollection

Returns overall stagtistics

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
    res, err := s.Info.GetStatisticsCollection(ctx, operations.GetStatisticsCollectionRequest{
        Limit: sdk.Int64(473600),
        Page: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ZoneStats != nil {
        // handle response
    }
}
```

## GetStatisticsItem

Returns statistics for specific zone

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
    res, err := s.Info.GetStatisticsItem(ctx, operations.GetStatisticsItemRequest{
        Limit: sdk.Int64(186332),
        Page: sdk.String("impedit"),
        Zone: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ZoneStats != nil {
        // handle response
    }
}
```
