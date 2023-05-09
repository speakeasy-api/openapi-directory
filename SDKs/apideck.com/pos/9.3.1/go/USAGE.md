<!-- Start SDK Example Usage -->
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
                "provident",
                "distinctio",
                "quibusdam",
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
                    Name: sdk.String("Dallas Kassulke"),
                },
                shared.ItemCategoriesInput{
                    ImageIds: []string{
                        "12345",
                        "12345",
                    },
                    Name: sdk.String("Dr. Valerie Toy"),
                },
                shared.ItemCategoriesInput{
                    ImageIds: []string{
                        "12345",
                        "12345",
                    },
                    Name: sdk.String("Alexandra Schulist"),
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
            },
            PresentAtAllLocations: sdk.Bool(false),
            PriceAmount: sdk.Float64(10),
            PriceCurrency: shared.CurrencyEnumUsd.ToPointer(),
            PricingType: shared.ItemPricingTypeEnumFixed.ToPointer(),
            ProductType: shared.ItemProductTypeEnumRegular.ToPointer(),
            Sku: sdk.String("11910345"),
            TaxIds: []string{
                "recusandae",
                "temporibus",
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
            },
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "quis",
        XApideckConsumerID: "veritatis",
        XApideckServiceID: sdk.String("deserunt"),
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
<!-- End SDK Example Usage -->