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

            AssignInstanceRequest req = new AssignInstanceRequest() {{
                headers = new AssignInstanceHeaders() {{
                    xAmzAlgorithm = "vel";
                    xAmzContentSha256 = "itaque";
                    xAmzCredential = "ut";
                    xAmzDate = "ut";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "aut";
                    xAmzSignedHeaders = "fuga";
                    xAmzTarget = "OpsWorks_20130218.AssignInstance";
                }};
                request = new AssignInstanceRequest() {{
                    instanceId = "repellendus";
                    layerIds = new String[]() {{
                        add("repudiandae"),
                        add("voluptates"),
                    }};
                }};
            }};

            AssignInstanceResponse res = sdk.assignInstance(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->