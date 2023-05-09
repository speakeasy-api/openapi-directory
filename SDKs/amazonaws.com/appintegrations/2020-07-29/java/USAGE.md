<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDataIntegrationRequest;
import org.openapis.openapi.models.operations.CreateDataIntegrationRequestBody;
import org.openapis.openapi.models.operations.CreateDataIntegrationRequestBodyFileConfiguration;
import org.openapis.openapi.models.operations.CreateDataIntegrationRequestBodyScheduleConfig;
import org.openapis.openapi.models.operations.CreateDataIntegrationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDataIntegrationRequest req = new CreateDataIntegrationRequest(                new CreateDataIntegrationRequestBody("provident", "distinctio",                 new CreateDataIntegrationRequestBodyScheduleConfig() {{
                                                firstExecutionFrom = "quibusdam";
                                                object = "unde";
                                                scheduleExpression = "nulla";
                                            }};, "corrupti") {{
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
                                }};;
                                objectConfiguration = new java.util.HashMap<String, java.util.HashMap<String, String[]>>() {{
                                    put("temporibus", new java.util.HashMap<String, String[]>() {{
                                        put("quis", new String[]{{
                                            add("deserunt"),
                                        }});
                                    }});
                                    put("perferendis", new java.util.HashMap<String, String[]>() {{
                                        put("repellendus", new String[]{{
                                            add("quo"),
                                            add("odit"),
                                            add("at"),
                                            add("at"),
                                        }});
                                        put("maiores", new String[]{{
                                            add("quod"),
                                            add("quod"),
                                        }});
                                    }});
                                    put("esse", new java.util.HashMap<String, String[]>() {{
                                        put("porro", new String[]{{
                                            add("dicta"),
                                            add("nam"),
                                            add("officia"),
                                        }});
                                        put("occaecati", new String[]{{
                                            add("deleniti"),
                                        }});
                                        put("hic", new String[]{{
                                            add("totam"),
                                            add("beatae"),
                                            add("commodi"),
                                            add("molestiae"),
                                        }});
                                    }});
                                    put("modi", new java.util.HashMap<String, String[]>() {{
                                        put("impedit", new String[]{{
                                            add("esse"),
                                            add("ipsum"),
                                            add("excepturi"),
                                        }});
                                    }});
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("perferendis", "ad");
                                }};
                            }};) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "iste";
                xAmzDate = "dolor";
                xAmzSecurityToken = "natus";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "hic";
            }};            

            CreateDataIntegrationResponse res = sdk.createDataIntegration(req);

            if (res.createDataIntegrationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->