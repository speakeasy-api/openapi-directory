# ChannelCatalogsProductsOverrides

### Available Operations

* [ConfigureChannelCatalogProductValueOverrideCopy](#configurechannelcatalogproductvalueoverridecopy) - Copy channel catalog product value override
* [DeleteChannelCatalogProductValueOverride](#deletechannelcatalogproductvalueoverride) - Delete a specific channel catalog product value override
* [GetChannelCatalogProductValueOverrideCopy](#getchannelcatalogproductvalueoverridecopy) - Get channel catalog product value override compatibilities status
* [OverrideChannelCatalogProductValues](#overridechannelcatalogproductvalues) - Override channel catalog product values

## ConfigureChannelCatalogProductValueOverrideCopy

Copy channel catalog product value override

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
    res, err := s.ChannelCatalogsProductsOverrides.ConfigureChannelCatalogProductValueOverrideCopy(ctx, operations.ConfigureChannelCatalogProductValueOverrideCopyRequest{
        ChannelCatalogID: "accusamus",
        ProductID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteChannelCatalogProductValueOverride

Delete a specific channel catalog product value override

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
    res, err := s.ChannelCatalogsProductsOverrides.DeleteChannelCatalogProductValueOverride(ctx, operations.DeleteChannelCatalogProductValueOverrideRequest{
        ChannelCatalogID: "esse",
        ChannelColumnID: "quod",
        ProductID: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetChannelCatalogProductValueOverrideCopy

Get channel catalog product value override compatibilities status

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
    res, err := s.ChannelCatalogsProductsOverrides.GetChannelCatalogProductValueOverrideCopy(ctx, operations.GetChannelCatalogProductValueOverrideCopyRequest{
        ChannelCatalogID: "vero",
        ProductID: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OverrideChannelCatalogProductValues

Override channel catalog product values

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
    res, err := s.ChannelCatalogsProductsOverrides.OverrideChannelCatalogProductValues(ctx, operations.OverrideChannelCatalogProductValuesRequest{
        RequestBody: map[string]string{
            "saepe": "vel",
        },
        ChannelCatalogID: "harum",
        ProductID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
