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
                    domainName = "sit";
                }};
                headers = new AddProfileKeyHeaders() {{
                    xAmzAlgorithm = "voluptas";
                    xAmzContentSha256 = "culpa";
                    xAmzCredential = "expedita";
                    xAmzDate = "consequuntur";
                    xAmzSecurityToken = "dolor";
                    xAmzSignature = "expedita";
                    xAmzSignedHeaders = "voluptas";
                }};
                request = new AddProfileKeyRequestBody() {{
                    keyName = "fugit";
                    profileId = "et";
                    values = new String[]() {{
                        add("rerum"),
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