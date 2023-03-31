# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createExperimentTemplate` - <p>Creates an experiment template. </p> <p>An experiment template includes the following components:</p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your Amazon Web Services environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html">Experiment templates</a> in the <i>Fault Injection Simulator User Guide</i>.</p>
* `deleteExperimentTemplate` - Deletes the specified experiment template.
* `getAction` - Gets information about the specified FIS action.
* `getExperiment` - Gets information about the specified experiment.
* `getExperimentTemplate` - Gets information about the specified experiment template.
* `getTargetResourceType` - Gets information about the specified resource type.
* `listActions` - Lists the available FIS actions.
* `listExperimentTemplates` - Lists your experiment templates.
* `listExperiments` - Lists your experiments.
* `listTagsForResource` - Lists the tags for the specified resource.
* `listTargetResourceTypes` - Lists the target resource types.
* `startExperiment` - Starts running an experiment from the specified experiment template.
* `stopExperiment` - Stops the specified experiment.
* `tagResource` - Applies the specified tags to the specified resource.
* `untagResource` - Removes the specified tags from the specified resource.
* `updateExperimentTemplate` - Updates the specified experiment template.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
