# SDK

## Overview

This section provides documentation for the AWS RoboMaker API operations.

Amazon Web Services documentation
<https://docs.aws.amazon.com/robomaker/>
### Available Operations

* [batchDeleteWorlds](#batchdeleteworlds) - Deletes one or more worlds in a batch operation.
* [batchDescribeSimulationJob](#batchdescribesimulationjob) - Describes one or more simulation jobs.
* [~~cancelDeploymentJob~~](#canceldeploymentjob) - <p>Cancels the specified deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [cancelSimulationJob](#cancelsimulationjob) - Cancels the specified simulation job.
* [cancelSimulationJobBatch](#cancelsimulationjobbatch) - Cancels a simulation job batch. When you cancel a simulation job batch, you are also cancelling all of the active simulation jobs created as part of the batch. 
* [cancelWorldExportJob](#cancelworldexportjob) - Cancels the specified export job.
* [cancelWorldGenerationJob](#cancelworldgenerationjob) - Cancels the specified world generator job.
* [~~createDeploymentJob~~](#createdeploymentjob) - <p>Deploys a specific version of a robot application to robots in a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> <p>The robot application must have a numbered <code>applicationVersion</code> for consistency reasons. To create a new version, use <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p> <note> <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be accessible. </p> </note> :warning: **Deprecated**
* [~~createFleet~~](#createfleet) - <p>Creates a fleet, a logical group of robots running the same robot application.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> :warning: **Deprecated**
* [~~createRobot~~](#createrobot) - <p>Creates a robot.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> :warning: **Deprecated**
* [createRobotApplication](#createrobotapplication) - Creates a robot application. 
* [createRobotApplicationVersion](#createrobotapplicationversion) - Creates a version of a robot application.
* [createSimulationApplication](#createsimulationapplication) - Creates a simulation application.
* [createSimulationApplicationVersion](#createsimulationapplicationversion) - Creates a simulation application with a specific revision id.
* [createSimulationJob](#createsimulationjob) - <p>Creates a simulation job.</p> <note> <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be accessible. </p> </note>
* [createWorldExportJob](#createworldexportjob) - Creates a world export job.
* [createWorldGenerationJob](#createworldgenerationjob) - Creates worlds using the specified template.
* [createWorldTemplate](#createworldtemplate) - Creates a world template.
* [~~deleteFleet~~](#deletefleet) - <p>Deletes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [~~deleteRobot~~](#deleterobot) - <p>Deletes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [deleteRobotApplication](#deleterobotapplication) - Deletes a robot application.
* [deleteSimulationApplication](#deletesimulationapplication) - Deletes a simulation application.
* [deleteWorldTemplate](#deleteworldtemplate) - Deletes a world template.
* [~~deregisterRobot~~](#deregisterrobot) - <p>Deregisters a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [~~describeDeploymentJob~~](#describedeploymentjob) - <p>Describes a deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [~~describeFleet~~](#describefleet) - <p>Describes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [~~describeRobot~~](#describerobot) - <p>Describes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [describeRobotApplication](#describerobotapplication) - Describes a robot application.
* [describeSimulationApplication](#describesimulationapplication) - Describes a simulation application.
* [describeSimulationJob](#describesimulationjob) - Describes a simulation job.
* [describeSimulationJobBatch](#describesimulationjobbatch) - Describes a simulation job batch.
* [describeWorld](#describeworld) - Describes a world.
* [describeWorldExportJob](#describeworldexportjob) - Describes a world export job.
* [describeWorldGenerationJob](#describeworldgenerationjob) - Describes a world generation job.
* [describeWorldTemplate](#describeworldtemplate) - Describes a world template.
* [getWorldTemplateBody](#getworldtemplatebody) - Gets the world template body.
* [~~listDeploymentJobs~~](#listdeploymentjobs) - <p>Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [~~listFleets~~](#listfleets) - <p>Returns a list of fleets. You can optionally provide filters to retrieve specific fleets.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [listRobotApplications](#listrobotapplications) - Returns a list of robot application. You can optionally provide filters to retrieve specific robot applications.
* [~~listRobots~~](#listrobots) - <p>Returns a list of robots. You can optionally provide filters to retrieve specific robots.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [listSimulationApplications](#listsimulationapplications) - Returns a list of simulation applications. You can optionally provide filters to retrieve specific simulation applications. 
* [listSimulationJobBatches](#listsimulationjobbatches) - Returns a list simulation job batches. You can optionally provide filters to retrieve specific simulation batch jobs. 
* [listSimulationJobs](#listsimulationjobs) - Returns a list of simulation jobs. You can optionally provide filters to retrieve specific simulation jobs. 
* [listTagsForResource](#listtagsforresource) - Lists all tags on a AWS RoboMaker resource.
* [listWorldExportJobs](#listworldexportjobs) - Lists world export jobs.
* [listWorldGenerationJobs](#listworldgenerationjobs) - Lists world generator jobs.
* [listWorldTemplates](#listworldtemplates) - Lists world templates.
* [listWorlds](#listworlds) - Lists worlds.
* [~~registerRobot~~](#registerrobot) - <p>Registers a robot with a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> :warning: **Deprecated**
* [restartSimulationJob](#restartsimulationjob) - Restarts a running simulation job.
* [startSimulationJobBatch](#startsimulationjobbatch) - Starts a new simulation job batch. The batch is defined using one or more <code>SimulationJobRequest</code> objects. 
* [~~syncDeploymentJob~~](#syncdeploymentjob) - <p>Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [tagResource](#tagresource) - <p>Adds or edits tags for a AWS RoboMaker resource.</p> <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty strings. </p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>
* [untagResource](#untagresource) - <p>Removes the specified tags from the specified AWS RoboMaker resource.</p> <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key, use <a href="https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html"> <code>TagResource</code> </a>. </p>
* [updateRobotApplication](#updaterobotapplication) - Updates a robot application.
* [updateSimulationApplication](#updatesimulationapplication) - Updates a simulation application.
* [updateWorldTemplate](#updateworldtemplate) - Updates a world template.

## batchDeleteWorlds

Deletes one or more worlds in a batch operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDeleteWorldsRequest;
import org.openapis.openapi.models.operations.BatchDeleteWorldsRequestBody;
import org.openapis.openapi.models.operations.BatchDeleteWorldsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDeleteWorldsRequest req = new BatchDeleteWorldsRequest(                new BatchDeleteWorldsRequestBody(                new String[]{{
                                                add("debitis"),
                                                add("ipsa"),
                                            }});) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "suscipit";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "minus";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "voluptatum";
            }};            

            BatchDeleteWorldsResponse res = sdk.sdk.batchDeleteWorlds(req);

            if (res.batchDeleteWorldsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDescribeSimulationJob

Describes one or more simulation jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDescribeSimulationJobRequest;
import org.openapis.openapi.models.operations.BatchDescribeSimulationJobRequestBody;
import org.openapis.openapi.models.operations.BatchDescribeSimulationJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDescribeSimulationJobRequest req = new BatchDescribeSimulationJobRequest(                new BatchDescribeSimulationJobRequestBody(                new String[]{{
                                                add("nisi"),
                                                add("recusandae"),
                                                add("temporibus"),
                                            }});) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "quis";
                xAmzCredential = "veritatis";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "repellendus";
            }};            

            BatchDescribeSimulationJobResponse res = sdk.sdk.batchDescribeSimulationJob(req);

            if (res.batchDescribeSimulationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~cancelDeploymentJob~~

<p>Cancels the specified deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelDeploymentJobRequest;
import org.openapis.openapi.models.operations.CancelDeploymentJobRequestBody;
import org.openapis.openapi.models.operations.CancelDeploymentJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelDeploymentJobRequest req = new CancelDeploymentJobRequest(                new CancelDeploymentJobRequestBody("quo");) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "at";
                xAmzCredential = "at";
                xAmzDate = "maiores";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "quod";
            }};            

            CancelDeploymentJobResponse res = sdk.sdk.cancelDeploymentJob(req);

            if (res.cancelDeploymentJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelSimulationJob

Cancels the specified simulation job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelSimulationJobRequest;
import org.openapis.openapi.models.operations.CancelSimulationJobRequestBody;
import org.openapis.openapi.models.operations.CancelSimulationJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelSimulationJobRequest req = new CancelSimulationJobRequest(                new CancelSimulationJobRequestBody("totam");) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "dicta";
                xAmzDate = "nam";
                xAmzSecurityToken = "officia";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "fugit";
            }};            

            CancelSimulationJobResponse res = sdk.sdk.cancelSimulationJob(req);

            if (res.cancelSimulationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelSimulationJobBatch

Cancels a simulation job batch. When you cancel a simulation job batch, you are also cancelling all of the active simulation jobs created as part of the batch. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelSimulationJobBatchRequest;
import org.openapis.openapi.models.operations.CancelSimulationJobBatchRequestBody;
import org.openapis.openapi.models.operations.CancelSimulationJobBatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelSimulationJobBatchRequest req = new CancelSimulationJobBatchRequest(                new CancelSimulationJobBatchRequestBody("hic");) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "totam";
                xAmzCredential = "beatae";
                xAmzDate = "commodi";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            CancelSimulationJobBatchResponse res = sdk.sdk.cancelSimulationJobBatch(req);

            if (res.cancelSimulationJobBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelWorldExportJob

Cancels the specified export job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelWorldExportJobRequest;
import org.openapis.openapi.models.operations.CancelWorldExportJobRequestBody;
import org.openapis.openapi.models.operations.CancelWorldExportJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelWorldExportJobRequest req = new CancelWorldExportJobRequest(                new CancelWorldExportJobRequestBody("cum");) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "excepturi";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "natus";
            }};            

            CancelWorldExportJobResponse res = sdk.sdk.cancelWorldExportJob(req);

            if (res.cancelWorldExportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelWorldGenerationJob

Cancels the specified world generator job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelWorldGenerationJobRequest;
import org.openapis.openapi.models.operations.CancelWorldGenerationJobRequestBody;
import org.openapis.openapi.models.operations.CancelWorldGenerationJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelWorldGenerationJobRequest req = new CancelWorldGenerationJobRequest(                new CancelWorldGenerationJobRequestBody("iste");) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "natus";
                xAmzCredential = "laboriosam";
                xAmzDate = "hic";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "in";
            }};            

            CancelWorldGenerationJobResponse res = sdk.sdk.cancelWorldGenerationJob(req);

            if (res.cancelWorldGenerationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~createDeploymentJob~~

<p>Deploys a specific version of a robot application to robots in a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> <p>The robot application must have a numbered <code>applicationVersion</code> for consistency reasons. To create a new version, use <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p> <note> <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be accessible. </p> </note>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeploymentJobRequest;
import org.openapis.openapi.models.operations.CreateDeploymentJobRequestBody;
import org.openapis.openapi.models.operations.CreateDeploymentJobRequestBodyDeploymentConfig;
import org.openapis.openapi.models.operations.CreateDeploymentJobResponse;
import org.openapis.openapi.models.shared.DeploymentApplicationConfig;
import org.openapis.openapi.models.shared.DeploymentLaunchConfig;
import org.openapis.openapi.models.shared.S3Object;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeploymentJobRequest req = new CreateDeploymentJobRequest(                new CreateDeploymentJobRequestBody("iste",                 new org.openapis.openapi.models.shared.DeploymentApplicationConfig[]{{
                                                add(new DeploymentApplicationConfig("explicabo", "nobis",                 new DeploymentLaunchConfig("enim", "omnis") {{
                                                                    environmentVariables = new java.util.HashMap<String, String>() {{
                                                                        put("minima", "excepturi");
                                                                        put("accusantium", "iure");
                                                                    }};
                                                                    postLaunchFile = "culpa";
                                                                    preLaunchFile = "doloribus";
                                                                }};) {{
                                                    application = "saepe";
                                                    applicationVersion = "quidem";
                                                    launchConfig = new DeploymentLaunchConfig("dolorem", "corporis") {{
                                                        environmentVariables = new java.util.HashMap<String, String>() {{
                                                            put("ipsa", "reiciendis");
                                                        }};
                                                        launchFile = "est";
                                                        packageName = "mollitia";
                                                        postLaunchFile = "laborum";
                                                        preLaunchFile = "dolores";
                                                    }};
                                                }}),
                                                add(new DeploymentApplicationConfig("quia", "quis",                 new DeploymentLaunchConfig("vitae", "laborum") {{
                                                                    environmentVariables = new java.util.HashMap<String, String>() {{
                                                                        put("enim", "odit");
                                                                        put("quo", "sequi");
                                                                        put("tenetur", "ipsam");
                                                                    }};
                                                                    postLaunchFile = "id";
                                                                    preLaunchFile = "possimus";
                                                                }};) {{
                                                    application = "sapiente";
                                                    applicationVersion = "architecto";
                                                    launchConfig = new DeploymentLaunchConfig("velit", "error") {{
                                                        environmentVariables = new java.util.HashMap<String, String>() {{
                                                            put("dolorem", "culpa");
                                                            put("consequuntur", "repellat");
                                                            put("mollitia", "occaecati");
                                                        }};
                                                        launchFile = "numquam";
                                                        packageName = "commodi";
                                                        postLaunchFile = "quam";
                                                        preLaunchFile = "molestiae";
                                                    }};
                                                }}),
                                            }}, "aut") {{
                                deploymentConfig = new CreateDeploymentJobRequestBodyDeploymentConfig() {{
                                    concurrentDeploymentPercentage = 97101L;
                                    downloadConditionFile = new S3Object("error", "temporibus") {{
                                        etag = "laborum";
                                    }};;
                                    failureThresholdPercentage = 96098L;
                                    robotDeploymentTimeoutInSeconds = 971945L;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("vero", "nihil");
                                    put("praesentium", "voluptatibus");
                                    put("ipsa", "omnis");
                                    put("voluptate", "cum");
                                }};
                            }};) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "doloremque";
                xAmzCredential = "reprehenderit";
                xAmzDate = "ut";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "corporis";
            }};            

            CreateDeploymentJobResponse res = sdk.sdk.createDeploymentJob(req);

            if (res.createDeploymentJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~createFleet~~

<p>Creates a fleet, a logical group of robots running the same robot application.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFleetRequest;
import org.openapis.openapi.models.operations.CreateFleetRequestBody;
import org.openapis.openapi.models.operations.CreateFleetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFleetRequest req = new CreateFleetRequest(                new CreateFleetRequestBody("iusto") {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("harum", "enim");
                                }};
                            }};) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "repudiandae";
                xAmzDate = "quae";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "molestias";
            }};            

            CreateFleetResponse res = sdk.sdk.createFleet(req);

            if (res.createFleetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~createRobot~~

<p>Creates a robot.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRobotRequest;
import org.openapis.openapi.models.operations.CreateRobotRequestBody;
import org.openapis.openapi.models.operations.CreateRobotRequestBodyArchitectureEnum;
import org.openapis.openapi.models.operations.CreateRobotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRobotRequest req = new CreateRobotRequest(                new CreateRobotRequestBody(CreateRobotRequestBodyArchitectureEnum.ARMHF, "modi", "praesentium") {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("voluptates", "quasi");
                                    put("repudiandae", "sint");
                                    put("veritatis", "itaque");
                                }};
                            }};) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "enim";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "deserunt";
            }};            

            CreateRobotResponse res = sdk.sdk.createRobot(req);

            if (res.createRobotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRobotApplication

Creates a robot application. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRobotApplicationRequest;
import org.openapis.openapi.models.operations.CreateRobotApplicationRequestBody;
import org.openapis.openapi.models.operations.CreateRobotApplicationRequestBodyEnvironment;
import org.openapis.openapi.models.operations.CreateRobotApplicationRequestBodyRobotSoftwareSuite;
import org.openapis.openapi.models.operations.CreateRobotApplicationResponse;
import org.openapis.openapi.models.shared.ArchitectureEnum;
import org.openapis.openapi.models.shared.RobotSoftwareSuiteTypeEnum;
import org.openapis.openapi.models.shared.RobotSoftwareSuiteVersionTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRobotApplicationRequest req = new CreateRobotApplicationRequest(                new CreateRobotApplicationRequestBody("quibusdam",                 new CreateRobotApplicationRequestBodyRobotSoftwareSuite() {{
                                                name = RobotSoftwareSuiteTypeEnum.ROS;
                                                version = RobotSoftwareSuiteVersionTypeEnum.MELODIC;
                                            }};) {{
                                environment = new CreateRobotApplicationRequestBodyEnvironment() {{
                                    uri = "http://hungry-nanoparticle.name";
                                }};;
                                sources = new org.openapis.openapi.models.shared.SourceConfig[]{{
                                    add(new SourceConfig() {{
                                        architecture = ArchitectureEnum.X8664;
                                        s3Bucket = "assumenda";
                                        s3Key = "ipsam";
                                    }}),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("fugit", "dolorum");
                                }};
                            }};) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "facilis";
                xAmzDate = "tempore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "eum";
            }};            

            CreateRobotApplicationResponse res = sdk.sdk.createRobotApplication(req);

            if (res.createRobotApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRobotApplicationVersion

Creates a version of a robot application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRobotApplicationVersionRequest;
import org.openapis.openapi.models.operations.CreateRobotApplicationVersionRequestBody;
import org.openapis.openapi.models.operations.CreateRobotApplicationVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRobotApplicationVersionRequest req = new CreateRobotApplicationVersionRequest(                new CreateRobotApplicationVersionRequestBody("eligendi") {{
                                currentRevisionId = "sint";
                                imageDigest = "aliquid";
                                s3Etags = new String[]{{
                                    add("necessitatibus"),
                                    add("sint"),
                                    add("officia"),
                                }};
                            }};) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "a";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "in";
                xAmzSignature = "in";
                xAmzSignedHeaders = "illum";
            }};            

            CreateRobotApplicationVersionResponse res = sdk.sdk.createRobotApplicationVersion(req);

            if (res.createRobotApplicationVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSimulationApplication

Creates a simulation application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSimulationApplicationRequest;
import org.openapis.openapi.models.operations.CreateSimulationApplicationRequestBody;
import org.openapis.openapi.models.operations.CreateSimulationApplicationRequestBodyEnvironment;
import org.openapis.openapi.models.operations.CreateSimulationApplicationRequestBodyRenderingEngine;
import org.openapis.openapi.models.operations.CreateSimulationApplicationRequestBodyRobotSoftwareSuite;
import org.openapis.openapi.models.operations.CreateSimulationApplicationRequestBodySimulationSoftwareSuite;
import org.openapis.openapi.models.operations.CreateSimulationApplicationResponse;
import org.openapis.openapi.models.shared.ArchitectureEnum;
import org.openapis.openapi.models.shared.RenderingEngineTypeEnum;
import org.openapis.openapi.models.shared.RobotSoftwareSuiteTypeEnum;
import org.openapis.openapi.models.shared.RobotSoftwareSuiteVersionTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SimulationSoftwareSuiteTypeEnum;
import org.openapis.openapi.models.shared.SourceConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSimulationApplicationRequest req = new CreateSimulationApplicationRequest(                new CreateSimulationApplicationRequestBody("rerum",                 new CreateSimulationApplicationRequestBodyRobotSoftwareSuite() {{
                                                name = RobotSoftwareSuiteTypeEnum.ROS;
                                                version = RobotSoftwareSuiteVersionTypeEnum.MELODIC;
                                            }};,                 new CreateSimulationApplicationRequestBodySimulationSoftwareSuite() {{
                                                name = SimulationSoftwareSuiteTypeEnum.SIMULATION_RUNTIME;
                                                version = "facere";
                                            }};) {{
                                environment = new CreateSimulationApplicationRequestBodyEnvironment() {{
                                    uri = "http://humming-police.org";
                                }};;
                                renderingEngine = new CreateSimulationApplicationRequestBodyRenderingEngine() {{
                                    name = RenderingEngineTypeEnum.OGRE;
                                    version = "non";
                                }};;
                                sources = new org.openapis.openapi.models.shared.SourceConfig[]{{
                                    add(new SourceConfig() {{
                                        architecture = ArchitectureEnum.X8664;
                                        s3Bucket = "accusamus";
                                        s3Key = "delectus";
                                    }}),
                                    add(new SourceConfig() {{
                                        architecture = ArchitectureEnum.ARMHF;
                                        s3Bucket = "provident";
                                        s3Key = "nam";
                                    }}),
                                    add(new SourceConfig() {{
                                        architecture = ArchitectureEnum.ARM64;
                                        s3Bucket = "blanditiis";
                                        s3Key = "deleniti";
                                    }}),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("amet", "deserunt");
                                    put("nisi", "vel");
                                    put("natus", "omnis");
                                    put("molestiae", "perferendis");
                                }};
                            }};) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "distinctio";
                xAmzDate = "id";
                xAmzSecurityToken = "labore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "suscipit";
            }};            

            CreateSimulationApplicationResponse res = sdk.sdk.createSimulationApplication(req);

            if (res.createSimulationApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSimulationApplicationVersion

Creates a simulation application with a specific revision id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSimulationApplicationVersionRequest;
import org.openapis.openapi.models.operations.CreateSimulationApplicationVersionRequestBody;
import org.openapis.openapi.models.operations.CreateSimulationApplicationVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSimulationApplicationVersionRequest req = new CreateSimulationApplicationVersionRequest(                new CreateSimulationApplicationVersionRequestBody("nobis") {{
                                currentRevisionId = "eum";
                                imageDigest = "vero";
                                s3Etags = new String[]{{
                                    add("architecto"),
                                }};
                            }};) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "et";
                xAmzCredential = "excepturi";
                xAmzDate = "ullam";
                xAmzSecurityToken = "provident";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "sint";
            }};            

            CreateSimulationApplicationVersionResponse res = sdk.sdk.createSimulationApplicationVersion(req);

            if (res.createSimulationApplicationVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSimulationJob

<p>Creates a simulation job.</p> <note> <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be accessible. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSimulationJobRequest;
import org.openapis.openapi.models.operations.CreateSimulationJobRequestBody;
import org.openapis.openapi.models.operations.CreateSimulationJobRequestBodyCompute;
import org.openapis.openapi.models.operations.CreateSimulationJobRequestBodyFailureBehaviorEnum;
import org.openapis.openapi.models.operations.CreateSimulationJobRequestBodyLoggingConfig;
import org.openapis.openapi.models.operations.CreateSimulationJobRequestBodyOutputLocation;
import org.openapis.openapi.models.operations.CreateSimulationJobRequestBodyVpcConfig;
import org.openapis.openapi.models.operations.CreateSimulationJobResponse;
import org.openapis.openapi.models.shared.ComputeTypeEnum;
import org.openapis.openapi.models.shared.DataSourceConfig;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.ExitBehaviorEnum;
import org.openapis.openapi.models.shared.LaunchConfig;
import org.openapis.openapi.models.shared.PortForwardingConfig;
import org.openapis.openapi.models.shared.PortMapping;
import org.openapis.openapi.models.shared.RobotApplicationConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SimulationApplicationConfig;
import org.openapis.openapi.models.shared.Tool;
import org.openapis.openapi.models.shared.UploadBehaviorEnum;
import org.openapis.openapi.models.shared.UploadConfiguration;
import org.openapis.openapi.models.shared.WorldConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSimulationJobRequest req = new CreateSimulationJobRequest(                new CreateSimulationJobRequestBody("mollitia", 968962L) {{
                                clientRequestToken = "mollitia";
                                compute = new CreateSimulationJobRequestBodyCompute() {{
                                    computeType = ComputeTypeEnum.CPU;
                                    gpuUnitLimit = 431418L;
                                    simulationUnitLimit = 221262L;
                                }};;
                                dataSources = new org.openapis.openapi.models.shared.DataSourceConfig[]{{
                                    add(new DataSourceConfig("repudiandae", "ullam",                 new String[]{{
                                                        add("nihil"),
                                                        add("repellat"),
                                                        add("quibusdam"),
                                                    }}) {{
                                        destination = "odit";
                                        name = "Joyce Kertzmann";
                                        s3Bucket = "eius";
                                        s3Keys = new String[]{{
                                            add("deleniti"),
                                            add("facilis"),
                                            add("in"),
                                            add("architecto"),
                                        }};
                                        type = DataSourceTypeEnum.PREFIX;
                                    }}),
                                    add(new DataSourceConfig("illum", "pariatur",                 new String[]{{
                                                        add("ea"),
                                                        add("excepturi"),
                                                        add("odit"),
                                                        add("ea"),
                                                    }}) {{
                                        destination = "sed";
                                        name = "Al Bashirian";
                                        s3Bucket = "natus";
                                        s3Keys = new String[]{{
                                            add("sunt"),
                                        }};
                                        type = DataSourceTypeEnum.FILE;
                                    }}),
                                    add(new DataSourceConfig("perferendis", "fugiat",                 new String[]{{
                                                        add("aut"),
                                                    }}) {{
                                        destination = "accusantium";
                                        name = "Ebony Predovic";
                                        s3Bucket = "autem";
                                        s3Keys = new String[]{{
                                            add("eaque"),
                                            add("pariatur"),
                                            add("nemo"),
                                        }};
                                        type = DataSourceTypeEnum.FILE;
                                    }}),
                                    add(new DataSourceConfig("eos", "perferendis",                 new String[]{{
                                                        add("minus"),
                                                    }}) {{
                                        destination = "cumque";
                                        name = "Mindy Renner";
                                        s3Bucket = "quis";
                                        s3Keys = new String[]{{
                                            add("dignissimos"),
                                            add("eaque"),
                                            add("quis"),
                                        }};
                                        type = DataSourceTypeEnum.PREFIX;
                                    }}),
                                }};
                                failureBehavior = CreateSimulationJobRequestBodyFailureBehaviorEnum.FAIL;
                                loggingConfig = new CreateSimulationJobRequestBodyLoggingConfig() {{
                                    recordAllRosTopics = false;
                                }};;
                                outputLocation = new CreateSimulationJobRequestBodyOutputLocation() {{
                                    s3Bucket = "dolor";
                                    s3Prefix = "vero";
                                }};;
                                robotApplications = new org.openapis.openapi.models.shared.RobotApplicationConfig[]{{
                                    add(new RobotApplicationConfig("aspernatur",                 new LaunchConfig() {{
                                                        command = new String[]{{
                                                            add("amet"),
                                                        }};
                                                        environmentVariables = new java.util.HashMap<String, String>() {{
                                                            put("accusamus", "ad");
                                                            put("saepe", "suscipit");
                                                            put("deserunt", "provident");
                                                            put("minima", "repellendus");
                                                        }};
                                                        launchFile = "totam";
                                                        packageName = "similique";
                                                        portForwardingConfig = new PortForwardingConfig() {{
                                                            portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                add(new PortMapping(273542L, 425451L) {{
                                                                    applicationPort = 872651L;
                                                                    enableOnPublicIp = false;
                                                                    jobPort = 311860L;
                                                                }}),
                                                            }};
                                                        }};;
                                                        streamUI = false;
                                                    }};) {{
                                        application = "hic";
                                        applicationVersion = "recusandae";
                                        launchConfig = new LaunchConfig() {{
                                            command = new String[]{{
                                                add("facilis"),
                                                add("perspiciatis"),
                                                add("voluptatem"),
                                            }};
                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                put("consequuntur", "blanditiis");
                                                put("error", "eaque");
                                                put("occaecati", "rerum");
                                                put("adipisci", "asperiores");
                                            }};
                                            launchFile = "earum";
                                            packageName = "modi";
                                            portForwardingConfig = new PortForwardingConfig() {{
                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                    add(new PortMapping(864282L, 589910L) {{
                                                        applicationPort = 679091L;
                                                        enableOnPublicIp = false;
                                                        jobPort = 535633L;
                                                    }}),
                                                    add(new PortMapping(964490L, 311945L) {{
                                                        applicationPort = 750844L;
                                                        enableOnPublicIp = false;
                                                        jobPort = 730122L;
                                                    }}),
                                                    add(new PortMapping(212390L, 209843L) {{
                                                        applicationPort = 554242L;
                                                        enableOnPublicIp = false;
                                                        jobPort = 398221L;
                                                    }}),
                                                }};
                                            }};
                                            streamUI = false;
                                        }};
                                        tools = new org.openapis.openapi.models.shared.Tool[]{{
                                            add(new Tool("reiciendis", "amet") {{
                                                command = "qui";
                                                exitBehavior = ExitBehaviorEnum.FAIL;
                                                name = "Marshall Ritchie";
                                                streamOutputToCloudWatch = false;
                                                streamUI = false;
                                            }}),
                                        }};
                                        uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                            add(new UploadConfiguration("quidem", "voluptatibus", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                name = "Ms. Christine Beer";
                                                path = "quaerat";
                                                uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                            }}),
                                            add(new UploadConfiguration("voluptate", "dolorum", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                name = "Dr. Craig Littel DDS";
                                                path = "dolorum";
                                                uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                            }}),
                                            add(new UploadConfiguration("id", "saepe", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                name = "Terence Rau";
                                                path = "ipsum";
                                                uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                            }}),
                                        }};
                                        useDefaultTools = false;
                                        useDefaultUploadConfigurations = false;
                                    }}),
                                    add(new RobotApplicationConfig("architecto",                 new LaunchConfig() {{
                                                        command = new String[]{{
                                                            add("aut"),
                                                        }};
                                                        environmentVariables = new java.util.HashMap<String, String>() {{
                                                            put("itaque", "consequatur");
                                                            put("est", "repellendus");
                                                            put("porro", "doloribus");
                                                        }};
                                                        launchFile = "ut";
                                                        packageName = "facilis";
                                                        portForwardingConfig = new PortForwardingConfig() {{
                                                            portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                add(new PortMapping(512393L, 485628L) {{
                                                                    applicationPort = 181631L;
                                                                    enableOnPublicIp = false;
                                                                    jobPort = 63955L;
                                                                }}),
                                                                add(new PortMapping(787542L, 876506L) {{
                                                                    applicationPort = 580447L;
                                                                    enableOnPublicIp = false;
                                                                    jobPort = 977496L;
                                                                }}),
                                                                add(new PortMapping(218403L, 961571L) {{
                                                                    applicationPort = 606476L;
                                                                    enableOnPublicIp = false;
                                                                    jobPort = 338159L;
                                                                }}),
                                                            }};
                                                        }};;
                                                        streamUI = false;
                                                    }};) {{
                                        application = "quod";
                                        applicationVersion = "officiis";
                                        launchConfig = new LaunchConfig() {{
                                            command = new String[]{{
                                                add("dolorum"),
                                            }};
                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                put("esse", "harum");
                                                put("iusto", "ipsum");
                                                put("quisquam", "tenetur");
                                                put("amet", "tempore");
                                            }};
                                            launchFile = "accusamus";
                                            packageName = "numquam";
                                            portForwardingConfig = new PortForwardingConfig() {{
                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                    add(new PortMapping(518201L, 471752L) {{
                                                        applicationPort = 213312L;
                                                        enableOnPublicIp = false;
                                                        jobPort = 957451L;
                                                    }}),
                                                    add(new PortMapping(207470L, 153694L) {{
                                                        applicationPort = 25662L;
                                                        enableOnPublicIp = false;
                                                        jobPort = 711584L;
                                                    }}),
                                                }};
                                            }};
                                            streamUI = false;
                                        }};
                                        tools = new org.openapis.openapi.models.shared.Tool[]{{
                                            add(new Tool("cupiditate", "maxime") {{
                                                command = "libero";
                                                exitBehavior = ExitBehaviorEnum.FAIL;
                                                name = "Darryl Emard";
                                                streamOutputToCloudWatch = false;
                                                streamUI = false;
                                            }}),
                                            add(new Tool("dolores", "distinctio") {{
                                                command = "pariatur";
                                                exitBehavior = ExitBehaviorEnum.RESTART;
                                                name = "Kayla Larson";
                                                streamOutputToCloudWatch = false;
                                                streamUI = false;
                                            }}),
                                        }};
                                        uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                            add(new UploadConfiguration("magni", "odio", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                name = "Constance Mann";
                                                path = "neque";
                                                uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                            }}),
                                            add(new UploadConfiguration("saepe", "ipsum", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                name = "Miss Candice Weimann";
                                                path = "nobis";
                                                uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                            }}),
                                            add(new UploadConfiguration("labore", "adipisci", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                name = "Isaac Reynolds DVM";
                                                path = "dolorem";
                                                uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                            }}),
                                        }};
                                        useDefaultTools = false;
                                        useDefaultUploadConfigurations = false;
                                    }}),
                                }};
                                simulationApplications = new org.openapis.openapi.models.shared.SimulationApplicationConfig[]{{
                                    add(new SimulationApplicationConfig("numquam",                 new LaunchConfig() {{
                                                        command = new String[]{{
                                                            add("provident"),
                                                        }};
                                                        environmentVariables = new java.util.HashMap<String, String>() {{
                                                            put("molestiae", "magnam");
                                                        }};
                                                        launchFile = "odio";
                                                        packageName = "eius";
                                                        portForwardingConfig = new PortForwardingConfig() {{
                                                            portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                add(new PortMapping(683282L, 442015L) {{
                                                                    applicationPort = 456141L;
                                                                    enableOnPublicIp = false;
                                                                    jobPort = 524593L;
                                                                }}),
                                                                add(new PortMapping(283519L, 433439L) {{
                                                                    applicationPort = 695626L;
                                                                    enableOnPublicIp = false;
                                                                    jobPort = 852635L;
                                                                }}),
                                                            }};
                                                        }};;
                                                        streamUI = false;
                                                    }};) {{
                                        application = "consectetur";
                                        applicationVersion = "vero";
                                        launchConfig = new LaunchConfig() {{
                                            command = new String[]{{
                                                add("dignissimos"),
                                                add("hic"),
                                                add("distinctio"),
                                                add("quod"),
                                            }};
                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                put("similique", "facilis");
                                                put("vero", "ducimus");
                                            }};
                                            launchFile = "dolore";
                                            packageName = "quibusdam";
                                            portForwardingConfig = new PortForwardingConfig() {{
                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                    add(new PortMapping(773326L, 13236L) {{
                                                        applicationPort = 194342L;
                                                        enableOnPublicIp = false;
                                                        jobPort = 617877L;
                                                    }}),
                                                    add(new PortMapping(862310L, 148141L) {{
                                                        applicationPort = 974259L;
                                                        enableOnPublicIp = false;
                                                        jobPort = 347233L;
                                                    }}),
                                                    add(new PortMapping(985033L, 478370L) {{
                                                        applicationPort = 780427L;
                                                        enableOnPublicIp = false;
                                                        jobPort = 981830L;
                                                    }}),
                                                    add(new PortMapping(4048L, 639473L) {{
                                                        applicationPort = 753570L;
                                                        enableOnPublicIp = false;
                                                        jobPort = 497391L;
                                                    }}),
                                                }};
                                            }};
                                            streamUI = false;
                                        }};
                                        tools = new org.openapis.openapi.models.shared.Tool[]{{
                                            add(new Tool("ex", "laudantium") {{
                                                command = "ipsam";
                                                exitBehavior = ExitBehaviorEnum.FAIL;
                                                name = "Jessie Schuster";
                                                streamOutputToCloudWatch = false;
                                                streamUI = false;
                                            }}),
                                            add(new Tool("voluptatibus", "nostrum") {{
                                                command = "dicta";
                                                exitBehavior = ExitBehaviorEnum.FAIL;
                                                name = "Ryan Jaskolski";
                                                streamOutputToCloudWatch = false;
                                                streamUI = false;
                                            }}),
                                        }};
                                        uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                            add(new UploadConfiguration("inventore", "magnam", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                name = "Elbert Jenkins";
                                                path = "veniam";
                                                uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                            }}),
                                            add(new UploadConfiguration("libero", "aut", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                name = "Glenn Walter";
                                                path = "eaque";
                                                uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                            }}),
                                            add(new UploadConfiguration("et", "dolorum", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                name = "Myron Haag";
                                                path = "inventore";
                                                uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                            }}),
                                            add(new UploadConfiguration("nulla", "voluptas", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                name = "Lee Kemmer";
                                                path = "quas";
                                                uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                            }}),
                                        }};
                                        useDefaultTools = false;
                                        useDefaultUploadConfigurations = false;
                                        worldConfigs = new org.openapis.openapi.models.shared.WorldConfig[]{{
                                            add(new WorldConfig() {{
                                                world = "tempora";
                                            }}),
                                        }};
                                    }}),
                                    add(new SimulationApplicationConfig("explicabo",                 new LaunchConfig() {{
                                                        command = new String[]{{
                                                            add("occaecati"),
                                                            add("atque"),
                                                            add("et"),
                                                            add("esse"),
                                                        }};
                                                        environmentVariables = new java.util.HashMap<String, String>() {{
                                                            put("accusamus", "veritatis");
                                                            put("esse", "quod");
                                                            put("nam", "vero");
                                                            put("aliquid", "quasi");
                                                        }};
                                                        launchFile = "saepe";
                                                        packageName = "vel";
                                                        portForwardingConfig = new PortForwardingConfig() {{
                                                            portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                add(new PortMapping(580197L, 327720L) {{
                                                                    applicationPort = 473221L;
                                                                    enableOnPublicIp = false;
                                                                    jobPort = 699622L;
                                                                }}),
                                                                add(new PortMapping(27069L, 636061L) {{
                                                                    applicationPort = 716244L;
                                                                    enableOnPublicIp = false;
                                                                    jobPort = 756779L;
                                                                }}),
                                                                add(new PortMapping(766964L, 160538L) {{
                                                                    applicationPort = 731398L;
                                                                    enableOnPublicIp = false;
                                                                    jobPort = 240020L;
                                                                }}),
                                                            }};
                                                        }};;
                                                        streamUI = false;
                                                    }};) {{
                                        application = "suscipit";
                                        applicationVersion = "assumenda";
                                        launchConfig = new LaunchConfig() {{
                                            command = new String[]{{
                                                add("praesentium"),
                                            }};
                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                put("veritatis", "ipsa");
                                                put("id", "quidem");
                                                put("neque", "quo");
                                                put("illum", "quo");
                                            }};
                                            launchFile = "fuga";
                                            packageName = "eius";
                                            portForwardingConfig = new PortForwardingConfig() {{
                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                    add(new PortMapping(587600L, 9688L) {{
                                                        applicationPort = 373813L;
                                                        enableOnPublicIp = false;
                                                        jobPort = 69859L;
                                                    }}),
                                                }};
                                            }};
                                            streamUI = false;
                                        }};
                                        tools = new org.openapis.openapi.models.shared.Tool[]{{
                                            add(new Tool("aperiam", "distinctio") {{
                                                command = "debitis";
                                                exitBehavior = ExitBehaviorEnum.FAIL;
                                                name = "Emily Satterfield";
                                                streamOutputToCloudWatch = false;
                                                streamUI = false;
                                            }}),
                                            add(new Tool("odio", "occaecati") {{
                                                command = "quod";
                                                exitBehavior = ExitBehaviorEnum.FAIL;
                                                name = "Jackie Leannon";
                                                streamOutputToCloudWatch = false;
                                                streamUI = false;
                                            }}),
                                        }};
                                        uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                            add(new UploadConfiguration("praesentium", "consequuntur", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                name = "Todd Oberbrunner DDS";
                                                path = "eum";
                                                uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                            }}),
                                            add(new UploadConfiguration("nisi", "fugit", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                name = "Lee O'Conner";
                                                path = "explicabo";
                                                uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                            }}),
                                        }};
                                        useDefaultTools = false;
                                        useDefaultUploadConfigurations = false;
                                        worldConfigs = new org.openapis.openapi.models.shared.WorldConfig[]{{
                                            add(new WorldConfig() {{
                                                world = "ratione";
                                            }}),
                                        }};
                                    }}),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("minus", "quaerat");
                                }};
                                vpcConfig = new CreateSimulationJobRequestBodyVpcConfig() {{
                                    assignPublicIp = false;
                                    securityGroups = new String[]{{
                                        add("consectetur"),
                                        add("esse"),
                                        add("blanditiis"),
                                        add("provident"),
                                    }};
                                    subnets = new String[]{{
                                        add("nulla"),
                                        add("quas"),
                                        add("esse"),
                                        add("quasi"),
                                    }};
                                }};;
                            }};) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "error";
                xAmzCredential = "sint";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "eveniet";
            }};            

            CreateSimulationJobResponse res = sdk.sdk.createSimulationJob(req);

            if (res.createSimulationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorldExportJob

Creates a world export job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorldExportJobRequest;
import org.openapis.openapi.models.operations.CreateWorldExportJobRequestBody;
import org.openapis.openapi.models.operations.CreateWorldExportJobRequestBodyOutputLocation;
import org.openapis.openapi.models.operations.CreateWorldExportJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorldExportJobRequest req = new CreateWorldExportJobRequest(                new CreateWorldExportJobRequestBody("facere",                 new CreateWorldExportJobRequestBodyOutputLocation() {{
                                                s3Bucket = "veritatis";
                                                s3Prefix = "consequuntur";
                                            }};,                 new String[]{{
                                                add("similique"),
                                            }}) {{
                                clientRequestToken = "culpa";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("tenetur", "quae");
                                    put("earum", "vel");
                                }};
                            }};) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "eius";
                xAmzCredential = "libero";
                xAmzDate = "illum";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "aliquam";
            }};            

            CreateWorldExportJobResponse res = sdk.sdk.createWorldExportJob(req);

            if (res.createWorldExportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorldGenerationJob

Creates worlds using the specified template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorldGenerationJobRequest;
import org.openapis.openapi.models.operations.CreateWorldGenerationJobRequestBody;
import org.openapis.openapi.models.operations.CreateWorldGenerationJobRequestBodyWorldCount;
import org.openapis.openapi.models.operations.CreateWorldGenerationJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorldGenerationJobRequest req = new CreateWorldGenerationJobRequest(                new CreateWorldGenerationJobRequestBody("dicta",                 new CreateWorldGenerationJobRequestBodyWorldCount() {{
                                                floorplanCount = 355369L;
                                                interiorCountPerFloorplan = 443879L;
                                            }};) {{
                                clientRequestToken = "ullam";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("aut", "voluptatum");
                                    put("qui", "quibusdam");
                                }};
                                worldTags = new java.util.HashMap<String, String>() {{
                                    put("deleniti", "itaque");
                                    put("dolorum", "architecto");
                                }};
                            }};) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "quasi";
                xAmzDate = "at";
                xAmzSecurityToken = "et";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "ipsa";
            }};            

            CreateWorldGenerationJobResponse res = sdk.sdk.createWorldGenerationJob(req);

            if (res.createWorldGenerationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorldTemplate

Creates a world template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorldTemplateRequest;
import org.openapis.openapi.models.operations.CreateWorldTemplateRequestBody;
import org.openapis.openapi.models.operations.CreateWorldTemplateRequestBodyTemplateLocation;
import org.openapis.openapi.models.operations.CreateWorldTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorldTemplateRequest req = new CreateWorldTemplateRequest(                new CreateWorldTemplateRequestBody() {{
                                clientRequestToken = "veritatis";
                                name = "Sherry Morar IV";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("laudantium", "eum");
                                }};
                                templateBody = "mollitia";
                                templateLocation = new CreateWorldTemplateRequestBodyTemplateLocation() {{
                                    s3Bucket = "ab";
                                    s3Key = "corrupti";
                                }};;
                            }};) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "dolor";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "explicabo";
            }};            

            CreateWorldTemplateResponse res = sdk.sdk.createWorldTemplate(req);

            if (res.createWorldTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~deleteFleet~~

<p>Deletes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFleetRequest;
import org.openapis.openapi.models.operations.DeleteFleetRequestBody;
import org.openapis.openapi.models.operations.DeleteFleetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFleetRequest req = new DeleteFleetRequest(                new DeleteFleetRequestBody("aut");) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "maiores";
                xAmzDate = "natus";
                xAmzSecurityToken = "velit";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "voluptas";
            }};            

            DeleteFleetResponse res = sdk.sdk.deleteFleet(req);

            if (res.deleteFleetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~deleteRobot~~

<p>Deletes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRobotRequest;
import org.openapis.openapi.models.operations.DeleteRobotRequestBody;
import org.openapis.openapi.models.operations.DeleteRobotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRobotRequest req = new DeleteRobotRequest(                new DeleteRobotRequestBody("aperiam");) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "consequuntur";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "officia";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "dignissimos";
            }};            

            DeleteRobotResponse res = sdk.sdk.deleteRobot(req);

            if (res.deleteRobotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRobotApplication

Deletes a robot application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRobotApplicationRequest;
import org.openapis.openapi.models.operations.DeleteRobotApplicationRequestBody;
import org.openapis.openapi.models.operations.DeleteRobotApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRobotApplicationRequest req = new DeleteRobotApplicationRequest(                new DeleteRobotApplicationRequestBody("asperiores") {{
                                applicationVersion = "nemo";
                            }};) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "porro";
                xAmzDate = "quod";
                xAmzSecurityToken = "labore";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "adipisci";
            }};            

            DeleteRobotApplicationResponse res = sdk.sdk.deleteRobotApplication(req);

            if (res.deleteRobotApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSimulationApplication

Deletes a simulation application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSimulationApplicationRequest;
import org.openapis.openapi.models.operations.DeleteSimulationApplicationRequestBody;
import org.openapis.openapi.models.operations.DeleteSimulationApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSimulationApplicationRequest req = new DeleteSimulationApplicationRequest(                new DeleteSimulationApplicationRequestBody("id") {{
                                applicationVersion = "suscipit";
                            }};) {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "est";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "totam";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "vel";
            }};            

            DeleteSimulationApplicationResponse res = sdk.sdk.deleteSimulationApplication(req);

            if (res.deleteSimulationApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWorldTemplate

Deletes a world template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorldTemplateRequest;
import org.openapis.openapi.models.operations.DeleteWorldTemplateRequestBody;
import org.openapis.openapi.models.operations.DeleteWorldTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWorldTemplateRequest req = new DeleteWorldTemplateRequest(                new DeleteWorldTemplateRequestBody("quos");) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "labore";
                xAmzCredential = "possimus";
                xAmzDate = "facilis";
                xAmzSecurityToken = "cum";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "in";
            }};            

            DeleteWorldTemplateResponse res = sdk.sdk.deleteWorldTemplate(req);

            if (res.deleteWorldTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~deregisterRobot~~

<p>Deregisters a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterRobotRequest;
import org.openapis.openapi.models.operations.DeregisterRobotRequestBody;
import org.openapis.openapi.models.operations.DeregisterRobotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterRobotRequest req = new DeregisterRobotRequest(                new DeregisterRobotRequestBody("reiciendis", "assumenda");) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "aliquid";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "cum";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "in";
            }};            

            DeregisterRobotResponse res = sdk.sdk.deregisterRobot(req);

            if (res.deregisterRobotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~describeDeploymentJob~~

<p>Describes a deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDeploymentJobRequest;
import org.openapis.openapi.models.operations.DescribeDeploymentJobRequestBody;
import org.openapis.openapi.models.operations.DescribeDeploymentJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDeploymentJobRequest req = new DescribeDeploymentJobRequest(                new DescribeDeploymentJobRequestBody("earum");) {{
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "doloribus";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "saepe";
            }};            

            DescribeDeploymentJobResponse res = sdk.sdk.describeDeploymentJob(req);

            if (res.describeDeploymentJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~describeFleet~~

<p>Describes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFleetRequest;
import org.openapis.openapi.models.operations.DescribeFleetRequestBody;
import org.openapis.openapi.models.operations.DescribeFleetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFleetRequest req = new DescribeFleetRequest(                new DescribeFleetRequestBody("dolore");) {{
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "adipisci";
                xAmzDate = "non";
                xAmzSecurityToken = "amet";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "dignissimos";
            }};            

            DescribeFleetResponse res = sdk.sdk.describeFleet(req);

            if (res.describeFleetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~describeRobot~~

<p>Describes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRobotRequest;
import org.openapis.openapi.models.operations.DescribeRobotRequestBody;
import org.openapis.openapi.models.operations.DescribeRobotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRobotRequest req = new DescribeRobotRequest(                new DescribeRobotRequestBody("debitis");) {{
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "harum";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "libero";
            }};            

            DescribeRobotResponse res = sdk.sdk.describeRobot(req);

            if (res.describeRobotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRobotApplication

Describes a robot application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRobotApplicationRequest;
import org.openapis.openapi.models.operations.DescribeRobotApplicationRequestBody;
import org.openapis.openapi.models.operations.DescribeRobotApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRobotApplicationRequest req = new DescribeRobotApplicationRequest(                new DescribeRobotApplicationRequestBody("accusamus") {{
                                applicationVersion = "similique";
                            }};) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "voluptas";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "nobis";
            }};            

            DescribeRobotApplicationResponse res = sdk.sdk.describeRobotApplication(req);

            if (res.describeRobotApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSimulationApplication

Describes a simulation application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSimulationApplicationRequest;
import org.openapis.openapi.models.operations.DescribeSimulationApplicationRequestBody;
import org.openapis.openapi.models.operations.DescribeSimulationApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSimulationApplicationRequest req = new DescribeSimulationApplicationRequest(                new DescribeSimulationApplicationRequestBody("adipisci") {{
                                applicationVersion = "minus";
                            }};) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "in";
                xAmzDate = "dolore";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "temporibus";
            }};            

            DescribeSimulationApplicationResponse res = sdk.sdk.describeSimulationApplication(req);

            if (res.describeSimulationApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSimulationJob

Describes a simulation job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSimulationJobRequest;
import org.openapis.openapi.models.operations.DescribeSimulationJobRequestBody;
import org.openapis.openapi.models.operations.DescribeSimulationJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSimulationJobRequest req = new DescribeSimulationJobRequest(                new DescribeSimulationJobRequestBody("adipisci");) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "quas";
                xAmzDate = "hic";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "corrupti";
            }};            

            DescribeSimulationJobResponse res = sdk.sdk.describeSimulationJob(req);

            if (res.describeSimulationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSimulationJobBatch

Describes a simulation job batch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSimulationJobBatchRequest;
import org.openapis.openapi.models.operations.DescribeSimulationJobBatchRequestBody;
import org.openapis.openapi.models.operations.DescribeSimulationJobBatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSimulationJobBatchRequest req = new DescribeSimulationJobBatchRequest(                new DescribeSimulationJobBatchRequestBody("totam");) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "nobis";
                xAmzDate = "sit";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "reiciendis";
            }};            

            DescribeSimulationJobBatchResponse res = sdk.sdk.describeSimulationJobBatch(req);

            if (res.describeSimulationJobBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWorld

Describes a world.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWorldRequest;
import org.openapis.openapi.models.operations.DescribeWorldRequestBody;
import org.openapis.openapi.models.operations.DescribeWorldResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWorldRequest req = new DescribeWorldRequest(                new DescribeWorldRequestBody("asperiores");) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "expedita";
                xAmzDate = "ab";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "laborum";
            }};            

            DescribeWorldResponse res = sdk.sdk.describeWorld(req);

            if (res.describeWorldResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWorldExportJob

Describes a world export job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWorldExportJobRequest;
import org.openapis.openapi.models.operations.DescribeWorldExportJobRequestBody;
import org.openapis.openapi.models.operations.DescribeWorldExportJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWorldExportJobRequest req = new DescribeWorldExportJobRequest(                new DescribeWorldExportJobRequestBody("in");) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "explicabo";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "unde";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "suscipit";
            }};            

            DescribeWorldExportJobResponse res = sdk.sdk.describeWorldExportJob(req);

            if (res.describeWorldExportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWorldGenerationJob

Describes a world generation job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWorldGenerationJobRequest;
import org.openapis.openapi.models.operations.DescribeWorldGenerationJobRequestBody;
import org.openapis.openapi.models.operations.DescribeWorldGenerationJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWorldGenerationJobRequest req = new DescribeWorldGenerationJobRequest(                new DescribeWorldGenerationJobRequestBody("debitis");) {{
                xAmzAlgorithm = "illo";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "perferendis";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "sed";
            }};            

            DescribeWorldGenerationJobResponse res = sdk.sdk.describeWorldGenerationJob(req);

            if (res.describeWorldGenerationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWorldTemplate

Describes a world template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWorldTemplateRequest;
import org.openapis.openapi.models.operations.DescribeWorldTemplateRequestBody;
import org.openapis.openapi.models.operations.DescribeWorldTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWorldTemplateRequest req = new DescribeWorldTemplateRequest(                new DescribeWorldTemplateRequestBody("eius");) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "ea";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "quos";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "tempora";
            }};            

            DescribeWorldTemplateResponse res = sdk.sdk.describeWorldTemplate(req);

            if (res.describeWorldTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorldTemplateBody

Gets the world template body.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorldTemplateBodyRequest;
import org.openapis.openapi.models.operations.GetWorldTemplateBodyRequestBody;
import org.openapis.openapi.models.operations.GetWorldTemplateBodyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWorldTemplateBodyRequest req = new GetWorldTemplateBodyRequest(                new GetWorldTemplateBodyRequestBody() {{
                                generationJob = "voluptate";
                                template = "reiciendis";
                            }};) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "sit";
                xAmzCredential = "non";
                xAmzDate = "officiis";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "quaerat";
            }};            

            GetWorldTemplateBodyResponse res = sdk.sdk.getWorldTemplateBody(req);

            if (res.getWorldTemplateBodyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~listDeploymentJobs~~

<p>Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeploymentJobsRequest;
import org.openapis.openapi.models.operations.ListDeploymentJobsRequestBody;
import org.openapis.openapi.models.operations.ListDeploymentJobsResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDeploymentJobsRequest req = new ListDeploymentJobsRequest(                new ListDeploymentJobsRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Ian Balistreri";
                                        values = new String[]{{
                                            add("minima"),
                                            add("recusandae"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Dr. Jody Cummings";
                                        values = new String[]{{
                                            add("in"),
                                            add("officiis"),
                                        }};
                                    }}),
                                }};
                                maxResults = 104627L;
                                nextToken = "laudantium";
                            }};) {{
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "cum";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "error";
                maxResults = "hic";
                nextToken = "expedita";
            }};            

            ListDeploymentJobsResponse res = sdk.sdk.listDeploymentJobs(req);

            if (res.listDeploymentJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~listFleets~~

<p>Returns a list of fleets. You can optionally provide filters to retrieve specific fleets.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFleetsRequest;
import org.openapis.openapi.models.operations.ListFleetsRequestBody;
import org.openapis.openapi.models.operations.ListFleetsResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFleetsRequest req = new ListFleetsRequest(                new ListFleetsRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Wesley Nikolaus";
                                        values = new String[]{{
                                            add("tempora"),
                                            add("atque"),
                                            add("fugit"),
                                            add("ut"),
                                        }};
                                    }}),
                                }};
                                maxResults = 856303L;
                                nextToken = "voluptatem";
                            }};) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "magnam";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "esse";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "sit";
                maxResults = "voluptatum";
                nextToken = "quas";
            }};            

            ListFleetsResponse res = sdk.sdk.listFleets(req);

            if (res.listFleetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRobotApplications

Returns a list of robot application. You can optionally provide filters to retrieve specific robot applications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRobotApplicationsRequest;
import org.openapis.openapi.models.operations.ListRobotApplicationsRequestBody;
import org.openapis.openapi.models.operations.ListRobotApplicationsResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRobotApplicationsRequest req = new ListRobotApplicationsRequest(                new ListRobotApplicationsRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Mattie Jaskolski III";
                                        values = new String[]{{
                                            add("saepe"),
                                            add("error"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Eva Wisozk";
                                        values = new String[]{{
                                            add("architecto"),
                                        }};
                                    }}),
                                }};
                                maxResults = 577140L;
                                nextToken = "labore";
                                versionQualifier = "quidem";
                            }};) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "nam";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "laboriosam";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "amet";
                maxResults = "deserunt";
                nextToken = "voluptate";
            }};            

            ListRobotApplicationsResponse res = sdk.sdk.listRobotApplications(req);

            if (res.listRobotApplicationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~listRobots~~

<p>Returns a list of robots. You can optionally provide filters to retrieve specific robots.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRobotsRequest;
import org.openapis.openapi.models.operations.ListRobotsRequestBody;
import org.openapis.openapi.models.operations.ListRobotsResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRobotsRequest req = new ListRobotsRequest(                new ListRobotsRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Marcos Windler MD";
                                        values = new String[]{{
                                            add("reprehenderit"),
                                            add("facere"),
                                            add("fuga"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Miss Hubert Hartmann";
                                        values = new String[]{{
                                            add("atque"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Tabitha Leannon";
                                        values = new String[]{{
                                            add("et"),
                                            add("esse"),
                                            add("amet"),
                                            add("assumenda"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Leah Mueller";
                                        values = new String[]{{
                                            add("natus"),
                                            add("minima"),
                                            add("aspernatur"),
                                            add("ex"),
                                        }};
                                    }}),
                                }};
                                maxResults = 980581L;
                                nextToken = "corrupti";
                            }};) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "error";
                xAmzCredential = "blanditiis";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "atque";
                maxResults = "sunt";
                nextToken = "recusandae";
            }};            

            ListRobotsResponse res = sdk.sdk.listRobots(req);

            if (res.listRobotsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSimulationApplications

Returns a list of simulation applications. You can optionally provide filters to retrieve specific simulation applications. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSimulationApplicationsRequest;
import org.openapis.openapi.models.operations.ListSimulationApplicationsRequestBody;
import org.openapis.openapi.models.operations.ListSimulationApplicationsResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSimulationApplicationsRequest req = new ListSimulationApplicationsRequest(                new ListSimulationApplicationsRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Lela Baumbach Jr.";
                                        values = new String[]{{
                                            add("dolores"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Vanessa Franecki";
                                        values = new String[]{{
                                            add("saepe"),
                                            add("consequuntur"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Frankie Metz";
                                        values = new String[]{{
                                            add("occaecati"),
                                            add("consequuntur"),
                                            add("fugit"),
                                            add("id"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Mrs. Bessie Muller";
                                        values = new String[]{{
                                            add("non"),
                                            add("vero"),
                                            add("doloremque"),
                                            add("iure"),
                                        }};
                                    }}),
                                }};
                                maxResults = 59944L;
                                nextToken = "totam";
                                versionQualifier = "quae";
                            }};) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "eveniet";
                xAmzCredential = "qui";
                xAmzDate = "cum";
                xAmzSecurityToken = "iure";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "ratione";
                maxResults = "laborum";
                nextToken = "distinctio";
            }};            

            ListSimulationApplicationsResponse res = sdk.sdk.listSimulationApplications(req);

            if (res.listSimulationApplicationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSimulationJobBatches

Returns a list simulation job batches. You can optionally provide filters to retrieve specific simulation batch jobs. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSimulationJobBatchesRequest;
import org.openapis.openapi.models.operations.ListSimulationJobBatchesRequestBody;
import org.openapis.openapi.models.operations.ListSimulationJobBatchesResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSimulationJobBatchesRequest req = new ListSimulationJobBatchesRequest(                new ListSimulationJobBatchesRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Mrs. Geraldine Zulauf";
                                        values = new String[]{{
                                            add("mollitia"),
                                            add("voluptas"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Shawna Wisozk";
                                        values = new String[]{{
                                            add("dolore"),
                                            add("dolorum"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Amy Walsh";
                                        values = new String[]{{
                                            add("ex"),
                                            add("ut"),
                                        }};
                                    }}),
                                }};
                                maxResults = 633062L;
                                nextToken = "adipisci";
                            }};) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "eum";
                xAmzDate = "nemo";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "provident";
                maxResults = "quis";
                nextToken = "eum";
            }};            

            ListSimulationJobBatchesResponse res = sdk.sdk.listSimulationJobBatches(req);

            if (res.listSimulationJobBatchesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSimulationJobs

Returns a list of simulation jobs. You can optionally provide filters to retrieve specific simulation jobs. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSimulationJobsRequest;
import org.openapis.openapi.models.operations.ListSimulationJobsRequestBody;
import org.openapis.openapi.models.operations.ListSimulationJobsResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSimulationJobsRequest req = new ListSimulationJobsRequest(                new ListSimulationJobsRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Marion Boyer";
                                        values = new String[]{{
                                            add("provident"),
                                            add("possimus"),
                                            add("animi"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Beth Bashirian";
                                        values = new String[]{{
                                            add("in"),
                                            add("nam"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Oliver Osinski";
                                        values = new String[]{{
                                            add("molestias"),
                                            add("officiis"),
                                            add("sapiente"),
                                            add("cumque"),
                                        }};
                                    }}),
                                }};
                                maxResults = 113486L;
                                nextToken = "rerum";
                            }};) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "quis";
                xAmzCredential = "inventore";
                xAmzDate = "fugit";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "perferendis";
                maxResults = "velit";
                nextToken = "aspernatur";
            }};            

            ListSimulationJobsResponse res = sdk.sdk.listSimulationJobs(req);

            if (res.listSimulationJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists all tags on a AWS RoboMaker resource.

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
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("eius") {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "at";
                xAmzCredential = "impedit";
                xAmzDate = "eos";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "dicta";
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

## listWorldExportJobs

Lists world export jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorldExportJobsRequest;
import org.openapis.openapi.models.operations.ListWorldExportJobsRequestBody;
import org.openapis.openapi.models.operations.ListWorldExportJobsResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorldExportJobsRequest req = new ListWorldExportJobsRequest(                new ListWorldExportJobsRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Rene Weber";
                                        values = new String[]{{
                                            add("eaque"),
                                            add("earum"),
                                            add("perspiciatis"),
                                            add("maiores"),
                                        }};
                                    }}),
                                }};
                                maxResults = 891801L;
                                nextToken = "aliquid";
                            }};) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "dolorem";
                xAmzDate = "fugit";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "ratione";
                maxResults = "animi";
                nextToken = "necessitatibus";
            }};            

            ListWorldExportJobsResponse res = sdk.sdk.listWorldExportJobs(req);

            if (res.listWorldExportJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorldGenerationJobs

Lists world generator jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorldGenerationJobsRequest;
import org.openapis.openapi.models.operations.ListWorldGenerationJobsRequestBody;
import org.openapis.openapi.models.operations.ListWorldGenerationJobsResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorldGenerationJobsRequest req = new ListWorldGenerationJobsRequest(                new ListWorldGenerationJobsRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Catherine Kuphal";
                                        values = new String[]{{
                                            add("adipisci"),
                                            add("quasi"),
                                        }};
                                    }}),
                                }};
                                maxResults = 169025L;
                                nextToken = "doloribus";
                            }};) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "ipsa";
                xAmzDate = "tempora";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "dicta";
                maxResults = "iusto";
                nextToken = "esse";
            }};            

            ListWorldGenerationJobsResponse res = sdk.sdk.listWorldGenerationJobs(req);

            if (res.listWorldGenerationJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorldTemplates

Lists world templates.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorldTemplatesRequest;
import org.openapis.openapi.models.operations.ListWorldTemplatesRequestBody;
import org.openapis.openapi.models.operations.ListWorldTemplatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorldTemplatesRequest req = new ListWorldTemplatesRequest(                new ListWorldTemplatesRequestBody() {{
                                maxResults = 979963L;
                                nextToken = "reiciendis";
                            }};) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "fugiat";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "tempora";
                maxResults = "esse";
                nextToken = "ex";
            }};            

            ListWorldTemplatesResponse res = sdk.sdk.listWorldTemplates(req);

            if (res.listWorldTemplatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorlds

Lists worlds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorldsRequest;
import org.openapis.openapi.models.operations.ListWorldsRequestBody;
import org.openapis.openapi.models.operations.ListWorldsResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorldsRequest req = new ListWorldsRequest(                new ListWorldsRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Janie Casper";
                                        values = new String[]{{
                                            add("aliquid"),
                                            add("officia"),
                                            add("suscipit"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Lisa Kemmer";
                                        values = new String[]{{
                                            add("ab"),
                                            add("error"),
                                            add("possimus"),
                                        }};
                                    }}),
                                }};
                                maxResults = 913992L;
                                nextToken = "mollitia";
                            }};) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "libero";
                xAmzCredential = "ad";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "enim";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "repellendus";
                maxResults = "ex";
                nextToken = "quo";
            }};            

            ListWorldsResponse res = sdk.sdk.listWorlds(req);

            if (res.listWorldsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~registerRobot~~

<p>Registers a robot with a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterRobotRequest;
import org.openapis.openapi.models.operations.RegisterRobotRequestBody;
import org.openapis.openapi.models.operations.RegisterRobotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterRobotRequest req = new RegisterRobotRequest(                new RegisterRobotRequestBody("ut", "ad");) {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "molestias";
                xAmzDate = "cum";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "voluptatum";
            }};            

            RegisterRobotResponse res = sdk.sdk.registerRobot(req);

            if (res.registerRobotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## restartSimulationJob

Restarts a running simulation job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RestartSimulationJobRequest;
import org.openapis.openapi.models.operations.RestartSimulationJobRequestBody;
import org.openapis.openapi.models.operations.RestartSimulationJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RestartSimulationJobRequest req = new RestartSimulationJobRequest(                new RestartSimulationJobRequestBody("veritatis");) {{
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "est";
                xAmzCredential = "culpa";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "architecto";
            }};            

            RestartSimulationJobResponse res = sdk.sdk.restartSimulationJob(req);

            if (res.restartSimulationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startSimulationJobBatch

Starts a new simulation job batch. The batch is defined using one or more <code>SimulationJobRequest</code> objects. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartSimulationJobBatchRequest;
import org.openapis.openapi.models.operations.StartSimulationJobBatchRequestBody;
import org.openapis.openapi.models.operations.StartSimulationJobBatchRequestBodyBatchPolicy;
import org.openapis.openapi.models.operations.StartSimulationJobBatchResponse;
import org.openapis.openapi.models.shared.Compute;
import org.openapis.openapi.models.shared.ComputeTypeEnum;
import org.openapis.openapi.models.shared.DataSourceConfig;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.ExitBehaviorEnum;
import org.openapis.openapi.models.shared.FailureBehaviorEnum;
import org.openapis.openapi.models.shared.LaunchConfig;
import org.openapis.openapi.models.shared.LoggingConfig;
import org.openapis.openapi.models.shared.OutputLocation;
import org.openapis.openapi.models.shared.PortForwardingConfig;
import org.openapis.openapi.models.shared.PortMapping;
import org.openapis.openapi.models.shared.RobotApplicationConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SimulationApplicationConfig;
import org.openapis.openapi.models.shared.SimulationJobRequest;
import org.openapis.openapi.models.shared.Tool;
import org.openapis.openapi.models.shared.UploadBehaviorEnum;
import org.openapis.openapi.models.shared.UploadConfiguration;
import org.openapis.openapi.models.shared.VPCConfig;
import org.openapis.openapi.models.shared.WorldConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartSimulationJobBatchRequest req = new StartSimulationJobBatchRequest(                new StartSimulationJobBatchRequestBody(                new org.openapis.openapi.models.shared.SimulationJobRequest[]{{
                                                add(new SimulationJobRequest(969168L) {{
                                                    compute = new Compute() {{
                                                        computeType = ComputeTypeEnum.GPU_AND_CPU;
                                                        gpuUnitLimit = 29190L;
                                                        simulationUnitLimit = 1207L;
                                                    }};
                                                    dataSources = new org.openapis.openapi.models.shared.DataSourceConfig[]{{
                                                        add(new DataSourceConfig("illum", "totam",                 new String[]{{
                                                                            add("quibusdam"),
                                                                            add("nam"),
                                                                            add("ipsam"),
                                                                            add("culpa"),
                                                                        }}) {{
                                                            destination = "earum";
                                                            name = "Miranda Ledner";
                                                            s3Bucket = "asperiores";
                                                            s3Keys = new String[]{{
                                                                add("ullam"),
                                                            }};
                                                            type = DataSourceTypeEnum.PREFIX;
                                                        }}),
                                                        add(new DataSourceConfig("fugit", "ab",                 new String[]{{
                                                                            add("quae"),
                                                                            add("dolor"),
                                                                            add("fugiat"),
                                                                        }}) {{
                                                            destination = "dolor";
                                                            name = "Mrs. Stephanie Lind";
                                                            s3Bucket = "consequatur";
                                                            s3Keys = new String[]{{
                                                                add("sit"),
                                                            }};
                                                            type = DataSourceTypeEnum.PREFIX;
                                                        }}),
                                                        add(new DataSourceConfig("nesciunt", "expedita",                 new String[]{{
                                                                            add("vel"),
                                                                            add("voluptatum"),
                                                                        }}) {{
                                                            destination = "ipsam";
                                                            name = "Cynthia Macejkovic";
                                                            s3Bucket = "officiis";
                                                            s3Keys = new String[]{{
                                                                add("necessitatibus"),
                                                                add("sed"),
                                                            }};
                                                            type = DataSourceTypeEnum.PREFIX;
                                                        }}),
                                                    }};
                                                    failureBehavior = FailureBehaviorEnum.FAIL;
                                                    iamRole = "exercitationem";
                                                    loggingConfig = new LoggingConfig() {{
                                                        recordAllRosTopics = false;
                                                    }};
                                                    maxJobDurationInSeconds = 70410L;
                                                    outputLocation = new OutputLocation() {{
                                                        s3Bucket = "porro";
                                                        s3Prefix = "autem";
                                                    }};
                                                    robotApplications = new org.openapis.openapi.models.shared.RobotApplicationConfig[]{{
                                                        add(new RobotApplicationConfig("quis",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("accusamus"),
                                                                                add("impedit"),
                                                                                add("hic"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("asperiores", "ex");
                                                                                put("voluptas", "debitis");
                                                                                put("delectus", "quae");
                                                                                put("minus", "fuga");
                                                                            }};
                                                                            launchFile = "laborum";
                                                                            packageName = "consectetur";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(773035L, 166047L) {{
                                                                                        applicationPort = 538869L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 216457L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "laboriosam";
                                                            applicationVersion = "recusandae";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("voluptatem"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("necessitatibus", "quasi");
                                                                    put("nisi", "at");
                                                                }};
                                                                launchFile = "vero";
                                                                packageName = "est";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(918092L, 759283L) {{
                                                                            applicationPort = 192718L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 987349L;
                                                                        }}),
                                                                        add(new PortMapping(455898L, 501063L) {{
                                                                            applicationPort = 579681L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 364544L;
                                                                        }}),
                                                                        add(new PortMapping(254025L, 364912L) {{
                                                                            applicationPort = 642352L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 376389L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("quasi", "rem") {{
                                                                    command = "eius";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Peggy Parker";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("soluta", "alias") {{
                                                                    command = "fugiat";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Ms. Marilyn Feest";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("voluptatibus", "distinctio") {{
                                                                    command = "omnis";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Miss Joey Dach";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("commodi", "itaque", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Darrell Lang";
                                                                    path = "temporibus";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                                add(new UploadConfiguration("vel", "alias", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Darin Gleichner";
                                                                    path = "voluptatem";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                                add(new UploadConfiguration("nemo", "reprehenderit", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Shawna Hamill";
                                                                    path = "deserunt";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                        }}),
                                                        add(new RobotApplicationConfig("vitae",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("dolorem"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("qui", "iste");
                                                                                put("ex", "nemo");
                                                                            }};
                                                                            launchFile = "soluta";
                                                                            packageName = "libero";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(144691L, 545L) {{
                                                                                        applicationPort = 678060L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 487676L;
                                                                                    }}),
                                                                                    add(new PortMapping(64435L, 63553L) {{
                                                                                        applicationPort = 168042L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 425402L;
                                                                                    }}),
                                                                                    add(new PortMapping(348357L, 932394L) {{
                                                                                        applicationPort = 264333L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 208253L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "soluta";
                                                            applicationVersion = "repudiandae";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("dolore"),
                                                                    add("iusto"),
                                                                    add("voluptate"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("dignissimos", "neque");
                                                                }};
                                                                launchFile = "quo";
                                                                packageName = "deleniti";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(974990L, 426904L) {{
                                                                            applicationPort = 437814L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 139072L;
                                                                        }}),
                                                                        add(new PortMapping(78969L, 818034L) {{
                                                                            applicationPort = 300824L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 842855L;
                                                                        }}),
                                                                        add(new PortMapping(975425L, 156383L) {{
                                                                            applicationPort = 726878L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 102413L;
                                                                        }}),
                                                                        add(new PortMapping(247045L, 75359L) {{
                                                                            applicationPort = 782090L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 304198L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("ut", "perspiciatis") {{
                                                                    command = "vel";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Leigh Mante";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("itaque", "velit", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Pat Wolf";
                                                                    path = "alias";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                                add(new UploadConfiguration("quidem", "voluptas", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Mr. Cindy Kub MD";
                                                                    path = "recusandae";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                                add(new UploadConfiguration("unde", "necessitatibus", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Freddie Quitzon";
                                                                    path = "voluptate";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                                add(new UploadConfiguration("veritatis", "vero", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Clyde Herzog";
                                                                    path = "esse";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                        }}),
                                                        add(new RobotApplicationConfig("unde",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("delectus"),
                                                                                add("cupiditate"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("numquam", "numquam");
                                                                            }};
                                                                            launchFile = "nesciunt";
                                                                            packageName = "at";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(898961L, 359111L) {{
                                                                                        applicationPort = 491892L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 760744L;
                                                                                    }}),
                                                                                    add(new PortMapping(532669L, 587375L) {{
                                                                                        applicationPort = 185518L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 708898L;
                                                                                    }}),
                                                                                    add(new PortMapping(316542L, 204072L) {{
                                                                                        applicationPort = 326269L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 809594L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "et";
                                                            applicationVersion = "ipsum";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("nulla"),
                                                                    add("distinctio"),
                                                                    add("maxime"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("quia", "nostrum");
                                                                }};
                                                                launchFile = "omnis";
                                                                packageName = "libero";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(854460L, 637462L) {{
                                                                            applicationPort = 663318L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 727888L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("dolore", "eligendi") {{
                                                                    command = "placeat";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Mr. Angela Volkman";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("facere", "corrupti") {{
                                                                    command = "distinctio";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Tamara D'Amore MD";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("autem", "ipsam") {{
                                                                    command = "molestiae";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Terence Reynolds";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("quia", "quidem", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Dan Towne";
                                                                    path = "at";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                                add(new UploadConfiguration("praesentium", "odit", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Steven Rath";
                                                                    path = "quibusdam";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                                add(new UploadConfiguration("quidem", "quis", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Natasha Wehner";
                                                                    path = "similique";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                        }}),
                                                        add(new RobotApplicationConfig("animi",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("totam"),
                                                                                add("molestias"),
                                                                                add("odio"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("saepe", "architecto");
                                                                            }};
                                                                            launchFile = "quos";
                                                                            packageName = "iste";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(244032L, 38557L) {{
                                                                                        applicationPort = 731634L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 725574L;
                                                                                    }}),
                                                                                    add(new PortMapping(741238L, 216870L) {{
                                                                                        applicationPort = 963976L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 773110L;
                                                                                    }}),
                                                                                    add(new PortMapping(644420L, 42924L) {{
                                                                                        applicationPort = 238011L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 903150L;
                                                                                    }}),
                                                                                    add(new PortMapping(727481L, 99733L) {{
                                                                                        applicationPort = 339756L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 333072L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "in";
                                                            applicationVersion = "minus";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("modi"),
                                                                    add("corporis"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("voluptates", "maiores");
                                                                    put("tempore", "aperiam");
                                                                }};
                                                                launchFile = "libero";
                                                                packageName = "ratione";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(375994L, 779180L) {{
                                                                            applicationPort = 520875L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 577709L;
                                                                        }}),
                                                                        add(new PortMapping(684553L, 344530L) {{
                                                                            applicationPort = 242099L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 795591L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("nemo", "reprehenderit") {{
                                                                    command = "impedit";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Caleb Connelly";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("error", "veritatis") {{
                                                                    command = "aperiam";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Arlene Kuphal";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("quaerat", "commodi") {{
                                                                    command = "ducimus";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Bradford Murazik";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("sint", "vero", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Rickey Heidenreich";
                                                                    path = "modi";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                                add(new UploadConfiguration("nam", "dicta", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Bennie Carter";
                                                                    path = "animi";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                                add(new UploadConfiguration("laboriosam", "pariatur", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Robin Bednar";
                                                                    path = "veritatis";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                                add(new UploadConfiguration("sint", "enim", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Marion Hills";
                                                                    path = "doloribus";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                        }}),
                                                    }};
                                                    simulationApplications = new org.openapis.openapi.models.shared.SimulationApplicationConfig[]{{
                                                        add(new SimulationApplicationConfig("labore",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("aliquam"),
                                                                                add("quisquam"),
                                                                                add("provident"),
                                                                                add("laudantium"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("consequatur", "maxime");
                                                                                put("aspernatur", "nam");
                                                                                put("expedita", "quas");
                                                                                put("provident", "repudiandae");
                                                                            }};
                                                                            launchFile = "rerum";
                                                                            packageName = "dignissimos";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(833982L, 434827L) {{
                                                                                        applicationPort = 873833L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 629377L;
                                                                                    }}),
                                                                                    add(new PortMapping(771226L, 415033L) {{
                                                                                        applicationPort = 213835L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 413801L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "molestiae";
                                                            applicationVersion = "eligendi";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("non"),
                                                                    add("magnam"),
                                                                    add("itaque"),
                                                                    add("sed"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("veniam", "consequuntur");
                                                                    put("facere", "laudantium");
                                                                    put("odit", "pariatur");
                                                                    put("amet", "exercitationem");
                                                                }};
                                                                launchFile = "ab";
                                                                packageName = "velit";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(977518L, 310840L) {{
                                                                            applicationPort = 731065L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 395233L;
                                                                        }}),
                                                                        add(new PortMapping(392430L, 335977L) {{
                                                                            applicationPort = 503748L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 718627L;
                                                                        }}),
                                                                        add(new PortMapping(794507L, 815200L) {{
                                                                            applicationPort = 391933L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 727771L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("rerum", "eos") {{
                                                                    command = "ipsum";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Courtney Crooks";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("fugiat", "unde") {{
                                                                    command = "reprehenderit";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Heidi O'Reilly";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("esse", "fugiat") {{
                                                                    command = "officiis";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Mildred Mueller IV";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("ab", "incidunt", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Jill Wintheiser";
                                                                    path = "libero";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                                add(new UploadConfiguration("praesentium", "nemo", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Geoffrey Hartmann";
                                                                    path = "earum";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                            worldConfigs = new org.openapis.openapi.models.shared.WorldConfig[]{{
                                                                add(new WorldConfig() {{
                                                                    world = "sequi";
                                                                }}),
                                                                add(new WorldConfig() {{
                                                                    world = "nihil";
                                                                }}),
                                                                add(new WorldConfig() {{
                                                                    world = "deleniti";
                                                                }}),
                                                                add(new WorldConfig() {{
                                                                    world = "illo";
                                                                }}),
                                                            }};
                                                        }}),
                                                        add(new SimulationApplicationConfig("in",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("accusamus"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("aperiam", "odit");
                                                                                put("deleniti", "enim");
                                                                                put("voluptate", "similique");
                                                                            }};
                                                                            launchFile = "minima";
                                                                            packageName = "libero";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(430116L, 199529L) {{
                                                                                        applicationPort = 24272L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 266788L;
                                                                                    }}),
                                                                                    add(new PortMapping(853246L, 345138L) {{
                                                                                        applicationPort = 652125L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 492632L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "aut";
                                                            applicationVersion = "voluptatem";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("quae"),
                                                                    add("amet"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("praesentium", "quidem");
                                                                    put("cum", "amet");
                                                                    put("quasi", "dicta");
                                                                    put("laudantium", "doloremque");
                                                                }};
                                                                launchFile = "earum";
                                                                packageName = "iusto";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(897956L, 592880L) {{
                                                                            applicationPort = 587967L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 677141L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("accusamus", "eos") {{
                                                                    command = "consequatur";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Lorena Quitzon V";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("occaecati", "atque") {{
                                                                    command = "totam";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Dr. Shannon Fahey";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("ea", "aperiam") {{
                                                                    command = "beatae";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Mr. Bethany Koch";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("dignissimos", "consectetur") {{
                                                                    command = "dignissimos";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Francis McKenzie";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("itaque", "illum", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Lionel Nikolaus";
                                                                    path = "aspernatur";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                                add(new UploadConfiguration("exercitationem", "nihil", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Leigh Denesik";
                                                                    path = "explicabo";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                                add(new UploadConfiguration("in", "exercitationem", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Pamela Welch";
                                                                    path = "non";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                            worldConfigs = new org.openapis.openapi.models.shared.WorldConfig[]{{
                                                                add(new WorldConfig() {{
                                                                    world = "repudiandae";
                                                                }}),
                                                                add(new WorldConfig() {{
                                                                    world = "modi";
                                                                }}),
                                                            }};
                                                        }}),
                                                        add(new SimulationApplicationConfig("eligendi",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("officiis"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("architecto", "enim");
                                                                            }};
                                                                            launchFile = "optio";
                                                                            packageName = "rem";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(955551L, 615058L) {{
                                                                                        applicationPort = 704271L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 967055L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "molestiae";
                                                            applicationVersion = "veniam";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("ab"),
                                                                    add("modi"),
                                                                    add("aut"),
                                                                    add("aut"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("odio", "commodi");
                                                                    put("numquam", "dolorum");
                                                                    put("possimus", "voluptate");
                                                                    put("consectetur", "nesciunt");
                                                                }};
                                                                launchFile = "quaerat";
                                                                packageName = "itaque";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(481375L, 558051L) {{
                                                                            applicationPort = 122662L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 715143L;
                                                                        }}),
                                                                        add(new PortMapping(229276L, 418637L) {{
                                                                            applicationPort = 91728L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 704948L;
                                                                        }}),
                                                                        add(new PortMapping(526413L, 11355L) {{
                                                                            applicationPort = 685415L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 5310L;
                                                                        }}),
                                                                        add(new PortMapping(832239L, 83291L) {{
                                                                            applicationPort = 550055L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 511222L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("voluptatem", "alias") {{
                                                                    command = "eaque";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Angelo Stokes";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("explicabo", "beatae", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Mark Gottlieb";
                                                                    path = "necessitatibus";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                                add(new UploadConfiguration("sequi", "aliquid", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Kara Wolf";
                                                                    path = "libero";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                                add(new UploadConfiguration("laborum", "natus", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Allan Connelly";
                                                                    path = "repellat";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                                add(new UploadConfiguration("quia", "ullam", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Sue Prohaska";
                                                                    path = "non";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                            worldConfigs = new org.openapis.openapi.models.shared.WorldConfig[]{{
                                                                add(new WorldConfig() {{
                                                                    world = "voluptatibus";
                                                                }}),
                                                            }};
                                                        }}),
                                                    }};
                                                    tags = new java.util.HashMap<String, String>() {{
                                                        put("quos", "ullam");
                                                    }};
                                                    useDefaultApplications = false;
                                                    vpcConfig = new VPCConfig(                new String[]{{
                                                                        add("impedit"),
                                                                        add("porro"),
                                                                        add("accusamus"),
                                                                        add("totam"),
                                                                    }}) {{
                                                        assignPublicIp = false;
                                                        securityGroups = new String[]{{
                                                            add("modi"),
                                                            add("itaque"),
                                                        }};
                                                        subnets = new String[]{{
                                                            add("modi"),
                                                            add("consequuntur"),
                                                            add("assumenda"),
                                                            add("vero"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new SimulationJobRequest(848063L) {{
                                                    compute = new Compute() {{
                                                        computeType = ComputeTypeEnum.CPU;
                                                        gpuUnitLimit = 573444L;
                                                        simulationUnitLimit = 472414L;
                                                    }};
                                                    dataSources = new org.openapis.openapi.models.shared.DataSourceConfig[]{{
                                                        add(new DataSourceConfig("distinctio", "eius",                 new String[]{{
                                                                            add("rem"),
                                                                        }}) {{
                                                            destination = "iure";
                                                            name = "Crystal Tremblay";
                                                            s3Bucket = "corporis";
                                                            s3Keys = new String[]{{
                                                                add("consequuntur"),
                                                                add("officia"),
                                                            }};
                                                            type = DataSourceTypeEnum.ARCHIVE;
                                                        }}),
                                                        add(new DataSourceConfig("velit", "vitae",                 new String[]{{
                                                                            add("similique"),
                                                                        }}) {{
                                                            destination = "maiores";
                                                            name = "Lynn Ullrich";
                                                            s3Bucket = "aliquam";
                                                            s3Keys = new String[]{{
                                                                add("doloribus"),
                                                                add("fugiat"),
                                                                add("est"),
                                                            }};
                                                            type = DataSourceTypeEnum.FILE;
                                                        }}),
                                                    }};
                                                    failureBehavior = FailureBehaviorEnum.FAIL;
                                                    iamRole = "repellat";
                                                    loggingConfig = new LoggingConfig() {{
                                                        recordAllRosTopics = false;
                                                    }};
                                                    maxJobDurationInSeconds = 363214L;
                                                    outputLocation = new OutputLocation() {{
                                                        s3Bucket = "doloribus";
                                                        s3Prefix = "possimus";
                                                    }};
                                                    robotApplications = new org.openapis.openapi.models.shared.RobotApplicationConfig[]{{
                                                        add(new RobotApplicationConfig("sit",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("culpa"),
                                                                                add("consequuntur"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("deserunt", "modi");
                                                                            }};
                                                                            launchFile = "veniam";
                                                                            packageName = "quod";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(316550L, 987759L) {{
                                                                                        applicationPort = 955569L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 788661L;
                                                                                    }}),
                                                                                    add(new PortMapping(103990L, 5315L) {{
                                                                                        applicationPort = 826806L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 887363L;
                                                                                    }}),
                                                                                    add(new PortMapping(751033L, 898193L) {{
                                                                                        applicationPort = 633982L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 60335L;
                                                                                    }}),
                                                                                    add(new PortMapping(426002L, 595584L) {{
                                                                                        applicationPort = 155978L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 118932L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "incidunt";
                                                            applicationVersion = "explicabo";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("cupiditate"),
                                                                    add("optio"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("quidem", "nesciunt");
                                                                }};
                                                                launchFile = "commodi";
                                                                packageName = "sapiente";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(638390L, 575062L) {{
                                                                            applicationPort = 330440L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 893773L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("minus", "ab") {{
                                                                    command = "numquam";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Pam Kirlin";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("minima", "architecto") {{
                                                                    command = "beatae";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Adrienne Ernser";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("expedita", "facilis", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Sara Gorczany";
                                                                    path = "dolor";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                        }}),
                                                        add(new RobotApplicationConfig("fuga",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("impedit"),
                                                                                add("quasi"),
                                                                                add("deserunt"),
                                                                                add("quod"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("doloremque", "voluptatem");
                                                                                put("facere", "necessitatibus");
                                                                            }};
                                                                            launchFile = "maxime";
                                                                            packageName = "consequatur";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(783274L, 502453L) {{
                                                                                        applicationPort = 102390L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 627161L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "debitis";
                                                            applicationVersion = "ullam";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("accusantium"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("veritatis", "provident");
                                                                }};
                                                                launchFile = "cumque";
                                                                packageName = "iure";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(923456L, 246772L) {{
                                                                            applicationPort = 798690L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 363224L;
                                                                        }}),
                                                                        add(new PortMapping(388404L, 152283L) {{
                                                                            applicationPort = 299153L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 493591L;
                                                                        }}),
                                                                        add(new PortMapping(588152L, 739508L) {{
                                                                            applicationPort = 486272L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 616941L;
                                                                        }}),
                                                                        add(new PortMapping(697330L, 932080L) {{
                                                                            applicationPort = 983854L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 703966L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("nam", "incidunt") {{
                                                                    command = "unde";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Irvin Rippin";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("illum", "nemo") {{
                                                                    command = "recusandae";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Bert Kassulke";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("ad", "facere", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Melvin O'Conner";
                                                                    path = "distinctio";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                                add(new UploadConfiguration("deserunt", "molestias", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Neal Gorczany";
                                                                    path = "alias";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                                add(new UploadConfiguration("quaerat", "eligendi", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Sergio Grant Sr.";
                                                                    path = "aliquid";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                                add(new UploadConfiguration("nostrum", "esse", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Cecelia Mitchell";
                                                                    path = "mollitia";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                        }}),
                                                        add(new RobotApplicationConfig("similique",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("quam"),
                                                                                add("magni"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("delectus", "omnis");
                                                                                put("sed", "nesciunt");
                                                                                put("maxime", "quis");
                                                                            }};
                                                                            launchFile = "cupiditate";
                                                                            packageName = "aliquam";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(243904L, 971764L) {{
                                                                                        applicationPort = 980410L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 512081L;
                                                                                    }}),
                                                                                    add(new PortMapping(57470L, 787916L) {{
                                                                                        applicationPort = 230305L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 363845L;
                                                                                    }}),
                                                                                    add(new PortMapping(476003L, 395634L) {{
                                                                                        applicationPort = 948444L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 555294L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "quae";
                                                            applicationVersion = "magni";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("sed"),
                                                                    add("necessitatibus"),
                                                                    add("impedit"),
                                                                    add("ipsa"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("a", "maiores");
                                                                    put("laudantium", "maiores");
                                                                    put("alias", "asperiores");
                                                                }};
                                                                launchFile = "rem";
                                                                packageName = "dicta";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(244569L, 260588L) {{
                                                                            applicationPort = 938257L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 985360L;
                                                                        }}),
                                                                        add(new PortMapping(757407L, 94697L) {{
                                                                            applicationPort = 458212L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 446547L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("corporis", "rerum") {{
                                                                    command = "vero";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Mrs. Phyllis Russel Sr.";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("veritatis", "ullam", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Chester Barton";
                                                                    path = "ex";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                        }}),
                                                    }};
                                                    simulationApplications = new org.openapis.openapi.models.shared.SimulationApplicationConfig[]{{
                                                        add(new SimulationApplicationConfig("exercitationem",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("nihil"),
                                                                                add("ad"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("tenetur", "quis");
                                                                                put("quibusdam", "nemo");
                                                                            }};
                                                                            launchFile = "suscipit";
                                                                            packageName = "pariatur";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(17768L, 660536L) {{
                                                                                        applicationPort = 694728L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 831031L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "a";
                                                            applicationVersion = "nobis";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("accusantium"),
                                                                    add("dicta"),
                                                                    add("minus"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("eveniet", "porro");
                                                                    put("tempore", "quidem");
                                                                }};
                                                                launchFile = "modi";
                                                                packageName = "voluptates";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(758194L, 992887L) {{
                                                                            applicationPort = 259377L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 194058L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("nulla", "deserunt") {{
                                                                    command = "blanditiis";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Tommie Okuneva";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("repudiandae", "accusantium") {{
                                                                    command = "corporis";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Ronnie Nikolaus";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("natus", "minus", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Ryan Kuvalis";
                                                                    path = "eos";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                                add(new UploadConfiguration("amet", "laborum", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Bessie Schmidt";
                                                                    path = "amet";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                                add(new UploadConfiguration("neque", "odit", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Jana Brakus";
                                                                    path = "sunt";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                            worldConfigs = new org.openapis.openapi.models.shared.WorldConfig[]{{
                                                                add(new WorldConfig() {{
                                                                    world = "ipsam";
                                                                }}),
                                                                add(new WorldConfig() {{
                                                                    world = "eaque";
                                                                }}),
                                                            }};
                                                        }}),
                                                        add(new SimulationApplicationConfig("aperiam",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("voluptates"),
                                                                                add("ad"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("quisquam", "quas");
                                                                                put("consequuntur", "maiores");
                                                                            }};
                                                                            launchFile = "inventore";
                                                                            packageName = "aliquid";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(400879L, 232316L) {{
                                                                                        applicationPort = 665872L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 221329L;
                                                                                    }}),
                                                                                    add(new PortMapping(527715L, 498534L) {{
                                                                                        applicationPort = 768195L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 525917L;
                                                                                    }}),
                                                                                    add(new PortMapping(271306L, 503449L) {{
                                                                                        applicationPort = 237523L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 927959L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "sapiente";
                                                            applicationVersion = "sed";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("repellat"),
                                                                    add("repudiandae"),
                                                                    add("architecto"),
                                                                    add("adipisci"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("harum", "dolore");
                                                                    put("voluptatibus", "iure");
                                                                    put("explicabo", "minus");
                                                                    put("soluta", "dolorum");
                                                                }};
                                                                launchFile = "velit";
                                                                packageName = "earum";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(97810L, 649032L) {{
                                                                            applicationPort = 621140L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 252473L;
                                                                        }}),
                                                                        add(new PortMapping(769156L, 42615L) {{
                                                                            applicationPort = 884361L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 687589L;
                                                                        }}),
                                                                        add(new PortMapping(53733L, 643199L) {{
                                                                            applicationPort = 711871L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 549237L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("accusamus", "optio") {{
                                                                    command = "excepturi";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Marcella Ernser";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("corporis", "accusantium") {{
                                                                    command = "delectus";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Julian Ziemann";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("vel", "sapiente", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Melba Heaney";
                                                                    path = "neque";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                            worldConfigs = new org.openapis.openapi.models.shared.WorldConfig[]{{
                                                                add(new WorldConfig() {{
                                                                    world = "quos";
                                                                }}),
                                                            }};
                                                        }}),
                                                        add(new SimulationApplicationConfig("nihil",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("rerum"),
                                                                                add("deserunt"),
                                                                                add("atque"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("atque", "architecto");
                                                                                put("est", "enim");
                                                                            }};
                                                                            launchFile = "rem";
                                                                            packageName = "magni";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(318028L, 286453L) {{
                                                                                        applicationPort = 556133L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 811259L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "numquam";
                                                            applicationVersion = "sequi";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("sit"),
                                                                    add("rerum"),
                                                                    add("veritatis"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("autem", "quidem");
                                                                    put("totam", "porro");
                                                                    put("deserunt", "magni");
                                                                    put("nihil", "voluptas");
                                                                }};
                                                                launchFile = "animi";
                                                                packageName = "commodi";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(295892L, 802734L) {{
                                                                            applicationPort = 686380L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 14780L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("illo", "nihil") {{
                                                                    command = "iste";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Clark Hodkiewicz";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("facilis", "beatae") {{
                                                                    command = "inventore";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Miss Joyce Runolfsson";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("cum", "pariatur", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Leroy Ratke";
                                                                    path = "atque";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                                add(new UploadConfiguration("occaecati", "libero", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Randall Schmeler";
                                                                    path = "id";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                                add(new UploadConfiguration("recusandae", "veritatis", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Miss Mindy Schmitt";
                                                                    path = "pariatur";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                                add(new UploadConfiguration("doloremque", "voluptatem", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Mathew Erdman";
                                                                    path = "magni";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                            worldConfigs = new org.openapis.openapi.models.shared.WorldConfig[]{{
                                                                add(new WorldConfig() {{
                                                                    world = "eum";
                                                                }}),
                                                                add(new WorldConfig() {{
                                                                    world = "reprehenderit";
                                                                }}),
                                                                add(new WorldConfig() {{
                                                                    world = "voluptatum";
                                                                }}),
                                                                add(new WorldConfig() {{
                                                                    world = "blanditiis";
                                                                }}),
                                                            }};
                                                        }}),
                                                        add(new SimulationApplicationConfig("similique",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("animi"),
                                                                                add("dolore"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("dignissimos", "esse");
                                                                                put("animi", "laudantium");
                                                                                put("esse", "eveniet");
                                                                                put("earum", "velit");
                                                                            }};
                                                                            launchFile = "officiis";
                                                                            packageName = "eius";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(373449L, 131687L) {{
                                                                                        applicationPort = 930111L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 489685L;
                                                                                    }}),
                                                                                    add(new PortMapping(339843L, 704402L) {{
                                                                                        applicationPort = 771632L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 397014L;
                                                                                    }}),
                                                                                    add(new PortMapping(308819L, 103988L) {{
                                                                                        applicationPort = 218128L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 284885L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "sapiente";
                                                            applicationVersion = "saepe";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("officia"),
                                                                    add("natus"),
                                                                    add("cumque"),
                                                                    add("natus"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("doloribus", "quia");
                                                                    put("officiis", "mollitia");
                                                                }};
                                                                launchFile = "cumque";
                                                                packageName = "quis";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(849337L, 201266L) {{
                                                                            applicationPort = 430235L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 365539L;
                                                                        }}),
                                                                        add(new PortMapping(794306L, 990369L) {{
                                                                            applicationPort = 22331L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 487148L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("sed", "deleniti") {{
                                                                    command = "voluptates";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Beverly Bailey";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("sunt", "impedit") {{
                                                                    command = "sunt";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Neal Gutmann";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("inventore", "sequi") {{
                                                                    command = "eius";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Cristina Ebert";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("nulla", "enim") {{
                                                                    command = "fugit";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Mr. Matthew Ebert";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("quae", "deleniti", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Dixie Funk";
                                                                    path = "ex";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                            worldConfigs = new org.openapis.openapi.models.shared.WorldConfig[]{{
                                                                add(new WorldConfig() {{
                                                                    world = "excepturi";
                                                                }}),
                                                                add(new WorldConfig() {{
                                                                    world = "aliquid";
                                                                }}),
                                                                add(new WorldConfig() {{
                                                                    world = "sed";
                                                                }}),
                                                                add(new WorldConfig() {{
                                                                    world = "beatae";
                                                                }}),
                                                            }};
                                                        }}),
                                                    }};
                                                    tags = new java.util.HashMap<String, String>() {{
                                                        put("eveniet", "dolor");
                                                        put("expedita", "libero");
                                                        put("iste", "illo");
                                                    }};
                                                    useDefaultApplications = false;
                                                    vpcConfig = new VPCConfig(                new String[]{{
                                                                        add("laudantium"),
                                                                        add("tempora"),
                                                                        add("quae"),
                                                                        add("omnis"),
                                                                    }}) {{
                                                        assignPublicIp = false;
                                                        securityGroups = new String[]{{
                                                            add("quos"),
                                                            add("temporibus"),
                                                            add("sint"),
                                                            add("iusto"),
                                                        }};
                                                        subnets = new String[]{{
                                                            add("accusamus"),
                                                            add("aperiam"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new SimulationJobRequest(784059L) {{
                                                    compute = new Compute() {{
                                                        computeType = ComputeTypeEnum.GPU_AND_CPU;
                                                        gpuUnitLimit = 949370L;
                                                        simulationUnitLimit = 537946L;
                                                    }};
                                                    dataSources = new org.openapis.openapi.models.shared.DataSourceConfig[]{{
                                                        add(new DataSourceConfig("facere", "quisquam",                 new String[]{{
                                                                            add("aliquam"),
                                                                            add("dolorum"),
                                                                            add("deserunt"),
                                                                            add("ad"),
                                                                        }}) {{
                                                            destination = "earum";
                                                            name = "Suzanne Grant";
                                                            s3Bucket = "saepe";
                                                            s3Keys = new String[]{{
                                                                add("esse"),
                                                            }};
                                                            type = DataSourceTypeEnum.FILE;
                                                        }}),
                                                        add(new DataSourceConfig("cupiditate", "reprehenderit",                 new String[]{{
                                                                            add("necessitatibus"),
                                                                        }}) {{
                                                            destination = "reiciendis";
                                                            name = "Francis Osinski";
                                                            s3Bucket = "omnis";
                                                            s3Keys = new String[]{{
                                                                add("ipsam"),
                                                            }};
                                                            type = DataSourceTypeEnum.ARCHIVE;
                                                        }}),
                                                    }};
                                                    failureBehavior = FailureBehaviorEnum.FAIL;
                                                    iamRole = "ad";
                                                    loggingConfig = new LoggingConfig() {{
                                                        recordAllRosTopics = false;
                                                    }};
                                                    maxJobDurationInSeconds = 392752L;
                                                    outputLocation = new OutputLocation() {{
                                                        s3Bucket = "molestiae";
                                                        s3Prefix = "quia";
                                                    }};
                                                    robotApplications = new org.openapis.openapi.models.shared.RobotApplicationConfig[]{{
                                                        add(new RobotApplicationConfig("vitae",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("accusantium"),
                                                                                add("quod"),
                                                                                add("minus"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("possimus", "maiores");
                                                                                put("odio", "provident");
                                                                                put("sapiente", "aperiam");
                                                                            }};
                                                                            launchFile = "similique";
                                                                            packageName = "nesciunt";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(601277L, 1116L) {{
                                                                                        applicationPort = 404774L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 832944L;
                                                                                    }}),
                                                                                    add(new PortMapping(413086L, 287141L) {{
                                                                                        applicationPort = 771931L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 196700L;
                                                                                    }}),
                                                                                    add(new PortMapping(789870L, 123795L) {{
                                                                                        applicationPort = 710059L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 446737L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "sed";
                                                            applicationVersion = "odit";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("expedita"),
                                                                    add("eos"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("nesciunt", "ipsa");
                                                                    put("sint", "dolore");
                                                                    put("esse", "accusantium");
                                                                    put("distinctio", "sapiente");
                                                                }};
                                                                launchFile = "quam";
                                                                packageName = "est";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(531494L, 482628L) {{
                                                                            applicationPort = 964201L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 635868L;
                                                                        }}),
                                                                        add(new PortMapping(374414L, 247767L) {{
                                                                            applicationPort = 802069L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 977583L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("necessitatibus", "distinctio") {{
                                                                    command = "laborum";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Matt Walsh";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("doloremque", "sed") {{
                                                                    command = "maiores";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Mr. Marianne Dickinson";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("dignissimos", "reiciendis", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Arnold Hegmann";
                                                                    path = "dolor";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                        }}),
                                                        add(new RobotApplicationConfig("sapiente",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("est"),
                                                                                add("iure"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("provident", "laudantium");
                                                                                put("nam", "nemo");
                                                                                put("enim", "ipsam");
                                                                                put("minima", "tempora");
                                                                            }};
                                                                            launchFile = "perferendis";
                                                                            packageName = "corrupti";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(39202L, 740245L) {{
                                                                                        applicationPort = 854137L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 257821L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "enim";
                                                            applicationVersion = "nulla";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("distinctio"),
                                                                    add("mollitia"),
                                                                    add("impedit"),
                                                                    add("accusamus"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("quas", "blanditiis");
                                                                }};
                                                                launchFile = "cum";
                                                                packageName = "dicta";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(920548L, 150349L) {{
                                                                            applicationPort = 274040L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 908249L;
                                                                        }}),
                                                                        add(new PortMapping(772057L, 428378L) {{
                                                                            applicationPort = 772628L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 558283L;
                                                                        }}),
                                                                        add(new PortMapping(404643L, 105094L) {{
                                                                            applicationPort = 753087L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 923159L;
                                                                        }}),
                                                                        add(new PortMapping(930877L, 875452L) {{
                                                                            applicationPort = 86955L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 982574L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("suscipit", "saepe") {{
                                                                    command = "illo";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Alexandra Raynor";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("rerum", "deserunt") {{
                                                                    command = "earum";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Bertha Emmerich";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("odio", "nulla") {{
                                                                    command = "odit";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Teresa Kshlerin";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("dolorum", "repellat", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Gregory Heidenreich";
                                                                    path = "fugit";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                                add(new UploadConfiguration("ipsa", "maiores", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Ellis Johns I";
                                                                    path = "temporibus";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                                add(new UploadConfiguration("harum", "ducimus", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Phil Collier";
                                                                    path = "officia";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                                add(new UploadConfiguration("ab", "quaerat", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Myrtle Kshlerin";
                                                                    path = "quis";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                        }}),
                                                        add(new RobotApplicationConfig("voluptatem",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("corporis"),
                                                                                add("ea"),
                                                                                add("eos"),
                                                                                add("aliquam"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("hic", "maiores");
                                                                                put("asperiores", "autem");
                                                                                put("nesciunt", "cupiditate");
                                                                            }};
                                                                            launchFile = "animi";
                                                                            packageName = "provident";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(721138L, 827314L) {{
                                                                                        applicationPort = 56998L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 650914L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "nobis";
                                                            applicationVersion = "similique";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("impedit"),
                                                                    add("nisi"),
                                                                    add("cumque"),
                                                                    add("soluta"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("laboriosam", "nam");
                                                                    put("enim", "maiores");
                                                                    put("consectetur", "necessitatibus");
                                                                    put("maxime", "cupiditate");
                                                                }};
                                                                launchFile = "voluptatem";
                                                                packageName = "provident";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(998527L, 607631L) {{
                                                                            applicationPort = 34267L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 301360L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("sequi", "voluptatum") {{
                                                                    command = "vel";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Rufus Conroy";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("voluptates", "possimus", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Robin Glover";
                                                                    path = "expedita";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                        }}),
                                                    }};
                                                    simulationApplications = new org.openapis.openapi.models.shared.SimulationApplicationConfig[]{{
                                                        add(new SimulationApplicationConfig("tenetur",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("quam"),
                                                                                add("quod"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("sapiente", "reiciendis");
                                                                            }};
                                                                            launchFile = "quod";
                                                                            packageName = "voluptate";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(681578L, 66596L) {{
                                                                                        applicationPort = 815611L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 804936L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "fuga";
                                                            applicationVersion = "tempore";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("fugit"),
                                                                    add("suscipit"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("nisi", "aliquid");
                                                                    put("provident", "laboriosam");
                                                                }};
                                                                launchFile = "accusamus";
                                                                packageName = "ab";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(4929L, 181622L) {{
                                                                            applicationPort = 790305L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 53529L;
                                                                        }}),
                                                                        add(new PortMapping(696828L, 193334L) {{
                                                                            applicationPort = 163263L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 112224L;
                                                                        }}),
                                                                        add(new PortMapping(847018L, 506532L) {{
                                                                            applicationPort = 227431L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 346608L;
                                                                        }}),
                                                                        add(new PortMapping(753261L, 732142L) {{
                                                                            applicationPort = 601626L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 629461L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("sit", "quo") {{
                                                                    command = "debitis";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Jake Ondricka";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("tempora", "perspiciatis", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Ramona Terry I";
                                                                    path = "alias";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                                add(new UploadConfiguration("a", "qui", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Dr. Luke Jaskolski";
                                                                    path = "veritatis";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                            worldConfigs = new org.openapis.openapi.models.shared.WorldConfig[]{{
                                                                add(new WorldConfig() {{
                                                                    world = "atque";
                                                                }}),
                                                                add(new WorldConfig() {{
                                                                    world = "totam";
                                                                }}),
                                                            }};
                                                        }}),
                                                        add(new SimulationApplicationConfig("cumque",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("non"),
                                                                                add("beatae"),
                                                                                add("sunt"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("beatae", "autem");
                                                                                put("ducimus", "libero");
                                                                                put("molestias", "necessitatibus");
                                                                            }};
                                                                            launchFile = "ipsum";
                                                                            packageName = "impedit";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(32945L, 249803L) {{
                                                                                        applicationPort = 849690L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 717853L;
                                                                                    }}),
                                                                                    add(new PortMapping(515433L, 831067L) {{
                                                                                        applicationPort = 310195L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 10164L;
                                                                                    }}),
                                                                                    add(new PortMapping(231255L, 377680L) {{
                                                                                        applicationPort = 415953L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 843679L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "ex";
                                                            applicationVersion = "consectetur";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("sed"),
                                                                    add("animi"),
                                                                    add("sequi"),
                                                                    add("eligendi"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("perferendis", "laborum");
                                                                    put("omnis", "nihil");
                                                                    put("tenetur", "sapiente");
                                                                }};
                                                                launchFile = "velit";
                                                                packageName = "adipisci";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(870183L, 945320L) {{
                                                                            applicationPort = 763140L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 850196L;
                                                                        }}),
                                                                        add(new PortMapping(456222L, 675755L) {{
                                                                            applicationPort = 562066L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 371295L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("aliquid", "mollitia") {{
                                                                    command = "voluptates";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Billie Kuhic";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("a", "impedit") {{
                                                                    command = "quidem";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Christie Cummerata";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("facere", "dignissimos") {{
                                                                    command = "unde";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Hector Yundt";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("autem", "assumenda", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Mr. Rodney Marvin";
                                                                    path = "laboriosam";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                                add(new UploadConfiguration("ratione", "quas", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Mrs. Ronald Bartoletti";
                                                                    path = "quis";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                                add(new UploadConfiguration("fugit", "veritatis", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Spencer Batz";
                                                                    path = "maiores";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                            worldConfigs = new org.openapis.openapi.models.shared.WorldConfig[]{{
                                                                add(new WorldConfig() {{
                                                                    world = "dicta";
                                                                }}),
                                                                add(new WorldConfig() {{
                                                                    world = "ipsam";
                                                                }}),
                                                                add(new WorldConfig() {{
                                                                    world = "consequuntur";
                                                                }}),
                                                            }};
                                                        }}),
                                                        add(new SimulationApplicationConfig("aut",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("officia"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("corporis", "accusamus");
                                                                                put("iusto", "sapiente");
                                                                            }};
                                                                            launchFile = "esse";
                                                                            packageName = "neque";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(273349L, 370052L) {{
                                                                                        applicationPort = 788469L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 506245L;
                                                                                    }}),
                                                                                    add(new PortMapping(165545L, 29881L) {{
                                                                                        applicationPort = 887132L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 196497L;
                                                                                    }}),
                                                                                    add(new PortMapping(84211L, 621810L) {{
                                                                                        applicationPort = 665960L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 226181L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "quaerat";
                                                            applicationVersion = "earum";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("assumenda"),
                                                                    add("dolore"),
                                                                    add("enim"),
                                                                    add("ullam"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("alias", "ex");
                                                                    put("quibusdam", "dicta");
                                                                    put("quia", "commodi");
                                                                }};
                                                                launchFile = "neque";
                                                                packageName = "quibusdam";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(608402L, 206451L) {{
                                                                            applicationPort = 523109L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 884622L;
                                                                        }}),
                                                                        add(new PortMapping(175803L, 808050L) {{
                                                                            applicationPort = 359874L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 797527L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("sequi", "recusandae") {{
                                                                    command = "recusandae";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Miss Jeannie Emmerich";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("magni", "beatae") {{
                                                                    command = "labore";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Sarah D'Amore";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("quaerat", "quasi") {{
                                                                    command = "aliquid";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Ms. Kristin Hane";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("voluptatibus", "unde", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Michelle Shanahan";
                                                                    path = "sed";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                                add(new UploadConfiguration("maxime", "et", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Miss Michael Ferry";
                                                                    path = "debitis";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                                add(new UploadConfiguration("natus", "voluptatem", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "William Lubowitz";
                                                                    path = "tempora";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                            worldConfigs = new org.openapis.openapi.models.shared.WorldConfig[]{{
                                                                add(new WorldConfig() {{
                                                                    world = "facilis";
                                                                }}),
                                                                add(new WorldConfig() {{
                                                                    world = "laudantium";
                                                                }}),
                                                                add(new WorldConfig() {{
                                                                    world = "ullam";
                                                                }}),
                                                            }};
                                                        }}),
                                                        add(new SimulationApplicationConfig("aut",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("minima"),
                                                                                add("quos"),
                                                                                add("blanditiis"),
                                                                                add("quas"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("provident", "quas");
                                                                            }};
                                                                            launchFile = "ipsum";
                                                                            packageName = "vero";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(622968L, 926119L) {{
                                                                                        applicationPort = 704732L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 983060L;
                                                                                    }}),
                                                                                    add(new PortMapping(958280L, 977641L) {{
                                                                                        applicationPort = 955962L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 234964L;
                                                                                    }}),
                                                                                    add(new PortMapping(607742L, 966652L) {{
                                                                                        applicationPort = 824267L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 830149L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "voluptatibus";
                                                            applicationVersion = "numquam";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("dolorum"),
                                                                    add("quibusdam"),
                                                                    add("earum"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("numquam", "molestiae");
                                                                    put("impedit", "error");
                                                                    put("animi", "voluptatum");
                                                                }};
                                                                launchFile = "aliquid";
                                                                packageName = "nihil";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(178201L, 299379L) {{
                                                                            applicationPort = 759451L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 279673L;
                                                                        }}),
                                                                        add(new PortMapping(431843L, 423701L) {{
                                                                            applicationPort = 171172L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 400492L;
                                                                        }}),
                                                                        add(new PortMapping(74124L, 383381L) {{
                                                                            applicationPort = 320748L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 552287L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("illo", "doloribus") {{
                                                                    command = "fugiat";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Ivan Volkman";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("accusamus", "quisquam") {{
                                                                    command = "cumque";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Myra Hills";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("ipsa", "accusamus") {{
                                                                    command = "quasi";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Marty O'Hara";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("at", "molestias") {{
                                                                    command = "placeat";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Brendan Ullrich";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("esse", "reiciendis", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Saul Gottlieb";
                                                                    path = "similique";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                            worldConfigs = new org.openapis.openapi.models.shared.WorldConfig[]{{
                                                                add(new WorldConfig() {{
                                                                    world = "occaecati";
                                                                }}),
                                                            }};
                                                        }}),
                                                    }};
                                                    tags = new java.util.HashMap<String, String>() {{
                                                        put("voluptatibus", "aut");
                                                        put("quam", "omnis");
                                                    }};
                                                    useDefaultApplications = false;
                                                    vpcConfig = new VPCConfig(                new String[]{{
                                                                        add("sed"),
                                                                        add("non"),
                                                                    }}) {{
                                                        assignPublicIp = false;
                                                        securityGroups = new String[]{{
                                                            add("asperiores"),
                                                            add("modi"),
                                                            add("facere"),
                                                        }};
                                                        subnets = new String[]{{
                                                            add("quis"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new SimulationJobRequest(577284L) {{
                                                    compute = new Compute() {{
                                                        computeType = ComputeTypeEnum.GPU_AND_CPU;
                                                        gpuUnitLimit = 743938L;
                                                        simulationUnitLimit = 58463L;
                                                    }};
                                                    dataSources = new org.openapis.openapi.models.shared.DataSourceConfig[]{{
                                                        add(new DataSourceConfig("accusamus", "nulla",                 new String[]{{
                                                                            add("quibusdam"),
                                                                            add("praesentium"),
                                                                            add("enim"),
                                                                            add("animi"),
                                                                        }}) {{
                                                            destination = "labore";
                                                            name = "Mr. Jesse Luettgen";
                                                            s3Bucket = "iusto";
                                                            s3Keys = new String[]{{
                                                                add("enim"),
                                                                add("iure"),
                                                                add("laudantium"),
                                                                add("modi"),
                                                            }};
                                                            type = DataSourceTypeEnum.PREFIX;
                                                        }}),
                                                        add(new DataSourceConfig("dolores", "consequatur",                 new String[]{{
                                                                            add("quia"),
                                                                        }}) {{
                                                            destination = "unde";
                                                            name = "Natalie Heaney";
                                                            s3Bucket = "ratione";
                                                            s3Keys = new String[]{{
                                                                add("quidem"),
                                                                add("illum"),
                                                                add("reiciendis"),
                                                            }};
                                                            type = DataSourceTypeEnum.FILE;
                                                        }}),
                                                        add(new DataSourceConfig("molestiae", "debitis",                 new String[]{{
                                                                            add("dolor"),
                                                                        }}) {{
                                                            destination = "quidem";
                                                            name = "Angelica Langworth";
                                                            s3Bucket = "omnis";
                                                            s3Keys = new String[]{{
                                                                add("dolorem"),
                                                            }};
                                                            type = DataSourceTypeEnum.FILE;
                                                        }}),
                                                        add(new DataSourceConfig("ex", "praesentium",                 new String[]{{
                                                                            add("vitae"),
                                                                            add("tenetur"),
                                                                            add("laudantium"),
                                                                        }}) {{
                                                            destination = "ad";
                                                            name = "Mario Zboncak";
                                                            s3Bucket = "itaque";
                                                            s3Keys = new String[]{{
                                                                add("eos"),
                                                            }};
                                                            type = DataSourceTypeEnum.FILE;
                                                        }}),
                                                    }};
                                                    failureBehavior = FailureBehaviorEnum.FAIL;
                                                    iamRole = "eligendi";
                                                    loggingConfig = new LoggingConfig() {{
                                                        recordAllRosTopics = false;
                                                    }};
                                                    maxJobDurationInSeconds = 917877L;
                                                    outputLocation = new OutputLocation() {{
                                                        s3Bucket = "dicta";
                                                        s3Prefix = "inventore";
                                                    }};
                                                    robotApplications = new org.openapis.openapi.models.shared.RobotApplicationConfig[]{{
                                                        add(new RobotApplicationConfig("omnis",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("sapiente"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("expedita", "quia");
                                                                                put("vitae", "odio");
                                                                                put("quas", "ipsa");
                                                                                put("distinctio", "placeat");
                                                                            }};
                                                                            launchFile = "quod";
                                                                            packageName = "eligendi";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(714835L, 825681L) {{
                                                                                        applicationPort = 819757L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 718879L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "iusto";
                                                            applicationVersion = "inventore";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("sed"),
                                                                    add("dolorem"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("exercitationem", "amet");
                                                                }};
                                                                launchFile = "voluptate";
                                                                packageName = "voluptate";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(686301L, 518926L) {{
                                                                            applicationPort = 791421L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 955065L;
                                                                        }}),
                                                                        add(new PortMapping(986594L, 608172L) {{
                                                                            applicationPort = 587539L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 870100L;
                                                                        }}),
                                                                        add(new PortMapping(915145L, 194194L) {{
                                                                            applicationPort = 463695L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 349087L;
                                                                        }}),
                                                                        add(new PortMapping(426481L, 522824L) {{
                                                                            applicationPort = 336640L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 413135L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("repellendus", "temporibus") {{
                                                                    command = "aperiam";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Kellie Miller";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("laborum", "dicta") {{
                                                                    command = "minus";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Dr. Jack Buckridge";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("quaerat", "facere", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Jeanne Stracke";
                                                                    path = "architecto";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                        }}),
                                                        add(new RobotApplicationConfig("quidem",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("culpa"),
                                                                                add("doloremque"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("dicta", "architecto");
                                                                                put("suscipit", "eligendi");
                                                                                put("officiis", "dignissimos");
                                                                            }};
                                                                            launchFile = "fugit";
                                                                            packageName = "ratione";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(620534L, 457389L) {{
                                                                                        applicationPort = 311548L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 14976L;
                                                                                    }}),
                                                                                    add(new PortMapping(188081L, 60379L) {{
                                                                                        applicationPort = 963908L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 644397L;
                                                                                    }}),
                                                                                    add(new PortMapping(646776L, 944405L) {{
                                                                                        applicationPort = 895293L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 614763L;
                                                                                    }}),
                                                                                    add(new PortMapping(370195L, 729612L) {{
                                                                                        applicationPort = 497480L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 160260L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "illum";
                                                            applicationVersion = "soluta";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("laudantium"),
                                                                    add("tempora"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("doloremque", "corrupti");
                                                                    put("reiciendis", "facilis");
                                                                }};
                                                                launchFile = "aliquam";
                                                                packageName = "repudiandae";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(887835L, 429823L) {{
                                                                            applicationPort = 617035L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 68253L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("ut", "earum") {{
                                                                    command = "placeat";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Vickie Sauer";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("consectetur", "modi") {{
                                                                    command = "ullam";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Mae Mayert";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("qui", "accusantium") {{
                                                                    command = "aspernatur";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Melissa Vandervort";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("quibusdam", "quos", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Clay Klein";
                                                                    path = "et";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                        }}),
                                                    }};
                                                    simulationApplications = new org.openapis.openapi.models.shared.SimulationApplicationConfig[]{{
                                                        add(new SimulationApplicationConfig("deleniti",                 new LaunchConfig() {{
                                                                            command = new String[]{{
                                                                                add("aspernatur"),
                                                                                add("dolores"),
                                                                                add("laborum"),
                                                                                add("vero"),
                                                                            }};
                                                                            environmentVariables = new java.util.HashMap<String, String>() {{
                                                                                put("voluptatem", "temporibus");
                                                                            }};
                                                                            launchFile = "id";
                                                                            packageName = "quae";
                                                                            portForwardingConfig = new PortForwardingConfig() {{
                                                                                portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                                    add(new PortMapping(148958L, 721198L) {{
                                                                                        applicationPort = 954401L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 791282L;
                                                                                    }}),
                                                                                    add(new PortMapping(70088L, 643864L) {{
                                                                                        applicationPort = 155473L;
                                                                                        enableOnPublicIp = false;
                                                                                        jobPort = 480108L;
                                                                                    }}),
                                                                                }};
                                                                            }};;
                                                                            streamUI = false;
                                                                        }};) {{
                                                            application = "omnis";
                                                            applicationVersion = "dicta";
                                                            launchConfig = new LaunchConfig() {{
                                                                command = new String[]{{
                                                                    add("explicabo"),
                                                                }};
                                                                environmentVariables = new java.util.HashMap<String, String>() {{
                                                                    put("amet", "consequatur");
                                                                }};
                                                                launchFile = "fugiat";
                                                                packageName = "voluptatum";
                                                                portForwardingConfig = new PortForwardingConfig() {{
                                                                    portMappings = new org.openapis.openapi.models.shared.PortMapping[]{{
                                                                        add(new PortMapping(644299L, 931953L) {{
                                                                            applicationPort = 942780L;
                                                                            enableOnPublicIp = false;
                                                                            jobPort = 356485L;
                                                                        }}),
                                                                    }};
                                                                }};
                                                                streamUI = false;
                                                            }};
                                                            tools = new org.openapis.openapi.models.shared.Tool[]{{
                                                                add(new Tool("deleniti", "optio") {{
                                                                    command = "iusto";
                                                                    exitBehavior = ExitBehaviorEnum.FAIL;
                                                                    name = "Mr. Tracy Shields";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("sunt", "nemo") {{
                                                                    command = "quasi";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Clifford Mertz";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                                add(new Tool("in", "commodi") {{
                                                                    command = "delectus";
                                                                    exitBehavior = ExitBehaviorEnum.RESTART;
                                                                    name = "Calvin Cummerata";
                                                                    streamOutputToCloudWatch = false;
                                                                    streamUI = false;
                                                                }}),
                                                            }};
                                                            uploadConfigurations = new org.openapis.openapi.models.shared.UploadConfiguration[]{{
                                                                add(new UploadConfiguration("eligendi", "hic", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Alexandra Crooks";
                                                                    path = "harum";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                                add(new UploadConfiguration("reiciendis", "quos", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Della Koelpin";
                                                                    path = "sequi";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                                add(new UploadConfiguration("hic", "repellendus", UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE) {{
                                                                    name = "Miss Elisa Reichert";
                                                                    path = "eos";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ON_TERMINATE;
                                                                }}),
                                                                add(new UploadConfiguration("nostrum", "officia", UploadBehaviorEnum.UPLOAD_ON_TERMINATE) {{
                                                                    name = "Valerie Streich";
                                                                    path = "tempore";
                                                                    uploadBehavior = UploadBehaviorEnum.UPLOAD_ROLLING_AUTO_REMOVE;
                                                                }}),
                                                            }};
                                                            useDefaultTools = false;
                                                            useDefaultUploadConfigurations = false;
                                                            worldConfigs = new org.openapis.openapi.models.shared.WorldConfig[]{{
                                                                add(new WorldConfig() {{
                                                                    world = "corporis";
                                                                }}),
                                                                add(new WorldConfig() {{
                                                                    world = "excepturi";
                                                                }}),
                                                                add(new WorldConfig() {{
                                                                    world = "natus";
                                                                }}),
                                                            }};
                                                        }}),
                                                    }};
                                                    tags = new java.util.HashMap<String, String>() {{
                                                        put("blanditiis", "sint");
                                                    }};
                                                    useDefaultApplications = false;
                                                    vpcConfig = new VPCConfig(                new String[]{{
                                                                        add("ipsa"),
                                                                        add("aliquam"),
                                                                        add("dolor"),
                                                                    }}) {{
                                                        assignPublicIp = false;
                                                        securityGroups = new String[]{{
                                                            add("ullam"),
                                                            add("molestiae"),
                                                            add("itaque"),
                                                            add("rem"),
                                                        }};
                                                        subnets = new String[]{{
                                                            add("non"),
                                                            add("recusandae"),
                                                        }};
                                                    }};
                                                }}),
                                            }}) {{
                                batchPolicy = new StartSimulationJobBatchRequestBodyBatchPolicy() {{
                                    maxConcurrency = 842678L;
                                    timeoutInSeconds = 169678L;
                                }};;
                                clientRequestToken = "consequuntur";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("eius", "commodi");
                                }};
                            }};) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "vel";
                xAmzCredential = "cupiditate";
                xAmzDate = "modi";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "modi";
            }};            

            StartSimulationJobBatchResponse res = sdk.sdk.startSimulationJobBatch(req);

            if (res.startSimulationJobBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~syncDeploymentJob~~

<p>Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SyncDeploymentJobRequest;
import org.openapis.openapi.models.operations.SyncDeploymentJobRequestBody;
import org.openapis.openapi.models.operations.SyncDeploymentJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SyncDeploymentJobRequest req = new SyncDeploymentJobRequest(                new SyncDeploymentJobRequestBody("odio", "sit");) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "delectus";
                xAmzDate = "quam";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "ratione";
            }};            

            SyncDeploymentJobResponse res = sdk.sdk.syncDeploymentJob(req);

            if (res.syncDeploymentJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Adds or edits tags for a AWS RoboMaker resource.</p> <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty strings. </p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>

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
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("saepe", "maiores");
                                                put("accusantium", "sed");
                                                put("eos", "consequuntur");
                                                put("quis", "vitae");
                                            }});, "occaecati") {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "quidem";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "quasi";
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

<p>Removes the specified tags from the specified AWS RoboMaker resource.</p> <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key, use <a href="https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html"> <code>TagResource</code> </a>. </p>

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
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("similique",                 new String[]{{
                                add("quo"),
                                add("suscipit"),
                                add("ex"),
                                add("sint"),
                            }}) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "provident";
                xAmzDate = "alias";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "autem";
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

## updateRobotApplication

Updates a robot application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRobotApplicationRequest;
import org.openapis.openapi.models.operations.UpdateRobotApplicationRequestBody;
import org.openapis.openapi.models.operations.UpdateRobotApplicationRequestBodyEnvironment;
import org.openapis.openapi.models.operations.UpdateRobotApplicationRequestBodyRobotSoftwareSuite;
import org.openapis.openapi.models.operations.UpdateRobotApplicationResponse;
import org.openapis.openapi.models.shared.ArchitectureEnum;
import org.openapis.openapi.models.shared.RobotSoftwareSuiteTypeEnum;
import org.openapis.openapi.models.shared.RobotSoftwareSuiteVersionTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRobotApplicationRequest req = new UpdateRobotApplicationRequest(                new UpdateRobotApplicationRequestBody("molestiae",                 new UpdateRobotApplicationRequestBodyRobotSoftwareSuite() {{
                                                name = RobotSoftwareSuiteTypeEnum.GENERAL;
                                                version = RobotSoftwareSuiteVersionTypeEnum.FOXY;
                                            }};) {{
                                currentRevisionId = "impedit";
                                environment = new UpdateRobotApplicationRequestBodyEnvironment() {{
                                    uri = "https://miserly-bonus.org";
                                }};;
                                sources = new org.openapis.openapi.models.shared.SourceConfig[]{{
                                    add(new SourceConfig() {{
                                        architecture = ArchitectureEnum.ARM64;
                                        s3Bucket = "laudantium";
                                        s3Key = "unde";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "quae";
                xAmzCredential = "facere";
                xAmzDate = "ea";
                xAmzSecurityToken = "libero";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "amet";
            }};            

            UpdateRobotApplicationResponse res = sdk.sdk.updateRobotApplication(req);

            if (res.updateRobotApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSimulationApplication

Updates a simulation application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSimulationApplicationRequest;
import org.openapis.openapi.models.operations.UpdateSimulationApplicationRequestBody;
import org.openapis.openapi.models.operations.UpdateSimulationApplicationRequestBodyEnvironment;
import org.openapis.openapi.models.operations.UpdateSimulationApplicationRequestBodyRenderingEngine;
import org.openapis.openapi.models.operations.UpdateSimulationApplicationRequestBodyRobotSoftwareSuite;
import org.openapis.openapi.models.operations.UpdateSimulationApplicationRequestBodySimulationSoftwareSuite;
import org.openapis.openapi.models.operations.UpdateSimulationApplicationResponse;
import org.openapis.openapi.models.shared.ArchitectureEnum;
import org.openapis.openapi.models.shared.RenderingEngineTypeEnum;
import org.openapis.openapi.models.shared.RobotSoftwareSuiteTypeEnum;
import org.openapis.openapi.models.shared.RobotSoftwareSuiteVersionTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SimulationSoftwareSuiteTypeEnum;
import org.openapis.openapi.models.shared.SourceConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSimulationApplicationRequest req = new UpdateSimulationApplicationRequest(                new UpdateSimulationApplicationRequestBody("minus",                 new UpdateSimulationApplicationRequestBodyRobotSoftwareSuite() {{
                                                name = RobotSoftwareSuiteTypeEnum.GENERAL;
                                                version = RobotSoftwareSuiteVersionTypeEnum.DASHING;
                                            }};,                 new UpdateSimulationApplicationRequestBodySimulationSoftwareSuite() {{
                                                name = SimulationSoftwareSuiteTypeEnum.SIMULATION_RUNTIME;
                                                version = "consectetur";
                                            }};) {{
                                currentRevisionId = "labore";
                                environment = new UpdateSimulationApplicationRequestBodyEnvironment() {{
                                    uri = "https://smug-data.com";
                                }};;
                                renderingEngine = new UpdateSimulationApplicationRequestBodyRenderingEngine() {{
                                    name = RenderingEngineTypeEnum.OGRE;
                                    version = "nam";
                                }};;
                                sources = new org.openapis.openapi.models.shared.SourceConfig[]{{
                                    add(new SourceConfig() {{
                                        architecture = ArchitectureEnum.X8664;
                                        s3Bucket = "aperiam";
                                        s3Key = "ducimus";
                                    }}),
                                    add(new SourceConfig() {{
                                        architecture = ArchitectureEnum.ARMHF;
                                        s3Bucket = "necessitatibus";
                                        s3Key = "numquam";
                                    }}),
                                    add(new SourceConfig() {{
                                        architecture = ArchitectureEnum.ARMHF;
                                        s3Bucket = "eligendi";
                                        s3Key = "sapiente";
                                    }}),
                                    add(new SourceConfig() {{
                                        architecture = ArchitectureEnum.X8664;
                                        s3Bucket = "impedit";
                                        s3Key = "numquam";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "nihil";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "ullam";
            }};            

            UpdateSimulationApplicationResponse res = sdk.sdk.updateSimulationApplication(req);

            if (res.updateSimulationApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorldTemplate

Updates a world template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorldTemplateRequest;
import org.openapis.openapi.models.operations.UpdateWorldTemplateRequestBody;
import org.openapis.openapi.models.operations.UpdateWorldTemplateRequestBodyTemplateLocation;
import org.openapis.openapi.models.operations.UpdateWorldTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWorldTemplateRequest req = new UpdateWorldTemplateRequest(                new UpdateWorldTemplateRequestBody("consequuntur") {{
                                name = "Diana Mante";
                                templateBody = "perferendis";
                                templateLocation = new UpdateWorldTemplateRequestBodyTemplateLocation() {{
                                    s3Bucket = "quibusdam";
                                    s3Key = "impedit";
                                }};;
                            }};) {{
                xAmzAlgorithm = "ducimus";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "nisi";
                xAmzDate = "dolor";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "maxime";
            }};            

            UpdateWorldTemplateResponse res = sdk.sdk.updateWorldTemplate(req);

            if (res.updateWorldTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
