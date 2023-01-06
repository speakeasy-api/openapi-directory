<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.ItemsAddRequest{
        Security: operations.ItemsAddSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.ItemsAddQueryParams{
            Raw: true,
        },
        Headers: operations.ItemsAddHeaders{
            XApideckAppID: "animi",
            XApideckConsumerID: "saepe",
            XApideckServiceID: "harum",
        },
        Request: shared.ItemInput{
            Abbreviation: "animi",
            AbsentAtLocationIds: []string{
                "necessitatibus",
                "optio",
            },
            Available: false,
            AvailableForPickup: true,
            AvailableOnline: false,
            Categories: []interface{}{
                "ex",
                "adipisci",
            },
            Code: "ipsum",
            Cost: 84.099998,
            Deleted: false,
            Description: "sed",
            Hidden: false,
            ID: "saepe",
            IdempotencyKey: "atque",
            ModifierGroups: []interface{}{
                "quo",
                "facere",
            },
            Name: "perferendis",
            Options: []interface{}{
                "assumenda",
            },
            PresentAtAllLocations: true,
            PriceAmount: 33.099998,
            PriceCurrency: "AFN",
            PricingType: "fixed",
            ProductType: "regular",
            Sku: "ullam",
            TaxIds: []string{
                "laudantium",
            },
            Variations: []interface{}{
                "dolor",
            },
        },
    }
    
    res, err := s.Items.ItemsAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateItemResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->