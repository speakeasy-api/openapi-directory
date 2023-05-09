<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateExperimentTemplateRequest;
import org.openapis.openapi.models.operations.CreateExperimentTemplateRequestBody;
import org.openapis.openapi.models.operations.CreateExperimentTemplateRequestBodyLogConfiguration;
import org.openapis.openapi.models.operations.CreateExperimentTemplateResponse;
import org.openapis.openapi.models.shared.CreateExperimentTemplateActionInput;
import org.openapis.openapi.models.shared.CreateExperimentTemplateStopConditionInput;
import org.openapis.openapi.models.shared.CreateExperimentTemplateTargetInput;
import org.openapis.openapi.models.shared.ExperimentTemplateCloudWatchLogsLogConfigurationInput;
import org.openapis.openapi.models.shared.ExperimentTemplateS3LogConfigurationInput;
import org.openapis.openapi.models.shared.ExperimentTemplateTargetInputFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateExperimentTemplateRequest req = new CreateExperimentTemplateRequest(                new CreateExperimentTemplateRequestBody(                new java.util.HashMap<String, org.openapis.openapi.models.shared.CreateExperimentTemplateActionInput>() {{
                                                put("distinctio", new CreateExperimentTemplateActionInput("excepturi") {{
                                                    actionId = "quibusdam";
                                                    description = "unde";
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("corrupti", "illum");
                                                        put("vel", "error");
                                                        put("deserunt", "suscipit");
                                                        put("iure", "magnam");
                                                    }};
                                                    startAfter = new String[]{{
                                                        add("ipsa"),
                                                        add("delectus"),
                                                        add("tempora"),
                                                        add("suscipit"),
                                                    }};
                                                    targets = new java.util.HashMap<String, String>() {{
                                                        put("minus", "placeat");
                                                        put("voluptatum", "iusto");
                                                    }};
                                                }});
                                                put("nisi", new CreateExperimentTemplateActionInput("esse") {{
                                                    actionId = "recusandae";
                                                    description = "temporibus";
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("quis", "veritatis");
                                                    }};
                                                    startAfter = new String[]{{
                                                        add("perferendis"),
                                                        add("ipsam"),
                                                        add("repellendus"),
                                                    }};
                                                    targets = new java.util.HashMap<String, String>() {{
                                                        put("quo", "odit");
                                                        put("at", "at");
                                                        put("maiores", "molestiae");
                                                        put("quod", "quod");
                                                    }};
                                                }});
                                                put("totam", new CreateExperimentTemplateActionInput("esse") {{
                                                    actionId = "porro";
                                                    description = "dolorum";
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("nam", "officia");
                                                    }};
                                                    startAfter = new String[]{{
                                                        add("fugit"),
                                                        add("deleniti"),
                                                        add("hic"),
                                                    }};
                                                    targets = new java.util.HashMap<String, String>() {{
                                                        put("totam", "beatae");
                                                        put("commodi", "molestiae");
                                                        put("modi", "qui");
                                                        put("impedit", "cum");
                                                    }};
                                                }});
                                            }}, "ipsum", "excepturi", "aspernatur",                 new org.openapis.openapi.models.shared.CreateExperimentTemplateStopConditionInput[]{{
                                                add(new CreateExperimentTemplateStopConditionInput("sed") {{
                                                    source = "ad";
                                                    value = "natus";
                                                }}),
                                            }}) {{
                                logConfiguration = new CreateExperimentTemplateRequestBodyLogConfiguration() {{
                                    cloudWatchLogsConfiguration = new ExperimentTemplateCloudWatchLogsLogConfigurationInput("iste");;
                                    logSchemaVersion = 222321L;
                                    s3Configuration = new ExperimentTemplateS3LogConfigurationInput("natus") {{
                                        prefix = "laboriosam";
                                    }};;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("saepe", "fuga");
                                    put("in", "corporis");
                                    put("iste", "iure");
                                    put("saepe", "quidem");
                                }};
                                targets = new java.util.HashMap<String, org.openapis.openapi.models.shared.CreateExperimentTemplateTargetInput>() {{
                                    put("ipsa", new CreateExperimentTemplateTargetInput("quasi", "reiciendis") {{
                                        filters = new org.openapis.openapi.models.shared.ExperimentTemplateTargetInputFilter[]{{
                                            add(new ExperimentTemplateTargetInputFilter("corporis",                 new String[]{{
                                                                add("nobis"),
                                                            }}) {{
                                                path = "est";
                                                values = new String[]{{
                                                    add("laborum"),
                                                    add("dolores"),
                                                    add("dolorem"),
                                                }};
                                            }}),
                                            add(new ExperimentTemplateTargetInputFilter("accusantium",                 new String[]{{
                                                                add("culpa"),
                                                                add("doloribus"),
                                                            }}) {{
                                                path = "enim";
                                                values = new String[]{{
                                                    add("nemo"),
                                                    add("minima"),
                                                    add("excepturi"),
                                                }};
                                            }}),
                                            add(new ExperimentTemplateTargetInputFilter("dolorem",                 new String[]{{
                                                                add("consequuntur"),
                                                                add("repellat"),
                                                                add("mollitia"),
                                                            }}) {{
                                                path = "sapiente";
                                                values = new String[]{{
                                                    add("mollitia"),
                                                }};
                                            }}),
                                            add(new ExperimentTemplateTargetInputFilter("molestiae",                 new String[]{{
                                                                add("error"),
                                                            }}) {{
                                                path = "occaecati";
                                                values = new String[]{{
                                                    add("commodi"),
                                                    add("quam"),
                                                }};
                                            }}),
                                        }};
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("quis", "vitae");
                                        }};
                                        resourceArns = new String[]{{
                                            add("animi"),
                                            add("enim"),
                                            add("odit"),
                                        }};
                                        resourceTags = new java.util.HashMap<String, String>() {{
                                            put("sequi", "tenetur");
                                            put("ipsam", "id");
                                            put("possimus", "aut");
                                            put("quasi", "error");
                                        }};
                                        resourceType = "temporibus";
                                        selectionMode = "laborum";
                                    }});
                                }};
                            }};) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nihil";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "omnis";
            }};            

            CreateExperimentTemplateResponse res = sdk.createExperimentTemplate(req);

            if (res.createExperimentTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->