# SDK

## Overview

<p>The AWS Migration Hub API methods help to obtain server and application migration status and integrate your resource-specific migration tool by providing a programmatic interface to Migration Hub.</p> <p>Remember that you must set your AWS Migration Hub home region before you call any of these APIs, or a <code>HomeRegionNotSetException</code> error will be returned. Also, you must make the API calls while in your home region.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/mgh/>
### Available Operations

* [associateCreatedArtifact](#associatecreatedartifact) - <p>Associates a created artifact of an AWS cloud resource, the target receiving the migration, with the migration task performed by a migration tool. This API has the following traits:</p> <ul> <li> <p>Migration tools can call the <code>AssociateCreatedArtifact</code> operation to indicate which AWS artifact is associated with a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or DMS endpoint, etc.</p> </li> </ul>
* [associateDiscoveredResource](#associatediscoveredresource) - Associates a discovered resource ID from Application Discovery Service with a migration task.
* [createProgressUpdateStream](#createprogressupdatestream) - Creates a progress update stream which is an AWS resource used for access control as well as a namespace for migration task names that is implicitly linked to your AWS account. It must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.
* [deleteProgressUpdateStream](#deleteprogressupdatestream) - <p>Deletes a progress update stream, including all of its tasks, which was previously created as an AWS resource used for access control. This API has the following traits:</p> <ul> <li> <p>The only parameter needed for <code>DeleteProgressUpdateStream</code> is the stream name (same as a <code>CreateProgressUpdateStream</code> call).</p> </li> <li> <p>The call will return, and a background process will asynchronously delete the stream and all of its resources (tasks, associated resources, resource attributes, created artifacts).</p> </li> <li> <p>If the stream takes time to be deleted, it might still show up on a <code>ListProgressUpdateStreams</code> call.</p> </li> <li> <p> <code>CreateProgressUpdateStream</code>, <code>ImportMigrationTask</code>, <code>NotifyMigrationTaskState</code>, and all Associate[*] APIs related to the tasks belonging to the stream will throw "InvalidInputException" if the stream of the same name is in the process of being deleted.</p> </li> <li> <p>Once the stream and all of its resources are deleted, <code>CreateProgressUpdateStream</code> for a stream of the same name will succeed, and that stream will be an entirely new logical resource (without any resources associated with the old stream).</p> </li> </ul>
* [describeApplicationState](#describeapplicationstate) - Gets the migration status of an application.
* [describeMigrationTask](#describemigrationtask) - Retrieves a list of all attributes associated with a specific migration task.
* [disassociateCreatedArtifact](#disassociatecreatedartifact) - <p>Disassociates a created artifact of an AWS resource with a migration task performed by a migration tool that was previously associated. This API has the following traits:</p> <ul> <li> <p>A migration user can call the <code>DisassociateCreatedArtifacts</code> operation to disassociate a created AWS Artifact from a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or RDS instance, etc.</p> </li> </ul>
* [disassociateDiscoveredResource](#disassociatediscoveredresource) - Disassociate an Application Discovery Service discovered resource from a migration task.
* [importMigrationTask](#importmigrationtask) - <p>Registers a new migration task which represents a server, database, etc., being migrated to AWS by a migration tool.</p> <p>This API is a prerequisite to calling the <code>NotifyMigrationTaskState</code> API as the migration tool must first register the migration task with Migration Hub.</p>
* [listApplicationStates](#listapplicationstates) - Lists all the migration statuses for your applications. If you use the optional <code>ApplicationIds</code> parameter, only the migration statuses for those applications will be returned.
* [listCreatedArtifacts](#listcreatedartifacts) - <p>Lists the created artifacts attached to a given migration task in an update stream. This API has the following traits:</p> <ul> <li> <p>Gets the list of the created artifacts while migration is taking place.</p> </li> <li> <p>Shows the artifacts created by the migration tool that was associated by the <code>AssociateCreatedArtifact</code> API. </p> </li> <li> <p>Lists created artifacts in a paginated interface. </p> </li> </ul>
* [listDiscoveredResources](#listdiscoveredresources) - Lists discovered resources associated with the given <code>MigrationTask</code>.
* [listMigrationTasks](#listmigrationtasks) - <p>Lists all, or filtered by resource name, migration tasks associated with the user account making this call. This API has the following traits:</p> <ul> <li> <p>Can show a summary list of the most recent migration tasks.</p> </li> <li> <p>Can show a summary list of migration tasks associated with a given discovered resource.</p> </li> <li> <p>Lists migration tasks in a paginated interface.</p> </li> </ul>
* [listProgressUpdateStreams](#listprogressupdatestreams) - Lists progress update streams associated with the user account making this call.
* [notifyApplicationState](#notifyapplicationstate) - Sets the migration state of an application. For a given application identified by the value passed to <code>ApplicationId</code>, its status is set or updated by passing one of three values to <code>Status</code>: <code>NOT_STARTED | IN_PROGRESS | COMPLETED</code>.
* [notifyMigrationTaskState](#notifymigrationtaskstate) - <p>Notifies Migration Hub of the current status, progress, or other detail regarding a migration task. This API has the following traits:</p> <ul> <li> <p>Migration tools will call the <code>NotifyMigrationTaskState</code> API to share the latest progress and status.</p> </li> <li> <p> <code>MigrationTaskName</code> is used for addressing updates to the correct target.</p> </li> <li> <p> <code>ProgressUpdateStream</code> is used for access control and to provide a namespace for each migration tool.</p> </li> </ul>
* [putResourceAttributes](#putresourceattributes) - <p>Provides identifying details of the resource being migrated so that it can be associated in the Application Discovery Service repository. This association occurs asynchronously after <code>PutResourceAttributes</code> returns.</p> <important> <ul> <li> <p>Keep in mind that subsequent calls to PutResourceAttributes will override previously stored attributes. For example, if it is first called with a MAC address, but later, it is desired to <i>add</i> an IP address, it will then be required to call it with <i>both</i> the IP and MAC addresses to prevent overriding the MAC address.</p> </li> <li> <p>Note the instructions regarding the special use case of the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#migrationhub-PutResourceAttributes-request-ResourceAttributeList"> <code>ResourceAttributeList</code> </a> parameter when specifying any "VM" related value.</p> </li> </ul> </important> <note> <p>Because this is an asynchronous call, it will always return 200, whether an association occurs or not. To confirm if an association was found based on the provided details, call <code>ListDiscoveredResources</code>.</p> </note>

## associateCreatedArtifact

<p>Associates a created artifact of an AWS cloud resource, the target receiving the migration, with the migration task performed by a migration tool. This API has the following traits:</p> <ul> <li> <p>Migration tools can call the <code>AssociateCreatedArtifact</code> operation to indicate which AWS artifact is associated with a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or DMS endpoint, etc.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateCreatedArtifactRequest;
import org.openapis.openapi.models.operations.AssociateCreatedArtifactResponse;
import org.openapis.openapi.models.operations.AssociateCreatedArtifactXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateCreatedArtifactRequest;
import org.openapis.openapi.models.shared.CreatedArtifact;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateCreatedArtifactRequest req = new AssociateCreatedArtifactRequest(                new AssociateCreatedArtifactRequest(                new CreatedArtifact("magnam") {{
                                                description = "debitis";
                                            }};, "ipsa", "delectus") {{
                                dryRun = false;
                            }};, AssociateCreatedArtifactXAmzTargetEnum.AWS_MIGRATION_HUB_ASSOCIATE_CREATED_ARTIFACT) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            AssociateCreatedArtifactResponse res = sdk.sdk.associateCreatedArtifact(req);

            if (res.associateCreatedArtifactResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateDiscoveredResource

Associates a discovered resource ID from Application Discovery Service with a migration task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateDiscoveredResourceRequest;
import org.openapis.openapi.models.operations.AssociateDiscoveredResourceResponse;
import org.openapis.openapi.models.operations.AssociateDiscoveredResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateDiscoveredResourceRequest;
import org.openapis.openapi.models.shared.DiscoveredResource;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateDiscoveredResourceRequest req = new AssociateDiscoveredResourceRequest(                new AssociateDiscoveredResourceRequest(                new DiscoveredResource("nisi") {{
                                                description = "recusandae";
                                            }};, "temporibus", "ab") {{
                                dryRun = false;
                            }};, AssociateDiscoveredResourceXAmzTargetEnum.AWS_MIGRATION_HUB_ASSOCIATE_DISCOVERED_RESOURCE) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "deserunt";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "sapiente";
            }};            

            AssociateDiscoveredResourceResponse res = sdk.sdk.associateDiscoveredResource(req);

            if (res.associateDiscoveredResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProgressUpdateStream

Creates a progress update stream which is an AWS resource used for access control as well as a namespace for migration task names that is implicitly linked to your AWS account. It must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProgressUpdateStreamRequest;
import org.openapis.openapi.models.operations.CreateProgressUpdateStreamResponse;
import org.openapis.openapi.models.operations.CreateProgressUpdateStreamXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateProgressUpdateStreamRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateProgressUpdateStreamRequest req = new CreateProgressUpdateStreamRequest(                new CreateProgressUpdateStreamRequest("odit") {{
                                dryRun = false;
                            }};, CreateProgressUpdateStreamXAmzTargetEnum.AWS_MIGRATION_HUB_CREATE_PROGRESS_UPDATE_STREAM) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "at";
                xAmzCredential = "maiores";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "quod";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "esse";
            }};            

            CreateProgressUpdateStreamResponse res = sdk.sdk.createProgressUpdateStream(req);

            if (res.createProgressUpdateStreamResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProgressUpdateStream

<p>Deletes a progress update stream, including all of its tasks, which was previously created as an AWS resource used for access control. This API has the following traits:</p> <ul> <li> <p>The only parameter needed for <code>DeleteProgressUpdateStream</code> is the stream name (same as a <code>CreateProgressUpdateStream</code> call).</p> </li> <li> <p>The call will return, and a background process will asynchronously delete the stream and all of its resources (tasks, associated resources, resource attributes, created artifacts).</p> </li> <li> <p>If the stream takes time to be deleted, it might still show up on a <code>ListProgressUpdateStreams</code> call.</p> </li> <li> <p> <code>CreateProgressUpdateStream</code>, <code>ImportMigrationTask</code>, <code>NotifyMigrationTaskState</code>, and all Associate[*] APIs related to the tasks belonging to the stream will throw "InvalidInputException" if the stream of the same name is in the process of being deleted.</p> </li> <li> <p>Once the stream and all of its resources are deleted, <code>CreateProgressUpdateStream</code> for a stream of the same name will succeed, and that stream will be an entirely new logical resource (without any resources associated with the old stream).</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProgressUpdateStreamRequest;
import org.openapis.openapi.models.operations.DeleteProgressUpdateStreamResponse;
import org.openapis.openapi.models.operations.DeleteProgressUpdateStreamXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteProgressUpdateStreamRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProgressUpdateStreamRequest req = new DeleteProgressUpdateStreamRequest(                new DeleteProgressUpdateStreamRequest("porro") {{
                                dryRun = false;
                            }};, DeleteProgressUpdateStreamXAmzTargetEnum.AWS_MIGRATION_HUB_DELETE_PROGRESS_UPDATE_STREAM) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "nam";
                xAmzDate = "officia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "deleniti";
            }};            

            DeleteProgressUpdateStreamResponse res = sdk.sdk.deleteProgressUpdateStream(req);

            if (res.deleteProgressUpdateStreamResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeApplicationState

Gets the migration status of an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeApplicationStateRequest;
import org.openapis.openapi.models.operations.DescribeApplicationStateResponse;
import org.openapis.openapi.models.operations.DescribeApplicationStateXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeApplicationStateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeApplicationStateRequest req = new DescribeApplicationStateRequest(                new DescribeApplicationStateRequest("optio");, DescribeApplicationStateXAmzTargetEnum.AWS_MIGRATION_HUB_DESCRIBE_APPLICATION_STATE) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "commodi";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "modi";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "impedit";
            }};            

            DescribeApplicationStateResponse res = sdk.sdk.describeApplicationState(req);

            if (res.describeApplicationStateResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMigrationTask

Retrieves a list of all attributes associated with a specific migration task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMigrationTaskRequest;
import org.openapis.openapi.models.operations.DescribeMigrationTaskResponse;
import org.openapis.openapi.models.operations.DescribeMigrationTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeMigrationTaskRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMigrationTaskRequest req = new DescribeMigrationTaskRequest(                new DescribeMigrationTaskRequest("esse", "ipsum");, DescribeMigrationTaskXAmzTargetEnum.AWS_MIGRATION_HUB_DESCRIBE_MIGRATION_TASK) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "perferendis";
                xAmzDate = "ad";
                xAmzSecurityToken = "natus";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "iste";
            }};            

            DescribeMigrationTaskResponse res = sdk.sdk.describeMigrationTask(req);

            if (res.describeMigrationTaskResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateCreatedArtifact

<p>Disassociates a created artifact of an AWS resource with a migration task performed by a migration tool that was previously associated. This API has the following traits:</p> <ul> <li> <p>A migration user can call the <code>DisassociateCreatedArtifacts</code> operation to disassociate a created AWS Artifact from a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or RDS instance, etc.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateCreatedArtifactRequest;
import org.openapis.openapi.models.operations.DisassociateCreatedArtifactResponse;
import org.openapis.openapi.models.operations.DisassociateCreatedArtifactXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateCreatedArtifactRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateCreatedArtifactRequest req = new DisassociateCreatedArtifactRequest(                new DisassociateCreatedArtifactRequest("natus", "laboriosam", "hic") {{
                                dryRun = false;
                            }};, DisassociateCreatedArtifactXAmzTargetEnum.AWS_MIGRATION_HUB_DISASSOCIATE_CREATED_ARTIFACT) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "in";
                xAmzDate = "corporis";
                xAmzSecurityToken = "iste";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "saepe";
            }};            

            DisassociateCreatedArtifactResponse res = sdk.sdk.disassociateCreatedArtifact(req);

            if (res.disassociateCreatedArtifactResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateDiscoveredResource

Disassociate an Application Discovery Service discovered resource from a migration task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateDiscoveredResourceRequest;
import org.openapis.openapi.models.operations.DisassociateDiscoveredResourceResponse;
import org.openapis.openapi.models.operations.DisassociateDiscoveredResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateDiscoveredResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateDiscoveredResourceRequest req = new DisassociateDiscoveredResourceRequest(                new DisassociateDiscoveredResourceRequest("architecto", "ipsa", "reiciendis") {{
                                dryRun = false;
                            }};, DisassociateDiscoveredResourceXAmzTargetEnum.AWS_MIGRATION_HUB_DISASSOCIATE_DISCOVERED_RESOURCE) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "laborum";
                xAmzDate = "dolores";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "explicabo";
            }};            

            DisassociateDiscoveredResourceResponse res = sdk.sdk.disassociateDiscoveredResource(req);

            if (res.disassociateDiscoveredResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importMigrationTask

<p>Registers a new migration task which represents a server, database, etc., being migrated to AWS by a migration tool.</p> <p>This API is a prerequisite to calling the <code>NotifyMigrationTaskState</code> API as the migration tool must first register the migration task with Migration Hub.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportMigrationTaskRequest;
import org.openapis.openapi.models.operations.ImportMigrationTaskResponse;
import org.openapis.openapi.models.operations.ImportMigrationTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.ImportMigrationTaskRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportMigrationTaskRequest req = new ImportMigrationTaskRequest(                new ImportMigrationTaskRequest("enim", "omnis") {{
                                dryRun = false;
                            }};, ImportMigrationTaskXAmzTargetEnum.AWS_MIGRATION_HUB_IMPORT_MIGRATION_TASK) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "minima";
                xAmzCredential = "excepturi";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "iure";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "doloribus";
            }};            

            ImportMigrationTaskResponse res = sdk.sdk.importMigrationTask(req);

            if (res.importMigrationTaskResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApplicationStates

Lists all the migration statuses for your applications. If you use the optional <code>ApplicationIds</code> parameter, only the migration statuses for those applications will be returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListApplicationStatesRequest;
import org.openapis.openapi.models.operations.ListApplicationStatesResponse;
import org.openapis.openapi.models.operations.ListApplicationStatesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListApplicationStatesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListApplicationStatesRequest req = new ListApplicationStatesRequest(                new ListApplicationStatesRequest() {{
                                applicationIds = new String[]{{
                                    add("mollitia"),
                                }};
                                maxResults = 208876L;
                                nextToken = "culpa";
                            }};, ListApplicationStatesXAmzTargetEnum.AWS_MIGRATION_HUB_LIST_APPLICATION_STATES) {{
                maxResults = "consequuntur";
                nextToken = "repellat";
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "numquam";
                xAmzDate = "commodi";
                xAmzSecurityToken = "quam";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "velit";
            }};            

            ListApplicationStatesResponse res = sdk.sdk.listApplicationStates(req);

            if (res.listApplicationStatesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCreatedArtifacts

<p>Lists the created artifacts attached to a given migration task in an update stream. This API has the following traits:</p> <ul> <li> <p>Gets the list of the created artifacts while migration is taking place.</p> </li> <li> <p>Shows the artifacts created by the migration tool that was associated by the <code>AssociateCreatedArtifact</code> API. </p> </li> <li> <p>Lists created artifacts in a paginated interface. </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCreatedArtifactsRequest;
import org.openapis.openapi.models.operations.ListCreatedArtifactsResponse;
import org.openapis.openapi.models.operations.ListCreatedArtifactsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListCreatedArtifactsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCreatedArtifactsRequest req = new ListCreatedArtifactsRequest(                new ListCreatedArtifactsRequest("quia", "quis") {{
                                maxResults = 110375L;
                                nextToken = "laborum";
                            }};, ListCreatedArtifactsXAmzTargetEnum.AWS_MIGRATION_HUB_LIST_CREATED_ARTIFACTS) {{
                maxResults = "animi";
                nextToken = "enim";
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "quo";
                xAmzCredential = "sequi";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "id";
                xAmzSignedHeaders = "possimus";
            }};            

            ListCreatedArtifactsResponse res = sdk.sdk.listCreatedArtifacts(req);

            if (res.listCreatedArtifactsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDiscoveredResources

Lists discovered resources associated with the given <code>MigrationTask</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDiscoveredResourcesRequest;
import org.openapis.openapi.models.operations.ListDiscoveredResourcesResponse;
import org.openapis.openapi.models.operations.ListDiscoveredResourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDiscoveredResourcesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDiscoveredResourcesRequest req = new ListDiscoveredResourcesRequest(                new ListDiscoveredResourcesRequest("quasi", "error") {{
                                maxResults = 837945L;
                                nextToken = "laborum";
                            }};, ListDiscoveredResourcesXAmzTargetEnum.AWS_MIGRATION_HUB_LIST_DISCOVERED_RESOURCES) {{
                maxResults = "quasi";
                nextToken = "reiciendis";
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nihil";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "omnis";
            }};            

            ListDiscoveredResourcesResponse res = sdk.sdk.listDiscoveredResources(req);

            if (res.listDiscoveredResourcesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMigrationTasks

<p>Lists all, or filtered by resource name, migration tasks associated with the user account making this call. This API has the following traits:</p> <ul> <li> <p>Can show a summary list of the most recent migration tasks.</p> </li> <li> <p>Can show a summary list of migration tasks associated with a given discovered resource.</p> </li> <li> <p>Lists migration tasks in a paginated interface.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMigrationTasksRequest;
import org.openapis.openapi.models.operations.ListMigrationTasksResponse;
import org.openapis.openapi.models.operations.ListMigrationTasksXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListMigrationTasksRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMigrationTasksRequest req = new ListMigrationTasksRequest(                new ListMigrationTasksRequest() {{
                                maxResults = 739264L;
                                nextToken = "perferendis";
                                resourceName = "doloremque";
                            }};, ListMigrationTasksXAmzTargetEnum.AWS_MIGRATION_HUB_LIST_MIGRATION_TASKS) {{
                maxResults = "reprehenderit";
                nextToken = "ut";
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "corporis";
                xAmzDate = "dolore";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "harum";
            }};            

            ListMigrationTasksResponse res = sdk.sdk.listMigrationTasks(req);

            if (res.listMigrationTasksResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProgressUpdateStreams

Lists progress update streams associated with the user account making this call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProgressUpdateStreamsRequest;
import org.openapis.openapi.models.operations.ListProgressUpdateStreamsResponse;
import org.openapis.openapi.models.operations.ListProgressUpdateStreamsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListProgressUpdateStreamsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProgressUpdateStreamsRequest req = new ListProgressUpdateStreamsRequest(                new ListProgressUpdateStreamsRequest() {{
                                maxResults = 880476L;
                                nextToken = "commodi";
                            }};, ListProgressUpdateStreamsXAmzTargetEnum.AWS_MIGRATION_HUB_LIST_PROGRESS_UPDATE_STREAMS) {{
                maxResults = "repudiandae";
                nextToken = "quae";
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "molestias";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "praesentium";
            }};            

            ListProgressUpdateStreamsResponse res = sdk.sdk.listProgressUpdateStreams(req);

            if (res.listProgressUpdateStreamsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notifyApplicationState

Sets the migration state of an application. For a given application identified by the value passed to <code>ApplicationId</code>, its status is set or updated by passing one of three values to <code>Status</code>: <code>NOT_STARTED | IN_PROGRESS | COMPLETED</code>.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotifyApplicationStateRequest;
import org.openapis.openapi.models.operations.NotifyApplicationStateResponse;
import org.openapis.openapi.models.operations.NotifyApplicationStateXAmzTargetEnum;
import org.openapis.openapi.models.shared.ApplicationStatusEnum;
import org.openapis.openapi.models.shared.NotifyApplicationStateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            NotifyApplicationStateRequest req = new NotifyApplicationStateRequest(                new NotifyApplicationStateRequest("voluptates", ApplicationStatusEnum.NOT_STARTED) {{
                                dryRun = false;
                                updateDateTime = OffsetDateTime.parse("2021-04-10T08:07:33.561Z");
                            }};, NotifyApplicationStateXAmzTargetEnum.AWS_MIGRATION_HUB_NOTIFY_APPLICATION_STATE) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "incidunt";
                xAmzDate = "enim";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "est";
                xAmzSignedHeaders = "quibusdam";
            }};            

            NotifyApplicationStateResponse res = sdk.sdk.notifyApplicationState(req);

            if (res.notifyApplicationStateResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notifyMigrationTaskState

<p>Notifies Migration Hub of the current status, progress, or other detail regarding a migration task. This API has the following traits:</p> <ul> <li> <p>Migration tools will call the <code>NotifyMigrationTaskState</code> API to share the latest progress and status.</p> </li> <li> <p> <code>MigrationTaskName</code> is used for addressing updates to the correct target.</p> </li> <li> <p> <code>ProgressUpdateStream</code> is used for access control and to provide a namespace for each migration tool.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotifyMigrationTaskStateRequest;
import org.openapis.openapi.models.operations.NotifyMigrationTaskStateResponse;
import org.openapis.openapi.models.operations.NotifyMigrationTaskStateXAmzTargetEnum;
import org.openapis.openapi.models.shared.NotifyMigrationTaskStateRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StatusEnum;
import org.openapis.openapi.models.shared.Task;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            NotifyMigrationTaskStateRequest req = new NotifyMigrationTaskStateRequest(                new NotifyMigrationTaskStateRequest("deserunt", 716327L, "quibusdam",                 new Task(StatusEnum.IN_PROGRESS) {{
                                                progressPercent = 264730L;
                                                statusDetail = "qui";
                                            }};, OffsetDateTime.parse("2022-05-31T22:08:47.731Z")) {{
                                dryRun = false;
                            }};, NotifyMigrationTaskStateXAmzTargetEnum.AWS_MIGRATION_HUB_NOTIFY_MIGRATION_TASK_STATE) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "magni";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "fugit";
            }};            

            NotifyMigrationTaskStateResponse res = sdk.sdk.notifyMigrationTaskState(req);

            if (res.notifyMigrationTaskStateResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putResourceAttributes

<p>Provides identifying details of the resource being migrated so that it can be associated in the Application Discovery Service repository. This association occurs asynchronously after <code>PutResourceAttributes</code> returns.</p> <important> <ul> <li> <p>Keep in mind that subsequent calls to PutResourceAttributes will override previously stored attributes. For example, if it is first called with a MAC address, but later, it is desired to <i>add</i> an IP address, it will then be required to call it with <i>both</i> the IP and MAC addresses to prevent overriding the MAC address.</p> </li> <li> <p>Note the instructions regarding the special use case of the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#migrationhub-PutResourceAttributes-request-ResourceAttributeList"> <code>ResourceAttributeList</code> </a> parameter when specifying any "VM" related value.</p> </li> </ul> </important> <note> <p>Because this is an asynchronous call, it will always return 200, whether an association occurs or not. To confirm if an association was found based on the provided details, call <code>ListDiscoveredResources</code>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutResourceAttributesRequest;
import org.openapis.openapi.models.operations.PutResourceAttributesResponse;
import org.openapis.openapi.models.operations.PutResourceAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutResourceAttributesRequest;
import org.openapis.openapi.models.shared.ResourceAttribute;
import org.openapis.openapi.models.shared.ResourceAttributeTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutResourceAttributesRequest req = new PutResourceAttributesRequest(                new PutResourceAttributesRequest("excepturi", "tempora",                 new org.openapis.openapi.models.shared.ResourceAttribute[]{{
                                                add(new ResourceAttribute(ResourceAttributeTypeEnum.MOTHERBOARD_SERIAL_NUMBER, "eum") {{
                                                    type = ResourceAttributeTypeEnum.VM_PATH;
                                                    value = "labore";
                                                }}),
                                                add(new ResourceAttribute(ResourceAttributeTypeEnum.VM_MANAGED_OBJECT_REFERENCE, "aliquid") {{
                                                    type = ResourceAttributeTypeEnum.MAC_ADDRESS;
                                                    value = "eligendi";
                                                }}),
                                                add(new ResourceAttribute(ResourceAttributeTypeEnum.VM_MANAGED_OBJECT_REFERENCE, "officia") {{
                                                    type = ResourceAttributeTypeEnum.VM_MANAGED_OBJECT_REFERENCE;
                                                    value = "necessitatibus";
                                                }}),
                                            }}) {{
                                dryRun = false;
                            }};, PutResourceAttributesXAmzTargetEnum.AWS_MIGRATION_HUB_PUT_RESOURCE_ATTRIBUTES) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "a";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "in";
                xAmzSignature = "in";
                xAmzSignedHeaders = "illum";
            }};            

            PutResourceAttributesResponse res = sdk.sdk.putResourceAttributes(req);

            if (res.putResourceAttributesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
