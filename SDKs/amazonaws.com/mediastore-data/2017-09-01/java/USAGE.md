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

            DeleteObjectRequest req = new DeleteObjectRequest() {{
                pathParams = new DeleteObjectPathParams() {{
                    path = "quibusdam";
                }};
                headers = new DeleteObjectHeaders() {{
                    xAmzAlgorithm = "nihil";
                    xAmzContentSha256 = "sint";
                    xAmzCredential = "dolorem";
                    xAmzDate = "porro";
                    xAmzSecurityToken = "nemo";
                    xAmzSignature = "ut";
                    xAmzSignedHeaders = "ut";
                }};
            }};

            DeleteObjectResponse res = sdk.deleteObject(req);

            if (res.deleteObjectResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->