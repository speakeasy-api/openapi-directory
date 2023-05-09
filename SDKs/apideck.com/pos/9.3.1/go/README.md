# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/pos/9.3.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Items](docs/items/README.md)

* [ItemsAdd](docs/items/README.md#itemsadd) - Create Item
* [ItemsAll](docs/items/README.md#itemsall) - List Items
* [ItemsDelete](docs/items/README.md#itemsdelete) - Delete Item
* [ItemsOne](docs/items/README.md#itemsone) - Get Item
* [ItemsUpdate](docs/items/README.md#itemsupdate) - Update Item

### [Locations](docs/locations/README.md)

* [LocationsAdd](docs/locations/README.md#locationsadd) - Create Location
* [LocationsAll](docs/locations/README.md#locationsall) - List Locations
* [LocationsDelete](docs/locations/README.md#locationsdelete) - Delete Location
* [LocationsOne](docs/locations/README.md#locationsone) - Get Location
* [LocationsUpdate](docs/locations/README.md#locationsupdate) - Update Location

### [Merchants](docs/merchants/README.md)

* [MerchantsAdd](docs/merchants/README.md#merchantsadd) - Create Merchant
* [MerchantsAll](docs/merchants/README.md#merchantsall) - List Merchants
* [MerchantsDelete](docs/merchants/README.md#merchantsdelete) - Delete Merchant
* [MerchantsOne](docs/merchants/README.md#merchantsone) - Get Merchant
* [MerchantsUpdate](docs/merchants/README.md#merchantsupdate) - Update Merchant

### [ModifierGroups](docs/modifiergroups/README.md)

* [ModifierGroupsAdd](docs/modifiergroups/README.md#modifiergroupsadd) - Create Modifier Group
* [ModifierGroupsAll](docs/modifiergroups/README.md#modifiergroupsall) - List Modifier Groups
* [ModifierGroupsDelete](docs/modifiergroups/README.md#modifiergroupsdelete) - Delete Modifier Group
* [ModifierGroupsOne](docs/modifiergroups/README.md#modifiergroupsone) - Get Modifier Group
* [ModifierGroupsUpdate](docs/modifiergroups/README.md#modifiergroupsupdate) - Update Modifier Group

### [Modifiers](docs/modifiers/README.md)

* [ModifiersAdd](docs/modifiers/README.md#modifiersadd) - Create Modifier
* [ModifiersAll](docs/modifiers/README.md#modifiersall) - List Modifiers
* [ModifiersDelete](docs/modifiers/README.md#modifiersdelete) - Delete Modifier
* [ModifiersOne](docs/modifiers/README.md#modifiersone) - Get Modifier
* [ModifiersUpdate](docs/modifiers/README.md#modifiersupdate) - Update Modifier

### [OrderTypes](docs/ordertypes/README.md)

* [OrderTypesAdd](docs/ordertypes/README.md#ordertypesadd) - Create Order Type
* [OrderTypesAll](docs/ordertypes/README.md#ordertypesall) - List Order Types
* [OrderTypesDelete](docs/ordertypes/README.md#ordertypesdelete) - Delete Order Type
* [OrderTypesOne](docs/ordertypes/README.md#ordertypesone) - Get Order Type
* [OrderTypesUpdate](docs/ordertypes/README.md#ordertypesupdate) - Update Order Type

### [Orders](docs/orders/README.md)

* [OrdersAdd](docs/orders/README.md#ordersadd) - Create Order
* [OrdersAll](docs/orders/README.md#ordersall) - List Orders
* [OrdersDelete](docs/orders/README.md#ordersdelete) - Delete Order
* [OrdersOne](docs/orders/README.md#ordersone) - Get Order
* [OrdersPay](docs/orders/README.md#orderspay) - Pay Order
* [OrdersUpdate](docs/orders/README.md#ordersupdate) - Update Order

### [Payments](docs/payments/README.md)

* [PaymentsAdd](docs/payments/README.md#paymentsadd) - Create Payment
* [PaymentsAll](docs/payments/README.md#paymentsall) - List Payments
* [PaymentsDelete](docs/payments/README.md#paymentsdelete) - Delete Payment
* [PaymentsOne](docs/payments/README.md#paymentsone) - Get Payment
* [PaymentsUpdate](docs/payments/README.md#paymentsupdate) - Update Payment

### [Tenders](docs/tenders/README.md)

* [TendersAdd](docs/tenders/README.md#tendersadd) - Create Tender
* [TendersAll](docs/tenders/README.md#tendersall) - List Tenders
* [TendersDelete](docs/tenders/README.md#tendersdelete) - Delete Tender
* [TendersOne](docs/tenders/README.md#tendersone) - Get Tender
* [TendersUpdate](docs/tenders/README.md#tendersupdate) - Update Tender
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
