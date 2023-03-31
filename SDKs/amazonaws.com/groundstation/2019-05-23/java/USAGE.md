<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CancelContactPathParams;
import org.openapis.openapi.models.operations.CancelContactHeaders;
import org.openapis.openapi.models.operations.CancelContactRequest;
import org.openapis.openapi.models.operations.CancelContactResponse;

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

            CancelContactRequest req = new CancelContactRequest() {{
                pathParams = new CancelContactPathParams() {{
                    contactId = "corrupti";
                }};
                headers = new CancelContactHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
            }};            

            CancelContactResponse res = sdk.cancelContact(req);

            if (res.contactIdResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->