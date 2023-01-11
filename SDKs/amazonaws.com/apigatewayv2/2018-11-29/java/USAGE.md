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

            CreateApiRequest req = new CreateApiRequest() {{
                headers = new CreateApiHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new CreateApiRequestBody() {{
                    apiKeySelectionExpression = "voluptas";
                    corsConfiguration = new CreateApiRequestBodyCorsConfiguration() {{
                        allowCredentials = new java.util.HashMap<String, Object>() {{
                            put("et", "nihil");
                        }};
                        allowHeaders = new java.util.HashMap<String, Object>() {{
                            put("dicta", "debitis");
                            put("voluptatum", "et");
                            put("ut", "dolorem");
                        }};
                        allowMethods = new java.util.HashMap<String, Object>() {{
                            put("voluptate", "iste");
                            put("vitae", "totam");
                        }};
                        allowOrigins = new java.util.HashMap<String, Object>() {{
                            put("illum", "debitis");
                        }};
                        exposeHeaders = new java.util.HashMap<String, Object>() {{
                            put("odio", "dolore");
                            put("id", "aspernatur");
                        }};
                        maxAge = new java.util.HashMap<String, Object>() {{
                            put("totam", "commodi");
                            put("quis", "est");
                            put("aut", "odit");
                        }};
                    }};
                    credentialsArn = "non";
                    description = "voluptas";
                    disableExecuteApiEndpoint = true;
                    disableSchemaValidation = false;
                    name = "illo";
                    protocolType = "WEBSOCKET";
                    routeKey = "officiis";
                    routeSelectionExpression = "autem";
                    tags = new java.util.HashMap<String, String>() {{
                        put("nobis", "odio");
                    }};
                    target = "qui";
                    version = "recusandae";
                }};
            }};

            CreateApiResponse res = sdk.createApi(req);

            if (res.createApiResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->