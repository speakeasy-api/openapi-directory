<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApiRequest;
import org.openapis.openapi.models.operations.CreateApiRequestBody;
import org.openapis.openapi.models.operations.CreateApiRequestBodyCorsConfiguration;
import org.openapis.openapi.models.operations.CreateApiRequestBodyProtocolTypeEnum;
import org.openapis.openapi.models.operations.CreateApiResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApiRequest req = new CreateApiRequest(                new CreateApiRequestBody("provident", CreateApiRequestBodyProtocolTypeEnum.HTTP) {{
                                apiKeySelectionExpression = "quibusdam";
                                corsConfiguration = new CreateApiRequestBodyCorsConfiguration() {{
                                    allowCredentials = false;
                                    allowHeaders = new String[]{{
                                        add("nulla"),
                                        add("corrupti"),
                                        add("illum"),
                                    }};
                                    allowMethods = new String[]{{
                                        add("error"),
                                        add("deserunt"),
                                    }};
                                    allowOrigins = new String[]{{
                                        add("iure"),
                                        add("magnam"),
                                    }};
                                    exposeHeaders = new String[]{{
                                        add("ipsa"),
                                        add("delectus"),
                                        add("tempora"),
                                        add("suscipit"),
                                    }};
                                    maxAge = 477665L;
                                }};;
                                credentialsArn = "minus";
                                description = "placeat";
                                disableExecuteApiEndpoint = false;
                                disableSchemaValidation = false;
                                routeKey = "voluptatum";
                                routeSelectionExpression = "iusto";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("nisi", "recusandae");
                                    put("temporibus", "ab");
                                    put("quis", "veritatis");
                                }};
                                target = "deserunt";
                                version = "perferendis";
                            }};) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "sapiente";
                xAmzDate = "quo";
                xAmzSecurityToken = "odit";
                xAmzSignature = "at";
                xAmzSignedHeaders = "at";
            }};            

            CreateApiResponse res = sdk.createApi(req);

            if (res.createApiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->