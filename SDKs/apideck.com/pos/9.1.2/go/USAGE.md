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
        Security: operations.ItemsAddSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.ItemsAddQueryParams{
            Raw: false,
        },
        Headers: operations.ItemsAddHeaders{
            XApideckAppID: "unde",
            XApideckConsumerID: "deserunt",
            XApideckServiceID: "porro",
        },
        Request: shared.ItemInput{
            Abbreviation: "Ch",
            AbsentAtLocationIds: []string{
                "id",
                "vero",
                "perspiciatis",
                "nulla",
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
                    },
                    Name: "facilis",
                },
                shared.ItemCategoriesInput{
                    ImageIds: []string{
                        "12345",
                        "12345",
                    },
                    Name: "iusto",
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
                "inventore",
                "sapiente",
                "enim",
                "eum",
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
    }

    ctx := context.Background()
    res, err := s.Items.ItemsAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateItemResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->