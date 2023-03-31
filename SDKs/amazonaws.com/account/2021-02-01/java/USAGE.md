<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteAlternateContactHeaders;
import org.openapis.openapi.models.operations.DeleteAlternateContactRequestBodyAlternateContactTypeEnum;
import org.openapis.openapi.models.operations.DeleteAlternateContactRequestBody;
import org.openapis.openapi.models.operations.DeleteAlternateContactRequest;
import org.openapis.openapi.models.operations.DeleteAlternateContactResponse;

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

            DeleteAlternateContactRequest req = new DeleteAlternateContactRequest() {{
                headers = new DeleteAlternateContactHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new DeleteAlternateContactRequestBody() {{
                    accountId = "illum";
                    alternateContactType = "OPERATIONS";
                }};
            }};            

            DeleteAlternateContactResponse res = sdk.deleteAlternateContact(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->