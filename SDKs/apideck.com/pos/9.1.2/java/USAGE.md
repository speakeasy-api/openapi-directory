<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ItemsAddSecurity;
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ItemsAddRequest req = new ItemsAddRequest() {{
                itemInput = new ItemInput() {{
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
                            name = "corrupti";
                        }}),
                        add(new ItemCategoriesInput() {{
                            imageIds = new String[]{{
                                add("12345"),
                                add("12345"),
                                add("12345"),
                                add("12345"),
                            }};
                            name = "vel";
                        }}),
                        add(new ItemCategoriesInput() {{
                            imageIds = new String[]{{
                                add("12345"),
                                add("12345"),
                                add("12345"),
                            }};
                            name = "deserunt";
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
                        add("magnam"),
                        add("debitis"),
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
                    }};
                }};
                raw = false;
                xApideckAppId = "delectus";
                xApideckConsumerId = "tempora";
                xApideckServiceId = "suscipit";
            }}            

            ItemsAddResponse res = sdk.items.itemsAdd(req, new ItemsAddSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createItemResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->