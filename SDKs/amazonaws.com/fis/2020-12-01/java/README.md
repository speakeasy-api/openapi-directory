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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createExperimentTemplate](docs/sdk/README.md#createexperimenttemplate) - <p>Creates an experiment template. </p> <p>An experiment template includes the following components:</p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your Amazon Web Services environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html">Experiment templates</a> in the <i>Fault Injection Simulator User Guide</i>.</p>
* [deleteExperimentTemplate](docs/sdk/README.md#deleteexperimenttemplate) - Deletes the specified experiment template.
* [getAction](docs/sdk/README.md#getaction) - Gets information about the specified FIS action.
* [getExperiment](docs/sdk/README.md#getexperiment) - Gets information about the specified experiment.
* [getExperimentTemplate](docs/sdk/README.md#getexperimenttemplate) - Gets information about the specified experiment template.
* [getTargetResourceType](docs/sdk/README.md#gettargetresourcetype) - Gets information about the specified resource type.
* [listActions](docs/sdk/README.md#listactions) - Lists the available FIS actions.
* [listExperimentTemplates](docs/sdk/README.md#listexperimenttemplates) - Lists your experiment templates.
* [listExperiments](docs/sdk/README.md#listexperiments) - Lists your experiments.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for the specified resource.
* [listTargetResourceTypes](docs/sdk/README.md#listtargetresourcetypes) - Lists the target resource types.
* [startExperiment](docs/sdk/README.md#startexperiment) - Starts running an experiment from the specified experiment template.
* [stopExperiment](docs/sdk/README.md#stopexperiment) - Stops the specified experiment.
* [tagResource](docs/sdk/README.md#tagresource) - Applies the specified tags to the specified resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes the specified tags from the specified resource.
* [updateExperimentTemplate](docs/sdk/README.md#updateexperimenttemplate) - Updates the specified experiment template.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
