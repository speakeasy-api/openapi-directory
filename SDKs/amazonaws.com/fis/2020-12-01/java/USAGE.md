<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateExperimentTemplateHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateExperimentTemplateRequest req = new CreateExperimentTemplateRequest() {{
                headers = new CreateExperimentTemplateHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateExperimentTemplateRequestBody() {{
                    actions = new java.util.HashMap<String, org.openapis.openapi.models.shared.CreateExperimentTemplateActionInput>() {{
                        put("vel", new CreateExperimentTemplateActionInput() {{
                            actionId = "error";
                            description = "deserunt";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("iure", "magnam");
                                put("debitis", "ipsa");
                            }};
                            startAfter = new String[]{{
                                add("tempora"),
                                add("suscipit"),
                                add("molestiae"),
                                add("minus"),
                            }};
                            targets = new java.util.HashMap<String, String>() {{
                                put("voluptatum", "iusto");
                                put("excepturi", "nisi");
                                put("recusandae", "temporibus");
                                put("ab", "quis");
                            }};
                        }});
                        put("veritatis", new CreateExperimentTemplateActionInput() {{
                            actionId = "deserunt";
                            description = "perferendis";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("repellendus", "sapiente");
                                put("quo", "odit");
                            }};
                            startAfter = new String[]{{
                                add("at"),
                                add("maiores"),
                                add("molestiae"),
                                add("quod"),
                            }};
                            targets = new java.util.HashMap<String, String>() {{
                                put("esse", "totam");
                                put("porro", "dolorum");
                                put("dicta", "nam");
                                put("officia", "occaecati");
                            }};
                        }});
                        put("fugit", new CreateExperimentTemplateActionInput() {{
                            actionId = "deleniti";
                            description = "hic";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("totam", "beatae");
                                put("commodi", "molestiae");
                                put("modi", "qui");
                                put("impedit", "cum");
                            }};
                            startAfter = new String[]{{
                                add("ipsum"),
                                add("excepturi"),
                            }};
                            targets = new java.util.HashMap<String, String>() {{
                                put("perferendis", "ad");
                            }};
                        }});
                        put("natus", new CreateExperimentTemplateActionInput() {{
                            actionId = "sed";
                            description = "iste";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("natus", "laboriosam");
                            }};
                            startAfter = new String[]{{
                                add("saepe"),
                                add("fuga"),
                                add("in"),
                                add("corporis"),
                            }};
                            targets = new java.util.HashMap<String, String>() {{
                                put("iure", "saepe");
                                put("quidem", "architecto");
                                put("ipsa", "reiciendis");
                            }};
                        }});
                    }};
                    clientToken = "est";
                    description = "mollitia";
                    logConfiguration = new CreateExperimentTemplateRequestBodyLogConfiguration() {{
                        cloudWatchLogsConfiguration = new ExperimentTemplateCloudWatchLogsLogConfigurationInput() {{
                            logGroupArn = "laborum";
                        }};
                        logSchemaVersion = 170909;
                        s3Configuration = new ExperimentTemplateS3LogConfigurationInput() {{
                            bucketName = "dolorem";
                            prefix = "corporis";
                        }};
                    }};
                    roleArn = "explicabo";
                    stopConditions = new org.openapis.openapi.models.shared.CreateExperimentTemplateStopConditionInput[]{{
                        add(new CreateExperimentTemplateStopConditionInput() {{
                            source = "enim";
                            value = "omnis";
                        }}),
                        add(new CreateExperimentTemplateStopConditionInput() {{
                            source = "nemo";
                            value = "minima";
                        }}),
                        add(new CreateExperimentTemplateStopConditionInput() {{
                            source = "excepturi";
                            value = "accusantium";
                        }}),
                        add(new CreateExperimentTemplateStopConditionInput() {{
                            source = "iure";
                            value = "culpa";
                        }}),
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("sapiente", "architecto");
                        put("mollitia", "dolorem");
                        put("culpa", "consequuntur");
                        put("repellat", "mollitia");
                    }};
                    targets = new java.util.HashMap<String, org.openapis.openapi.models.shared.CreateExperimentTemplateTargetInput>() {{
                        put("numquam", new CreateExperimentTemplateTargetInput() {{
                            filters = new org.openapis.openapi.models.shared.ExperimentTemplateTargetInputFilter[]{{
                                add(new ExperimentTemplateTargetInputFilter() {{
                                    path = "quam";
                                    values = new String[]{{
                                        add("velit"),
                                        add("error"),
                                    }};
                                }}),
                                add(new ExperimentTemplateTargetInputFilter() {{
                                    path = "quia";
                                    values = new String[]{{
                                        add("vitae"),
                                        add("laborum"),
                                    }};
                                }}),
                            }};
                            parameters = new java.util.HashMap<String, String>() {{
                                put("enim", "odit");
                                put("quo", "sequi");
                                put("tenetur", "ipsam");
                            }};
                            resourceArns = new String[]{{
                                add("possimus"),
                                add("aut"),
                                add("quasi"),
                            }};
                            resourceTags = new java.util.HashMap<String, String>() {{
                                put("temporibus", "laborum");
                                put("quasi", "reiciendis");
                                put("voluptatibus", "vero");
                            }};
                            resourceType = "nihil";
                            selectionMode = "praesentium";
                        }});
                        put("voluptatibus", new CreateExperimentTemplateTargetInput() {{
                            filters = new org.openapis.openapi.models.shared.ExperimentTemplateTargetInputFilter[]{{
                                add(new ExperimentTemplateTargetInputFilter() {{
                                    path = "omnis";
                                    values = new String[]{{
                                        add("cum"),
                                        add("perferendis"),
                                    }};
                                }}),
                            }};
                            parameters = new java.util.HashMap<String, String>() {{
                                put("reprehenderit", "ut");
                            }};
                            resourceArns = new String[]{{
                                add("dicta"),
                                add("corporis"),
                                add("dolore"),
                                add("iusto"),
                            }};
                            resourceTags = new java.util.HashMap<String, String>() {{
                                put("harum", "enim");
                            }};
                            resourceType = "accusamus";
                            selectionMode = "commodi";
                        }});
                        put("repudiandae", new CreateExperimentTemplateTargetInput() {{
                            filters = new org.openapis.openapi.models.shared.ExperimentTemplateTargetInputFilter[]{{
                                add(new ExperimentTemplateTargetInputFilter() {{
                                    path = "ipsum";
                                    values = new String[]{{
                                        add("molestias"),
                                        add("excepturi"),
                                        add("pariatur"),
                                    }};
                                }}),
                            }};
                            parameters = new java.util.HashMap<String, String>() {{
                                put("praesentium", "rem");
                                put("voluptates", "quasi");
                            }};
                            resourceArns = new String[]{{
                                add("sint"),
                                add("veritatis"),
                                add("itaque"),
                                add("incidunt"),
                            }};
                            resourceTags = new java.util.HashMap<String, String>() {{
                                put("consequatur", "est");
                                put("quibusdam", "explicabo");
                            }};
                            resourceType = "deserunt";
                            selectionMode = "distinctio";
                        }});
                    }};
                }};
            }};            

            CreateExperimentTemplateResponse res = sdk.createExperimentTemplate(req);

            if (res.createExperimentTemplateResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->