# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            ItemsAddRequest req = new ItemsAddRequest() {{
                security = new ItemsAddSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new ItemsAddQueryParams() {{
                    raw = false;
                }};
                headers = new ItemsAddHeaders() {{
                    xApideckAppId = "voluptas";
                    xApideckConsumerId = "dolorem";
                    xApideckServiceId = "placeat";
                }};
                request = new ItemInput() {{
                    abbreviation = "aut";
                    absentAtLocationIds = new String[]() {{
                        add("saepe"),
                    }};
                    available = true;
                    availableForPickup = true;
                    availableOnline = true;
                    categories = new Object[]() {{
                        add("iusto"),
                    }};
                    code = "quo";
                    cost = 96.199997;
                    deleted = false;
                    description = "enim";
                    hidden = true;
                    id = "nam";
                    idempotencyKey = "placeat";
                    modifierGroups = new Object[]() {{
                        add("eum"),
                        add("qui"),
                    }};
                    name = "et";
                    options = new Object[]() {{
                        add("ab"),
                        add("in"),
                    }};
                    presentAtAllLocations = false;
                    priceAmount = 70.099998;
                    priceCurrency = "AZN";
                    pricingType = "per_unit";
                    productType = "other";
                    sku = "aperiam";
                    taxIds = new String[]() {{
                        add("non"),
                        add("tenetur"),
                        add("quia"),
                    }};
                    variations = new Object[]() {{
                        add("iste"),
                        add("fuga"),
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

### Items

* `itemsAdd` - Create Item
* `itemsAll` - List Items
* `itemsDelete` - Delete Item
* `itemsOne` - Get Item
* `itemsUpdate` - Update Item

### Locations

* `locationsAdd` - Create Location
* `locationsAll` - List Locations
* `locationsDelete` - Delete Location
* `locationsOne` - Get Location
* `locationsUpdate` - Update Location

### Merchants

* `merchantsAdd` - Create Merchant
* `merchantsAll` - List Merchants
* `merchantsDelete` - Delete Merchant
* `merchantsOne` - Get Merchant
* `merchantsUpdate` - Update Merchant

### Modifier Groups

* `modifierGroupsAdd` - Create Modifier Group
* `modifierGroupsAll` - List Modifier Groups
* `modifierGroupsDelete` - Delete Modifier Group
* `modifierGroupsOne` - Get Modifier Group
* `modifierGroupsUpdate` - Update Modifier Group

### Modifiers

* `modifiersAdd` - Create Modifier
* `modifiersAll` - List Modifiers
* `modifiersDelete` - Delete Modifier
* `modifiersOne` - Get Modifier
* `modifiersUpdate` - Update Modifier

### Order Types

* `orderTypesAdd` - Create Order Type
* `orderTypesAll` - List Order Types
* `orderTypesDelete` - Delete Order Type
* `orderTypesOne` - Get Order Type
* `orderTypesUpdate` - Update Order Type

### Orders

* `ordersAdd` - Create Order
* `ordersAll` - List Orders
* `ordersDelete` - Delete Order
* `ordersOne` - Get Order
* `ordersPay` - Pay Order
* `ordersUpdate` - Update Order

### Payments

* `paymentsAdd` - Create Payment
* `paymentsAll` - List Payments
* `paymentsDelete` - Delete Payment
* `paymentsOne` - Get Payment
* `paymentsUpdate` - Update Payment

### Tenders

* `tendersAdd` - Create Tender
* `tendersAll` - List Tenders
* `tendersDelete` - Delete Tender
* `tendersOne` - Get Tender
* `tendersUpdate` - Update Tender

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
