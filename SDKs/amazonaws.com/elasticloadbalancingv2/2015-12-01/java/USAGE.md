<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteListenerActionEnum;
import org.openapis.openapi.models.operations.GETDeleteListenerRequest;
import org.openapis.openapi.models.operations.GETDeleteListenerResponse;
import org.openapis.openapi.models.operations.GETDeleteListenerVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteListenerRequest req = new GETDeleteListenerRequest(GETDeleteListenerActionEnum.DELETE_LISTENER, "provident", GETDeleteListenerVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            GETDeleteListenerResponse res = sdk.getDeleteListener(req);

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