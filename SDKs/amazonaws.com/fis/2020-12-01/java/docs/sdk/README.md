# SDK

## Overview

Fault Injection Simulator is a managed service that enables you to perform fault injection experiments on your Amazon Web Services workloads. For more information, see the <a href="https://docs.aws.amazon.com/fis/latest/userguide/">Fault Injection Simulator User Guide</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/fis/>
### Available Operations

* [createExperimentTemplate](#createexperimenttemplate) - <p>Creates an experiment template. </p> <p>An experiment template includes the following components:</p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your Amazon Web Services environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html">Experiment templates</a> in the <i>Fault Injection Simulator User Guide</i>.</p>
* [deleteExperimentTemplate](#deleteexperimenttemplate) - Deletes the specified experiment template.
* [getAction](#getaction) - Gets information about the specified FIS action.
* [getExperiment](#getexperiment) - Gets information about the specified experiment.
* [getExperimentTemplate](#getexperimenttemplate) - Gets information about the specified experiment template.
* [getTargetResourceType](#gettargetresourcetype) - Gets information about the specified resource type.
* [listActions](#listactions) - Lists the available FIS actions.
* [listExperimentTemplates](#listexperimenttemplates) - Lists your experiment templates.
* [listExperiments](#listexperiments) - Lists your experiments.
* [listTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [listTargetResourceTypes](#listtargetresourcetypes) - Lists the target resource types.
* [startExperiment](#startexperiment) - Starts running an experiment from the specified experiment template.
* [stopExperiment](#stopexperiment) - Stops the specified experiment.
* [tagResource](#tagresource) - Applies the specified tags to the specified resource.
* [untagResource](#untagresource) - Removes the specified tags from the specified resource.
* [updateExperimentTemplate](#updateexperimenttemplate) - Updates the specified experiment template.

## createExperimentTemplate

<p>Creates an experiment template. </p> <p>An experiment template includes the following components:</p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your Amazon Web Services environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html">Experiment templates</a> in the <i>Fault Injection Simulator User Guide</i>.</p>

### Example Usage

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
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateExperimentTemplateRequest req = new CreateExperimentTemplateRequest(                new CreateExperimentTemplateRequestBody(                new java.util.HashMap<String, org.openapis.openapi.models.shared.CreateExperimentTemplateActionInput>() {{
                                                put("perferendis", new CreateExperimentTemplateActionInput("ipsum") {{
                                                    actionId = "doloremque";
                                                    description = "reprehenderit";
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("maiores", "dicta");
                                                        put("corporis", "dolore");
                                                    }};
                                                    startAfter = new String[]{{
                                                        add("dicta"),
                                                        add("harum"),
                                                    }};
                                                    targets = new java.util.HashMap<String, String>() {{
                                                        put("accusamus", "commodi");
                                                        put("repudiandae", "quae");
                                                    }};
                                                }});
                                                put("quidem", new CreateExperimentTemplateActionInput("cupiditate") {{
                                                    actionId = "molestias";
                                                    description = "excepturi";
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("modi", "praesentium");
                                                        put("rem", "voluptates");
                                                        put("quasi", "repudiandae");
                                                        put("sint", "veritatis");
                                                    }};
                                                    startAfter = new String[]{{
                                                        add("incidunt"),
                                                        add("enim"),
                                                        add("consequatur"),
                                                        add("est"),
                                                    }};
                                                    targets = new java.util.HashMap<String, String>() {{
                                                        put("explicabo", "deserunt");
                                                        put("distinctio", "quibusdam");
                                                        put("labore", "modi");
                                                        put("qui", "aliquid");
                                                    }};
                                                }});
                                                put("quos", new CreateExperimentTemplateActionInput("aliquid") {{
                                                    actionId = "perferendis";
                                                    description = "magni";
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("ipsam", "alias");
                                                        put("fugit", "dolorum");
                                                        put("excepturi", "tempora");
                                                        put("facilis", "tempore");
                                                    }};
                                                    startAfter = new String[]{{
                                                        add("delectus"),
                                                        add("eum"),
                                                    }};
                                                    targets = new java.util.HashMap<String, String>() {{
                                                        put("eligendi", "sint");
                                                    }};
                                                }});
                                            }}, "provident", "necessitatibus", "sint",                 new org.openapis.openapi.models.shared.CreateExperimentTemplateStopConditionInput[]{{
                                                add(new CreateExperimentTemplateStopConditionInput("a") {{
                                                    source = "dolor";
                                                    value = "debitis";
                                                }}),
                                                add(new CreateExperimentTemplateStopConditionInput("in") {{
                                                    source = "dolorum";
                                                    value = "in";
                                                }}),
                                                add(new CreateExperimentTemplateStopConditionInput("rerum") {{
                                                    source = "illum";
                                                    value = "maiores";
                                                }}),
                                            }}) {{
                                logConfiguration = new CreateExperimentTemplateRequestBodyLogConfiguration() {{
                                    cloudWatchLogsConfiguration = new ExperimentTemplateCloudWatchLogsLogConfigurationInput("dicta");;
                                    logSchemaVersion = 297437L;
                                    s3Configuration = new ExperimentTemplateS3LogConfigurationInput("cumque") {{
                                        prefix = "facere";
                                    }};;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("aliquid", "laborum");
                                    put("accusamus", "non");
                                }};
                                targets = new java.util.HashMap<String, org.openapis.openapi.models.shared.CreateExperimentTemplateTargetInput>() {{
                                    put("enim", new CreateExperimentTemplateTargetInput("debitis", "eius") {{
                                        filters = new org.openapis.openapi.models.shared.ExperimentTemplateTargetInputFilter[]{{
                                            add(new ExperimentTemplateTargetInputFilter("blanditiis",                 new String[]{{
                                                                add("sapiente"),
                                                                add("amet"),
                                                                add("deserunt"),
                                                            }}) {{
                                                path = "delectus";
                                                values = new String[]{{
                                                    add("provident"),
                                                    add("nam"),
                                                    add("id"),
                                                }};
                                            }}),
                                            add(new ExperimentTemplateTargetInputFilter("molestiae",                 new String[]{{
                                                                add("nihil"),
                                                            }}) {{
                                                path = "nisi";
                                                values = new String[]{{
                                                    add("natus"),
                                                    add("omnis"),
                                                }};
                                            }}),
                                            add(new ExperimentTemplateTargetInputFilter("suscipit",                 new String[]{{
                                                                add("nobis"),
                                                                add("eum"),
                                                                add("vero"),
                                                            }}) {{
                                                path = "magnam";
                                                values = new String[]{{
                                                    add("id"),
                                                    add("labore"),
                                                    add("labore"),
                                                }};
                                            }}),
                                            add(new ExperimentTemplateTargetInputFilter("et",                 new String[]{{
                                                                add("ullam"),
                                                                add("provident"),
                                                                add("quos"),
                                                            }}) {{
                                                path = "aspernatur";
                                                values = new String[]{{
                                                    add("magnam"),
                                                }};
                                            }}),
                                        }};
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("accusantium", "mollitia");
                                            put("reiciendis", "mollitia");
                                            put("ad", "eum");
                                        }};
                                        resourceArns = new String[]{{
                                            add("necessitatibus"),
                                        }};
                                        resourceTags = new java.util.HashMap<String, String>() {{
                                            put("nemo", "quasi");
                                        }};
                                        resourceType = "iure";
                                        selectionMode = "doloribus";
                                    }});
                                    put("maxime", new CreateExperimentTemplateTargetInput("nesciunt", "eos") {{
                                        filters = new org.openapis.openapi.models.shared.ExperimentTemplateTargetInputFilter[]{{
                                            add(new ExperimentTemplateTargetInputFilter("repudiandae",                 new String[]{{
                                                                add("expedita"),
                                                                add("nihil"),
                                                            }}) {{
                                                path = "facilis";
                                                values = new String[]{{
                                                    add("architecto"),
                                                    add("architecto"),
                                                }};
                                            }}),
                                            add(new ExperimentTemplateTargetInputFilter("consequuntur",                 new String[]{{
                                                                add("natus"),
                                                                add("magni"),
                                                                add("sunt"),
                                                            }}) {{
                                                path = "repellat";
                                                values = new String[]{{
                                                    add("sed"),
                                                    add("saepe"),
                                                    add("pariatur"),
                                                    add("accusantium"),
                                                }};
                                            }}),
                                            add(new ExperimentTemplateTargetInputFilter("odit",                 new String[]{{
                                                                add("accusantium"),
                                                                add("ab"),
                                                            }}) {{
                                                path = "quo";
                                                values = new String[]{{
                                                    add("pariatur"),
                                                    add("maxime"),
                                                    add("ea"),
                                                    add("excepturi"),
                                                }};
                                            }}),
                                        }};
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("quidem", "ipsam");
                                            put("voluptate", "autem");
                                            put("nam", "eaque");
                                            put("pariatur", "nemo");
                                        }};
                                        resourceArns = new String[]{{
                                            add("perferendis"),
                                            add("fugiat"),
                                            add("amet"),
                                            add("aut"),
                                        }};
                                        resourceTags = new java.util.HashMap<String, String>() {{
                                            put("corporis", "hic");
                                            put("libero", "nobis");
                                            put("dolores", "quis");
                                            put("totam", "dignissimos");
                                        }};
                                        resourceType = "eaque";
                                        selectionMode = "quis";
                                    }});
                                    put("perferendis", new CreateExperimentTemplateTargetInput("provident", "nobis") {{
                                        filters = new org.openapis.openapi.models.shared.ExperimentTemplateTargetInputFilter[]{{
                                            add(new ExperimentTemplateTargetInputFilter("nostrum",                 new String[]{{
                                                                add("recusandae"),
                                                                add("omnis"),
                                                                add("facilis"),
                                                                add("perspiciatis"),
                                                            }}) {{
                                                path = "minus";
                                                values = new String[]{{
                                                    add("dolor"),
                                                    add("vero"),
                                                }};
                                            }}),
                                        }};
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("porro", "consequuntur");
                                        }};
                                        resourceArns = new String[]{{
                                            add("error"),
                                            add("eaque"),
                                            add("occaecati"),
                                        }};
                                        resourceTags = new java.util.HashMap<String, String>() {{
                                            put("adipisci", "asperiores");
                                            put("earum", "modi");
                                            put("iste", "dolorum");
                                        }};
                                        resourceType = "deleniti";
                                        selectionMode = "pariatur";
                                    }});
                                }};
                            }};) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "quaerat";
                xAmzDate = "quos";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolorem";
            }};            

            CreateExperimentTemplateResponse res = sdk.sdk.createExperimentTemplate(req);

            if (res.createExperimentTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteExperimentTemplate

Deletes the specified experiment template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteExperimentTemplateRequest;
import org.openapis.openapi.models.operations.DeleteExperimentTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteExperimentTemplateRequest req = new DeleteExperimentTemplateRequest("qui") {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "hic";
                xAmzCredential = "excepturi";
                xAmzDate = "cum";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "reiciendis";
            }};            

            DeleteExperimentTemplateResponse res = sdk.sdk.deleteExperimentTemplate(req);

            if (res.deleteExperimentTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAction

Gets information about the specified FIS action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionRequest;
import org.openapis.openapi.models.operations.GetActionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetActionRequest req = new GetActionRequest("dolorum") {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "ipsa";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "iure";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "quaerat";
            }};            

            GetActionResponse res = sdk.sdk.getAction(req);

            if (res.getActionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExperiment

Gets information about the specified experiment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExperimentRequest;
import org.openapis.openapi.models.operations.GetExperimentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetExperimentRequest req = new GetExperimentRequest("quidem") {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "natus";
                xAmzDate = "eos";
                xAmzSecurityToken = "atque";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "fugiat";
            }};            

            GetExperimentResponse res = sdk.sdk.getExperiment(req);

            if (res.getExperimentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExperimentTemplate

Gets information about the specified experiment template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExperimentTemplateRequest;
import org.openapis.openapi.models.operations.GetExperimentTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetExperimentTemplateRequest req = new GetExperimentTemplateRequest("soluta") {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "voluptate";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            GetExperimentTemplateResponse res = sdk.sdk.getExperimentTemplate(req);

            if (res.getExperimentTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTargetResourceType

Gets information about the specified resource type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTargetResourceTypeRequest;
import org.openapis.openapi.models.operations.GetTargetResourceTypeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTargetResourceTypeRequest req = new GetTargetResourceTypeRequest("asperiores") {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "voluptate";
                xAmzDate = "id";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "aspernatur";
            }};            

            GetTargetResourceTypeResponse res = sdk.sdk.getTargetResourceType(req);

            if (res.getTargetResourceTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listActions

Lists the available FIS actions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListActionsRequest;
import org.openapis.openapi.models.operations.ListActionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListActionsRequest req = new ListActionsRequest() {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "optio";
                xAmzCredential = "accusamus";
                xAmzDate = "ad";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "deserunt";
                maxResults = 588317L;
                nextToken = "minima";
            }};            

            ListActionsResponse res = sdk.sdk.listActions(req);

            if (res.listActionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listExperimentTemplates

Lists your experiment templates.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListExperimentTemplatesRequest;
import org.openapis.openapi.models.operations.ListExperimentTemplatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListExperimentTemplatesRequest req = new ListExperimentTemplatesRequest() {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "similique";
                xAmzCredential = "alias";
                xAmzDate = "at";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "vel";
                maxResults = 798047L;
                nextToken = "officiis";
            }};            

            ListExperimentTemplatesResponse res = sdk.sdk.listExperimentTemplates(req);

            if (res.listExperimentTemplatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listExperiments

Lists your experiments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListExperimentsRequest;
import org.openapis.openapi.models.operations.ListExperimentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListExperimentsRequest req = new ListExperimentsRequest() {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "a";
                xAmzCredential = "esse";
                xAmzDate = "harum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "quisquam";
                maxResults = 947371L;
                nextToken = "amet";
            }};            

            ListExperimentsResponse res = sdk.sdk.listExperiments(req);

            if (res.listExperimentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags for the specified resource.

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
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("accusamus") {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "enim";
                xAmzCredential = "dolorem";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "totam";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "sit";
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

## listTargetResourceTypes

Lists the target resource types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTargetResourceTypesRequest;
import org.openapis.openapi.models.operations.ListTargetResourceTypesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTargetResourceTypesRequest req = new ListTargetResourceTypesRequest() {{
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "sed";
                xAmzCredential = "vel";
                xAmzDate = "libero";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "quam";
                maxResults = 214880L;
                nextToken = "incidunt";
            }};            

            ListTargetResourceTypesResponse res = sdk.sdk.listTargetResourceTypes(req);

            if (res.listTargetResourceTypesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startExperiment

Starts running an experiment from the specified experiment template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartExperimentRequest;
import org.openapis.openapi.models.operations.StartExperimentRequestBody;
import org.openapis.openapi.models.operations.StartExperimentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartExperimentRequest req = new StartExperimentRequest(                new StartExperimentRequestBody("cupiditate", "maxime") {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("soluta", "dicta");
                                    put("laborum", "totam");
                                    put("incidunt", "aspernatur");
                                    put("dolores", "distinctio");
                                }};
                            }};) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "quam";
                xAmzDate = "molestias";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "neque";
            }};            

            StartExperimentResponse res = sdk.sdk.startExperiment(req);

            if (res.startExperimentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopExperiment

Stops the specified experiment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopExperimentRequest;
import org.openapis.openapi.models.operations.StopExperimentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopExperimentRequest req = new StopExperimentRequest("magni") {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "ullam";
                xAmzDate = "nam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "cumque";
            }};            

            StopExperimentResponse res = sdk.sdk.stopExperiment(req);

            if (res.stopExperimentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Applies the specified tags to the specified resource.

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
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("et", "saepe");
                                                put("ipsum", "veritatis");
                                                put("nobis", "quos");
                                            }});, "tempore") {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "delectus";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "adipisci";
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

Removes the specified tags from the specified resource.

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
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("architecto") {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quas";
                xAmzDate = "itaque";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "est";
                xAmzSignedHeaders = "repellendus";
                tagKeys = new String[]{{
                    add("doloribus"),
                    add("ut"),
                    add("facilis"),
                    add("cupiditate"),
                }};
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

## updateExperimentTemplate

Updates the specified experiment template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateExperimentTemplateRequest;
import org.openapis.openapi.models.operations.UpdateExperimentTemplateRequestBody;
import org.openapis.openapi.models.operations.UpdateExperimentTemplateRequestBodyLogConfiguration;
import org.openapis.openapi.models.operations.UpdateExperimentTemplateResponse;
import org.openapis.openapi.models.shared.ExperimentTemplateCloudWatchLogsLogConfigurationInput;
import org.openapis.openapi.models.shared.ExperimentTemplateS3LogConfigurationInput;
import org.openapis.openapi.models.shared.ExperimentTemplateTargetInputFilter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateExperimentTemplateActionInputItem;
import org.openapis.openapi.models.shared.UpdateExperimentTemplateStopConditionInput;
import org.openapis.openapi.models.shared.UpdateExperimentTemplateTargetInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateExperimentTemplateRequest req = new UpdateExperimentTemplateRequest(                new UpdateExperimentTemplateRequestBody() {{
                                actions = new java.util.HashMap<String, org.openapis.openapi.models.shared.UpdateExperimentTemplateActionInputItem>() {{
                                    put("laudantium", new UpdateExperimentTemplateActionInputItem() {{
                                        actionId = "odio";
                                        description = "occaecati";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("quisquam", "vero");
                                            put("omnis", "quis");
                                            put("ipsum", "delectus");
                                            put("voluptate", "consectetur");
                                        }};
                                        startAfter = new String[]{{
                                            add("tenetur"),
                                            add("dignissimos"),
                                            add("hic"),
                                            add("distinctio"),
                                        }};
                                        targets = new java.util.HashMap<String, String>() {{
                                            put("odio", "similique");
                                            put("facilis", "vero");
                                            put("ducimus", "dolore");
                                            put("quibusdam", "illum");
                                        }};
                                    }});
                                }};
                                description = "sequi";
                                logConfiguration = new UpdateExperimentTemplateRequestBodyLogConfiguration() {{
                                    cloudWatchLogsConfiguration = new ExperimentTemplateCloudWatchLogsLogConfigurationInput("natus");;
                                    logSchemaVersion = 773326L;
                                    s3Configuration = new ExperimentTemplateS3LogConfigurationInput("aut") {{
                                        prefix = "voluptatibus";
                                    }};;
                                }};;
                                roleArn = "exercitationem";
                                stopConditions = new org.openapis.openapi.models.shared.UpdateExperimentTemplateStopConditionInput[]{{
                                    add(new UpdateExperimentTemplateStopConditionInput("maiores") {{
                                        source = "fugit";
                                        value = "porro";
                                    }}),
                                    add(new UpdateExperimentTemplateStopConditionInput("eligendi") {{
                                        source = "doloribus";
                                        value = "iusto";
                                    }}),
                                    add(new UpdateExperimentTemplateStopConditionInput("officia") {{
                                        source = "ducimus";
                                        value = "alias";
                                    }}),
                                    add(new UpdateExperimentTemplateStopConditionInput("ea") {{
                                        source = "tempora";
                                        value = "ipsam";
                                    }}),
                                }};
                                targets = new java.util.HashMap<String, org.openapis.openapi.models.shared.UpdateExperimentTemplateTargetInput>() {{
                                    put("vel", new UpdateExperimentTemplateTargetInput("provident", "ipsa") {{
                                        filters = new org.openapis.openapi.models.shared.ExperimentTemplateTargetInputFilter[]{{
                                            add(new ExperimentTemplateTargetInputFilter("laudantium",                 new String[]{{
                                                                add("dolor"),
                                                            }}) {{
                                                path = "magnam";
                                                values = new String[]{{
                                                    add("ex"),
                                                }};
                                            }}),
                                            add(new ExperimentTemplateTargetInputFilter("nulla",                 new String[]{{
                                                                add("voluptatibus"),
                                                                add("nostrum"),
                                                                add("sapiente"),
                                                            }}) {{
                                                path = "maiores";
                                                values = new String[]{{
                                                    add("ex"),
                                                }};
                                            }}),
                                            add(new ExperimentTemplateTargetInputFilter("aliquid",                 new String[]{{
                                                                add("magnam"),
                                                            }}) {{
                                                path = "quisquam";
                                                values = new String[]{{
                                                    add("ea"),
                                                    add("impedit"),
                                                    add("corporis"),
                                                    add("veniam"),
                                                }};
                                            }}),
                                            add(new ExperimentTemplateTargetInputFilter("eaque",                 new String[]{{
                                                                add("libero"),
                                                                add("aut"),
                                                                add("aut"),
                                                                add("deleniti"),
                                                            }}) {{
                                                path = "ea";
                                                values = new String[]{{
                                                    add("consectetur"),
                                                    add("recusandae"),
                                                    add("aspernatur"),
                                                    add("minima"),
                                                }};
                                            }}),
                                        }};
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("aliquam", "fugit");
                                            put("accusamus", "inventore");
                                            put("non", "et");
                                            put("dolorum", "laborum");
                                        }};
                                        resourceArns = new String[]{{
                                            add("velit"),
                                            add("eum"),
                                            add("autem"),
                                            add("nobis"),
                                        }};
                                        resourceTags = new java.util.HashMap<String, String>() {{
                                            put("assumenda", "nulla");
                                            put("voluptas", "libero");
                                            put("quasi", "tempora");
                                        }};
                                        resourceType = "numquam";
                                        selectionMode = "explicabo";
                                    }});
                                }};
                            }};, "molestiae") {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "odio";
                xAmzCredential = "eius";
                xAmzDate = "esse";
                xAmzSecurityToken = "esse";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "fuga";
            }};            

            UpdateExperimentTemplateResponse res = sdk.sdk.updateExperimentTemplate(req);

            if (res.updateExperimentTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
