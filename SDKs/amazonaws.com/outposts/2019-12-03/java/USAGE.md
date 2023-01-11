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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateOrderRequest req = new CreateOrderRequest() {{
                headers = new CreateOrderHeaders() {{
                    xAmzAlgorithm = "adipisci";
                    xAmzContentSha256 = "ipsum";
                    xAmzCredential = "placeat";
                    xAmzDate = "ut";
                    xAmzSecurityToken = "voluptas";
                    xAmzSignature = "sed";
                    xAmzSignedHeaders = "reprehenderit";
                }};
                request = new CreateOrderRequestBody() {{
                    lineItems = new openapisdk.models.shared.LineItemRequest[]() {{
                        add(new LineItemRequest() {{
                            catalogItemId = "atque";
                            quantity = 8567863616121245583;
                        }}),
                        add(new LineItemRequest() {{
                            catalogItemId = "quo";
                            quantity = 6900483483283279297;
                        }}),
                        add(new LineItemRequest() {{
                            catalogItemId = "perferendis";
                            quantity = 4098291302621142390;
                        }}),
                    }};
                    outpostIdentifier = "assumenda";
                    paymentOption = "NO_UPFRONT";
                    paymentTerm = "THREE_YEARS";
                }};
            }};

            CreateOrderResponse res = sdk.createOrder(req);

            if (res.createOrderOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->