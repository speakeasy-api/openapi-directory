# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createExperimentTemplate` - <p>Creates an experiment template. </p> <p>To create a template, specify the following information: </p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your AWS environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see the <a href="https://docs.aws.amazon.com/fis/latest/userguide/">AWS Fault Injection Simulator User Guide</a>.</p>
* `deleteExperimentTemplate` - Deletes the specified experiment template.
* `getAction` - Gets information about the specified AWS FIS action.
* `getExperiment` - Gets information about the specified experiment.
* `getExperimentTemplate` - Gets information about the specified experiment template.
* `listActions` - Lists the available AWS FIS actions.
* `listExperimentTemplates` - Lists your experiment templates.
* `listExperiments` - Lists your experiments.
* `listTagsForResource` - Lists the tags for the specified resource.
* `startExperiment` - Starts running an experiment from the specified experiment template.
* `stopExperiment` - Stops the specified experiment.
* `tagResource` - Applies the specified tags to the specified resource.
* `untagResource` - Removes the specified tags from the specified resource.
* `updateExperimentTemplate` - Updates the specified experiment template.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
