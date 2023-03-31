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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ItemsAddSecurity;
import org.openapis.openapi.models.operations.ItemsAddQueryParams;
import org.openapis.openapi.models.operations.ItemsAddHeaders;
import org.openapis.openapi.models.operations.ItemsAddRequest;
import org.openapis.openapi.models.operations.ItemsAddResponse;
import org.openapis.openapi.models.shared.ItemCategoriesInput;
import org.openapis.openapi.models.shared.ItemOptions;
import org.openapis.openapi.models.shared.ItemPricingTypeEnum;
import org.openapis.openapi.models.shared.ItemProductTypeEnum;
import org.openapis.openapi.models.shared.ItemVariationsPricingTypeEnum;
import org.openapis.openapi.models.shared.ItemVariationsInput;
import org.openapis.openapi.models.shared.ItemInput;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ItemsAddRequest req = new ItemsAddRequest() {{
                security = new ItemsAddSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new ItemsAddQueryParams() {{
                    raw = false;
                }};
                headers = new ItemsAddHeaders() {{
                    xApideckAppId = "corrupti";
                    xApideckConsumerId = "provident";
                    xApideckServiceId = "distinctio";
                }};
                request = new ItemInput() {{
                    abbreviation = "Ch";
                    absentAtLocationIds = new String[]{{
                        add("unde"),
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
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
                            }};
                            name = "deserunt";
                        }}),
                        add(new ItemCategoriesInput() {{
                            imageIds = new String[]{{
                                add("12345"),
                                add("12345"),
                            }};
                            name = "iure";
                        }}),
                    }};
                    code = "11910345";
                    cost = 2;
                    deleted = true;
                    description = "Hot Chocolate";
                    hidden = true;
                    id = "#cocoa";
                    idempotencyKey = "random_string";
                    name = "Cocoa";
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
                    }};
                    presentAtAllLocations = false;
                    priceAmount = 10;
                    priceCurrency = "USD";
                    pricingType = "fixed";
                    productType = "regular";
                    sku = "11910345";
                    taxIds = new String[]{{
                        add("ipsa"),
                        add("delectus"),
                        add("tempora"),
                        add("suscipit"),
                    }};
                    variations = new org.openapis.openapi.models.shared.ItemVariationsInput[]{{
                        add(new ItemVariationsInput() {{
                            name = "Variation";
                            presentAtAllLocations = false;
                            priceAmount = 10;
                            priceCurrency = "USD";
                            pricingType = "fixed";
                            sequence = 1;
                            sku = "11910345";
                            stockable = false;
                        }}),
                        add(new ItemVariationsInput() {{
                            name = "Variation";
                            presentAtAllLocations = false;
                            priceAmount = 10;
                            priceCurrency = "USD";
                            pricingType = "fixed";
                            sequence = 1;
                            sku = "11910345";
                            stockable = false;
                        }}),
                    }};
                }};
            }};            

            ItemsAddResponse res = sdk.items.itemsAdd(req);

            if (res.createItemResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### items

* `itemsAdd` - Create Item
* `itemsAll` - List Items
* `itemsDelete` - Delete Item
* `itemsOne` - Get Item
* `itemsUpdate` - Update Item

### locations

* `locationsAdd` - Create Location
* `locationsAll` - List Locations
* `locationsDelete` - Delete Location
* `locationsOne` - Get Location
* `locationsUpdate` - Update Location

### merchants

* `merchantsAdd` - Create Merchant
* `merchantsAll` - List Merchants
* `merchantsDelete` - Delete Merchant
* `merchantsOne` - Get Merchant
* `merchantsUpdate` - Update Merchant

### modifierGroups

* `modifierGroupsAdd` - Create Modifier Group
* `modifierGroupsAll` - List Modifier Groups
* `modifierGroupsDelete` - Delete Modifier Group
* `modifierGroupsOne` - Get Modifier Group
* `modifierGroupsUpdate` - Update Modifier Group

### modifiers

* `modifiersAdd` - Create Modifier
* `modifiersAll` - List Modifiers
* `modifiersDelete` - Delete Modifier
* `modifiersOne` - Get Modifier
* `modifiersUpdate` - Update Modifier

### orderTypes

* `orderTypesAdd` - Create Order Type
* `orderTypesAll` - List Order Types
* `orderTypesDelete` - Delete Order Type
* `orderTypesOne` - Get Order Type
* `orderTypesUpdate` - Update Order Type

### orders

* `ordersAdd` - Create Order
* `ordersAll` - List Orders
* `ordersDelete` - Delete Order
* `ordersOne` - Get Order
* `ordersPay` - Pay Order
* `ordersUpdate` - Update Order

### payments

* `paymentsAdd` - Create Payment
* `paymentsAll` - List Payments
* `paymentsDelete` - Delete Payment
* `paymentsOne` - Get Payment
* `paymentsUpdate` - Update Payment

### tenders

* `tendersAdd` - Create Tender
* `tendersAll` - List Tenders
* `tendersDelete` - Delete Tender
* `tendersOne` - Get Tender
* `tendersUpdate` - Update Tender
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
