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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new CreateEnvironmentRequestBody() {{
                    description = "voluptas";
                    federationMode = "FEDERATED";
                    federationParameters = new CreateEnvironmentRequestBodyFederationParameters() {{
                        applicationCallBackURL = "et";
                        attributeMap = new java.util.HashMap<String, String>() {{
                            put("rerum", "dicta");
                        }};
                        federationProviderName = "debitis";
                        federationURN = "voluptatum";
                        samlMetadataDocument = "et";
                        samlMetadataURL = "ut";
                    }};
                    kmsKeyId = "dolorem";
                    name = "et";
                    tags = new java.util.HashMap<String, String>() {{
                        put("iste", "vitae");
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