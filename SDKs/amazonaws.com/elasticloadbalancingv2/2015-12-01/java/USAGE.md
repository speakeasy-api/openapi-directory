<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GETDeleteListenerActionEnum;
import org.openapis.openapi.models.operations.GETDeleteListenerVersionEnum;
import org.openapis.openapi.models.operations.GETDeleteListenerRequest;
import org.openapis.openapi.models.operations.GETDeleteListenerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteListenerRequest req = new GETDeleteListenerRequest() {{
                action = "DeleteListener";
                listenerArn = "corrupti";
                version = "2015-12-01";
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
            }}            

            GETDeleteListenerResponse res = sdk.getDeleteListener(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->