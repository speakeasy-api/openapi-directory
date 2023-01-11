<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateExperimentTemplateRequest req = new CreateExperimentTemplateRequest() {{
                headers = new CreateExperimentTemplateHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new CreateExperimentTemplateRequestBody() {{
                    actions = new java.util.HashMap<String, openapisdk.models.shared.CreateExperimentTemplateActionInput>() {{
                        put("fugit", new CreateExperimentTemplateActionInput() {{
                            actionId = "et";
                            description = "nihil";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("dicta", "debitis");
                                put("voluptatum", "et");
                                put("ut", "dolorem");
                            }};
                            startAfter = new String[]() {{
                                add("voluptate"),
                                add("iste"),
                            }};
                            targets = new java.util.HashMap<String, String>() {{
                                put("totam", "dolores");
                            }};
                        }});
                        put("illum", new CreateExperimentTemplateActionInput() {{
                            actionId = "debitis";
                            description = "vel";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("dolore", "id");
                            }};
                            startAfter = new String[]() {{
                                add("accusantium"),
                            }};
                            targets = new java.util.HashMap<String, String>() {{
                                put("commodi", "quis");
                                put("est", "aut");
                                put("odit", "non");
                            }};
                        }});
                        put("voluptas", new CreateExperimentTemplateActionInput() {{
                            actionId = "omnis";
                            description = "aut";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("sed", "officiis");
                            }};
                            startAfter = new String[]() {{
                                add("consectetur"),
                                add("nobis"),
                            }};
                            targets = new java.util.HashMap<String, String>() {{
                                put("qui", "recusandae");
                            }};
                        }});
                    }};
                    clientToken = "at";
                    description = "ipsum";
                    roleArn = "eveniet";
                    stopConditions = new openapisdk.models.shared.CreateExperimentTemplateStopConditionInput[]() {{
                        add(new CreateExperimentTemplateStopConditionInput() {{
                            source = "sint";
                            value = "inventore";
                        }}),
                        add(new CreateExperimentTemplateStopConditionInput() {{
                            source = "ut";
                            value = "exercitationem";
                        }}),
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("reprehenderit", "tempore");
                        put("maiores", "incidunt");
                        put("dolor", "beatae");
                    }};
                    targets = new java.util.HashMap<String, openapisdk.models.shared.CreateExperimentTemplateTargetInput>() {{
                        put("in", new CreateExperimentTemplateTargetInput() {{
                            filters = new openapisdk.models.shared.ExperimentTemplateTargetInputFilter[]() {{
                                add(new ExperimentTemplateTargetInputFilter() {{
                                    path = "omnis";
                                    values = new String[]() {{
                                        add("ex"),
                                    }};
                                }}),
                                add(new ExperimentTemplateTargetInputFilter() {{
                                    path = "dolores";
                                    values = new String[]() {{
                                        add("vel"),
                                    }};
                                }}),
                                add(new ExperimentTemplateTargetInputFilter() {{
                                    path = "rerum";
                                    values = new String[]() {{
                                        add("voluptas"),
                                        add("quam"),
                                    }};
                                }}),
                            }};
                            resourceArns = new String[]() {{
                                add("qui"),
                            }};
                            resourceTags = new java.util.HashMap<String, String>() {{
                                put("unde", "in");
                            }};
                            resourceType = "autem";
                            selectionMode = "qui";
                        }});
                        put("ut", new CreateExperimentTemplateTargetInput() {{
                            filters = new openapisdk.models.shared.ExperimentTemplateTargetInputFilter[]() {{
                                add(new ExperimentTemplateTargetInputFilter() {{
                                    path = "ab";
                                    values = new String[]() {{
                                        add("ullam"),
                                    }};
                                }}),
                                add(new ExperimentTemplateTargetInputFilter() {{
                                    path = "et";
                                    values = new String[]() {{
                                        add("esse"),
                                        add("architecto"),
                                        add("quam"),
                                    }};
                                }}),
                                add(new ExperimentTemplateTargetInputFilter() {{
                                    path = "velit";
                                    values = new String[]() {{
                                        add("soluta"),
                                        add("sunt"),
                                    }};
                                }}),
                            }};
                            resourceArns = new String[]() {{
                                add("magni"),
                                add("et"),
                            }};
                            resourceTags = new java.util.HashMap<String, String>() {{
                                put("qui", "earum");
                                put("illo", "omnis");
                                put("ut", "consequatur");
                            }};
                            resourceType = "dolor";
                            selectionMode = "commodi";
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