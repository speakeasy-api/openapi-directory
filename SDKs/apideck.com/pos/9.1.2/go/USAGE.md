<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ItemsAddRequest{
        ItemInput: shared.ItemInput{
            Abbreviation: "Ch",
            AbsentAtLocationIds: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            Available: true,
            AvailableForPickup: false,
            AvailableOnline: false,
            Categories: []shared.ItemCategoriesInput{
                shared.ItemCategoriesInput{
                    ImageIds: []string{
                        "12345",
                        "12345",
                        "12345",
                        "12345",
                    },
                    Name: "corrupti",
                },
                shared.ItemCategoriesInput{
                    ImageIds: []string{
                        "12345",
                        "12345",
                        "12345",
                        "12345",
                    },
                    Name: "vel",
                },
                shared.ItemCategoriesInput{
                    ImageIds: []string{
                        "12345",
                        "12345",
                        "12345",
                    },
                    Name: "deserunt",
                },
            },
            Code: "11910345",
            Cost: 2,
            Deleted: true,
            Description: "Hot Chocolate",
            Hidden: true,
            ID: "#cocoa",
            IdempotencyKey: "random_string",
            Name: "Cocoa",
            Options: []shared.ItemOptions{
                shared.ItemOptions{
                    AttributeID: "12345",
                    ID: "12345",
                    Name: "Option 1",
                },
                shared.ItemOptions{
                    AttributeID: "12345",
                    ID: "12345",
                    Name: "Option 1",
                },
            },
            PresentAtAllLocations: false,
            PriceAmount: 10,
            PriceCurrency: "USD",
            PricingType: "fixed",
            ProductType: "regular",
            Sku: "11910345",
            TaxIds: []string{
                "magnam",
                "debitis",
            },
            Variations: []shared.ItemVariationsInput{
                shared.ItemVariationsInput{
                    Name: "Variation",
                    PresentAtAllLocations: false,
                    PriceAmount: 10,
                    PriceCurrency: "USD",
                    PricingType: "fixed",
                    Sequence: 1,
                    Sku: "11910345",
                    Stockable: false,
                },
            },
        },
        Raw: false,
        XApideckAppID: "delectus",
        XApideckConsumerID: "tempora",
        XApideckServiceID: "suscipit",
    }

    ctx := context.Background()
    res, err := s.Items.ItemsAdd(ctx, req, operations.ItemsAddSecurity{
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