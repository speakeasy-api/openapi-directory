# SDK

## Overview

This API reference provides descriptions, syntax, and other details about each of the actions and data types for AWS Migration Hub Orchestrator. he topic for each action shows the API request parameters and the response. Alternatively, you can use one of the AWS SDKs to access an API that is tailored to the programming language or platform that you're using.

Amazon Web Services documentation
<https://docs.aws.amazon.com/migrationhub-orchestrator/>
### Available Operations

* [createWorkflow](#createworkflow) - Create a workflow to orchestrate your migrations.
* [createWorkflowStep](#createworkflowstep) - Create a step in the migration workflow.
* [createWorkflowStepGroup](#createworkflowstepgroup) - Create a step group in a migration workflow.
* [deleteWorkflow](#deleteworkflow) - Delete a migration workflow. You must pause a running workflow in Migration Hub Orchestrator console to delete it.
* [deleteWorkflowStep](#deleteworkflowstep) - Delete a step in a migration workflow. Pause the workflow to delete a running step.
* [deleteWorkflowStepGroup](#deleteworkflowstepgroup) - Delete a step group in a migration workflow.
* [getTemplate](#gettemplate) - Get the template you want to use for creating a migration workflow.
* [getTemplateStep](#gettemplatestep) - Get a specific step in a template.
* [getTemplateStepGroup](#gettemplatestepgroup) - Get a step group in a template.
* [getWorkflow](#getworkflow) - Get migration workflow.
* [getWorkflowStep](#getworkflowstep) - Get a step in the migration workflow.
* [getWorkflowStepGroup](#getworkflowstepgroup) - Get the step group of a migration workflow.
* [listPlugins](#listplugins) - List AWS Migration Hub Orchestrator plugins.
* [listTagsForResource](#listtagsforresource) - List the tags added to a resource.
* [listTemplateStepGroups](#listtemplatestepgroups) - List the step groups in a template.
* [listTemplateSteps](#listtemplatesteps) - List the steps in a template.
* [listTemplates](#listtemplates) - List the templates available in Migration Hub Orchestrator to create a migration workflow.
* [listWorkflowStepGroups](#listworkflowstepgroups) - List the step groups in a migration workflow.
* [listWorkflowSteps](#listworkflowsteps) - List the steps in a workflow.
* [listWorkflows](#listworkflows) - List the migration workflows.
* [retryWorkflowStep](#retryworkflowstep) - Retry a failed step in a migration workflow.
* [startWorkflow](#startworkflow) - Start a migration workflow.
* [stopWorkflow](#stopworkflow) - Stop an ongoing migration workflow.
* [tagResource](#tagresource) - Tag a resource by specifying its Amazon Resource Name (ARN).
* [untagResource](#untagresource) - Deletes the tags for a resource.
* [updateWorkflow](#updateworkflow) - Update a migration workflow.
* [updateWorkflowStep](#updateworkflowstep) - Update a step in a migration workflow.
* [updateWorkflowStepGroup](#updateworkflowstepgroup) - Update the step group in a migration workflow.

## createWorkflow

Create a workflow to orchestrate your migrations.

### Example Usage

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
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorkflowRequest req = new CreateWorkflowRequest(                new CreateWorkflowRequestBody("perferendis",                 new java.util.HashMap<String, org.openapis.openapi.models.shared.StepInput>() {{
                                                put("natus", new StepInput() {{
                                                    integerValue = 149675L;
                                                    listOfStringsValue = new String[]{{
                                                        add("dolor"),
                                                        add("natus"),
                                                        add("laboriosam"),
                                                    }};
                                                    mapOfStringValue = new java.util.HashMap<String, String>() {{
                                                        put("saepe", "fuga");
                                                        put("in", "corporis");
                                                        put("iste", "iure");
                                                        put("saepe", "quidem");
                                                    }};
                                                    stringValue = "architecto";
                                                }});
                                                put("ipsa", new StepInput() {{
                                                    integerValue = 969810L;
                                                    listOfStringsValue = new String[]{{
                                                        add("mollitia"),
                                                        add("laborum"),
                                                        add("dolores"),
                                                    }};
                                                    mapOfStringValue = new java.util.HashMap<String, String>() {{
                                                        put("corporis", "explicabo");
                                                    }};
                                                    stringValue = "nobis";
                                                }});
                                            }}, "enim", "omnis") {{
                                description = "nemo";
                                stepTargets = new String[]{{
                                    add("excepturi"),
                                    add("accusantium"),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("culpa", "doloribus");
                                    put("sapiente", "architecto");
                                }};
                            }};) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "culpa";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "occaecati";
            }};            

            CreateWorkflowResponse res = sdk.sdk.createWorkflow(req);

            if (res.createMigrationWorkflowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorkflowStep

Create a step in the migration workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkflowStepRequest;
import org.openapis.openapi.models.operations.CreateWorkflowStepRequestBody;
import org.openapis.openapi.models.operations.CreateWorkflowStepRequestBodyStepActionTypeEnum;
import org.openapis.openapi.models.operations.CreateWorkflowStepRequestBodyWorkflowStepAutomationConfiguration;
import org.openapis.openapi.models.operations.CreateWorkflowStepResponse;
import org.openapis.openapi.models.shared.DataTypeEnum;
import org.openapis.openapi.models.shared.PlatformCommand;
import org.openapis.openapi.models.shared.PlatformScriptKey;
import org.openapis.openapi.models.shared.RunEnvironmentEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetTypeEnum;
import org.openapis.openapi.models.shared.WorkflowStepOutput;
import org.openapis.openapi.models.shared.WorkflowStepOutputUnion;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorkflowStepRequest req = new CreateWorkflowStepRequest(                new CreateWorkflowStepRequestBody("commodi", CreateWorkflowStepRequestBodyStepActionTypeEnum.MANUAL, "molestiae", "velit") {{
                                description = "error";
                                next = new String[]{{
                                    add("quis"),
                                }};
                                outputs = new org.openapis.openapi.models.shared.WorkflowStepOutput[]{{
                                    add(new WorkflowStepOutput() {{
                                        dataType = DataTypeEnum.STRINGLIST;
                                        name = "Bill Conn";
                                        required = false;
                                        value = new WorkflowStepOutputUnion() {{
                                            integerValue = 949572L;
                                            listOfStringValue = new String[]{{
                                                add("id"),
                                                add("possimus"),
                                            }};
                                            stringValue = "aut";
                                        }};
                                    }}),
                                }};
                                previous = new String[]{{
                                    add("error"),
                                }};
                                stepTarget = new String[]{{
                                    add("laborum"),
                                    add("quasi"),
                                    add("reiciendis"),
                                    add("voluptatibus"),
                                }};
                                workflowStepAutomationConfiguration = new CreateWorkflowStepRequestBodyWorkflowStepAutomationConfiguration() {{
                                    command = new PlatformCommand() {{
                                        linux = "vero";
                                        windows = "nihil";
                                    }};;
                                    runEnvironment = RunEnvironmentEnum.ONPREMISE;
                                    scriptLocationS3Bucket = "voluptatibus";
                                    scriptLocationS3Key = new PlatformScriptKey() {{
                                        linux = "ipsa";
                                        windows = "omnis";
                                    }};;
                                    targetType = TargetTypeEnum.ALL;
                                }};;
                            }};) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "doloremque";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "ut";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "dicta";
            }};            

            CreateWorkflowStepResponse res = sdk.sdk.createWorkflowStep(req);

            if (res.createWorkflowStepResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorkflowStepGroup

Create a step group in a migration workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkflowStepGroupRequest;
import org.openapis.openapi.models.operations.CreateWorkflowStepGroupRequestBody;
import org.openapis.openapi.models.operations.CreateWorkflowStepGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorkflowStepGroupRequest req = new CreateWorkflowStepGroupRequest(                new CreateWorkflowStepGroupRequestBody("dolore", "iusto") {{
                                description = "dicta";
                                next = new String[]{{
                                    add("enim"),
                                    add("accusamus"),
                                    add("commodi"),
                                }};
                                previous = new String[]{{
                                    add("quae"),
                                    add("ipsum"),
                                    add("quidem"),
                                    add("molestias"),
                                }};
                            }};) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "modi";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "rem";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "quasi";
            }};            

            CreateWorkflowStepGroupResponse res = sdk.sdk.createWorkflowStepGroup(req);

            if (res.createWorkflowStepGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWorkflow

Delete a migration workflow. You must pause a running workflow in Migration Hub Orchestrator console to delete it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkflowRequest;
import org.openapis.openapi.models.operations.DeleteWorkflowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWorkflowRequest req = new DeleteWorkflowRequest("sint") {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "incidunt";
                xAmzDate = "enim";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "est";
                xAmzSignedHeaders = "quibusdam";
            }};            

            DeleteWorkflowResponse res = sdk.sdk.deleteWorkflow(req);

            if (res.deleteMigrationWorkflowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWorkflowStep

Delete a step in a migration workflow. Pause the workflow to delete a running step.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkflowStepRequest;
import org.openapis.openapi.models.operations.DeleteWorkflowStepResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWorkflowStepRequest req = new DeleteWorkflowStepRequest("deserunt", "distinctio", "quibusdam") {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "perferendis";
            }};            

            DeleteWorkflowStepResponse res = sdk.sdk.deleteWorkflowStep(req);

            if (res.deleteWorkflowStepResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWorkflowStepGroup

Delete a step group in a migration workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkflowStepGroupRequest;
import org.openapis.openapi.models.operations.DeleteWorkflowStepGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWorkflowStepGroupRequest req = new DeleteWorkflowStepGroupRequest("assumenda", "ipsam") {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "dolorum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "tempore";
            }};            

            DeleteWorkflowStepGroupResponse res = sdk.sdk.deleteWorkflowStepGroup(req);

            if (res.deleteWorkflowStepGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTemplate

Get the template you want to use for creating a migration workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTemplateRequest;
import org.openapis.openapi.models.operations.GetTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTemplateRequest req = new GetTemplateRequest("delectus") {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "non";
                xAmzCredential = "eligendi";
                xAmzDate = "sint";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            GetTemplateResponse res = sdk.sdk.getTemplate(req);

            if (res.getMigrationWorkflowTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTemplateStep

Get a specific step in a template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTemplateStepRequest;
import org.openapis.openapi.models.operations.GetTemplateStepResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTemplateStepRequest req = new GetTemplateStepRequest("officia", "dolor", "debitis") {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "in";
                xAmzDate = "in";
                xAmzSecurityToken = "illum";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "rerum";
            }};            

            GetTemplateStepResponse res = sdk.sdk.getTemplateStep(req);

            if (res.getTemplateStepResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTemplateStepGroup

Get a step group in a template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTemplateStepGroupRequest;
import org.openapis.openapi.models.operations.GetTemplateStepGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTemplateStepGroupRequest req = new GetTemplateStepGroupRequest("magnam", "cumque") {{
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "ea";
                xAmzCredential = "aliquid";
                xAmzDate = "laborum";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "non";
                xAmzSignedHeaders = "occaecati";
            }};            

            GetTemplateStepGroupResponse res = sdk.sdk.getTemplateStepGroup(req);

            if (res.getTemplateStepGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkflow

Get migration workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkflowRequest;
import org.openapis.openapi.models.operations.GetWorkflowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWorkflowRequest req = new GetWorkflowRequest("accusamus") {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "provident";
                xAmzDate = "nam";
                xAmzSecurityToken = "id";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "deleniti";
            }};            

            GetWorkflowResponse res = sdk.sdk.getWorkflow(req);

            if (res.getMigrationWorkflowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkflowStep

Get a step in the migration workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkflowStepRequest;
import org.openapis.openapi.models.operations.GetWorkflowStepResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWorkflowStepRequest req = new GetWorkflowStepRequest("amet", "deserunt", "nisi") {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "natus";
                xAmzCredential = "omnis";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "magnam";
            }};            

            GetWorkflowStepResponse res = sdk.sdk.getWorkflowStep(req);

            if (res.getWorkflowStepResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkflowStepGroup

Get the step group of a migration workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkflowStepGroupRequest;
import org.openapis.openapi.models.operations.GetWorkflowStepGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWorkflowStepGroupRequest req = new GetWorkflowStepGroupRequest("id", "labore") {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "natus";
                xAmzDate = "nobis";
                xAmzSecurityToken = "eum";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "aspernatur";
            }};            

            GetWorkflowStepGroupResponse res = sdk.sdk.getWorkflowStepGroup(req);

            if (res.getWorkflowStepGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPlugins

List AWS Migration Hub Orchestrator plugins.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPluginsRequest;
import org.openapis.openapi.models.operations.ListPluginsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPluginsRequest req = new ListPluginsRequest() {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "et";
                xAmzCredential = "excepturi";
                xAmzDate = "ullam";
                xAmzSecurityToken = "provident";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "sint";
                maxResults = 33625L;
                nextToken = "mollitia";
            }};            

            ListPluginsResponse res = sdk.sdk.listPlugins(req);

            if (res.listPluginsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

List the tags added to a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("mollitia") {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "eum";
                xAmzCredential = "dolor";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "odit";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "quasi";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTemplateStepGroups

List the step groups in a template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTemplateStepGroupsRequest;
import org.openapis.openapi.models.operations.ListTemplateStepGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTemplateStepGroupsRequest req = new ListTemplateStepGroupsRequest("doloribus") {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "eius";
                xAmzCredential = "maxime";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "in";
                xAmzSignedHeaders = "architecto";
                maxResults = 99569L;
                nextToken = "repudiandae";
            }};            

            ListTemplateStepGroupsResponse res = sdk.sdk.listTemplateStepGroups(req);

            if (res.listTemplateStepGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTemplateSteps

List the steps in a template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTemplateStepsRequest;
import org.openapis.openapi.models.operations.ListTemplateStepsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTemplateStepsRequest req = new ListTemplateStepsRequest("expedita", "nihil") {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "sed";
                xAmzDate = "saepe";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "consequuntur";
                maxResults = 508315L;
                nextToken = "natus";
            }};            

            ListTemplateStepsResponse res = sdk.sdk.listTemplateSteps(req);

            if (res.listTemplateStepsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTemplates

List the templates available in Migration Hub Orchestrator to create a migration workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTemplatesRequest;
import org.openapis.openapi.models.operations.ListTemplatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTemplatesRequest req = new ListTemplatesRequest() {{
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "quo";
                xAmzCredential = "illum";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "excepturi";
                maxResults = 139972L;
                name = "Donna Bernhard";
                nextToken = "ipsam";
            }};            

            ListTemplatesResponse res = sdk.sdk.listTemplates(req);

            if (res.listMigrationWorkflowTemplatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkflowStepGroups

List the step groups in a migration workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkflowStepGroupsRequest;
import org.openapis.openapi.models.operations.ListWorkflowStepGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorkflowStepGroupsRequest req = new ListWorkflowStepGroupsRequest("autem") {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "pariatur";
                xAmzDate = "nemo";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "fugiat";
                maxResults = 230742L;
                nextToken = "aut";
            }};            

            ListWorkflowStepGroupsResponse res = sdk.sdk.listWorkflowStepGroups(req);

            if (res.listWorkflowStepGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkflowSteps

List the steps in a workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkflowStepsRequest;
import org.openapis.openapi.models.operations.ListWorkflowStepsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorkflowStepsRequest req = new ListWorkflowStepsRequest("corporis", "hic") {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "dolores";
                xAmzDate = "quis";
                xAmzSecurityToken = "totam";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "eaque";
                maxResults = 338985L;
                nextToken = "nesciunt";
            }};            

            ListWorkflowStepsResponse res = sdk.sdk.listWorkflowSteps(req);

            if (res.listWorkflowStepsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkflows

List the migration workflows.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkflowsRequest;
import org.openapis.openapi.models.operations.ListWorkflowsResponse;
import org.openapis.openapi.models.operations.ListWorkflowsStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorkflowsRequest req = new ListWorkflowsRequest() {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "minus";
                xAmzDate = "quam";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "nostrum";
                adsApplicationConfigurationName = "hic";
                maxResults = 928082L;
                name = "Miss Cesar Metz";
                nextToken = "blanditiis";
                status = ListWorkflowsStatusEnum.PAUSING_FAILED;
                templateId = "eaque";
            }};            

            ListWorkflowsResponse res = sdk.sdk.listWorkflows(req);

            if (res.listMigrationWorkflowsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retryWorkflowStep

Retry a failed step in a migration workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetryWorkflowStepRequest;
import org.openapis.openapi.models.operations.RetryWorkflowStepResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RetryWorkflowStepRequest req = new RetryWorkflowStepRequest("rerum", "adipisci", "asperiores") {{
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "modi";
                xAmzCredential = "iste";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "provident";
            }};            

            RetryWorkflowStepResponse res = sdk.sdk.retryWorkflowStep(req);

            if (res.retryWorkflowStepResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startWorkflow

Start a migration workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartWorkflowRequest;
import org.openapis.openapi.models.operations.StartWorkflowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartWorkflowRequest req = new StartWorkflowRequest("libero") {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "quos";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolor";
            }};            

            StartWorkflowResponse res = sdk.sdk.startWorkflow(req);

            if (res.startMigrationWorkflowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopWorkflow

Stop an ongoing migration workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopWorkflowRequest;
import org.openapis.openapi.models.operations.StopWorkflowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopWorkflowRequest req = new StopWorkflowRequest("ipsum") {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "cum";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "amet";
            }};            

            StopWorkflowResponse res = sdk.sdk.stopWorkflow(req);

            if (res.stopMigrationWorkflowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Tag a resource by specifying its Amazon Resource Name (ARN).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("veritatis", "ipsa");
                                                put("ipsa", "iure");
                                            }});, "odio") {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "quidem";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "eos";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Deletes the tags for a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("sit",                 new String[]{{
                                add("ab"),
                                add("soluta"),
                                add("dolorum"),
                                add("iusto"),
                            }}) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "deleniti";
                xAmzDate = "omnis";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "asperiores";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkflow

Update a migration workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkflowRequest;
import org.openapis.openapi.models.operations.UpdateWorkflowRequestBody;
import org.openapis.openapi.models.operations.UpdateWorkflowResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StepInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWorkflowRequest req = new UpdateWorkflowRequest(                new UpdateWorkflowRequestBody() {{
                                description = "ipsum";
                                inputParameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.StepInput>() {{
                                    put("id", new StepInput() {{
                                        integerValue = 906418L;
                                        listOfStringsValue = new String[]{{
                                            add("aspernatur"),
                                            add("perferendis"),
                                        }};
                                        mapOfStringValue = new java.util.HashMap<String, String>() {{
                                            put("optio", "accusamus");
                                        }};
                                        stringValue = "ad";
                                    }});
                                    put("saepe", new StepInput() {{
                                        integerValue = 383464L;
                                        listOfStringsValue = new String[]{{
                                            add("provident"),
                                            add("minima"),
                                            add("repellendus"),
                                        }};
                                        mapOfStringValue = new java.util.HashMap<String, String>() {{
                                            put("similique", "alias");
                                            put("at", "quaerat");
                                            put("tempora", "vel");
                                        }};
                                        stringValue = "quod";
                                    }});
                                }};
                                name = "Clarence Parisian";
                                stepTargets = new String[]{{
                                    add("iusto"),
                                    add("ipsum"),
                                    add("quisquam"),
                                }};
                            }};, "tenetur") {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "accusamus";
                xAmzDate = "numquam";
                xAmzSecurityToken = "enim";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "sapiente";
            }};            

            UpdateWorkflowResponse res = sdk.sdk.updateWorkflow(req);

            if (res.updateMigrationWorkflowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkflowStep

Update a step in a migration workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkflowStepRequest;
import org.openapis.openapi.models.operations.UpdateWorkflowStepRequestBody;
import org.openapis.openapi.models.operations.UpdateWorkflowStepRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.UpdateWorkflowStepRequestBodyStepActionTypeEnum;
import org.openapis.openapi.models.operations.UpdateWorkflowStepRequestBodyWorkflowStepAutomationConfiguration;
import org.openapis.openapi.models.operations.UpdateWorkflowStepResponse;
import org.openapis.openapi.models.shared.DataTypeEnum;
import org.openapis.openapi.models.shared.PlatformCommand;
import org.openapis.openapi.models.shared.PlatformScriptKey;
import org.openapis.openapi.models.shared.RunEnvironmentEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetTypeEnum;
import org.openapis.openapi.models.shared.WorkflowStepOutput;
import org.openapis.openapi.models.shared.WorkflowStepOutputUnion;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWorkflowStepRequest req = new UpdateWorkflowStepRequest(                new UpdateWorkflowStepRequestBody("nihil", "sit") {{
                                description = "expedita";
                                name = "Jane Kassulke";
                                next = new String[]{{
                                    add("quam"),
                                    add("ipsum"),
                                    add("incidunt"),
                                }};
                                outputs = new org.openapis.openapi.models.shared.WorkflowStepOutput[]{{
                                    add(new WorkflowStepOutput() {{
                                        dataType = DataTypeEnum.STRINGLIST;
                                        name = "Miss Jody Rogahn";
                                        required = false;
                                        value = new WorkflowStepOutputUnion() {{
                                            integerValue = 276894L;
                                            listOfStringValue = new String[]{{
                                                add("dolores"),
                                            }};
                                            stringValue = "distinctio";
                                        }};
                                    }}),
                                }};
                                previous = new String[]{{
                                    add("aliquid"),
                                    add("quam"),
                                    add("molestias"),
                                }};
                                status = UpdateWorkflowStepRequestBodyStatusEnum.PAUSED;
                                stepActionType = UpdateWorkflowStepRequestBodyStepActionTypeEnum.MANUAL;
                                stepTarget = new String[]{{
                                    add("fugit"),
                                }};
                                workflowStepAutomationConfiguration = new UpdateWorkflowStepRequestBodyWorkflowStepAutomationConfiguration() {{
                                    command = new PlatformCommand() {{
                                        linux = "magni";
                                        windows = "odio";
                                    }};;
                                    runEnvironment = RunEnvironmentEnum.AWS;
                                    scriptLocationS3Bucket = "ullam";
                                    scriptLocationS3Key = new PlatformScriptKey() {{
                                        linux = "nam";
                                        windows = "hic";
                                    }};;
                                    targetType = TargetTypeEnum.SINGLE;
                                }};;
                            }};, "cumque") {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "et";
                xAmzDate = "saepe";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "nobis";
            }};            

            UpdateWorkflowStepResponse res = sdk.sdk.updateWorkflowStep(req);

            if (res.updateWorkflowStepResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkflowStepGroup

Update the step group in a migration workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkflowStepGroupRequest;
import org.openapis.openapi.models.operations.UpdateWorkflowStepGroupRequestBody;
import org.openapis.openapi.models.operations.UpdateWorkflowStepGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWorkflowStepGroupRequest req = new UpdateWorkflowStepGroupRequest(                new UpdateWorkflowStepGroupRequestBody() {{
                                description = "tempore";
                                name = "Kevin Willms";
                                next = new String[]{{
                                    add("adipisci"),
                                    add("dolorum"),
                                }};
                                previous = new String[]{{
                                    add("quae"),
                                }};
                            }};, "aut", "quas") {{
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "est";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "porro";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "ut";
            }};            

            UpdateWorkflowStepGroupResponse res = sdk.sdk.updateWorkflowStepGroup(req);

            if (res.updateWorkflowStepGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
