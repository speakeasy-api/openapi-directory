# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/pos/9.1.2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Items

* `ItemsAdd` - Create Item
* `ItemsAll` - List Items
* `ItemsDelete` - Delete Item
* `ItemsOne` - Get Item
* `ItemsUpdate` - Update Item

### Locations

* `LocationsAdd` - Create Location
* `LocationsAll` - List Locations
* `LocationsDelete` - Delete Location
* `LocationsOne` - Get Location
* `LocationsUpdate` - Update Location

### Merchants

* `MerchantsAdd` - Create Merchant
* `MerchantsAll` - List Merchants
* `MerchantsDelete` - Delete Merchant
* `MerchantsOne` - Get Merchant
* `MerchantsUpdate` - Update Merchant

### ModifierGroups

* `ModifierGroupsAdd` - Create Modifier Group
* `ModifierGroupsAll` - List Modifier Groups
* `ModifierGroupsDelete` - Delete Modifier Group
* `ModifierGroupsOne` - Get Modifier Group
* `ModifierGroupsUpdate` - Update Modifier Group

### Modifiers

* `ModifiersAdd` - Create Modifier
* `ModifiersAll` - List Modifiers
* `ModifiersDelete` - Delete Modifier
* `ModifiersOne` - Get Modifier
* `ModifiersUpdate` - Update Modifier

### OrderTypes

* `OrderTypesAdd` - Create Order Type
* `OrderTypesAll` - List Order Types
* `OrderTypesDelete` - Delete Order Type
* `OrderTypesOne` - Get Order Type
* `OrderTypesUpdate` - Update Order Type

### Orders

* `OrdersAdd` - Create Order
* `OrdersAll` - List Orders
* `OrdersDelete` - Delete Order
* `OrdersOne` - Get Order
* `OrdersPay` - Pay Order
* `OrdersUpdate` - Update Order

### Payments

* `PaymentsAdd` - Create Payment
* `PaymentsAll` - List Payments
* `PaymentsDelete` - Delete Payment
* `PaymentsOne` - Get Payment
* `PaymentsUpdate` - Update Payment

### Tenders

* `TendersAdd` - Create Tender
* `TendersAll` - List Tenders
* `TendersDelete` - Delete Tender
* `TendersOne` - Get Tender
* `TendersUpdate` - Update Tender
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
