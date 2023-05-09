# MarketplacesChannelCatalogsSettings

### Available Operations

* [GetChannelCatalogMarketplaceProperties](#getchannelcatalogmarketplaceproperties) - Get the marketplace properties for a channel catalog
* [GetChannelCatalogMarketplaceSettings](#getchannelcatalogmarketplacesettings) - Get the marketplace settings for a channel catalog
* [SetChannelCatalogMarketplaceSettings](#setchannelcatalogmarketplacesettings) - Save new marketplace settings for a channel catalog

## GetChannelCatalogMarketplaceProperties

Get the marketplace properties for a channel catalog

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
    res, err := s.MarketplacesChannelCatalogsSettings.GetChannelCatalogMarketplaceProperties(ctx, operations.GetChannelCatalogMarketplacePropertiesRequest{
        AcceptLanguage: []string{
            "ex",
            "deleniti",
            "itaque",
            "dolorum",
        },
        ChannelCatalogID: "architecto",
        RedirectionPageURL: "https://watchful-boudoir.org",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelCatalogMarketplaceProperties != nil {
        // handle response
    }
}
```

## GetChannelCatalogMarketplaceSettings

Get the marketplace settings for a channel catalog

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
    res, err := s.MarketplacesChannelCatalogsSettings.GetChannelCatalogMarketplaceSettings(ctx, operations.GetChannelCatalogMarketplaceSettingsRequest{
        ChannelCatalogID: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelCatalogMarketplaceSettings != nil {
        // handle response
    }
}
```

## SetChannelCatalogMarketplaceSettings

Allow you to configure your marketplace settings.
Partial update accepted.


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
    res, err := s.MarketplacesChannelCatalogsSettings.SetChannelCatalogMarketplaceSettings(ctx, operations.SetChannelCatalogMarketplaceSettingsRequest{
        ChannelCatalogID: "voluptate",
        SetChannelCatalogMarketplaceSettingsRequest: shared.SetChannelCatalogMarketplaceSettingsRequest{
            Settings: []shared.ChannelCatalogMarketplaceSetting{
                shared.ChannelCatalogMarketplaceSetting{
                    DiscriminatorType: shared.ChannelCatalogMarketplaceSettingDiscriminatorTypeEnumChannelCatalogMarketplaceIntegerSetting,
                    Name: "PaypalAddress",
                },
            },
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
