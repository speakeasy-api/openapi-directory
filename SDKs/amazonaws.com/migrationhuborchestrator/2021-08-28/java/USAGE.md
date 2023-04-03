<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateWorkflowRequestBody;
import org.openapis.openapi.models.operations.CreateWorkflowRequest;
import org.openapis.openapi.models.operations.CreateWorkflowResponse;
import org.openapis.openapi.models.shared.StepInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorkflowRequest req = new CreateWorkflowRequest() {{
                requestBody = new CreateWorkflowRequestBody() {{
                    applicationConfigurationId = "corrupti";
                    description = "provident";
                    inputParameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.StepInput>() {{
                        put("quibusdam", new StepInput() {{
                            integerValue = 602763;
                            listOfStringsValue = new String[]{{
                                add("corrupti"),
                                add("illum"),
                                add("vel"),
                                add("error"),
                            }};
                            mapOfStringValue = new java.util.HashMap<String, String>() {{
                                put("suscipit", "iure");
                                put("magnam", "debitis");
                                put("ipsa", "delectus");
                            }};
                            stringValue = "tempora";
                        }});
                        put("suscipit", new StepInput() {{
                            integerValue = 477665;
                            listOfStringsValue = new String[]{{
                                add("placeat"),
                                add("voluptatum"),
                                add("iusto"),
                                add("excepturi"),
                            }};
                            mapOfStringValue = new java.util.HashMap<String, String>() {{
                                put("recusandae", "temporibus");
                                put("ab", "quis");
                            }};
                            stringValue = "veritatis";
                        }});
                        put("deserunt", new StepInput() {{
                            integerValue = 20218;
                            listOfStringsValue = new String[]{{
                                add("repellendus"),
                                add("sapiente"),
                            }};
                            mapOfStringValue = new java.util.HashMap<String, String>() {{
                                put("odit", "at");
                                put("at", "maiores");
                                put("molestiae", "quod");
                                put("quod", "esse");
                            }};
                            stringValue = "totam";
                        }});
                    }};
                    name = "porro";
                    stepTargets = new String[]{{
                        add("dicta"),
                        add("nam"),
                        add("officia"),
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("fugit", "deleniti");
                        put("hic", "optio");
                        put("totam", "beatae");
                    }};
                    templateId = "commodi";
                }};
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "impedit";
                xAmzSecurityToken = "cum";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "ipsum";
            }}            

            CreateWorkflowResponse res = sdk.createWorkflow(req);

            if (res.createMigrationWorkflowResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->