<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateApiRequestBodyCorsConfiguration;
import org.openapis.openapi.models.operations.CreateApiRequestBodyProtocolTypeEnum;
import org.openapis.openapi.models.operations.CreateApiRequestBody;
import org.openapis.openapi.models.operations.CreateApiRequest;
import org.openapis.openapi.models.operations.CreateApiResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApiRequest req = new CreateApiRequest() {{
                requestBody = new CreateApiRequestBody() {{
                    apiKeySelectionExpression = "corrupti";
                    corsConfiguration = new CreateApiRequestBodyCorsConfiguration() {{
                        allowCredentials = false;
                        allowHeaders = new String[]{{
                            add("distinctio"),
                            add("quibusdam"),
                            add("unde"),
                        }};
                        allowMethods = new String[]{{
                            add("corrupti"),
                            add("illum"),
                            add("vel"),
                            add("error"),
                        }};
                        allowOrigins = new String[]{{
                            add("suscipit"),
                            add("iure"),
                            add("magnam"),
                        }};
                        exposeHeaders = new String[]{{
                            add("ipsa"),
                            add("delectus"),
                            add("tempora"),
                            add("suscipit"),
                        }};
                        maxAge = 477665;
                    }};
                    credentialsArn = "minus";
                    description = "placeat";
                    disableExecuteApiEndpoint = false;
                    disableSchemaValidation = false;
                    name = "voluptatum";
                    protocolType = "WEBSOCKET";
                    routeKey = "excepturi";
                    routeSelectionExpression = "nisi";
                    tags = new java.util.HashMap<String, String>() {{
                        put("temporibus", "ab");
                        put("quis", "veritatis");
                        put("deserunt", "perferendis");
                        put("ipsam", "repellendus");
                    }};
                    target = "sapiente";
                    version = "quo";
                }};
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "at";
                xAmzCredential = "at";
                xAmzDate = "maiores";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "quod";
            }}            

            CreateApiResponse res = sdk.createApi(req);

            if (res.createApiResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->