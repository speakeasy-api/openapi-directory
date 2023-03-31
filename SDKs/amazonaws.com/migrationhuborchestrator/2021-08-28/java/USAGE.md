<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateWorkflowHeaders;
import org.openapis.openapi.models.operations.CreateWorkflowRequestBody;
import org.openapis.openapi.models.operations.CreateWorkflowRequest;
import org.openapis.openapi.models.operations.CreateWorkflowResponse;
import org.openapis.openapi.models.shared.StepInput;

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

            CreateWorkflowRequest req = new CreateWorkflowRequest() {{
                headers = new CreateWorkflowHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateWorkflowRequestBody() {{
                    applicationConfigurationId = "illum";
                    description = "vel";
                    inputParameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.StepInput>() {{
                        put("deserunt", new StepInput() {{
                            integerValue = 384382;
                            listOfStringsValue = new String[]{{
                                add("magnam"),
                                add("debitis"),
                            }};
                            mapOfStringValue = new java.util.HashMap<String, String>() {{
                                put("delectus", "tempora");
                            }};
                            stringValue = "suscipit";
                        }});
                        put("molestiae", new StepInput() {{
                            integerValue = 791725;
                            listOfStringsValue = new String[]{{
                                add("voluptatum"),
                                add("iusto"),
                                add("excepturi"),
                                add("nisi"),
                            }};
                            mapOfStringValue = new java.util.HashMap<String, String>() {{
                                put("temporibus", "ab");
                                put("quis", "veritatis");
                                put("deserunt", "perferendis");
                                put("ipsam", "repellendus");
                            }};
                            stringValue = "sapiente";
                        }});
                        put("quo", new StepInput() {{
                            integerValue = 140350;
                            listOfStringsValue = new String[]{{
                                add("at"),
                                add("maiores"),
                                add("molestiae"),
                                add("quod"),
                            }};
                            mapOfStringValue = new java.util.HashMap<String, String>() {{
                                put("esse", "totam");
                                put("porro", "dolorum");
                                put("dicta", "nam");
                                put("officia", "occaecati");
                            }};
                            stringValue = "fugit";
                        }});
                    }};
                    name = "deleniti";
                    stepTargets = new String[]{{
                        add("optio"),
                        add("totam"),
                        add("beatae"),
                        add("commodi"),
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("modi", "qui");
                        put("impedit", "cum");
                    }};
                    templateId = "esse";
                }};
            }};            

            CreateWorkflowResponse res = sdk.createWorkflow(req);

            if (res.createMigrationWorkflowResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->