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
import org.openapis.openapi.models.operations.CreateWorkflowRequest;
import org.openapis.openapi.models.operations.CreateWorkflowRequestBody;
import org.openapis.openapi.models.operations.CreateWorkflowResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StepInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorkflowRequest req = new CreateWorkflowRequest(                new CreateWorkflowRequestBody("provident",                 new java.util.HashMap<String, org.openapis.openapi.models.shared.StepInput>() {{
                                                put("quibusdam", new StepInput() {{
                                                    integerValue = 602763L;
                                                    listOfStringsValue = new String[]{{
                                                        add("corrupti"),
                                                        add("illum"),
                                                        add("vel"),
                                                        add("error"),
                                                    }};
                                                    mapOfStringValue = new java.util.HashMap<String, String>() {{
                                                        put("suscipit", "iure");
                                                        put("magnam", "debitis");
                                                        put("ipsa", "delectus");
                                                    }};
                                                    stringValue = "tempora";
                                                }});
                                                put("suscipit", new StepInput() {{
                                                    integerValue = 477665L;
                                                    listOfStringsValue = new String[]{{
                                                        add("placeat"),
                                                        add("voluptatum"),
                                                        add("iusto"),
                                                        add("excepturi"),
                                                    }};
                                                    mapOfStringValue = new java.util.HashMap<String, String>() {{
                                                        put("recusandae", "temporibus");
                                                        put("ab", "quis");
                                                    }};
                                                    stringValue = "veritatis";
                                                }});
                                                put("deserunt", new StepInput() {{
                                                    integerValue = 20218L;
                                                    listOfStringsValue = new String[]{{
                                                        add("repellendus"),
                                                        add("sapiente"),
                                                    }};
                                                    mapOfStringValue = new java.util.HashMap<String, String>() {{
                                                        put("odit", "at");
                                                        put("at", "maiores");
                                                        put("molestiae", "quod");
                                                        put("quod", "esse");
                                                    }};
                                                    stringValue = "totam";
                                                }});
                                            }}, "porro", "dolorum") {{
                                description = "dicta";
                                stepTargets = new String[]{{
                                    add("officia"),
                                    add("occaecati"),
                                    add("fugit"),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("hic", "optio");
                                    put("totam", "beatae");
                                    put("commodi", "molestiae");
                                }};
                            }};) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "impedit";
                xAmzDate = "cum";
                xAmzSecurityToken = "esse";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "excepturi";
            }};            

            CreateWorkflowResponse res = sdk.createWorkflow(req);

            if (res.createMigrationWorkflowResponse != null) {
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

* [createWorkflow](docs/sdk/README.md#createworkflow) - Create a workflow to orchestrate your migrations.
* [createWorkflowStep](docs/sdk/README.md#createworkflowstep) - Create a step in the migration workflow.
* [createWorkflowStepGroup](docs/sdk/README.md#createworkflowstepgroup) - Create a step group in a migration workflow.
* [deleteWorkflow](docs/sdk/README.md#deleteworkflow) - Delete a migration workflow. You must pause a running workflow in Migration Hub Orchestrator console to delete it.
* [deleteWorkflowStep](docs/sdk/README.md#deleteworkflowstep) - Delete a step in a migration workflow. Pause the workflow to delete a running step.
* [deleteWorkflowStepGroup](docs/sdk/README.md#deleteworkflowstepgroup) - Delete a step group in a migration workflow.
* [getTemplate](docs/sdk/README.md#gettemplate) - Get the template you want to use for creating a migration workflow.
* [getTemplateStep](docs/sdk/README.md#gettemplatestep) - Get a specific step in a template.
* [getTemplateStepGroup](docs/sdk/README.md#gettemplatestepgroup) - Get a step group in a template.
* [getWorkflow](docs/sdk/README.md#getworkflow) - Get migration workflow.
* [getWorkflowStep](docs/sdk/README.md#getworkflowstep) - Get a step in the migration workflow.
* [getWorkflowStepGroup](docs/sdk/README.md#getworkflowstepgroup) - Get the step group of a migration workflow.
* [listPlugins](docs/sdk/README.md#listplugins) - List AWS Migration Hub Orchestrator plugins.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - List the tags added to a resource.
* [listTemplateStepGroups](docs/sdk/README.md#listtemplatestepgroups) - List the step groups in a template.
* [listTemplateSteps](docs/sdk/README.md#listtemplatesteps) - List the steps in a template.
* [listTemplates](docs/sdk/README.md#listtemplates) - List the templates available in Migration Hub Orchestrator to create a migration workflow.
* [listWorkflowStepGroups](docs/sdk/README.md#listworkflowstepgroups) - List the step groups in a migration workflow.
* [listWorkflowSteps](docs/sdk/README.md#listworkflowsteps) - List the steps in a workflow.
* [listWorkflows](docs/sdk/README.md#listworkflows) - List the migration workflows.
* [retryWorkflowStep](docs/sdk/README.md#retryworkflowstep) - Retry a failed step in a migration workflow.
* [startWorkflow](docs/sdk/README.md#startworkflow) - Start a migration workflow.
* [stopWorkflow](docs/sdk/README.md#stopworkflow) - Stop an ongoing migration workflow.
* [tagResource](docs/sdk/README.md#tagresource) - Tag a resource by specifying its Amazon Resource Name (ARN).
* [untagResource](docs/sdk/README.md#untagresource) - Deletes the tags for a resource.
* [updateWorkflow](docs/sdk/README.md#updateworkflow) - Update a migration workflow.
* [updateWorkflowStep](docs/sdk/README.md#updateworkflowstep) - Update a step in a migration workflow.
* [updateWorkflowStepGroup](docs/sdk/README.md#updateworkflowstepgroup) - Update the step group in a migration workflow.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
