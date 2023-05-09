# SDK

## Overview

<p>The AWS Migration Hub API methods help to obtain server and application migration status and integrate your resource-specific migration tool by providing a programmatic interface to Migration Hub.</p> <p>Remember that you must set your AWS Migration Hub home region before you call any of these APIs, or a <code>HomeRegionNotSetException</code> error will be returned. Also, you must make the API calls while in your home region.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/mgh/>
### Available Operations

* [AssociateCreatedArtifact](#associatecreatedartifact) - <p>Associates a created artifact of an AWS cloud resource, the target receiving the migration, with the migration task performed by a migration tool. This API has the following traits:</p> <ul> <li> <p>Migration tools can call the <code>AssociateCreatedArtifact</code> operation to indicate which AWS artifact is associated with a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or DMS endpoint, etc.</p> </li> </ul>
* [AssociateDiscoveredResource](#associatediscoveredresource) - Associates a discovered resource ID from Application Discovery Service with a migration task.
* [CreateProgressUpdateStream](#createprogressupdatestream) - Creates a progress update stream which is an AWS resource used for access control as well as a namespace for migration task names that is implicitly linked to your AWS account. It must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.
* [DeleteProgressUpdateStream](#deleteprogressupdatestream) - <p>Deletes a progress update stream, including all of its tasks, which was previously created as an AWS resource used for access control. This API has the following traits:</p> <ul> <li> <p>The only parameter needed for <code>DeleteProgressUpdateStream</code> is the stream name (same as a <code>CreateProgressUpdateStream</code> call).</p> </li> <li> <p>The call will return, and a background process will asynchronously delete the stream and all of its resources (tasks, associated resources, resource attributes, created artifacts).</p> </li> <li> <p>If the stream takes time to be deleted, it might still show up on a <code>ListProgressUpdateStreams</code> call.</p> </li> <li> <p> <code>CreateProgressUpdateStream</code>, <code>ImportMigrationTask</code>, <code>NotifyMigrationTaskState</code>, and all Associate[*] APIs related to the tasks belonging to the stream will throw "InvalidInputException" if the stream of the same name is in the process of being deleted.</p> </li> <li> <p>Once the stream and all of its resources are deleted, <code>CreateProgressUpdateStream</code> for a stream of the same name will succeed, and that stream will be an entirely new logical resource (without any resources associated with the old stream).</p> </li> </ul>
* [DescribeApplicationState](#describeapplicationstate) - Gets the migration status of an application.
* [DescribeMigrationTask](#describemigrationtask) - Retrieves a list of all attributes associated with a specific migration task.
* [DisassociateCreatedArtifact](#disassociatecreatedartifact) - <p>Disassociates a created artifact of an AWS resource with a migration task performed by a migration tool that was previously associated. This API has the following traits:</p> <ul> <li> <p>A migration user can call the <code>DisassociateCreatedArtifacts</code> operation to disassociate a created AWS Artifact from a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or RDS instance, etc.</p> </li> </ul>
* [DisassociateDiscoveredResource](#disassociatediscoveredresource) - Disassociate an Application Discovery Service discovered resource from a migration task.
* [ImportMigrationTask](#importmigrationtask) - <p>Registers a new migration task which represents a server, database, etc., being migrated to AWS by a migration tool.</p> <p>This API is a prerequisite to calling the <code>NotifyMigrationTaskState</code> API as the migration tool must first register the migration task with Migration Hub.</p>
* [ListApplicationStates](#listapplicationstates) - Lists all the migration statuses for your applications. If you use the optional <code>ApplicationIds</code> parameter, only the migration statuses for those applications will be returned.
* [ListCreatedArtifacts](#listcreatedartifacts) - <p>Lists the created artifacts attached to a given migration task in an update stream. This API has the following traits:</p> <ul> <li> <p>Gets the list of the created artifacts while migration is taking place.</p> </li> <li> <p>Shows the artifacts created by the migration tool that was associated by the <code>AssociateCreatedArtifact</code> API. </p> </li> <li> <p>Lists created artifacts in a paginated interface. </p> </li> </ul>
* [ListDiscoveredResources](#listdiscoveredresources) - Lists discovered resources associated with the given <code>MigrationTask</code>.
* [ListMigrationTasks](#listmigrationtasks) - <p>Lists all, or filtered by resource name, migration tasks associated with the user account making this call. This API has the following traits:</p> <ul> <li> <p>Can show a summary list of the most recent migration tasks.</p> </li> <li> <p>Can show a summary list of migration tasks associated with a given discovered resource.</p> </li> <li> <p>Lists migration tasks in a paginated interface.</p> </li> </ul>
* [ListProgressUpdateStreams](#listprogressupdatestreams) - Lists progress update streams associated with the user account making this call.
* [NotifyApplicationState](#notifyapplicationstate) - Sets the migration state of an application. For a given application identified by the value passed to <code>ApplicationId</code>, its status is set or updated by passing one of three values to <code>Status</code>: <code>NOT_STARTED | IN_PROGRESS | COMPLETED</code>.
* [NotifyMigrationTaskState](#notifymigrationtaskstate) - <p>Notifies Migration Hub of the current status, progress, or other detail regarding a migration task. This API has the following traits:</p> <ul> <li> <p>Migration tools will call the <code>NotifyMigrationTaskState</code> API to share the latest progress and status.</p> </li> <li> <p> <code>MigrationTaskName</code> is used for addressing updates to the correct target.</p> </li> <li> <p> <code>ProgressUpdateStream</code> is used for access control and to provide a namespace for each migration tool.</p> </li> </ul>
* [PutResourceAttributes](#putresourceattributes) - <p>Provides identifying details of the resource being migrated so that it can be associated in the Application Discovery Service repository. This association occurs asynchronously after <code>PutResourceAttributes</code> returns.</p> <important> <ul> <li> <p>Keep in mind that subsequent calls to PutResourceAttributes will override previously stored attributes. For example, if it is first called with a MAC address, but later, it is desired to <i>add</i> an IP address, it will then be required to call it with <i>both</i> the IP and MAC addresses to prevent overriding the MAC address.</p> </li> <li> <p>Note the instructions regarding the special use case of the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#migrationhub-PutResourceAttributes-request-ResourceAttributeList"> <code>ResourceAttributeList</code> </a> parameter when specifying any "VM" related value.</p> </li> </ul> </important> <note> <p>Because this is an asynchronous call, it will always return 200, whether an association occurs or not. To confirm if an association was found based on the provided details, call <code>ListDiscoveredResources</code>.</p> </note>

## AssociateCreatedArtifact

<p>Associates a created artifact of an AWS cloud resource, the target receiving the migration, with the migration task performed by a migration tool. This API has the following traits:</p> <ul> <li> <p>Migration tools can call the <code>AssociateCreatedArtifact</code> operation to indicate which AWS artifact is associated with a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or DMS endpoint, etc.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateCreatedArtifact(ctx, operations.AssociateCreatedArtifactRequest{
        AssociateCreatedArtifactRequest: shared.AssociateCreatedArtifactRequest{
            CreatedArtifact: shared.CreatedArtifact{
                Description: sdk.String("ipsa"),
                Name: "Ricky Hoppe",
            },
            DryRun: sdk.Bool(false),
            MigrationTaskName: "placeat",
            ProgressUpdateStream: "voluptatum",
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.AssociateCreatedArtifactXAmzTargetEnumAwsMigrationHubAssociateCreatedArtifact,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateCreatedArtifactResult != nil {
        // handle response
    }
}
```

## AssociateDiscoveredResource

Associates a discovered resource ID from Application Discovery Service with a migration task.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateDiscoveredResource(ctx, operations.AssociateDiscoveredResourceRequest{
        AssociateDiscoveredResourceRequest: shared.AssociateDiscoveredResourceRequest{
            DiscoveredResource: shared.DiscoveredResource{
                ConfigurationID: "veritatis",
                Description: sdk.String("deserunt"),
            },
            DryRun: sdk.Bool(false),
            MigrationTaskName: "perferendis",
            ProgressUpdateStream: "ipsam",
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.AssociateDiscoveredResourceXAmzTargetEnumAwsMigrationHubAssociateDiscoveredResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateDiscoveredResourceResult != nil {
        // handle response
    }
}
```

## CreateProgressUpdateStream

Creates a progress update stream which is an AWS resource used for access control as well as a namespace for migration task names that is implicitly linked to your AWS account. It must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateProgressUpdateStream(ctx, operations.CreateProgressUpdateStreamRequest{
        CreateProgressUpdateStreamRequest: shared.CreateProgressUpdateStreamRequest{
            DryRun: sdk.Bool(false),
            ProgressUpdateStreamName: "molestiae",
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.CreateProgressUpdateStreamXAmzTargetEnumAwsMigrationHubCreateProgressUpdateStream,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProgressUpdateStreamResult != nil {
        // handle response
    }
}
```

## DeleteProgressUpdateStream

<p>Deletes a progress update stream, including all of its tasks, which was previously created as an AWS resource used for access control. This API has the following traits:</p> <ul> <li> <p>The only parameter needed for <code>DeleteProgressUpdateStream</code> is the stream name (same as a <code>CreateProgressUpdateStream</code> call).</p> </li> <li> <p>The call will return, and a background process will asynchronously delete the stream and all of its resources (tasks, associated resources, resource attributes, created artifacts).</p> </li> <li> <p>If the stream takes time to be deleted, it might still show up on a <code>ListProgressUpdateStreams</code> call.</p> </li> <li> <p> <code>CreateProgressUpdateStream</code>, <code>ImportMigrationTask</code>, <code>NotifyMigrationTaskState</code>, and all Associate[*] APIs related to the tasks belonging to the stream will throw "InvalidInputException" if the stream of the same name is in the process of being deleted.</p> </li> <li> <p>Once the stream and all of its resources are deleted, <code>CreateProgressUpdateStream</code> for a stream of the same name will succeed, and that stream will be an entirely new logical resource (without any resources associated with the old stream).</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteProgressUpdateStream(ctx, operations.DeleteProgressUpdateStreamRequest{
        DeleteProgressUpdateStreamRequest: shared.DeleteProgressUpdateStreamRequest{
            DryRun: sdk.Bool(false),
            ProgressUpdateStreamName: "nam",
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.DeleteProgressUpdateStreamXAmzTargetEnumAwsMigrationHubDeleteProgressUpdateStream,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProgressUpdateStreamResult != nil {
        // handle response
    }
}
```

## DescribeApplicationState

Gets the migration status of an application.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeApplicationState(ctx, operations.DescribeApplicationStateRequest{
        DescribeApplicationStateRequest: shared.DescribeApplicationStateRequest{
            ApplicationID: "beatae",
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.DescribeApplicationStateXAmzTargetEnumAwsMigrationHubDescribeApplicationState,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeApplicationStateResult != nil {
        // handle response
    }
}
```

## DescribeMigrationTask

Retrieves a list of all attributes associated with a specific migration task.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeMigrationTask(ctx, operations.DescribeMigrationTaskRequest{
        DescribeMigrationTaskRequest: shared.DescribeMigrationTaskRequest{
            MigrationTaskName: "ipsum",
            ProgressUpdateStream: "excepturi",
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.DescribeMigrationTaskXAmzTargetEnumAwsMigrationHubDescribeMigrationTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMigrationTaskResult != nil {
        // handle response
    }
}
```

## DisassociateCreatedArtifact

<p>Disassociates a created artifact of an AWS resource with a migration task performed by a migration tool that was previously associated. This API has the following traits:</p> <ul> <li> <p>A migration user can call the <code>DisassociateCreatedArtifacts</code> operation to disassociate a created AWS Artifact from a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or RDS instance, etc.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateCreatedArtifact(ctx, operations.DisassociateCreatedArtifactRequest{
        DisassociateCreatedArtifactRequest: shared.DisassociateCreatedArtifactRequest{
            CreatedArtifactName: "natus",
            DryRun: sdk.Bool(false),
            MigrationTaskName: "laboriosam",
            ProgressUpdateStream: "hic",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.DisassociateCreatedArtifactXAmzTargetEnumAwsMigrationHubDisassociateCreatedArtifact,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateCreatedArtifactResult != nil {
        // handle response
    }
}
```

## DisassociateDiscoveredResource

Disassociate an Application Discovery Service discovered resource from a migration task.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateDiscoveredResource(ctx, operations.DisassociateDiscoveredResourceRequest{
        DisassociateDiscoveredResourceRequest: shared.DisassociateDiscoveredResourceRequest{
            ConfigurationID: "quidem",
            DryRun: sdk.Bool(false),
            MigrationTaskName: "architecto",
            ProgressUpdateStream: "ipsa",
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.DisassociateDiscoveredResourceXAmzTargetEnumAwsMigrationHubDisassociateDiscoveredResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateDiscoveredResourceResult != nil {
        // handle response
    }
}
```

## ImportMigrationTask

<p>Registers a new migration task which represents a server, database, etc., being migrated to AWS by a migration tool.</p> <p>This API is a prerequisite to calling the <code>NotifyMigrationTaskState</code> API as the migration tool must first register the migration task with Migration Hub.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ImportMigrationTask(ctx, operations.ImportMigrationTaskRequest{
        ImportMigrationTaskRequest: shared.ImportMigrationTaskRequest{
            DryRun: sdk.Bool(false),
            MigrationTaskName: "explicabo",
            ProgressUpdateStream: "nobis",
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.ImportMigrationTaskXAmzTargetEnumAwsMigrationHubImportMigrationTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportMigrationTaskResult != nil {
        // handle response
    }
}
```

## ListApplicationStates

Lists all the migration statuses for your applications. If you use the optional <code>ApplicationIds</code> parameter, only the migration statuses for those applications will be returned.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListApplicationStates(ctx, operations.ListApplicationStatesRequest{
        ListApplicationStatesRequest: shared.ListApplicationStatesRequest{
            ApplicationIds: []string{
                "doloribus",
                "sapiente",
                "architecto",
            },
            MaxResults: sdk.Int64(652790),
            NextToken: sdk.String("dolorem"),
        },
        MaxResults: sdk.String("culpa"),
        NextToken: sdk.String("consequuntur"),
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.ListApplicationStatesXAmzTargetEnumAwsMigrationHubListApplicationStates,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListApplicationStatesResult != nil {
        // handle response
    }
}
```

## ListCreatedArtifacts

<p>Lists the created artifacts attached to a given migration task in an update stream. This API has the following traits:</p> <ul> <li> <p>Gets the list of the created artifacts while migration is taking place.</p> </li> <li> <p>Shows the artifacts created by the migration tool that was associated by the <code>AssociateCreatedArtifact</code> API. </p> </li> <li> <p>Lists created artifacts in a paginated interface. </p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCreatedArtifacts(ctx, operations.ListCreatedArtifactsRequest{
        ListCreatedArtifactsRequest: shared.ListCreatedArtifactsRequest{
            MaxResults: sdk.Int64(244425),
            MigrationTaskName: "error",
            NextToken: sdk.String("quia"),
            ProgressUpdateStream: "quis",
        },
        MaxResults: sdk.String("vitae"),
        NextToken: sdk.String("laborum"),
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.ListCreatedArtifactsXAmzTargetEnumAwsMigrationHubListCreatedArtifacts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCreatedArtifactsResult != nil {
        // handle response
    }
}
```

## ListDiscoveredResources

Lists discovered resources associated with the given <code>MigrationTask</code>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDiscoveredResources(ctx, operations.ListDiscoveredResourcesRequest{
        ListDiscoveredResourcesRequest: shared.ListDiscoveredResourcesRequest{
            MaxResults: sdk.Int64(662527),
            MigrationTaskName: "possimus",
            NextToken: sdk.String("aut"),
            ProgressUpdateStream: "quasi",
        },
        MaxResults: sdk.String("error"),
        NextToken: sdk.String("temporibus"),
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.ListDiscoveredResourcesXAmzTargetEnumAwsMigrationHubListDiscoveredResources,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDiscoveredResourcesResult != nil {
        // handle response
    }
}
```

## ListMigrationTasks

<p>Lists all, or filtered by resource name, migration tasks associated with the user account making this call. This API has the following traits:</p> <ul> <li> <p>Can show a summary list of the most recent migration tasks.</p> </li> <li> <p>Can show a summary list of migration tasks associated with a given discovered resource.</p> </li> <li> <p>Lists migration tasks in a paginated interface.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListMigrationTasks(ctx, operations.ListMigrationTasksRequest{
        ListMigrationTasksRequest: shared.ListMigrationTasksRequest{
            MaxResults: sdk.Int64(976762),
            NextToken: sdk.String("ipsa"),
            ResourceName: sdk.String("omnis"),
        },
        MaxResults: sdk.String("voluptate"),
        NextToken: sdk.String("cum"),
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("doloremque"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.ListMigrationTasksXAmzTargetEnumAwsMigrationHubListMigrationTasks,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMigrationTasksResult != nil {
        // handle response
    }
}
```

## ListProgressUpdateStreams

Lists progress update streams associated with the user account making this call.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListProgressUpdateStreams(ctx, operations.ListProgressUpdateStreamsRequest{
        ListProgressUpdateStreamsRequest: shared.ListProgressUpdateStreamsRequest{
            MaxResults: sdk.Int64(296140),
            NextToken: sdk.String("iusto"),
        },
        MaxResults: sdk.String("dicta"),
        NextToken: sdk.String("harum"),
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.ListProgressUpdateStreamsXAmzTargetEnumAwsMigrationHubListProgressUpdateStreams,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProgressUpdateStreamsResult != nil {
        // handle response
    }
}
```

## NotifyApplicationState

Sets the migration state of an application. For a given application identified by the value passed to <code>ApplicationId</code>, its status is set or updated by passing one of three values to <code>Status</code>: <code>NOT_STARTED | IN_PROGRESS | COMPLETED</code>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.NotifyApplicationState(ctx, operations.NotifyApplicationStateRequest{
        NotifyApplicationStateRequest: shared.NotifyApplicationStateRequest{
            ApplicationID: "molestias",
            DryRun: sdk.Bool(false),
            Status: shared.ApplicationStatusEnumInProgress,
            UpdateDateTime: types.MustTimeFromString("2022-03-16T09:33:50.291Z"),
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("voluptates"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        XAmzTarget: operations.NotifyApplicationStateXAmzTargetEnumAwsMigrationHubNotifyApplicationState,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyApplicationStateResult != nil {
        // handle response
    }
}
```

## NotifyMigrationTaskState

<p>Notifies Migration Hub of the current status, progress, or other detail regarding a migration task. This API has the following traits:</p> <ul> <li> <p>Migration tools will call the <code>NotifyMigrationTaskState</code> API to share the latest progress and status.</p> </li> <li> <p> <code>MigrationTaskName</code> is used for addressing updates to the correct target.</p> </li> <li> <p> <code>ProgressUpdateStream</code> is used for access control and to provide a namespace for each migration tool.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.NotifyMigrationTaskState(ctx, operations.NotifyMigrationTaskStateRequest{
        NotifyMigrationTaskStateRequest: shared.NotifyMigrationTaskStateRequest{
            DryRun: sdk.Bool(false),
            MigrationTaskName: "itaque",
            NextUpdateSeconds: 277718,
            ProgressUpdateStream: "enim",
            Task: shared.Task{
                ProgressPercent: sdk.Int64(9356),
                Status: shared.StatusEnumFailed,
                StatusDetail: sdk.String("quibusdam"),
            },
            UpdateDateTime: types.MustTimeFromString("2022-05-09T18:45:16.013Z"),
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        XAmzTarget: operations.NotifyMigrationTaskStateXAmzTargetEnumAwsMigrationHubNotifyMigrationTaskState,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyMigrationTaskStateResult != nil {
        // handle response
    }
}
```

## PutResourceAttributes

<p>Provides identifying details of the resource being migrated so that it can be associated in the Application Discovery Service repository. This association occurs asynchronously after <code>PutResourceAttributes</code> returns.</p> <important> <ul> <li> <p>Keep in mind that subsequent calls to PutResourceAttributes will override previously stored attributes. For example, if it is first called with a MAC address, but later, it is desired to <i>add</i> an IP address, it will then be required to call it with <i>both</i> the IP and MAC addresses to prevent overriding the MAC address.</p> </li> <li> <p>Note the instructions regarding the special use case of the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#migrationhub-PutResourceAttributes-request-ResourceAttributeList"> <code>ResourceAttributeList</code> </a> parameter when specifying any "VM" related value.</p> </li> </ul> </important> <note> <p>Because this is an asynchronous call, it will always return 200, whether an association occurs or not. To confirm if an association was found based on the provided details, call <code>ListDiscoveredResources</code>.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutResourceAttributes(ctx, operations.PutResourceAttributesRequest{
        PutResourceAttributesRequest: shared.PutResourceAttributesRequest{
            DryRun: sdk.Bool(false),
            MigrationTaskName: "quos",
            ProgressUpdateStream: "perferendis",
            ResourceAttributeList: []shared.ResourceAttribute{
                shared.ResourceAttribute{
                    Type: shared.ResourceAttributeTypeEnumBiosID,
                    Value: "ipsam",
                },
            },
        },
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("tempore"),
        XAmzTarget: operations.PutResourceAttributesXAmzTargetEnumAwsMigrationHubPutResourceAttributes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutResourceAttributesResult != nil {
        // handle response
    }
}
```
