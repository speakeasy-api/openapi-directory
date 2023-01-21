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
            XApideckConsumerID: "culpa",
            XApideckServiceID: "expedita",
        },
        Request: shared.ItemInput{
            Abbreviation: "consequuntur",
            AbsentAtLocationIds: []string{
                "expedita",
                "voluptas",
            },
            Available: true,
            AvailableForPickup: false,
            AvailableOnline: true,
            Categories: []interface{}{
                "dicta",
                "debitis",
                "voluptatum",
            },
            Code: "et",
            Cost: 11.100000,
            Deleted: false,
            Description: "voluptate",
            Hidden: true,
            ID: "vitae",
            IdempotencyKey: "totam",
            ModifierGroups: []interface{}{
                "illum",
            },
            Name: "debitis",
            Options: []interface{}{
                "odio",
                "dolore",
            },
            PresentAtAllLocations: false,
            PriceAmount: 57.099998,
            PriceCurrency: "UGX",
            PricingType: "fixed",
            ProductType: "regular",
            Sku: "est",
            TaxIds: []string{
                "odit",
                "non",
                "voluptas",
            },
            Variations: []interface{}{
                "aut",
                "illo",
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