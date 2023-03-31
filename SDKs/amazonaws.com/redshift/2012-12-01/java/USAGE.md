<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GETAcceptReservedNodeExchangeActionEnum;
import org.openapis.openapi.models.operations.GETAcceptReservedNodeExchangeVersionEnum;
import org.openapis.openapi.models.operations.GETAcceptReservedNodeExchangeQueryParams;
import org.openapis.openapi.models.operations.GETAcceptReservedNodeExchangeHeaders;
import org.openapis.openapi.models.operations.GETAcceptReservedNodeExchangeRequest;
import org.openapis.openapi.models.operations.GETAcceptReservedNodeExchangeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GETAcceptReservedNodeExchangeRequest req = new GETAcceptReservedNodeExchangeRequest() {{
                queryParams = new GETAcceptReservedNodeExchangeQueryParams() {{
                    action = "AcceptReservedNodeExchange";
                    reservedNodeId = "corrupti";
                    targetReservedNodeOfferingId = "provident";
                    version = "2012-12-01";
                }};
                headers = new GETAcceptReservedNodeExchangeHeaders() {{
                    xAmzAlgorithm = "distinctio";
                    xAmzContentSha256 = "quibusdam";
                    xAmzCredential = "unde";
                    xAmzDate = "nulla";
                    xAmzSecurityToken = "corrupti";
                    xAmzSignature = "illum";
                    xAmzSignedHeaders = "vel";
                }};
            }};            

            GETAcceptReservedNodeExchangeResponse res = sdk.getAcceptReservedNodeExchange(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->