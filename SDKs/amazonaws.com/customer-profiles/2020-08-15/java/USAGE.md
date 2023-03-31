<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddProfileKeyPathParams;
import org.openapis.openapi.models.operations.AddProfileKeyHeaders;
import org.openapis.openapi.models.operations.AddProfileKeyRequestBody;
import org.openapis.openapi.models.operations.AddProfileKeyRequest;
import org.openapis.openapi.models.operations.AddProfileKeyResponse;

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

            AddProfileKeyRequest req = new AddProfileKeyRequest() {{
                pathParams = new AddProfileKeyPathParams() {{
                    domainName = "corrupti";
                }};
                headers = new AddProfileKeyHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
                request = new AddProfileKeyRequestBody() {{
                    keyName = "vel";
                    profileId = "error";
                    values = new String[]{{
                        add("suscipit"),
                        add("iure"),
                        add("magnam"),
                    }};
                }};
            }};            

            AddProfileKeyResponse res = sdk.addProfileKey(req);

            if (res.addProfileKeyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->