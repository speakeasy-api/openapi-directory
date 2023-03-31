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
import org.openapis.openapi.models.operations.CreateWorkflowHeaders;
import org.openapis.openapi.models.operations.CreateWorkflowRequestBody;
import org.openapis.openapi.models.operations.CreateWorkflowRequest;
import org.openapis.openapi.models.operations.CreateWorkflowResponse;
import org.openapis.openapi.models.shared.StepInput;

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

            CreateWorkflowRequest req = new CreateWorkflowRequest() {{
                headers = new CreateWorkflowHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateWorkflowRequestBody() {{
                    applicationConfigurationId = "illum";
                    description = "vel";
                    inputParameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.StepInput>() {{
                        put("deserunt", new StepInput() {{
                            integerValue = 384382;
                            listOfStringsValue = new String[]{{
                                add("magnam"),
                                add("debitis"),
                            }};
                            mapOfStringValue = new java.util.HashMap<String, String>() {{
                                put("delectus", "tempora");
                            }};
                            stringValue = "suscipit";
                        }});
                        put("molestiae", new StepInput() {{
                            integerValue = 791725;
                            listOfStringsValue = new String[]{{
                                add("voluptatum"),
                                add("iusto"),
                                add("excepturi"),
                                add("nisi"),
                            }};
                            mapOfStringValue = new java.util.HashMap<String, String>() {{
                                put("temporibus", "ab");
                                put("quis", "veritatis");
                                put("deserunt", "perferendis");
                                put("ipsam", "repellendus");
                            }};
                            stringValue = "sapiente";
                        }});
                        put("quo", new StepInput() {{
                            integerValue = 140350;
                            listOfStringsValue = new String[]{{
                                add("at"),
                                add("maiores"),
                                add("molestiae"),
                                add("quod"),
                            }};
                            mapOfStringValue = new java.util.HashMap<String, String>() {{
                                put("esse", "totam");
                                put("porro", "dolorum");
                                put("dicta", "nam");
                                put("officia", "occaecati");
                            }};
                            stringValue = "fugit";
                        }});
                    }};
                    name = "deleniti";
                    stepTargets = new String[]{{
                        add("optio"),
                        add("totam"),
                        add("beatae"),
                        add("commodi"),
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("modi", "qui");
                        put("impedit", "cum");
                    }};
                    templateId = "esse";
                }};
            }};            

            CreateWorkflowResponse res = sdk.createWorkflow(req);

            if (res.createMigrationWorkflowResponse.isPresent()) {
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

* `createWorkflow` - Create a workflow to orchestrate your migrations.
* `createWorkflowStep` - Create a step in the migration workflow.
* `createWorkflowStepGroup` - Create a step group in a migration workflow.
* `deleteWorkflow` - Delete a migration workflow. You must pause a running workflow in Migration Hub Orchestrator console to delete it.
* `deleteWorkflowStep` - Delete a step in a migration workflow. Pause the workflow to delete a running step.
* `deleteWorkflowStepGroup` - Delete a step group in a migration workflow.
* `getTemplate` - Get the template you want to use for creating a migration workflow.
* `getTemplateStep` - Get a specific step in a template.
* `getTemplateStepGroup` - Get a step group in a template.
* `getWorkflow` - Get migration workflow.
* `getWorkflowStep` - Get a step in the migration workflow.
* `getWorkflowStepGroup` - Get the step group of a migration workflow.
* `listPlugins` - List AWS Migration Hub Orchestrator plugins.
* `listTagsForResource` - List the tags added to a resource.
* `listTemplateStepGroups` - List the step groups in a template.
* `listTemplateSteps` - List the steps in a template.
* `listTemplates` - List the templates available in Migration Hub Orchestrator to create a migration workflow.
* `listWorkflowStepGroups` - List the step groups in a migration workflow.
* `listWorkflowSteps` - List the steps in a workflow.
* `listWorkflows` - List the migration workflows.
* `retryWorkflowStep` - Retry a failed step in a migration workflow.
* `startWorkflow` - Start a migration workflow.
* `stopWorkflow` - Stop an ongoing migration workflow.
* `tagResource` - Tag a resource by specifying its Amazon Resource Name (ARN).
* `untagResource` - Deletes the tags for a resource.
* `updateWorkflow` - Update a migration workflow.
* `updateWorkflowStep` - Update a step in a migration workflow.
* `updateWorkflowStepGroup` - Update the step group in a migration workflow.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
