# ChannelCatalogsColumnMappings

### Available Operations

* [ConfigureChannelCatalogColumnMappings](#configurechannelcatalogcolumnmappings) - Configure channel catalog column mappings

## ConfigureChannelCatalogColumnMappings

Configure channel catalog column mappings

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
    res, err := s.ChannelCatalogsColumnMappings.ConfigureChannelCatalogColumnMappings(ctx, operations.ConfigureChannelCatalogColumnMappingsRequest{
        RequestBody: []shared.ChannelCatalogColumnMapping{
            shared.ChannelCatalogColumnMapping{
                CatalogColumnID: sdk.String("bea7c21e-948b-4ac3-9ffd-4396e62c4163"),
                ChannelCategoryPath: []string{
                    "ea",
                    "impedit",
                    "corporis",
                    "veniam",
                },
                ChannelColumnID: "8a76f06a-fefc-4c0d-bcfe-b210f1482977",
            },
            shared.ChannelCatalogColumnMapping{
                CatalogColumnID: sdk.String("bea7c21e-948b-4ac3-9ffd-4396e62c4163"),
                ChannelCategoryPath: []string{
                    "inventore",
                    "magnam",
                },
                ChannelColumnID: "8a76f06a-fefc-4c0d-bcfe-b210f1482977",
            },
            shared.ChannelCatalogColumnMapping{
                CatalogColumnID: sdk.String("bea7c21e-948b-4ac3-9ffd-4396e62c4163"),
                ChannelCategoryPath: []string{
                    "quo",
                    "consectetur",
                },
                ChannelColumnID: "8a76f06a-fefc-4c0d-bcfe-b210f1482977",
            },
            shared.ChannelCatalogColumnMapping{
                CatalogColumnID: sdk.String("bea7c21e-948b-4ac3-9ffd-4396e62c4163"),
                ChannelCategoryPath: []string{
                    "aspernatur",
                    "minima",
                    "eaque",
                    "a",
                },
                ChannelColumnID: "8a76f06a-fefc-4c0d-bcfe-b210f1482977",
            },
        },
        ChannelCatalogID: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
