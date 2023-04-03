<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDataIntegrationRequest req = new CreateDataIntegrationRequest() {{
                requestBody = new CreateDataIntegrationRequestBody() {{
                    clientToken = "corrupti";
                    description = "provident";
                    fileConfiguration = new CreateDataIntegrationRequestBodyFileConfiguration() {{
                        filters = new java.util.HashMap<String, String[]>() {{
                            put("quibusdam", new String[]{{
                                add("nulla"),
                                add("corrupti"),
                                add("illum"),
                            }});
                            put("vel", new String[]{{
                                add("deserunt"),
                                add("suscipit"),
                                add("iure"),
                            }});
                            put("magnam", new String[]{{
                                add("ipsa"),
                                add("delectus"),
                                add("tempora"),
                                add("suscipit"),
                            }});
                        }};
                        folders = new String[]{{
                            add("minus"),
                            add("placeat"),
                        }};
                    }};
                    kmsKey = "voluptatum";
                    name = "iusto";
                    objectConfiguration = new java.util.HashMap<String, java.util.HashMap<String, String[]>>() {{
                        put("nisi", new java.util.HashMap<String, String[]>() {{
                            put("temporibus", new String[]{{
                                add("quis"),
                            }});
                            put("veritatis", new String[]{{
                                add("perferendis"),
                                add("ipsam"),
                                add("repellendus"),
                            }});
                            put("sapiente", new String[]{{
                                add("odit"),
                                add("at"),
                                add("at"),
                                add("maiores"),
                            }});
                            put("molestiae", new String[]{{
                                add("quod"),
                                add("esse"),
                                add("totam"),
                                add("porro"),
                            }});
                        }});
                        put("dolorum", new java.util.HashMap<String, String[]>() {{
                            put("nam", new String[]{{
                                add("occaecati"),
                                add("fugit"),
                                add("deleniti"),
                            }});
                        }});
                        put("hic", new java.util.HashMap<String, String[]>() {{
                            put("totam", new String[]{{
                                add("commodi"),
                            }});
                            put("molestiae", new String[]{{
                                add("qui"),
                                add("impedit"),
                            }});
                            put("cum", new String[]{{
                                add("ipsum"),
                                add("excepturi"),
                            }});
                            put("aspernatur", new String[]{{
                                add("ad"),
                            }});
                        }});
                    }};
                    scheduleConfig = new CreateDataIntegrationRequestBodyScheduleConfig() {{
                        firstExecutionFrom = "natus";
                        object = "sed";
                        scheduleExpression = "iste";
                    }};
                    sourceURI = "dolor";
                    tags = new java.util.HashMap<String, String>() {{
                        put("laboriosam", "hic");
                        put("saepe", "fuga");
                        put("in", "corporis");
                    }};
                }};
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "iure";
                xAmzCredential = "saepe";
                xAmzDate = "quidem";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "reiciendis";
            }}            

            CreateDataIntegrationResponse res = sdk.createDataIntegration(req);

            if (res.createDataIntegrationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->