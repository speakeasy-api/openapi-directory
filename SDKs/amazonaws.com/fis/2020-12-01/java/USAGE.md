<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateExperimentTemplateRequestBodyLogConfiguration;
import org.openapis.openapi.models.operations.CreateExperimentTemplateRequestBody;
import org.openapis.openapi.models.operations.CreateExperimentTemplateRequest;
import org.openapis.openapi.models.operations.CreateExperimentTemplateResponse;
import org.openapis.openapi.models.shared.CreateExperimentTemplateTargetInput;
import org.openapis.openapi.models.shared.ExperimentTemplateTargetInputFilter;
import org.openapis.openapi.models.shared.CreateExperimentTemplateStopConditionInput;
import org.openapis.openapi.models.shared.ExperimentTemplateS3LogConfigurationInput;
import org.openapis.openapi.models.shared.ExperimentTemplateCloudWatchLogsLogConfigurationInput;
import org.openapis.openapi.models.shared.CreateExperimentTemplateActionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateExperimentTemplateRequest req = new CreateExperimentTemplateRequest() {{
                requestBody = new CreateExperimentTemplateRequestBody() {{
                    actions = new java.util.HashMap<String, org.openapis.openapi.models.shared.CreateExperimentTemplateActionInput>() {{
                        put("provident", new CreateExperimentTemplateActionInput() {{
                            actionId = "distinctio";
                            description = "quibusdam";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("nulla", "corrupti");
                                put("illum", "vel");
                                put("error", "deserunt");
                            }};
                            startAfter = new String[]{{
                                add("iure"),
                                add("magnam"),
                            }};
                            targets = new java.util.HashMap<String, String>() {{
                                put("ipsa", "delectus");
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                            }};
                        }});
                        put("iusto", new CreateExperimentTemplateActionInput() {{
                            actionId = "excepturi";
                            description = "nisi";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("temporibus", "ab");
                                put("quis", "veritatis");
                                put("deserunt", "perferendis");
                                put("ipsam", "repellendus");
                            }};
                            startAfter = new String[]{{
                                add("quo"),
                                add("odit"),
                                add("at"),
                                add("at"),
                            }};
                            targets = new java.util.HashMap<String, String>() {{
                                put("molestiae", "quod");
                                put("quod", "esse");
                                put("totam", "porro");
                                put("dolorum", "dicta");
                            }};
                        }});
                        put("nam", new CreateExperimentTemplateActionInput() {{
                            actionId = "officia";
                            description = "occaecati";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("deleniti", "hic");
                            }};
                            startAfter = new String[]{{
                                add("totam"),
                                add("beatae"),
                                add("commodi"),
                                add("molestiae"),
                            }};
                            targets = new java.util.HashMap<String, String>() {{
                                put("qui", "impedit");
                                put("cum", "esse");
                            }};
                        }});
                    }};
                    clientToken = "ipsum";
                    description = "excepturi";
                    logConfiguration = new CreateExperimentTemplateRequestBodyLogConfiguration() {{
                        cloudWatchLogsConfiguration = new ExperimentTemplateCloudWatchLogsLogConfigurationInput() {{
                            logGroupArn = "aspernatur";
                        }};
                        logSchemaVersion = 18789;
                        s3Configuration = new ExperimentTemplateS3LogConfigurationInput() {{
                            bucketName = "ad";
                            prefix = "natus";
                        }};
                    }};
                    roleArn = "sed";
                    stopConditions = new org.openapis.openapi.models.shared.CreateExperimentTemplateStopConditionInput[]{{
                        add(new CreateExperimentTemplateStopConditionInput() {{
                            source = "dolor";
                            value = "natus";
                        }}),
                        add(new CreateExperimentTemplateStopConditionInput() {{
                            source = "laboriosam";
                            value = "hic";
                        }}),
                        add(new CreateExperimentTemplateStopConditionInput() {{
                            source = "saepe";
                            value = "fuga";
                        }}),
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("corporis", "iste");
                        put("iure", "saepe");
                    }};
                    targets = new java.util.HashMap<String, org.openapis.openapi.models.shared.CreateExperimentTemplateTargetInput>() {{
                        put("architecto", new CreateExperimentTemplateTargetInput() {{
                            filters = new org.openapis.openapi.models.shared.ExperimentTemplateTargetInputFilter[]{{
                                add(new ExperimentTemplateTargetInputFilter() {{
                                    path = "reiciendis";
                                    values = new String[]{{
                                        add("mollitia"),
                                        add("laborum"),
                                        add("dolores"),
                                    }};
                                }}),
                            }};
                            parameters = new java.util.HashMap<String, String>() {{
                                put("corporis", "explicabo");
                            }};
                            resourceArns = new String[]{{
                                add("enim"),
                                add("omnis"),
                                add("nemo"),
                                add("minima"),
                            }};
                            resourceTags = new java.util.HashMap<String, String>() {{
                                put("accusantium", "iure");
                                put("culpa", "doloribus");
                                put("sapiente", "architecto");
                            }};
                            resourceType = "mollitia";
                            selectionMode = "dolorem";
                        }});
                        put("culpa", new CreateExperimentTemplateTargetInput() {{
                            filters = new org.openapis.openapi.models.shared.ExperimentTemplateTargetInputFilter[]{{
                                add(new ExperimentTemplateTargetInputFilter() {{
                                    path = "repellat";
                                    values = new String[]{{
                                        add("occaecati"),
                                        add("numquam"),
                                        add("commodi"),
                                    }};
                                }}),
                            }};
                            parameters = new java.util.HashMap<String, String>() {{
                                put("molestiae", "velit");
                                put("error", "quia");
                            }};
                            resourceArns = new String[]{{
                                add("vitae"),
                                add("laborum"),
                            }};
                            resourceTags = new java.util.HashMap<String, String>() {{
                                put("enim", "odit");
                                put("quo", "sequi");
                                put("tenetur", "ipsam");
                            }};
                            resourceType = "id";
                            selectionMode = "possimus";
                        }});
                        put("aut", new CreateExperimentTemplateTargetInput() {{
                            filters = new org.openapis.openapi.models.shared.ExperimentTemplateTargetInputFilter[]{{
                                add(new ExperimentTemplateTargetInputFilter() {{
                                    path = "error";
                                    values = new String[]{{
                                        add("laborum"),
                                        add("quasi"),
                                        add("reiciendis"),
                                        add("voluptatibus"),
                                    }};
                                }}),
                            }};
                            parameters = new java.util.HashMap<String, String>() {{
                                put("nihil", "praesentium");
                                put("voluptatibus", "ipsa");
                                put("omnis", "voluptate");
                                put("cum", "perferendis");
                            }};
                            resourceArns = new String[]{{
                                add("reprehenderit"),
                            }};
                            resourceTags = new java.util.HashMap<String, String>() {{
                                put("maiores", "dicta");
                                put("corporis", "dolore");
                            }};
                            resourceType = "iusto";
                            selectionMode = "dicta";
                        }});
                    }};
                }};
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "commodi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "ipsum";
            }}            

            CreateExperimentTemplateResponse res = sdk.createExperimentTemplate(req);

            if (res.createExperimentTemplateResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->