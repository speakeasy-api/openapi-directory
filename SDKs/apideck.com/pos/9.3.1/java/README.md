# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ItemsAddRequest;
import org.openapis.openapi.models.operations.ItemsAddResponse;
import org.openapis.openapi.models.operations.ItemsAddSecurity;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.ItemCategoriesInput;
import org.openapis.openapi.models.shared.ItemInput;
import org.openapis.openapi.models.shared.ItemOptions;
import org.openapis.openapi.models.shared.ItemPricingTypeEnum;
import org.openapis.openapi.models.shared.ItemProductTypeEnum;
import org.openapis.openapi.models.shared.ItemVariationsInput;
import org.openapis.openapi.models.shared.ItemVariationsPricingTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ItemsAddRequest req = new ItemsAddRequest(                new ItemInput("Cocoa") {{
                                abbreviation = "Ch";
                                absentAtLocationIds = new String[]{{
                                    add("provident"),
                                    add("distinctio"),
                                    add("quibusdam"),
                                }};
                                available = true;
                                availableForPickup = false;
                                availableOnline = false;
                                categories = new org.openapis.openapi.models.shared.ItemCategoriesInput[]{{
                                    add(new ItemCategoriesInput() {{
                                        imageIds = new String[]{{
                                            add("12345"),
                                            add("12345"),
                                            add("12345"),
                                            add("12345"),
                                        }};
                                        name = "Dallas Kassulke";
                                    }}),
                                    add(new ItemCategoriesInput() {{
                                        imageIds = new String[]{{
                                            add("12345"),
                                            add("12345"),
                                        }};
                                        name = "Dr. Valerie Toy";
                                    }}),
                                    add(new ItemCategoriesInput() {{
                                        imageIds = new String[]{{
                                            add("12345"),
                                            add("12345"),
                                        }};
                                        name = "Alexandra Schulist";
                                    }}),
                                }};
                                code = "11910345";
                                cost = 2;
                                deleted = true;
                                description = "Hot Chocolate";
                                hidden = true;
                                id = "#cocoa";
                                idempotencyKey = "random_string";
                                isRevenue = false;
                                options = new org.openapis.openapi.models.shared.ItemOptions[]{{
                                    add(new ItemOptions() {{
                                        attributeId = "12345";
                                        id = "12345";
                                        name = "Option 1";
                                    }}),
                                    add(new ItemOptions() {{
                                        attributeId = "12345";
                                        id = "12345";
                                        name = "Option 1";
                                    }}),
                                    add(new ItemOptions() {{
                                        attributeId = "12345";
                                        id = "12345";
                                        name = "Option 1";
                                    }}),
                                }};
                                presentAtAllLocations = false;
                                priceAmount = 10;
                                priceCurrency = CurrencyEnum.USD;
                                pricingType = ItemPricingTypeEnum.FIXED;
                                productType = ItemProductTypeEnum.REGULAR;
                                sku = "11910345";
                                taxIds = new String[]{{
                                    add("recusandae"),
                                    add("temporibus"),
                                }};
                                useDefaultTaxRates = false;
                                variations = new org.openapis.openapi.models.shared.ItemVariationsInput[]{{
                                    add(new ItemVariationsInput() {{
                                        name = "Variation";
                                        presentAtAllLocations = false;
                                        priceAmount = 10;
                                        priceCurrency = CurrencyEnum.USD;
                                        pricingType = ItemVariationsPricingTypeEnum.FIXED;
                                        sequence = 1;
                                        sku = "11910345";
                                        stockable = false;
                                    }}),
                                }};
                            }};, "quis", "veritatis") {{
                raw = false;
                xApideckServiceId = "deserunt";
            }};            

            ItemsAddResponse res = sdk.items.itemsAdd(req, new ItemsAddSecurity("perferendis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [items](docs/items/README.md)

* [itemsAdd](docs/items/README.md#itemsadd) - Create Item
* [itemsAll](docs/items/README.md#itemsall) - List Items
* [itemsDelete](docs/items/README.md#itemsdelete) - Delete Item
* [itemsOne](docs/items/README.md#itemsone) - Get Item
* [itemsUpdate](docs/items/README.md#itemsupdate) - Update Item

### [locations](docs/locations/README.md)

* [locationsAdd](docs/locations/README.md#locationsadd) - Create Location
* [locationsAll](docs/locations/README.md#locationsall) - List Locations
* [locationsDelete](docs/locations/README.md#locationsdelete) - Delete Location
* [locationsOne](docs/locations/README.md#locationsone) - Get Location
* [locationsUpdate](docs/locations/README.md#locationsupdate) - Update Location

### [merchants](docs/merchants/README.md)

* [merchantsAdd](docs/merchants/README.md#merchantsadd) - Create Merchant
* [merchantsAll](docs/merchants/README.md#merchantsall) - List Merchants
* [merchantsDelete](docs/merchants/README.md#merchantsdelete) - Delete Merchant
* [merchantsOne](docs/merchants/README.md#merchantsone) - Get Merchant
* [merchantsUpdate](docs/merchants/README.md#merchantsupdate) - Update Merchant

### [modifierGroups](docs/modifiergroups/README.md)

* [modifierGroupsAdd](docs/modifiergroups/README.md#modifiergroupsadd) - Create Modifier Group
* [modifierGroupsAll](docs/modifiergroups/README.md#modifiergroupsall) - List Modifier Groups
* [modifierGroupsDelete](docs/modifiergroups/README.md#modifiergroupsdelete) - Delete Modifier Group
* [modifierGroupsOne](docs/modifiergroups/README.md#modifiergroupsone) - Get Modifier Group
* [modifierGroupsUpdate](docs/modifiergroups/README.md#modifiergroupsupdate) - Update Modifier Group

### [modifiers](docs/modifiers/README.md)

* [modifiersAdd](docs/modifiers/README.md#modifiersadd) - Create Modifier
* [modifiersAll](docs/modifiers/README.md#modifiersall) - List Modifiers
* [modifiersDelete](docs/modifiers/README.md#modifiersdelete) - Delete Modifier
* [modifiersOne](docs/modifiers/README.md#modifiersone) - Get Modifier
* [modifiersUpdate](docs/modifiers/README.md#modifiersupdate) - Update Modifier

### [orderTypes](docs/ordertypes/README.md)

* [orderTypesAdd](docs/ordertypes/README.md#ordertypesadd) - Create Order Type
* [orderTypesAll](docs/ordertypes/README.md#ordertypesall) - List Order Types
* [orderTypesDelete](docs/ordertypes/README.md#ordertypesdelete) - Delete Order Type
* [orderTypesOne](docs/ordertypes/README.md#ordertypesone) - Get Order Type
* [orderTypesUpdate](docs/ordertypes/README.md#ordertypesupdate) - Update Order Type

### [orders](docs/orders/README.md)

* [ordersAdd](docs/orders/README.md#ordersadd) - Create Order
* [ordersAll](docs/orders/README.md#ordersall) - List Orders
* [ordersDelete](docs/orders/README.md#ordersdelete) - Delete Order
* [ordersOne](docs/orders/README.md#ordersone) - Get Order
* [ordersPay](docs/orders/README.md#orderspay) - Pay Order
* [ordersUpdate](docs/orders/README.md#ordersupdate) - Update Order

### [payments](docs/payments/README.md)

* [paymentsAdd](docs/payments/README.md#paymentsadd) - Create Payment
* [paymentsAll](docs/payments/README.md#paymentsall) - List Payments
* [paymentsDelete](docs/payments/README.md#paymentsdelete) - Delete Payment
* [paymentsOne](docs/payments/README.md#paymentsone) - Get Payment
* [paymentsUpdate](docs/payments/README.md#paymentsupdate) - Update Payment

### [tenders](docs/tenders/README.md)

* [tendersAdd](docs/tenders/README.md#tendersadd) - Create Tender
* [tendersAll](docs/tenders/README.md#tendersall) - List Tenders
* [tendersDelete](docs/tenders/README.md#tendersdelete) - Delete Tender
* [tendersOne](docs/tenders/README.md#tendersone) - Get Tender
* [tendersUpdate](docs/tenders/README.md#tendersupdate) - Update Tender
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
