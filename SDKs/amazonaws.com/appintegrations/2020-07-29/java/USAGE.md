<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateDataIntegrationHeaders;
import org.openapis.openapi.models.operations.CreateDataIntegrationRequestBodyFileConfiguration;
import org.openapis.openapi.models.operations.CreateDataIntegrationRequestBodyScheduleConfig;
import org.openapis.openapi.models.operations.CreateDataIntegrationRequestBody;
import org.openapis.openapi.models.operations.CreateDataIntegrationRequest;
import org.openapis.openapi.models.operations.CreateDataIntegrationResponse;

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

            CreateDataIntegrationRequest req = new CreateDataIntegrationRequest() {{
                headers = new CreateDataIntegrationHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateDataIntegrationRequestBody() {{
                    clientToken = "illum";
                    description = "vel";
                    fileConfiguration = new CreateDataIntegrationRequestBodyFileConfiguration() {{
                        filters = new java.util.HashMap<String, String[]>() {{
                            put("deserunt", new String[]{{
                                add("iure"),
                                add("magnam"),
                            }});
                            put("debitis", new String[]{{
                                add("delectus"),
                            }});
                            put("tempora", new String[]{{
                                add("molestiae"),
                                add("minus"),
                            }});
                        }};
                        folders = new String[]{{
                            add("voluptatum"),
                            add("iusto"),
                            add("excepturi"),
                            add("nisi"),
                        }};
                    }};
                    kmsKey = "recusandae";
                    name = "temporibus";
                    objectConfiguration = new java.util.HashMap<String, java.util.HashMap<String, String[]>>() {{
                        put("quis", new java.util.HashMap<String, String[]>() {{
                            put("deserunt", new String[]{{
                                add("ipsam"),
                            }});
                        }});
                    }};
                    scheduleConfig = new CreateDataIntegrationRequestBodyScheduleConfig() {{
                        firstExecutionFrom = "repellendus";
                        object = "sapiente";
                        scheduleExpression = "quo";
                    }};
                    sourceURI = "odit";
                    tags = new java.util.HashMap<String, String>() {{
                        put("at", "maiores");
                        put("molestiae", "quod");
                        put("quod", "esse");
                        put("totam", "porro");
                    }};
                }};
            }};            

            CreateDataIntegrationResponse res = sdk.createDataIntegration(req);

            if (res.createDataIntegrationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->