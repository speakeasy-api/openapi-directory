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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new CreateOrderRequestBody() {{
                    lineItems = new openapisdk.models.shared.LineItemRequest[]() {{
                        add(new LineItemRequest() {{
                            catalogItemId = "fugit";
                            quantity = 1543572285742637646;
                        }}),
                        add(new LineItemRequest() {{
                            catalogItemId = "nihil";
                            quantity = 8325060299420976708;
                        }}),
                        add(new LineItemRequest() {{
                            catalogItemId = "dicta";
                            quantity = 2518412263346885298;
                        }}),
                    }};
                    outpostIdentifier = "voluptatum";
                    paymentOption = "ALL_UPFRONT";
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