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

            CreateApplicationRequest req = new CreateApplicationRequest() {{
                headers = new CreateApplicationHeaders() {{
                    xAmzAlgorithm = "vel";
                    xAmzContentSha256 = "tempora";
                    xAmzCredential = "atque";
                    xAmzDate = "repellendus";
                    xAmzSecurityToken = "ut";
                    xAmzSignature = "possimus";
                    xAmzSignedHeaders = "cumque";
                }};
                request = new CreateApplicationRequestBody() {{
                    applicationDescription = "odit";
                    applicationName = "tempore";
                    clientToken = "maiores";
                    roleArn = "dignissimos";
                    tags = new java.util.HashMap<String, String>() {{
                        put("voluptatum", "neque");
                        put("corporis", "quas");
                        put("autem", "qui");
                    }};
                }};
            }};

            CreateApplicationResponse res = sdk.createApplication(req);

            if (res.createApplicationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->