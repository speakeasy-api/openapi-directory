# Items

### Available Operations

* [ItemsAdd](#itemsadd) - Create Item
* [ItemsAll](#itemsall) - List Items
* [ItemsDelete](#itemsdelete) - Delete Item
* [ItemsOne](#itemsone) - Get Item
* [ItemsUpdate](#itemsupdate) - Update Item

## ItemsAdd

Create Item

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
    res, err := s.Items.ItemsAdd(ctx, operations.ItemsAddRequest{
        ItemInput: shared.ItemInput{
            Abbreviation: sdk.String("Ch"),
            AbsentAtLocationIds: []string{
                "ipsam",
            },
            Available: sdk.Bool(true),
            AvailableForPickup: sdk.Bool(false),
            AvailableOnline: sdk.Bool(false),
            Categories: []shared.ItemCategoriesInput{
                shared.ItemCategoriesInput{
                    ImageIds: []string{
                        "12345",
                        "12345",
                        "12345",
                        "12345",
                    },
                    Name: sdk.String("Fred Strosin"),
                },
                shared.ItemCategoriesInput{
                    ImageIds: []string{
                        "12345",
                        "12345",
                    },
                    Name: sdk.String("Forrest Koepp"),
                },
                shared.ItemCategoriesInput{
                    ImageIds: []string{
                        "12345",
                        "12345",
                        "12345",
                    },
                    Name: sdk.String("Antoinette Nikolaus"),
                },
                shared.ItemCategoriesInput{
                    ImageIds: []string{
                        "12345",
                        "12345",
                        "12345",
                    },
                    Name: sdk.String("Ms. Earnest Lebsack"),
                },
            },
            Code: sdk.String("11910345"),
            Cost: sdk.Float64(2),
            Deleted: sdk.Bool(true),
            Description: sdk.String("Hot Chocolate"),
            Hidden: sdk.Bool(true),
            ID: sdk.String("#cocoa"),
            IdempotencyKey: sdk.String("random_string"),
            IsRevenue: sdk.Bool(false),
            Name: "Cocoa",
            Options: []shared.ItemOptions{
                shared.ItemOptions{
                    AttributeID: sdk.String("12345"),
                    ID: sdk.String("12345"),
                    Name: sdk.String("Option 1"),
                },
                shared.ItemOptions{
                    AttributeID: sdk.String("12345"),
                    ID: sdk.String("12345"),
                    Name: sdk.String("Option 1"),
                },
            },
            PresentAtAllLocations: sdk.Bool(false),
            PriceAmount: sdk.Float64(10),
            PriceCurrency: shared.CurrencyEnumUsd.ToPointer(),
            PricingType: shared.ItemPricingTypeEnumFixed.ToPointer(),
            ProductType: shared.ItemProductTypeEnumRegular.ToPointer(),
            Sku: sdk.String("11910345"),
            TaxIds: []string{
                "impedit",
            },
            UseDefaultTaxRates: sdk.Bool(false),
            Variations: []shared.ItemVariationsInput{
                shared.ItemVariationsInput{
                    Name: sdk.String("Variation"),
                    PresentAtAllLocations: sdk.Bool(false),
                    PriceAmount: sdk.Float64(10),
                    PriceCurrency: shared.CurrencyEnumUsd.ToPointer(),
                    PricingType: shared.ItemVariationsPricingTypeEnumFixed.ToPointer(),
                    Sequence: sdk.Float64(1),
                    Sku: sdk.String("11910345"),
                    Stockable: sdk.Bool(false),
                },
                shared.ItemVariationsInput{
                    Name: sdk.String("Variation"),
                    PresentAtAllLocations: sdk.Bool(false),
                    PriceAmount: sdk.Float64(10),
                    PriceCurrency: shared.CurrencyEnumUsd.ToPointer(),
                    PricingType: shared.ItemVariationsPricingTypeEnumFixed.ToPointer(),
                    Sequence: sdk.Float64(1),
                    Sku: sdk.String("11910345"),
                    Stockable: sdk.Bool(false),
                },
                shared.ItemVariationsInput{
                    Name: sdk.String("Variation"),
                    PresentAtAllLocations: sdk.Bool(false),
                    PriceAmount: sdk.Float64(10),
                    PriceCurrency: shared.CurrencyEnumUsd.ToPointer(),
                    PricingType: shared.ItemVariationsPricingTypeEnumFixed.ToPointer(),
                    Sequence: sdk.Float64(1),
                    Sku: sdk.String("11910345"),
                    Stockable: sdk.Bool(false),
                },
            },
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "esse",
        XApideckConsumerID: "ipsum",
        XApideckServiceID: sdk.String("excepturi"),
    }, operations.ItemsAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateItemResponse != nil {
        // handle response
    }
}
```

## ItemsAll

List Items

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
    res, err := s.Items.ItemsAll(ctx, operations.ItemsAllRequest{
        Cursor: sdk.String("aspernatur"),
        Fields: sdk.String("perferendis"),
        Limit: sdk.Int64(324141),
        Raw: sdk.Bool(false),
        XApideckAppID: "natus",
        XApideckConsumerID: "sed",
        XApideckServiceID: sdk.String("iste"),
    }, operations.ItemsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetItemsResponse != nil {
        // handle response
    }
}
```

## ItemsDelete

Delete Item

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
    res, err := s.Items.ItemsDelete(ctx, operations.ItemsDeleteRequest{
        ID: "396fea75-96eb-410f-aaa2-352c5955907a",
        Raw: sdk.Bool(false),
        XApideckAppID: "doloribus",
        XApideckConsumerID: "sapiente",
        XApideckServiceID: sdk.String("architecto"),
    }, operations.ItemsDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteItemResponse != nil {
        // handle response
    }
}
```

## ItemsOne

Get Item

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
    res, err := s.Items.ItemsOne(ctx, operations.ItemsOneRequest{
        Fields: sdk.String("mollitia"),
        ID: "3a2fa946-7739-4251-aa52-c3f5ad019da1",
        Raw: sdk.Bool(false),
        XApideckAppID: "reiciendis",
        XApideckConsumerID: "voluptatibus",
        XApideckServiceID: sdk.String("vero"),
    }, operations.ItemsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetItemResponse != nil {
        // handle response
    }
}
```

## ItemsUpdate

Update Item

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
    res, err := s.Items.ItemsUpdate(ctx, operations.ItemsUpdateRequest{
        ItemInput: shared.ItemInput{
            Abbreviation: sdk.String("Ch"),
            AbsentAtLocationIds: []string{
                "praesentium",
                "voluptatibus",
            },
            Available: sdk.Bool(true),
            AvailableForPickup: sdk.Bool(false),
            AvailableOnline: sdk.Bool(false),
            Categories: []shared.ItemCategoriesInput{
                shared.ItemCategoriesInput{
                    ImageIds: []string{
                        "12345",
                        "12345",
                        "12345",
                    },
                    Name: sdk.String("Ms. Karla Aufderhar"),
                },
            },
            Code: sdk.String("11910345"),
            Cost: sdk.Float64(2),
            Deleted: sdk.Bool(true),
            Description: sdk.String("Hot Chocolate"),
            Hidden: sdk.Bool(true),
            ID: sdk.String("#cocoa"),
            IdempotencyKey: sdk.String("random_string"),
            IsRevenue: sdk.Bool(false),
            Name: "Cocoa",
            Options: []shared.ItemOptions{
                shared.ItemOptions{
                    AttributeID: sdk.String("12345"),
                    ID: sdk.String("12345"),
                    Name: sdk.String("Option 1"),
                },
                shared.ItemOptions{
                    AttributeID: sdk.String("12345"),
                    ID: sdk.String("12345"),
                    Name: sdk.String("Option 1"),
                },
                shared.ItemOptions{
                    AttributeID: sdk.String("12345"),
                    ID: sdk.String("12345"),
                    Name: sdk.String("Option 1"),
                },
                shared.ItemOptions{
                    AttributeID: sdk.String("12345"),
                    ID: sdk.String("12345"),
                    Name: sdk.String("Option 1"),
                },
            },
            PresentAtAllLocations: sdk.Bool(false),
            PriceAmount: sdk.Float64(10),
            PriceCurrency: shared.CurrencyEnumUsd.ToPointer(),
            PricingType: shared.ItemPricingTypeEnumFixed.ToPointer(),
            ProductType: shared.ItemProductTypeEnumRegular.ToPointer(),
            Sku: sdk.String("11910345"),
            TaxIds: []string{
                "corporis",
            },
            UseDefaultTaxRates: sdk.Bool(false),
            Variations: []shared.ItemVariationsInput{
                shared.ItemVariationsInput{
                    Name: sdk.String("Variation"),
                    PresentAtAllLocations: sdk.Bool(false),
                    PriceAmount: sdk.Float64(10),
                    PriceCurrency: shared.CurrencyEnumUsd.ToPointer(),
                    PricingType: shared.ItemVariationsPricingTypeEnumFixed.ToPointer(),
                    Sequence: sdk.Float64(1),
                    Sku: sdk.String("11910345"),
                    Stockable: sdk.Bool(false),
                },
                shared.ItemVariationsInput{
                    Name: sdk.String("Variation"),
                    PresentAtAllLocations: sdk.Bool(false),
                    PriceAmount: sdk.Float64(10),
                    PriceCurrency: shared.CurrencyEnumUsd.ToPointer(),
                    PricingType: shared.ItemVariationsPricingTypeEnumFixed.ToPointer(),
                    Sequence: sdk.Float64(1),
                    Sku: sdk.String("11910345"),
                    Stockable: sdk.Bool(false),
                },
            },
        },
        ID: "71b5e6e1-3b99-4d48-8e1e-91e450ad2abd",
        Raw: sdk.Bool(false),
        XApideckAppID: "labore",
        XApideckConsumerID: "modi",
        XApideckServiceID: sdk.String("qui"),
    }, operations.ItemsUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateItemResponse != nil {
        // handle response
    }
}
```
