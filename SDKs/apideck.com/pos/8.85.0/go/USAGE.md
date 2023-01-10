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
            Raw: false,
        },
        Headers: operations.ItemsAddHeaders{
            XApideckAppID: "voluptas",
            XApideckConsumerID: "dolorem",
            XApideckServiceID: "placeat",
        },
        Request: shared.ItemInput{
            Abbreviation: "aut",
            AbsentAtLocationIds: []string{
                "saepe",
            },
            Available: true,
            AvailableForPickup: true,
            AvailableOnline: true,
            Categories: []interface{}{
                "iusto",
            },
            Code: "quo",
            Cost: 96.199997,
            Deleted: false,
            Description: "enim",
            Hidden: true,
            ID: "nam",
            IdempotencyKey: "placeat",
            ModifierGroups: []interface{}{
                "eum",
                "qui",
            },
            Name: "et",
            Options: []interface{}{
                "ab",
                "in",
            },
            PresentAtAllLocations: false,
            PriceAmount: 70.099998,
            PriceCurrency: "AZN",
            PricingType: "per_unit",
            ProductType: "other",
            Sku: "aperiam",
            TaxIds: []string{
                "non",
                "tenetur",
                "quia",
            },
            Variations: []interface{}{
                "iste",
                "fuga",
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