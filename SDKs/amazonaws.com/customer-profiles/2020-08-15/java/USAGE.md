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

            AddProfileKeyRequest req = new AddProfileKeyRequest() {{
                pathParams = new AddProfileKeyPathParams() {{
                    domainName = "rem";
                }};
                headers = new AddProfileKeyHeaders() {{
                    xAmzAlgorithm = "laudantium";
                    xAmzContentSha256 = "corporis";
                    xAmzCredential = "qui";
                    xAmzDate = "adipisci";
                    xAmzSecurityToken = "qui";
                    xAmzSignature = "iste";
                    xAmzSignedHeaders = "minima";
                }};
                request = new AddProfileKeyRequestBody() {{
                    keyName = "blanditiis";
                    profileId = "sit";
                    values = new String[]() {{
                        add("earum"),
                        add("fugiat"),
                        add("dolores"),
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