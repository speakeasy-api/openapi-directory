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

            GetAcceptReservedNodeExchangeRequest req = new GetAcceptReservedNodeExchangeRequest() {{
                queryParams = new GetAcceptReservedNodeExchangeQueryParams() {{
                    action = "AcceptReservedNodeExchange";
                    reservedNodeId = "voluptas";
                    targetReservedNodeOfferingId = "culpa";
                    version = "2012-12-01";
                }};
                headers = new GetAcceptReservedNodeExchangeHeaders() {{
                    xAmzAlgorithm = "consequuntur";
                    xAmzContentSha256 = "dolor";
                    xAmzCredential = "expedita";
                    xAmzDate = "voluptas";
                    xAmzSecurityToken = "fugit";
                    xAmzSignature = "et";
                    xAmzSignedHeaders = "nihil";
                }};
            }};

            GetAcceptReservedNodeExchangeResponse res = sdk.getAcceptReservedNodeExchange(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->