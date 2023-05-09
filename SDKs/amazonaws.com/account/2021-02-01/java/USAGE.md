<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAlternateContactRequest;
import org.openapis.openapi.models.operations.DeleteAlternateContactRequestBody;
import org.openapis.openapi.models.operations.DeleteAlternateContactRequestBodyAlternateContactTypeEnum;
import org.openapis.openapi.models.operations.DeleteAlternateContactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAlternateContactRequest req = new DeleteAlternateContactRequest(                new DeleteAlternateContactRequestBody(DeleteAlternateContactRequestBodyAlternateContactTypeEnum.OPERATIONS) {{
                                accountId = "distinctio";
                            }};) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            DeleteAlternateContactResponse res = sdk.deleteAlternateContact(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->