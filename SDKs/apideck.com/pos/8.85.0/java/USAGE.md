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
                    xApideckConsumerId = "culpa";
                    xApideckServiceId = "expedita";
                }};
                request = new ItemInput() {{
                    abbreviation = "consequuntur";
                    absentAtLocationIds = new String[]() {{
                        add("expedita"),
                        add("voluptas"),
                    }};
                    available = true;
                    availableForPickup = false;
                    availableOnline = true;
                    categories = new Object[]() {{
                        add("dicta"),
                        add("debitis"),
                        add("voluptatum"),
                    }};
                    code = "et";
                    cost = 11.100000;
                    deleted = false;
                    description = "voluptate";
                    hidden = true;
                    id = "vitae";
                    idempotencyKey = "totam";
                    modifierGroups = new Object[]() {{
                        add("illum"),
                    }};
                    name = "debitis";
                    options = new Object[]() {{
                        add("odio"),
                        add("dolore"),
                    }};
                    presentAtAllLocations = false;
                    priceAmount = 57.099998;
                    priceCurrency = "UGX";
                    pricingType = "fixed";
                    productType = "regular";
                    sku = "est";
                    taxIds = new String[]() {{
                        add("odit"),
                        add("non"),
                        add("voluptas"),
                    }};
                    variations = new Object[]() {{
                        add("aut"),
                        add("illo"),
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