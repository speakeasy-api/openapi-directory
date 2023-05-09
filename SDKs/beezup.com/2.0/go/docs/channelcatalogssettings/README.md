# ChannelCatalogsSettings

### Available Operations

* [ConfigureChannelCatalogCostSettings](#configurechannelcatalogcostsettings) - Configure channel catalog cost settings
* [ConfigureChannelCatalogGeneralSettings](#configurechannelcataloggeneralsettings) - Configure channel catalog general settings
* [DisableChannelCatalog](#disablechannelcatalog) - Disable a channel catalog
* [EnableChannelCatalog](#enablechannelcatalog) - Enable a channel catalog

## ConfigureChannelCatalogCostSettings

Configure channel catalog cost settings

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
    res, err := s.ChannelCatalogsSettings.ConfigureChannelCatalogCostSettings(ctx, operations.ConfigureChannelCatalogCostSettingsRequest{
        ChannelCatalogID: "rerum",
        CostSettings: shared.CostSettings{
            CostType: shared.CostTypeEnumFixedGlobal,
            GlobalCostValue: sdk.Float64(10.21),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfigureChannelCatalogGeneralSettings

Configure channel catalog general settings

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
    res, err := s.ChannelCatalogsSettings.ConfigureChannelCatalogGeneralSettings(ctx, operations.ConfigureChannelCatalogGeneralSettingsRequest{
        ChannelCatalogID: "occaecati",
        GeneralSettings: shared.GeneralSettings{
            AcceptToPublishInfo: true,
            ActiveBeezUPTracking: true,
            DoNotExportOutOfStockProducts: true,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisableChannelCatalog

Disable a channel catalog

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
    res, err := s.ChannelCatalogsSettings.DisableChannelCatalog(ctx, operations.DisableChannelCatalogRequest{
        ChannelCatalogID: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnableChannelCatalog

Enable a channel catalog

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
    res, err := s.ChannelCatalogsSettings.EnableChannelCatalog(ctx, operations.EnableChannelCatalogRequest{
        ChannelCatalogID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
