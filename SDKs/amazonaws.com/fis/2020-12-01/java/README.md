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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

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
