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

            CreateByteMatchSetRequest req = new CreateByteMatchSetRequest() {{
                headers = new CreateByteMatchSetHeaders() {{
                    xAmzAlgorithm = "nesciunt";
                    xAmzContentSha256 = "velit";
                    xAmzCredential = "at";
                    xAmzDate = "repellat";
                    xAmzSecurityToken = "placeat";
                    xAmzSignature = "accusantium";
                    xAmzSignedHeaders = "sunt";
                    xAmzTarget = "AWSWAF_20150824.CreateByteMatchSet";
                }};
                request = new CreateByteMatchSetRequest() {{
                    changeToken = "et";
                    name = "id";
                }};
            }};

            CreateByteMatchSetResponse res = sdk.createByteMatchSet(req);

            if (res.createByteMatchSetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->