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