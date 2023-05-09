# App

### Available Operations

* [GetAppConfig](#getappconfig) - Get the global configuration for an application. Should be called during app statup.

This includes things like device and playback rules, classifications,
sitemap and subscriptions.

You have the option to select specific configuration objects using the 'include'
parameter, or if unspecified, getting all configuration.

* [GetItvPage](#getitvpage) - Returns a page with the specified id.

This is a cut down version for low memory devices.123

If targeting the search page you must url encode the search term as a parameter
using the `q` key. For example if your browser path looks like `/search?q=the`
then what you pass to this endpoint would look like `/itv/page?path=/search%3Fq%3Dthe`.

* [GetPage](#getpage) - Returns a page with the specified id.

If targeting the search page you must url encode the search term as a parameter
using the `q` key. For example if your browser path looks like `/search?q=the`
then what you pass to this endpoint would look like `/page?path=/search%3Fq%3Dthe`.


## GetAppConfig

Get the global configuration for an application. Should be called during app statup.

This includes things like device and playback rules, classifications,
sitemap and subscriptions.

You have the option to select specific configuration objects using the 'include'
parameter, or if unspecified, getting all configuration.


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
    res, err := s.App.GetAppConfig(ctx, operations.GetAppConfigRequest{
        Device: sdk.String("accusamus"),
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumLdp,
        },
        Include: []GetAppConfigIncludeEnum{
            operations.GetAppConfigIncludeEnumDisplay,
        },
        Lang: sdk.String("laborum"),
        Segments: []string{
            "velit",
            "eum",
            "autem",
            "nobis",
        },
        Sub: sdk.String("quas"),
        System: sdk.String("assumenda"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppConfig != nil {
        // handle response
    }
}
```

## GetItvPage

Returns a page with the specified id.

This is a cut down version for low memory devices.123

If targeting the search page you must url encode the search term as a parameter
using the `q` key. For example if your browser path looks like `/search?q=the`
then what you pass to this endpoint would look like `/itv/page?path=/search%3Fq%3Dthe`.


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
    res, err := s.App.GetItvPage(ctx, operations.GetItvPageRequest{
        Device: sdk.String("nulla"),
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCas,
            shared.FeatureFlagsEnumAll,
        },
        ItemDetailExpand: operations.GetItvPageItemDetailExpandEnumAll.ToPointer(),
        ItemDetailSelectSeason: operations.GetItvPageItemDetailSelectSeasonEnumFirst.ToPointer(),
        Lang: sdk.String("explicabo"),
        ListPageSize: sdk.Int(591935),
        ListPageSizeLarge: sdk.Int(55374),
        MaxListPrefetch: sdk.Int(476477),
        MaxRating: sdk.String("magnam"),
        Path: "odio",
        Segments: []string{
            "esse",
            "esse",
        },
        Sub: sdk.String("rem"),
        TextEntryFormat: operations.GetItvPageTextEntryFormatEnumHTML.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Page != nil {
        // handle response
    }
}
```

## GetPage

Returns a page with the specified id.

If targeting the search page you must url encode the search term as a parameter
using the `q` key. For example if your browser path looks like `/search?q=the`
then what you pass to this endpoint would look like `/page?path=/search%3Fq%3Dthe`.


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
    res, err := s.App.GetPage(ctx, operations.GetPageRequest{
        Device: sdk.String("reprehenderit"),
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumLrl,
            shared.FeatureFlagsEnumLdp,
            shared.FeatureFlagsEnumHb,
        },
        ItemDetailExpand: operations.GetPageItemDetailExpandEnumChildren.ToPointer(),
        ItemDetailSelectSeason: operations.GetPageItemDetailSelectSeasonEnumLatest.ToPointer(),
        Lang: sdk.String("eos"),
        ListPageSize: sdk.Int(509342),
        ListPageSizeLarge: sdk.Int(788546),
        MaxListPrefetch: sdk.Int(86377),
        MaxRating: sdk.String("ipsa"),
        Path: "id",
        Segments: []string{
            "neque",
            "quo",
            "illum",
        },
        Sub: sdk.String("quo"),
        TextEntryFormat: operations.GetPageTextEntryFormatEnumHTML.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Page != nil {
        // handle response
    }
}
```
