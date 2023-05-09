# Products

### Available Operations

* [ArticleCreateArticle](#articlecreatearticle) - Creates a new product
* [ArticleDeleteArticle](#articledeletearticle) - Deletes a product
* [ArticleDeleteImage](#articledeleteimage) - Deletes a single image by id
* [ArticleDeleteImageFromProduct](#articledeleteimagefromproduct) - Deletes a single image from a product
* [ArticleGetArticle](#articlegetarticle) - Queries a single article by id or by sku
* [ArticleGetCategory](#articlegetcategory) - GEts a list of all defined categories
* [ArticleGetCustomField](#articlegetcustomfield) - Queries a single custom field
* [ArticleGetCustomFields](#articlegetcustomfields) - Queries a list of all custom fields
* [ArticleGetImage](#articlegetimage) - Returns a single image by id
* [ArticleGetImageFromProduct](#articlegetimagefromproduct) - Returns a single image by id
* [ArticleGetImages](#articlegetimages) - Returns a list of all images of the product
* [ArticleGetList](#articlegetlist) - Get a list of all products
* [ArticleGetPatchableFields](#articlegetpatchablefields) - Returns a list of fields which can be updated with the patch call
* [ArticleGetReservedAmount](#articlegetreservedamount) - Queries the reserved amount for a single article by id or by sku
* [ArticleGetStocks](#articlegetstocks) - Query all defined stock locations
* [ArticlePatchArticle](#articlepatcharticle) - Updates one or more fields of a product
* [ArticlePutImageForm](#articleputimageform) - Add or update an existing image of a product
* [ArticlePutImageJSON](#articleputimagejson) - Add or update an existing image of a product
* [ArticlePutImageRaw](#articleputimageraw) - Add or update an existing image of a product
* [ArticleUpdateStockCodeForm](#articleupdatestockcodeform) - Update the stock code of an article
* [ArticleUpdateStockCodeJSON](#articleupdatestockcodejson) - Update the stock code of an article
* [ArticleUpdateStockCodeRaw](#articleupdatestockcoderaw) - Update the stock code of an article
* [ArticleUpdateStockForm](#articleupdatestockform) - Update the stock qty of an article
* [ArticleUpdateStockJSON](#articleupdatestockjson) - Update the stock qty of an article
* [ArticleUpdateStockRaw](#articleupdatestockraw) - Update the stock qty of an article
* [SearchSearchForm](#searchsearchform) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [SearchSearchJSON](#searchsearchjson) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [SearchSearchRaw](#searchsearchraw) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

## ArticleCreateArticle

Creates a new product

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
    res, err := s.Products.ArticleCreateArticle(ctx, shared.BillbeeInterfacesBillbeeAPIModelArticleAPIModelInput{
        BasicAttributes: []shared.BillbeeInterfacesOrderMultiLanguageString{
            shared.BillbeeInterfacesOrderMultiLanguageString{
                LanguageCode: sdk.String("earum"),
                Text: sdk.String("veniam"),
            },
        },
        BillOfMaterial: []shared.BillbeeInterfacesBillbeeAPIModelBomSubArticleAPIModel{
            shared.BillbeeInterfacesBillbeeAPIModelBomSubArticleAPIModel{
                Amount: sdk.Float64(510.53),
                ArticleID: sdk.Int64(350387),
                Sku: sdk.String("veniam"),
            },
            shared.BillbeeInterfacesBillbeeAPIModelBomSubArticleAPIModel{
                Amount: sdk.Float64(4699.94),
                ArticleID: sdk.Int64(320326),
                Sku: sdk.String("nisi"),
            },
        },
        Category1: &shared.BillbeeInterfacesBillbeeAPIModelArticleCategoryAPIModel{
            ID: sdk.Int64(946808),
            Name: sdk.String("Rosemarie Hilll"),
        },
        Category2: &shared.BillbeeInterfacesBillbeeAPIModelArticleCategoryAPIModel{
            ID: sdk.Int64(24769),
            Name: sdk.String("Levi Auer"),
        },
        Category3: &shared.BillbeeInterfacesBillbeeAPIModelArticleCategoryAPIModel{
            ID: sdk.Int64(152364),
            Name: sdk.String("Mrs. Jerald Waelchi"),
        },
        Condition: sdk.Int(688463),
        CostPrice: sdk.Float64(2942.66),
        CountryOfOrigin: sdk.String("voluptatibus"),
        CustomFields: []shared.BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldValueModel{
            shared.BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldValueModel{
                ArticleID: sdk.Int64(127087),
                Definition: &shared.BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModel{
                    Configuration: map[string]interface{}{
                        "soluta": "dolorum",
                        "velit": "earum",
                        "praesentium": "error",
                        "non": "quasi",
                    },
                    ID: sdk.Int64(649032),
                    IsNullable: sdk.Bool(false),
                    Name: sdk.String("Miss Horace Runte"),
                    Type: shared.BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModelTypeEnumZero.ToPointer(),
                },
                DefinitionID: sdk.Int64(643199),
                ID: sdk.Int64(396223),
                Value: map[string]interface{}{
                    "magni": "tempora",
                    "possimus": "dolor",
                    "rerum": "sed",
                },
            },
            shared.BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldValueModel{
                ArticleID: sdk.Int64(883078),
                Definition: &shared.BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModel{
                    Configuration: map[string]interface{}{
                        "delectus": "minus",
                        "quo": "quos",
                        "asperiores": "voluptatum",
                        "iste": "corporis",
                    },
                    ID: sdk.Int64(37129),
                    IsNullable: sdk.Bool(false),
                    Name: sdk.String("Susan Wyman"),
                    Type: shared.BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModelTypeEnumThree.ToPointer(),
                },
                DefinitionID: sdk.Int64(205499),
                ID: sdk.Int64(866135),
                Value: map[string]interface{}{
                    "sapiente": "mollitia",
                    "quae": "quos",
                },
            },
        },
        DeliveryTime: sdk.Int(44571),
        Description: []shared.BillbeeInterfacesOrderMultiLanguageString{
            shared.BillbeeInterfacesOrderMultiLanguageString{
                LanguageCode: sdk.String("voluptates"),
                Text: sdk.String("ad"),
            },
            shared.BillbeeInterfacesOrderMultiLanguageString{
                LanguageCode: sdk.String("aliquam"),
                Text: sdk.String("quisquam"),
            },
        },
        Ean: sdk.String("quas"),
        ExportDescription: sdk.String("consequuntur"),
        ExportDescriptionMultiLanguage: []shared.BillbeeInterfacesOrderMultiLanguageString{
            shared.BillbeeInterfacesOrderMultiLanguageString{
                LanguageCode: sdk.String("inventore"),
                Text: sdk.String("aliquid"),
            },
            shared.BillbeeInterfacesOrderMultiLanguageString{
                LanguageCode: sdk.String("laudantium"),
                Text: sdk.String("est"),
            },
            shared.BillbeeInterfacesOrderMultiLanguageString{
                LanguageCode: sdk.String("dolor"),
                Text: sdk.String("aliquid"),
            },
            shared.BillbeeInterfacesOrderMultiLanguageString{
                LanguageCode: sdk.String("consectetur"),
                Text: sdk.String("cumque"),
            },
        },
        HeightCm: sdk.Float64(5259.17),
        ID: sdk.Int64(527715),
        Images: []shared.BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel{
            shared.BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel{
                ArticleID: sdk.Int64(237523),
                ID: sdk.Int64(927959),
                IsDefault: sdk.Bool(false),
                Position: sdk.Int(271306),
                ThumbPathExt: sdk.String("blanditiis"),
                ThumbURL: sdk.String("numquam"),
                URL: sdk.String("sequi"),
            },
            shared.BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel{
                ArticleID: sdk.Int64(532320),
                ID: sdk.Int64(27078),
                IsDefault: sdk.Bool(false),
                Position: sdk.Int(703189),
                ThumbPathExt: sdk.String("veritatis"),
                ThumbURL: sdk.String("tenetur"),
                URL: sdk.String("autem"),
            },
        },
        InvoiceText: []shared.BillbeeInterfacesOrderMultiLanguageString{
            shared.BillbeeInterfacesOrderMultiLanguageString{
                LanguageCode: sdk.String("totam"),
                Text: sdk.String("porro"),
            },
            shared.BillbeeInterfacesOrderMultiLanguageString{
                LanguageCode: sdk.String("deserunt"),
                Text: sdk.String("magni"),
            },
            shared.BillbeeInterfacesOrderMultiLanguageString{
                LanguageCode: sdk.String("nihil"),
                Text: sdk.String("voluptas"),
            },
        },
        IsCustomizable: false,
        IsDeactivated: sdk.Bool(false),
        IsDigital: false,
        LengthCm: sdk.Float64(6581.99),
        Manufacturer: sdk.String("commodi"),
        Materials: []shared.BillbeeInterfacesOrderMultiLanguageString{
            shared.BillbeeInterfacesOrderMultiLanguageString{
                LanguageCode: sdk.String("fuga"),
                Text: sdk.String("aut"),
            },
        },
        Occasion: sdk.Int(295892),
        Price: 8027.34,
        Recipient: sdk.Int(303292),
        Sku: sdk.String("iste"),
        ShippingProductID: sdk.Int64(355889),
        ShortDescription: []shared.BillbeeInterfacesOrderMultiLanguageString{
            shared.BillbeeInterfacesOrderMultiLanguageString{
                LanguageCode: sdk.String("placeat"),
                Text: sdk.String("voluptas"),
            },
            shared.BillbeeInterfacesOrderMultiLanguageString{
                LanguageCode: sdk.String("occaecati"),
                Text: sdk.String("unde"),
            },
            shared.BillbeeInterfacesOrderMultiLanguageString{
                LanguageCode: sdk.String("illo"),
                Text: sdk.String("nihil"),
            },
            shared.BillbeeInterfacesOrderMultiLanguageString{
                LanguageCode: sdk.String("inventore"),
                Text: sdk.String("libero"),
            },
        },
        SoldAmount: sdk.Float64(3712.87),
        SoldAmountLast30Days: sdk.Float64(976.59),
        SoldSumGross: sdk.Float64(7665.91),
        SoldSumGrossLast30Days: sdk.Float64(1174.91),
        SoldSumNet: sdk.Float64(6886.84),
        SoldSumNetLast30Days: sdk.Float64(8132.24),
        Sources: []shared.BillbeeInterfacesBillbeeAPIModelArticleSourceAPIModel{
            shared.BillbeeInterfacesBillbeeAPIModelArticleSourceAPIModel{
                APIAccountID: sdk.Int64(105372),
                APIAccountName: sdk.String("cumque"),
                Custom: map[string]interface{}{
                    "labore": "expedita",
                    "corrupti": "rem",
                    "atque": "officiis",
                    "cum": "pariatur",
                },
                ExportFactor: sdk.Float64(9568.71),
                ID: sdk.Int(775427),
                Source: "incidunt",
                SourceID: "quod",
                StockSyncInactive: sdk.Bool(false),
                StockSyncMax: sdk.Float64(7932.82),
                StockSyncMin: sdk.Float64(7814.91),
                UnitsPerItem: sdk.Float64(6599.71),
            },
            shared.BillbeeInterfacesBillbeeAPIModelArticleSourceAPIModel{
                APIAccountID: sdk.Int64(569706),
                APIAccountName: sdk.String("occaecati"),
                Custom: map[string]interface{}{
                    "quo": "esse",
                    "hic": "maxime",
                    "accusantium": "soluta",
                },
                ExportFactor: sdk.Float64(1474),
                ID: sdk.Int(866292),
                Source: "eligendi",
                SourceID: "recusandae",
                StockSyncInactive: sdk.Bool(false),
                StockSyncMax: sdk.Float64(837.91),
                StockSyncMin: sdk.Float64(136.37),
                UnitsPerItem: sdk.Float64(5161.24),
            },
            shared.BillbeeInterfacesBillbeeAPIModelArticleSourceAPIModel{
                APIAccountID: sdk.Int64(480421),
                APIAccountName: sdk.String("dolor"),
                Custom: map[string]interface{}{
                    "tempora": "magni",
                    "rerum": "doloremque",
                    "voluptatem": "eum",
                    "at": "eum",
                },
                ExportFactor: sdk.Float64(4444.79),
                ID: sdk.Int(531195),
                Source: "blanditiis",
                SourceID: "nihil",
                StockSyncInactive: sdk.Bool(false),
                StockSyncMax: sdk.Float64(5400.48),
                StockSyncMin: sdk.Float64(6979.94),
                UnitsPerItem: sdk.Float64(6455.44),
            },
        },
        StockCode: sdk.String("atque"),
        StockCurrent: sdk.Float64(3448.56),
        StockDesired: sdk.Float64(5423.4),
        StockReduceItemsPerSale: sdk.Float64(1011.07),
        StockWarning: sdk.Float64(6672.13),
        Stocks: []shared.BillbeeInterfacesBillbeeAPIModelStockArticleAPIModel{
            shared.BillbeeInterfacesBillbeeAPIModelStockArticleAPIModel{
                Name: sdk.String("Martin Berge"),
                StockCode: sdk.String("enim"),
                StockCurrent: sdk.Float64(2864.53),
                StockDesired: sdk.Float64(9580.68),
                StockID: sdk.Int64(901651),
                StockWarning: sdk.Float64(9657.35),
                UnfulfilledAmount: sdk.Float64(6422.34),
            },
            shared.BillbeeInterfacesBillbeeAPIModelStockArticleAPIModel{
                Name: sdk.String("Benny Mosciski"),
                StockCode: sdk.String("quia"),
                StockCurrent: sdk.Float64(8872.84),
                StockDesired: sdk.Float64(6514.67),
                StockID: sdk.Int64(765070),
                StockWarning: sdk.Float64(3370.81),
                UnfulfilledAmount: sdk.Float64(3135.9),
            },
        },
        Tags: []shared.BillbeeInterfacesOrderMultiLanguageString{
            shared.BillbeeInterfacesOrderMultiLanguageString{
                LanguageCode: sdk.String("nemo"),
                Text: sdk.String("illum"),
            },
            shared.BillbeeInterfacesOrderMultiLanguageString{
                LanguageCode: sdk.String("nesciunt"),
                Text: sdk.String("sit"),
            },
        },
        TaricNumber: sdk.String("odio"),
        Title: []shared.BillbeeInterfacesOrderMultiLanguageString{
            shared.BillbeeInterfacesOrderMultiLanguageString{
                LanguageCode: sdk.String("asperiores"),
                Text: sdk.String("recusandae"),
            },
            shared.BillbeeInterfacesOrderMultiLanguageString{
                LanguageCode: sdk.String("voluptates"),
                Text: sdk.String("praesentium"),
            },
            shared.BillbeeInterfacesOrderMultiLanguageString{
                LanguageCode: sdk.String("dicta"),
                Text: sdk.String("fugit"),
            },
            shared.BillbeeInterfacesOrderMultiLanguageString{
                LanguageCode: sdk.String("sit"),
                Text: sdk.String("aliquid"),
            },
        },
        Type: 898638,
        Unit: sdk.Int(148975),
        UnitsPerItem: sdk.Float64(5371.7),
        Vat1Rate: 1227.44,
        Vat2Rate: 2001.9,
        VatIndex: 963913,
        Weight: sdk.Int(673653),
        WeightNet: sdk.Int(303421),
        WidthCm: sdk.Float64(6442.23),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleCreateArticle200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ArticleDeleteArticle

Deletes a product

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
    res, err := s.Products.ArticleDeleteArticle(ctx, operations.ArticleDeleteArticleRequest{
        ID: 266680,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleDeleteArticle200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ArticleDeleteImage

Deletes a single image by id

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
    res, err := s.Products.ArticleDeleteImage(ctx, operations.ArticleDeleteImageRequest{
        ImageID: 122085,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleDeleteImage200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ArticleDeleteImageFromProduct

Deletes a single image from a product

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
    res, err := s.Products.ArticleDeleteImageFromProduct(ctx, operations.ArticleDeleteImageFromProductRequest{
        ImageID: 771092,
        ProductID: 259600,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleDeleteImageFromProduct200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ArticleGetArticle

Queries a single article by id or by sku

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
    res, err := s.Products.ArticleGetArticle(ctx, operations.ArticleGetArticleRequest{
        ID: "80d3f213-2af0-4310-ad51-4f4cc6f18bf9",
        LookupBy: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleAPIModel != nil {
        // handle response
    }
}
```

## ArticleGetCategory

GEts a list of all defined categories

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
    res, err := s.Products.ArticleGetCategory(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleGetCategory200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ArticleGetCustomField

Queries a single custom field

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
    res, err := s.Products.ArticleGetCustomField(ctx, operations.ArticleGetCustomFieldRequest{
        ID: 151385,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModel != nil {
        // handle response
    }
}
```

## ArticleGetCustomFields

Queries a list of all custom fields

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
    res, err := s.Products.ArticleGetCustomFields(ctx, operations.ArticleGetCustomFieldsRequest{
        Page: sdk.Int(106682),
        PageSize: sdk.Int(627341),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModel != nil {
        // handle response
    }
}
```

## ArticleGetImage

Returns a single image by id

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
    res, err := s.Products.ArticleGetImage(ctx, operations.ArticleGetImageRequest{
        ImageID: 408774,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel != nil {
        // handle response
    }
}
```

## ArticleGetImageFromProduct

Returns a single image by id

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
    res, err := s.Products.ArticleGetImageFromProduct(ctx, operations.ArticleGetImageFromProductRequest{
        ImageID: 657301,
        ProductID: 296128,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel != nil {
        // handle response
    }
}
```

## ArticleGetImages

Returns a list of all images of the product

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
    res, err := s.Products.ArticleGetImages(ctx, operations.ArticleGetImagesRequest{
        ProductID: 945419,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel != nil {
        // handle response
    }
}
```

## ArticleGetList

Get a list of all products

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Products.ArticleGetList(ctx, operations.ArticleGetListRequest{
        MaximumBillBeeArticleID: sdk.Int64(493407),
        MinCreatedAt: types.MustTimeFromString("2022-05-06T04:17:50.243Z"),
        MinimumBillBeeArticleID: sdk.Int64(512488),
        Page: sdk.Int(461050),
        PageSize: sdk.Int(908539),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleAPIModel != nil {
        // handle response
    }
}
```

## ArticleGetPatchableFields

Returns a list of fields which can be updated with the patch call

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
    res, err := s.Products.ArticleGetPatchableFields(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleGetPatchableFields200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ArticleGetReservedAmount

Queries the reserved amount for a single article by id or by sku

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
    res, err := s.Products.ArticleGetReservedAmount(ctx, operations.ArticleGetReservedAmountRequest{
        ID: "e3e4be75-2c65-4b34-818e-3bb91c8d975e",
        LookupBy: sdk.String("aperiam"),
        StockID: sdk.Int64(916419),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelGetReservedAmountResponseData != nil {
        // handle response
    }
}
```

## ArticleGetStocks

Query all defined stock locations

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
    res, err := s.Products.ArticleGetStocks(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelStockResponseData != nil {
        // handle response
    }
}
```

## ArticlePatchArticle

Updates one or more fields of a product

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
    res, err := s.Products.ArticlePatchArticle(ctx, operations.ArticlePatchArticleRequest{
        RequestBody: map[string]interface{}{
            "tempora": "quae",
            "omnis": "illum",
            "rem": "tenetur",
        },
        ID: 537946,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticlePatchArticle200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ArticlePutImageForm

Add or update an existing image of a product

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
    res, err := s.Products.ArticlePutImageForm(ctx, operations.ArticlePutImageFormRequest{
        BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel: shared.BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel{
            ArticleID: sdk.Int64(264958),
            ID: sdk.Int64(937664),
            IsDefault: sdk.Bool(false),
            Position: sdk.Int(101374),
            ThumbPathExt: sdk.String("aliquam"),
            ThumbURL: sdk.String("labore"),
            URL: sdk.String("maiores"),
        },
        ImageID: 196646,
        ProductID: 902132,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel != nil {
        // handle response
    }
}
```

## ArticlePutImageJSON

Add or update an existing image of a product

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
    res, err := s.Products.ArticlePutImageJSON(ctx, operations.ArticlePutImageJSONRequest{
        BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel: shared.BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel{
            ArticleID: sdk.Int64(8904),
            ID: sdk.Int64(458723),
            IsDefault: sdk.Bool(false),
            Position: sdk.Int(891302),
            ThumbPathExt: sdk.String("facere"),
            ThumbURL: sdk.String("quisquam"),
            URL: sdk.String("cumque"),
        },
        ImageID: 302878,
        ProductID: 677895,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel != nil {
        // handle response
    }
}
```

## ArticlePutImageRaw

Add or update an existing image of a product

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
    res, err := s.Products.ArticlePutImageRaw(ctx, operations.ArticlePutImageRawRequest{
        RequestBody: []byte("deserunt"),
        ImageID: 319834,
        ProductID: 970411,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel != nil {
        // handle response
    }
}
```

## ArticleUpdateStockCodeForm

Update the stock code of an article

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
    res, err := s.Products.ArticleUpdateStockCodeForm(ctx, shared.BillbeeInterfacesBillbeeAPIModelUpdateStockCodeAPIModel{
        BillbeeID: sdk.Int64(196451),
        Sku: sdk.String("porro"),
        StockCode: sdk.String("laborum"),
        StockID: sdk.Int64(748973),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelUpdateStockCodeResponseData != nil {
        // handle response
    }
}
```

## ArticleUpdateStockCodeJSON

Update the stock code of an article

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
    res, err := s.Products.ArticleUpdateStockCodeJSON(ctx, shared.BillbeeInterfacesBillbeeAPIModelUpdateStockCodeAPIModel{
        BillbeeID: sdk.Int64(842974),
        Sku: sdk.String("omnis"),
        StockCode: sdk.String("aut"),
        StockID: sdk.Int64(369941),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelUpdateStockCodeResponseData != nil {
        // handle response
    }
}
```

## ArticleUpdateStockCodeRaw

Update the stock code of an article

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
    res, err := s.Products.ArticleUpdateStockCodeRaw(ctx, []byte("officia"))
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelUpdateStockCodeResponseData != nil {
        // handle response
    }
}
```

## ArticleUpdateStockForm

The article is specified by sku. You have to send the absolute value for the current stock

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
    res, err := s.Products.ArticleUpdateStockForm(ctx, shared.BillbeeInterfacesBillbeeAPIModelUpdateStockAPIModel{
        AutosubtractReservedAmount: sdk.Bool(false),
        BillbeeID: sdk.Int64(584640),
        DeltaQuantity: sdk.Float64(4428.73),
        ForceSendStockToShops: sdk.Bool(false),
        NewQuantity: sdk.Float64(1572.81),
        OldQuantity: sdk.Float64(8980.88),
        Reason: sdk.String("accusantium"),
        Sku: sdk.String("ad"),
        StockID: sdk.Int64(392752),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelUpdateStockResponseData != nil {
        // handle response
    }
}
```

## ArticleUpdateStockJSON

The article is specified by sku. You have to send the absolute value for the current stock

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
    res, err := s.Products.ArticleUpdateStockJSON(ctx, shared.BillbeeInterfacesBillbeeAPIModelUpdateStockAPIModel{
        AutosubtractReservedAmount: sdk.Bool(false),
        BillbeeID: sdk.Int64(474185),
        DeltaQuantity: sdk.Float64(1541.3),
        ForceSendStockToShops: sdk.Bool(false),
        NewQuantity: sdk.Float64(5147.67),
        OldQuantity: sdk.Float64(1527.42),
        Reason: sdk.String("odit"),
        Sku: sdk.String("iusto"),
        StockID: sdk.Int64(712893),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelUpdateStockResponseData != nil {
        // handle response
    }
}
```

## ArticleUpdateStockRaw

The article is specified by sku. You have to send the absolute value for the current stock

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
    res, err := s.Products.ArticleUpdateStockRaw(ctx, []byte("eos"))
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelUpdateStockResponseData != nil {
        // handle response
    }
}
```

## SearchSearchForm

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

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
    res, err := s.Products.SearchSearchForm(ctx, shared.RechnungsdruckWebAppControllersAPISearchControllerSearchModel{
        SearchMode: shared.RechnungsdruckWebAppControllersAPISearchControllerSearchModelSearchModeEnumFour.ToPointer(),
        Term: sdk.String("nesciunt"),
        Type: []string{
            "sint",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultRechnungsdruckWebAppControllersAPISearchControllerSearchResultsModel != nil {
        // handle response
    }
}
```

## SearchSearchJSON

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

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
    res, err := s.Products.SearchSearchJSON(ctx, shared.RechnungsdruckWebAppControllersAPISearchControllerSearchModel{
        SearchMode: shared.RechnungsdruckWebAppControllersAPISearchControllerSearchModelSearchModeEnumOne.ToPointer(),
        Term: sdk.String("esse"),
        Type: []string{
            "distinctio",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultRechnungsdruckWebAppControllersAPISearchControllerSearchResultsModel != nil {
        // handle response
    }
}
```

## SearchSearchRaw

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

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
    res, err := s.Products.SearchSearchRaw(ctx, []byte("sapiente"))
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultRechnungsdruckWebAppControllersAPISearchControllerSearchResultsModel != nil {
        // handle response
    }
}
```
