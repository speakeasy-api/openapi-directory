<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddProfileKeyRequestBody;
import org.openapis.openapi.models.operations.AddProfileKeyRequest;
import org.openapis.openapi.models.operations.AddProfileKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddProfileKeyRequest req = new AddProfileKeyRequest() {{
                domainName = "corrupti";
                requestBody = new AddProfileKeyRequestBody() {{
                    keyName = "provident";
                    profileId = "distinctio";
                    values = new String[]{{
                        add("unde"),
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
                    }};
                }};
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "error";
                xAmzCredential = "deserunt";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "iure";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "debitis";
            }}            

            AddProfileKeyResponse res = sdk.addProfileKey(req);

            if (res.addProfileKeyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->