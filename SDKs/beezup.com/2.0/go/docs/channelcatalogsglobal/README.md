# ChannelCatalogsGlobal

### Available Operations

* [AddChannelCatalog](#addchannelcatalog) - Add a new channel catalog
* [DeleteChannelCatalog](#deletechannelcatalog) - Delete the channel catalog
* [GetChannelCatalog](#getchannelcatalog) - Get the channel catalog information
* [GetChannelCatalogFilterOperators](#getchannelcatalogfilteroperators) - Get channel catalog filter operators
* [GetChannelCatalogs](#getchannelcatalogs) - List all your current channel catalogs

## AddChannelCatalog

Add a new channel catalog

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ChannelCatalogsGlobal.AddChannelCatalog(ctx, shared.AddChannelCatalogRequest{
        ChannelID: "2dc136a7-0d3d-4cc9-a825-a28a42c53e28",
        StoreID: "64f43358-63a1-47f7-97ec-0301fc39956b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinksGetChannelCatalogLink != nil {
        // handle response
    }
}
```

## DeleteChannelCatalog

Delete the channel catalog

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
    res, err := s.ChannelCatalogsGlobal.DeleteChannelCatalog(ctx, operations.DeleteChannelCatalogRequest{
        ChannelCatalogID: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetChannelCatalog

Get the channel catalog information

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
    res, err := s.ChannelCatalogsGlobal.GetChannelCatalog(ctx, operations.GetChannelCatalogRequest{
        ChannelCatalogID: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelCatalog != nil {
        // handle response
    }
}
```

## GetChannelCatalogFilterOperators

Get channel catalog filter operators

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
    res, err := s.ChannelCatalogsGlobal.GetChannelCatalogFilterOperators(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.FilterOperators != nil {
        // handle response
    }
}
```

## GetChannelCatalogs

List all your current channel catalogs

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
    res, err := s.ChannelCatalogsGlobal.GetChannelCatalogs(ctx, operations.GetChannelCatalogsRequest{
        StoreID: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelCatalogList != nil {
        // handle response
    }
}
```
