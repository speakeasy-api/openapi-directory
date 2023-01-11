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

            CreateEnvironmentRequest req = new CreateEnvironmentRequest() {{
                headers = new CreateEnvironmentHeaders() {{
                    xAmzAlgorithm = "vitae";
                    xAmzContentSha256 = "nulla";
                    xAmzCredential = "voluptatem";
                    xAmzDate = "dolor";
                    xAmzSecurityToken = "expedita";
                    xAmzSignature = "ea";
                    xAmzSignedHeaders = "iure";
                }};
                request = new CreateEnvironmentRequestBody() {{
                    description = "ratione";
                    federationMode = "FEDERATED";
                    federationParameters = new CreateEnvironmentRequestBodyFederationParameters() {{
                        applicationCallBackURL = "sed";
                        attributeMap = new java.util.HashMap<String, String>() {{
                            put("quae", "officia");
                            put("aperiam", "molestiae");
                        }};
                        federationProviderName = "voluptatem";
                        federationURN = "impedit";
                        samlMetadataDocument = "debitis";
                        samlMetadataURL = "quae";
                    }};
                    kmsKeyId = "rerum";
                    name = "ut";
                    tags = new java.util.HashMap<String, String>() {{
                        put("excepturi", "et");
                        put("asperiores", "fugit");
                        put("perspiciatis", "ratione");
                    }};
                }};
            }};

            CreateEnvironmentResponse res = sdk.createEnvironment(req);

            if (res.createEnvironmentResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->