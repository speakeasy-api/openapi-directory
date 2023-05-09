# ChannelCatalogsExclusionFilters

### Available Operations

* [ConfigureChannelCatalogExclusionFilters](#configurechannelcatalogexclusionfilters) - Configure channel catalog exclusion filters
* [GetChannelCatalogExclusionFilters](#getchannelcatalogexclusionfilters) - Get channel catalog exclusion filters

## ConfigureChannelCatalogExclusionFilters

Configure channel catalog exclusion filters

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
    res, err := s.ChannelCatalogsExclusionFilters.ConfigureChannelCatalogExclusionFilters(ctx, operations.ConfigureChannelCatalogExclusionFiltersRequest{
        RequestBody: []shared.ExclusionFilter{
            shared.ExclusionFilter{
                ChannelColumnID: "8a76f06a-fefc-4c0d-bcfe-b210f1482977",
                Enabled: true,
                GroupID: "d9833f4b-718a-436f-bab5-89da3d21bf60",
                Name: "Exclude sony products",
                OperatorName: "Contains",
                Position: 1,
                PositionInGroup: 1,
                Value: sdk.String("sony"),
            },
        },
        ChannelCatalogID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetChannelCatalogExclusionFilters

Get channel catalog exclusion filters

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
    res, err := s.ChannelCatalogsExclusionFilters.GetChannelCatalogExclusionFilters(ctx, operations.GetChannelCatalogExclusionFiltersRequest{
        ChannelCatalogID: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExclusionFiltersResponse != nil {
        // handle response
    }
}
```
