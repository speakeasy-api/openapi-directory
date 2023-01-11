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
                    xAmzAlgorithm = "rem";
                    xAmzContentSha256 = "perspiciatis";
                    xAmzCredential = "molestias";
                    xAmzDate = "repellendus";
                    xAmzSecurityToken = "doloremque";
                    xAmzSignature = "doloremque";
                    xAmzSignedHeaders = "consectetur";
                }};
                request = new CreateExperimentTemplateRequestBody() {{
                    actions = new java.util.HashMap<String, openapisdk.models.shared.CreateExperimentTemplateActionInput>() {{
                        put("et", new CreateExperimentTemplateActionInput() {{
                            actionId = "ut";
                            description = "eaque";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("dolorem", "nulla");
                                put("nam", "velit");
                            }};
                            startAfter = new String[]() {{
                                add("culpa"),
                            }};
                            targets = new java.util.HashMap<String, String>() {{
                                put("qui", "impedit");
                                put("culpa", "voluptatibus");
                                put("consequuntur", "sapiente");
                            }};
                        }});
                        put("sint", new CreateExperimentTemplateActionInput() {{
                            actionId = "et";
                            description = "fuga";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("quidem", "reiciendis");
                            }};
                            startAfter = new String[]() {{
                                add("quas"),
                                add("pariatur"),
                                add("omnis"),
                            }};
                            targets = new java.util.HashMap<String, String>() {{
                                put("soluta", "qui");
                                put("aut", "et");
                            }};
                        }});
                    }};
                    clientToken = "omnis";
                    description = "et";
                    roleArn = "architecto";
                    stopConditions = new openapisdk.models.shared.CreateExperimentTemplateStopConditionInput[]() {{
                        add(new CreateExperimentTemplateStopConditionInput() {{
                            source = "dolorem";
                            value = "recusandae";
                        }}),
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("ut", "ab");
                    }};
                    targets = new java.util.HashMap<String, openapisdk.models.shared.CreateExperimentTemplateTargetInput>() {{
                        put("ut", new CreateExperimentTemplateTargetInput() {{
                            filters = new openapisdk.models.shared.ExperimentTemplateTargetInputFilter[]() {{
                                add(new ExperimentTemplateTargetInputFilter() {{
                                    path = "molestiae";
                                    values = new String[]() {{
                                        add("aut"),
                                        add("sequi"),
                                        add("eum"),
                                    }};
                                }}),
                                add(new ExperimentTemplateTargetInputFilter() {{
                                    path = "iusto";
                                    values = new String[]() {{
                                        add("sunt"),
                                        add("ea"),
                                        add("et"),
                                    }};
                                }}),
                                add(new ExperimentTemplateTargetInputFilter() {{
                                    path = "officiis";
                                    values = new String[]() {{
                                        add("delectus"),
                                    }};
                                }}),
                            }};
                            resourceArns = new String[]() {{
                                add("esse"),
                                add("ut"),
                            }};
                            resourceTags = new java.util.HashMap<String, String>() {{
                                put("deserunt", "ut");
                                put("in", "maiores");
                            }};
                            resourceType = "iure";
                            selectionMode = "qui";
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