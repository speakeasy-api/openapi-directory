<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAcceptReservedNodeExchangeActionEnum;
import org.openapis.openapi.models.operations.GETAcceptReservedNodeExchangeRequest;
import org.openapis.openapi.models.operations.GETAcceptReservedNodeExchangeResponse;
import org.openapis.openapi.models.operations.GETAcceptReservedNodeExchangeVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAcceptReservedNodeExchangeRequest req = new GETAcceptReservedNodeExchangeRequest(GETAcceptReservedNodeExchangeActionEnum.ACCEPT_RESERVED_NODE_EXCHANGE, "provident", "distinctio", GETAcceptReservedNodeExchangeVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            GETAcceptReservedNodeExchangeResponse res = sdk.getAcceptReservedNodeExchange(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->