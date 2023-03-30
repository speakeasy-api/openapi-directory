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

<!-- Start SDK Available Operations -->
## SDK Available Operations


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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
