# VatCategories

### Available Operations

* [VatCategoriesGet](#vatcategoriesget) - Returns a list of global Vat Categories. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.
* [VatCategoriesProcessVatRates](#vatcategoriesprocessvatrates) - Process Vat Rates

## VatCategoriesGet

Returns a list of global Vat Categories. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

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
    res, err := s.VatCategories.VatCategoriesGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultVatCategoryDto != nil {
        // handle response
    }
}
```

## VatCategoriesProcessVatRates

Process Vat Rates

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
    res, err := s.VatCategories.VatCategoriesProcessVatRates(ctx, []shared.VatRatesByVatCategoryDto{
        shared.VatRatesByVatCategoryDto{
            VatCategoryID: sdk.Int64(809212),
            VatRates: []shared.VatRateDto{
                shared.VatRateDto{
                    ID: sdk.Int64(170934),
                    IsActive: sdk.Bool(false),
                    IsDefault: sdk.Bool(false),
                    OrderIndex: sdk.Int(295307),
                    Percentage: sdk.Float64(8656.77),
                    Timestamp: sdk.String("facilis"),
                    VatCategoryID: sdk.Int64(585445),
                },
                shared.VatRateDto{
                    ID: sdk.Int64(365676),
                    IsActive: sdk.Bool(false),
                    IsDefault: sdk.Bool(false),
                    OrderIndex: sdk.Int(615532),
                    Percentage: sdk.Float64(3954.11),
                    Timestamp: sdk.String("provident"),
                    VatCategoryID: sdk.Int64(230594),
                },
                shared.VatRateDto{
                    ID: sdk.Int64(221319),
                    IsActive: sdk.Bool(false),
                    IsDefault: sdk.Bool(false),
                    OrderIndex: sdk.Int(344010),
                    Percentage: sdk.Float64(1847.38),
                    Timestamp: sdk.String("tenetur"),
                    VatCategoryID: sdk.Int64(477352),
                },
                shared.VatRateDto{
                    ID: sdk.Int64(292571),
                    IsActive: sdk.Bool(false),
                    IsDefault: sdk.Bool(false),
                    OrderIndex: sdk.Int(356343),
                    Percentage: sdk.Float64(2459.9),
                    Timestamp: sdk.String("adipisci"),
                    VatCategoryID: sdk.Int64(583138),
                },
            },
        },
        shared.VatRatesByVatCategoryDto{
            VatCategoryID: sdk.Int64(581269),
            VatRates: []shared.VatRateDto{
                shared.VatRateDto{
                    ID: sdk.Int64(856185),
                    IsActive: sdk.Bool(false),
                    IsDefault: sdk.Bool(false),
                    OrderIndex: sdk.Int(473386),
                    Percentage: sdk.Float64(5568.98),
                    Timestamp: sdk.String("repellendus"),
                    VatCategoryID: sdk.Int64(906524),
                },
                shared.VatRateDto{
                    ID: sdk.Int64(230400),
                    IsActive: sdk.Bool(false),
                    IsDefault: sdk.Bool(false),
                    OrderIndex: sdk.Int(716795),
                    Percentage: sdk.Float64(4266.91),
                    Timestamp: sdk.String("necessitatibus"),
                    VatCategoryID: sdk.Int64(610490),
                },
            },
        },
        shared.VatRatesByVatCategoryDto{
            VatCategoryID: sdk.Int64(201710),
            VatRates: []shared.VatRateDto{
                shared.VatRateDto{
                    ID: sdk.Int64(587337),
                    IsActive: sdk.Bool(false),
                    IsDefault: sdk.Bool(false),
                    OrderIndex: sdk.Int(974724),
                    Percentage: sdk.Float64(3546.78),
                    Timestamp: sdk.String("dolorum"),
                    VatCategoryID: sdk.Int64(743705),
                },
                shared.VatRateDto{
                    ID: sdk.Int64(739946),
                    IsActive: sdk.Bool(false),
                    IsDefault: sdk.Bool(false),
                    OrderIndex: sdk.Int(449880),
                    Percentage: sdk.Float64(9669.56),
                    Timestamp: sdk.String("commodi"),
                    VatCategoryID: sdk.Int64(414438),
                },
                shared.VatRateDto{
                    ID: sdk.Int64(142978),
                    IsActive: sdk.Bool(false),
                    IsDefault: sdk.Bool(false),
                    OrderIndex: sdk.Int(355380),
                    Percentage: sdk.Float64(3545.54),
                    Timestamp: sdk.String("doloremque"),
                    VatCategoryID: sdk.Int64(667804),
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VatCategoriesProcessVatRates200ApplicationJSONObject != nil {
        // handle response
    }
}
```
