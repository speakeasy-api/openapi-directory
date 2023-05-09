# items

### Available Operations

* [itemsAdd](#itemsadd) - Create Item
* [itemsAll](#itemsall) - List Items
* [itemsDelete](#itemsdelete) - Delete Item
* [itemsOne](#itemsone) - Get Item
* [itemsUpdate](#itemsupdate) - Update Item

## itemsAdd

Create Item

### Example Usage

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
                                    add("repellendus"),
                                    add("sapiente"),
                                }};
                                available = true;
                                availableForPickup = false;
                                availableOnline = false;
                                categories = new org.openapis.openapi.models.shared.ItemCategoriesInput[]{{
                                    add(new ItemCategoriesInput() {{
                                        imageIds = new String[]{{
                                            add("12345"),
                                        }};
                                        name = "Wilfred Wolff";
                                    }}),
                                    add(new ItemCategoriesInput() {{
                                        imageIds = new String[]{{
                                            add("12345"),
                                            add("12345"),
                                            add("12345"),
                                            add("12345"),
                                        }};
                                        name = "Deanna Sauer MD";
                                    }}),
                                    add(new ItemCategoriesInput() {{
                                        imageIds = new String[]{{
                                            add("12345"),
                                            add("12345"),
                                            add("12345"),
                                        }};
                                        name = "Wayne Lind";
                                    }}),
                                    add(new ItemCategoriesInput() {{
                                        imageIds = new String[]{{
                                            add("12345"),
                                            add("12345"),
                                            add("12345"),
                                        }};
                                        name = "Lucy Krajcik";
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
                                    add("esse"),
                                    add("ipsum"),
                                    add("excepturi"),
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
                            }};, "perferendis", "ad") {{
                raw = false;
                xApideckServiceId = "natus";
            }};            

            ItemsAddResponse res = sdk.items.itemsAdd(req, new ItemsAddSecurity("sed") {{
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

## itemsAll

List Items

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ItemsAllRequest;
import org.openapis.openapi.models.operations.ItemsAllResponse;
import org.openapis.openapi.models.operations.ItemsAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ItemsAllRequest req = new ItemsAllRequest("iste", "dolor") {{
                cursor = "natus";
                fields = "laboriosam";
                limit = 943749L;
                raw = false;
                xApideckServiceId = "saepe";
            }};            

            ItemsAllResponse res = sdk.items.itemsAll(req, new ItemsAllSecurity("fuga") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getItemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## itemsDelete

Delete Item

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ItemsDeleteRequest;
import org.openapis.openapi.models.operations.ItemsDeleteResponse;
import org.openapis.openapi.models.operations.ItemsDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ItemsDeleteRequest req = new ItemsDeleteRequest("in", "corporis", "iste") {{
                raw = false;
                xApideckServiceId = "iure";
            }};            

            ItemsDeleteResponse res = sdk.items.itemsDelete(req, new ItemsDeleteSecurity("saepe") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## itemsOne

Get Item

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ItemsOneRequest;
import org.openapis.openapi.models.operations.ItemsOneResponse;
import org.openapis.openapi.models.operations.ItemsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ItemsOneRequest req = new ItemsOneRequest("quidem", "architecto", "ipsa") {{
                fields = "reiciendis";
                raw = false;
                xApideckServiceId = "est";
            }};            

            ItemsOneResponse res = sdk.items.itemsOne(req, new ItemsOneSecurity("mollitia") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## itemsUpdate

Update Item

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ItemsUpdateRequest;
import org.openapis.openapi.models.operations.ItemsUpdateResponse;
import org.openapis.openapi.models.operations.ItemsUpdateSecurity;
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

            ItemsUpdateRequest req = new ItemsUpdateRequest(                new ItemInput("Cocoa") {{
                                abbreviation = "Ch";
                                absentAtLocationIds = new String[]{{
                                    add("dolores"),
                                    add("dolorem"),
                                    add("corporis"),
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
                                        name = "Guadalupe Hickle";
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
                                }};
                                presentAtAllLocations = false;
                                priceAmount = 10;
                                priceCurrency = CurrencyEnum.USD;
                                pricingType = ItemPricingTypeEnum.FIXED;
                                productType = ItemProductTypeEnum.REGULAR;
                                sku = "11910345";
                                taxIds = new String[]{{
                                    add("culpa"),
                                    add("doloribus"),
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
                            }};, "architecto", "mollitia", "dolorem") {{
                raw = false;
                xApideckServiceId = "culpa";
            }};            

            ItemsUpdateResponse res = sdk.items.itemsUpdate(req, new ItemsUpdateSecurity("consequuntur") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
