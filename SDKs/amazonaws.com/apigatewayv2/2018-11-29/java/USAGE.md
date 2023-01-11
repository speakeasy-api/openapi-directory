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
                    xAmzAlgorithm = "ex";
                    xAmzContentSha256 = "iure";
                    xAmzCredential = "et";
                    xAmzDate = "quos";
                    xAmzSecurityToken = "et";
                    xAmzSignature = "explicabo";
                    xAmzSignedHeaders = "necessitatibus";
                }};
                request = new CreateApiRequestBody() {{
                    apiKeySelectionExpression = "veniam";
                    corsConfiguration = new CreateApiRequestBodyCorsConfiguration() {{
                        allowCredentials = new java.util.HashMap<String, Object>() {{
                            put("in", "odit");
                        }};
                        allowHeaders = new java.util.HashMap<String, Object>() {{
                            put("corporis", "tenetur");
                            put("esse", "similique");
                            put("mollitia", "id");
                        }};
                        allowMethods = new java.util.HashMap<String, Object>() {{
                            put("quam", "maiores");
                            put("totam", "iusto");
                            put("aperiam", "repellendus");
                        }};
                        allowOrigins = new java.util.HashMap<String, Object>() {{
                            put("eum", "earum");
                            put("et", "officia");
                        }};
                        exposeHeaders = new java.util.HashMap<String, Object>() {{
                            put("dolor", "quia");
                        }};
                        maxAge = new java.util.HashMap<String, Object>() {{
                            put("ea", "et");
                            put("expedita", "recusandae");
                        }};
                    }};
                    credentialsArn = "qui";
                    description = "qui";
                    disableExecuteApiEndpoint = false;
                    disableSchemaValidation = true;
                    name = "cupiditate";
                    protocolType = "WEBSOCKET";
                    routeKey = "saepe";
                    routeSelectionExpression = "sed";
                    tags = new java.util.HashMap<String, String>() {{
                        put("vel", "fugiat");
                        put("nesciunt", "et");
                        put("qui", "quis");
                    }};
                    target = "eligendi";
                    version = "velit";
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