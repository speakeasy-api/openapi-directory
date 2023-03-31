<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateApiHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateApiRequest req = new CreateApiRequest() {{
                headers = new CreateApiHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateApiRequestBody() {{
                    apiKeySelectionExpression = "illum";
                    corsConfiguration = new CreateApiRequestBodyCorsConfiguration() {{
                        allowCredentials = false;
                        allowHeaders = new String[]{{
                            add("error"),
                            add("deserunt"),
                        }};
                        allowMethods = new String[]{{
                            add("iure"),
                            add("magnam"),
                        }};
                        allowOrigins = new String[]{{
                            add("ipsa"),
                            add("delectus"),
                            add("tempora"),
                            add("suscipit"),
                        }};
                        exposeHeaders = new String[]{{
                            add("minus"),
                            add("placeat"),
                        }};
                        maxAge = 528895;
                    }};
                    credentialsArn = "iusto";
                    description = "excepturi";
                    disableExecuteApiEndpoint = false;
                    disableSchemaValidation = false;
                    name = "nisi";
                    protocolType = "HTTP";
                    routeKey = "temporibus";
                    routeSelectionExpression = "ab";
                    tags = new java.util.HashMap<String, String>() {{
                        put("veritatis", "deserunt");
                        put("perferendis", "ipsam");
                    }};
                    target = "repellendus";
                    version = "sapiente";
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