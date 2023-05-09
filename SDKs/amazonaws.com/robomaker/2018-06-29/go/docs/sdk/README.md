# SDK

## Overview

This section provides documentation for the AWS RoboMaker API operations.

Amazon Web Services documentation
<https://docs.aws.amazon.com/robomaker/>
### Available Operations

* [BatchDeleteWorlds](#batchdeleteworlds) - Deletes one or more worlds in a batch operation.
* [BatchDescribeSimulationJob](#batchdescribesimulationjob) - Describes one or more simulation jobs.
* [~~CancelDeploymentJob~~](#canceldeploymentjob) - <p>Cancels the specified deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [CancelSimulationJob](#cancelsimulationjob) - Cancels the specified simulation job.
* [CancelSimulationJobBatch](#cancelsimulationjobbatch) - Cancels a simulation job batch. When you cancel a simulation job batch, you are also cancelling all of the active simulation jobs created as part of the batch. 
* [CancelWorldExportJob](#cancelworldexportjob) - Cancels the specified export job.
* [CancelWorldGenerationJob](#cancelworldgenerationjob) - Cancels the specified world generator job.
* [~~CreateDeploymentJob~~](#createdeploymentjob) - <p>Deploys a specific version of a robot application to robots in a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> <p>The robot application must have a numbered <code>applicationVersion</code> for consistency reasons. To create a new version, use <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p> <note> <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be accessible. </p> </note> :warning: **Deprecated**
* [~~CreateFleet~~](#createfleet) - <p>Creates a fleet, a logical group of robots running the same robot application.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> :warning: **Deprecated**
* [~~CreateRobot~~](#createrobot) - <p>Creates a robot.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> :warning: **Deprecated**
* [CreateRobotApplication](#createrobotapplication) - Creates a robot application. 
* [CreateRobotApplicationVersion](#createrobotapplicationversion) - Creates a version of a robot application.
* [CreateSimulationApplication](#createsimulationapplication) - Creates a simulation application.
* [CreateSimulationApplicationVersion](#createsimulationapplicationversion) - Creates a simulation application with a specific revision id.
* [CreateSimulationJob](#createsimulationjob) - <p>Creates a simulation job.</p> <note> <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be accessible. </p> </note>
* [CreateWorldExportJob](#createworldexportjob) - Creates a world export job.
* [CreateWorldGenerationJob](#createworldgenerationjob) - Creates worlds using the specified template.
* [CreateWorldTemplate](#createworldtemplate) - Creates a world template.
* [~~DeleteFleet~~](#deletefleet) - <p>Deletes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [~~DeleteRobot~~](#deleterobot) - <p>Deletes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [DeleteRobotApplication](#deleterobotapplication) - Deletes a robot application.
* [DeleteSimulationApplication](#deletesimulationapplication) - Deletes a simulation application.
* [DeleteWorldTemplate](#deleteworldtemplate) - Deletes a world template.
* [~~DeregisterRobot~~](#deregisterrobot) - <p>Deregisters a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [~~DescribeDeploymentJob~~](#describedeploymentjob) - <p>Describes a deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [~~DescribeFleet~~](#describefleet) - <p>Describes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [~~DescribeRobot~~](#describerobot) - <p>Describes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [DescribeRobotApplication](#describerobotapplication) - Describes a robot application.
* [DescribeSimulationApplication](#describesimulationapplication) - Describes a simulation application.
* [DescribeSimulationJob](#describesimulationjob) - Describes a simulation job.
* [DescribeSimulationJobBatch](#describesimulationjobbatch) - Describes a simulation job batch.
* [DescribeWorld](#describeworld) - Describes a world.
* [DescribeWorldExportJob](#describeworldexportjob) - Describes a world export job.
* [DescribeWorldGenerationJob](#describeworldgenerationjob) - Describes a world generation job.
* [DescribeWorldTemplate](#describeworldtemplate) - Describes a world template.
* [GetWorldTemplateBody](#getworldtemplatebody) - Gets the world template body.
* [~~ListDeploymentJobs~~](#listdeploymentjobs) - <p>Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [~~ListFleets~~](#listfleets) - <p>Returns a list of fleets. You can optionally provide filters to retrieve specific fleets.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [ListRobotApplications](#listrobotapplications) - Returns a list of robot application. You can optionally provide filters to retrieve specific robot applications.
* [~~ListRobots~~](#listrobots) - <p>Returns a list of robots. You can optionally provide filters to retrieve specific robots.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [ListSimulationApplications](#listsimulationapplications) - Returns a list of simulation applications. You can optionally provide filters to retrieve specific simulation applications. 
* [ListSimulationJobBatches](#listsimulationjobbatches) - Returns a list simulation job batches. You can optionally provide filters to retrieve specific simulation batch jobs. 
* [ListSimulationJobs](#listsimulationjobs) - Returns a list of simulation jobs. You can optionally provide filters to retrieve specific simulation jobs. 
* [ListTagsForResource](#listtagsforresource) - Lists all tags on a AWS RoboMaker resource.
* [ListWorldExportJobs](#listworldexportjobs) - Lists world export jobs.
* [ListWorldGenerationJobs](#listworldgenerationjobs) - Lists world generator jobs.
* [ListWorldTemplates](#listworldtemplates) - Lists world templates.
* [ListWorlds](#listworlds) - Lists worlds.
* [~~RegisterRobot~~](#registerrobot) - <p>Registers a robot with a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> :warning: **Deprecated**
* [RestartSimulationJob](#restartsimulationjob) - Restarts a running simulation job.
* [StartSimulationJobBatch](#startsimulationjobbatch) - Starts a new simulation job batch. The batch is defined using one or more <code>SimulationJobRequest</code> objects. 
* [~~SyncDeploymentJob~~](#syncdeploymentjob) - <p>Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [TagResource](#tagresource) - <p>Adds or edits tags for a AWS RoboMaker resource.</p> <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty strings. </p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>
* [UntagResource](#untagresource) - <p>Removes the specified tags from the specified AWS RoboMaker resource.</p> <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key, use <a href="https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html"> <code>TagResource</code> </a>. </p>
* [UpdateRobotApplication](#updaterobotapplication) - Updates a robot application.
* [UpdateSimulationApplication](#updatesimulationapplication) - Updates a simulation application.
* [UpdateWorldTemplate](#updateworldtemplate) - Updates a world template.

## BatchDeleteWorlds

Deletes one or more worlds in a batch operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchDeleteWorlds(ctx, operations.BatchDeleteWorldsRequest{
        RequestBody: operations.BatchDeleteWorldsRequestBody{
            Worlds: []string{
                "iure",
                "magnam",
            },
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteWorldsResponse != nil {
        // handle response
    }
}
```

## BatchDescribeSimulationJob

Describes one or more simulation jobs.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchDescribeSimulationJob(ctx, operations.BatchDescribeSimulationJobRequest{
        RequestBody: operations.BatchDescribeSimulationJobRequestBody{
            Jobs: []string{
                "voluptatum",
                "iusto",
                "excepturi",
                "nisi",
            },
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDescribeSimulationJobResponse != nil {
        // handle response
    }
}
```

## ~~CancelDeploymentJob~~

<p>Cancels the specified deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CancelDeploymentJob(ctx, operations.CancelDeploymentJobRequest{
        RequestBody: operations.CancelDeploymentJobRequestBody{
            Job: "ipsam",
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelDeploymentJobResponse != nil {
        // handle response
    }
}
```

## CancelSimulationJob

Cancels the specified simulation job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CancelSimulationJob(ctx, operations.CancelSimulationJobRequest{
        RequestBody: operations.CancelSimulationJobRequestBody{
            Job: "molestiae",
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelSimulationJobResponse != nil {
        // handle response
    }
}
```

## CancelSimulationJobBatch

Cancels a simulation job batch. When you cancel a simulation job batch, you are also cancelling all of the active simulation jobs created as part of the batch. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CancelSimulationJobBatch(ctx, operations.CancelSimulationJobBatchRequest{
        RequestBody: operations.CancelSimulationJobBatchRequestBody{
            Batch: "nam",
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelSimulationJobBatchResponse != nil {
        // handle response
    }
}
```

## CancelWorldExportJob

Cancels the specified export job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CancelWorldExportJob(ctx, operations.CancelWorldExportJobRequest{
        RequestBody: operations.CancelWorldExportJobRequestBody{
            Job: "beatae",
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelWorldExportJobResponse != nil {
        // handle response
    }
}
```

## CancelWorldGenerationJob

Cancels the specified world generator job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CancelWorldGenerationJob(ctx, operations.CancelWorldGenerationJobRequest{
        RequestBody: operations.CancelWorldGenerationJobRequestBody{
            Job: "ipsum",
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("iste"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelWorldGenerationJobResponse != nil {
        // handle response
    }
}
```

## ~~CreateDeploymentJob~~

<p>Deploys a specific version of a robot application to robots in a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> <p>The robot application must have a numbered <code>applicationVersion</code> for consistency reasons. To create a new version, use <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p> <note> <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be accessible. </p> </note>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.CreateDeploymentJob(ctx, operations.CreateDeploymentJobRequest{
        RequestBody: operations.CreateDeploymentJobRequestBody{
            ClientRequestToken: "dolor",
            DeploymentApplicationConfigs: []shared.DeploymentApplicationConfig{
                shared.DeploymentApplicationConfig{
                    Application: "laboriosam",
                    ApplicationVersion: "hic",
                    LaunchConfig: shared.DeploymentLaunchConfig{
                        EnvironmentVariables: map[string]string{
                            "fuga": "in",
                            "corporis": "iste",
                            "iure": "saepe",
                            "quidem": "architecto",
                        },
                        LaunchFile: "ipsa",
                        PackageName: "reiciendis",
                        PostLaunchFile: sdk.String("est"),
                        PreLaunchFile: sdk.String("mollitia"),
                    },
                },
                shared.DeploymentApplicationConfig{
                    Application: "laborum",
                    ApplicationVersion: "dolores",
                    LaunchConfig: shared.DeploymentLaunchConfig{
                        EnvironmentVariables: map[string]string{
                            "corporis": "explicabo",
                        },
                        LaunchFile: "nobis",
                        PackageName: "enim",
                        PostLaunchFile: sdk.String("omnis"),
                        PreLaunchFile: sdk.String("nemo"),
                    },
                },
                shared.DeploymentApplicationConfig{
                    Application: "minima",
                    ApplicationVersion: "excepturi",
                    LaunchConfig: shared.DeploymentLaunchConfig{
                        EnvironmentVariables: map[string]string{
                            "iure": "culpa",
                        },
                        LaunchFile: "doloribus",
                        PackageName: "sapiente",
                        PostLaunchFile: sdk.String("architecto"),
                        PreLaunchFile: sdk.String("mollitia"),
                    },
                },
            },
            DeploymentConfig: &operations.CreateDeploymentJobRequestBodyDeploymentConfig{
                ConcurrentDeploymentPercentage: sdk.Int64(208876),
                DownloadConditionFile: &shared.S3Object{
                    Bucket: "culpa",
                    Etag: sdk.String("consequuntur"),
                    Key: "repellat",
                },
                FailureThresholdPercentage: sdk.Int64(653108),
                RobotDeploymentTimeoutInSeconds: sdk.Int64(581850),
            },
            Fleet: "numquam",
            Tags: map[string]string{
                "quam": "molestiae",
                "velit": "error",
            },
        },
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeploymentJobResponse != nil {
        // handle response
    }
}
```

## ~~CreateFleet~~

<p>Creates a fleet, a logical group of robots running the same robot application.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateFleet(ctx, operations.CreateFleetRequest{
        RequestBody: operations.CreateFleetRequestBody{
            Name: "Jimmy Wiegand",
            Tags: map[string]string{
                "aut": "quasi",
                "error": "temporibus",
                "laborum": "quasi",
                "reiciendis": "voluptatibus",
            },
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFleetResponse != nil {
        // handle response
    }
}
```

## ~~CreateRobot~~

<p>Creates a robot.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateRobot(ctx, operations.CreateRobotRequest{
        RequestBody: operations.CreateRobotRequestBody{
            Architecture: operations.CreateRobotRequestBodyArchitectureEnumArmhf,
            GreengrassGroupID: "perferendis",
            Name: "Bessie Grady II",
            Tags: map[string]string{
                "iusto": "dicta",
                "harum": "enim",
            },
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("molestias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRobotResponse != nil {
        // handle response
    }
}
```

## CreateRobotApplication

Creates a robot application. 

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
    res, err := s.SDK.CreateRobotApplication(ctx, operations.CreateRobotApplicationRequest{
        RequestBody: operations.CreateRobotApplicationRequestBody{
            Environment: &operations.CreateRobotApplicationRequestBodyEnvironment{
                URI: sdk.String("https://treasured-dirt.name"),
            },
            Name: "Grady Botsford",
            RobotSoftwareSuite: operations.CreateRobotApplicationRequestBodyRobotSoftwareSuite{
                Name: shared.RobotSoftwareSuiteTypeEnumRos.ToPointer(),
                Version: shared.RobotSoftwareSuiteVersionTypeEnumFoxy.ToPointer(),
            },
            Sources: []shared.SourceConfig{
                shared.SourceConfig{
                    Architecture: shared.ArchitectureEnumX8664.ToPointer(),
                    S3Bucket: sdk.String("consequatur"),
                    S3Key: sdk.String("est"),
                },
                shared.SourceConfig{
                    Architecture: shared.ArchitectureEnumArmhf.ToPointer(),
                    S3Bucket: sdk.String("explicabo"),
                    S3Key: sdk.String("deserunt"),
                },
            },
            Tags: map[string]string{
                "quibusdam": "labore",
                "modi": "qui",
                "aliquid": "cupiditate",
            },
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRobotApplicationResponse != nil {
        // handle response
    }
}
```

## CreateRobotApplicationVersion

Creates a version of a robot application.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateRobotApplicationVersion(ctx, operations.CreateRobotApplicationVersionRequest{
        RequestBody: operations.CreateRobotApplicationVersionRequestBody{
            Application: "dolorum",
            CurrentRevisionID: sdk.String("excepturi"),
            ImageDigest: sdk.String("tempora"),
            S3Etags: []string{
                "tempore",
                "labore",
                "delectus",
            },
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRobotApplicationVersionResponse != nil {
        // handle response
    }
}
```

## CreateSimulationApplication

Creates a simulation application.

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
    res, err := s.SDK.CreateSimulationApplication(ctx, operations.CreateSimulationApplicationRequest{
        RequestBody: operations.CreateSimulationApplicationRequestBody{
            Environment: &operations.CreateSimulationApplicationRequestBodyEnvironment{
                URI: sdk.String("https://portly-cribbage.org"),
            },
            Name: "Wilbur King",
            RenderingEngine: &operations.CreateSimulationApplicationRequestBodyRenderingEngine{
                Name: shared.RenderingEngineTypeEnumOgre.ToPointer(),
                Version: sdk.String("maiores"),
            },
            RobotSoftwareSuite: operations.CreateSimulationApplicationRequestBodyRobotSoftwareSuite{
                Name: shared.RobotSoftwareSuiteTypeEnumGeneral.ToPointer(),
                Version: shared.RobotSoftwareSuiteVersionTypeEnumKinetic.ToPointer(),
            },
            SimulationSoftwareSuite: operations.CreateSimulationApplicationRequestBodySimulationSoftwareSuite{
                Name: shared.SimulationSoftwareSuiteTypeEnumGazebo.ToPointer(),
                Version: sdk.String("cumque"),
            },
            Sources: []shared.SourceConfig{
                shared.SourceConfig{
                    Architecture: shared.ArchitectureEnumArm64.ToPointer(),
                    S3Bucket: sdk.String("aliquid"),
                    S3Key: sdk.String("laborum"),
                },
                shared.SourceConfig{
                    Architecture: shared.ArchitectureEnumArmhf.ToPointer(),
                    S3Bucket: sdk.String("non"),
                    S3Key: sdk.String("occaecati"),
                },
                shared.SourceConfig{
                    Architecture: shared.ArchitectureEnumX8664.ToPointer(),
                    S3Bucket: sdk.String("accusamus"),
                    S3Key: sdk.String("delectus"),
                },
                shared.SourceConfig{
                    Architecture: shared.ArchitectureEnumArmhf.ToPointer(),
                    S3Bucket: sdk.String("provident"),
                    S3Key: sdk.String("nam"),
                },
            },
            Tags: map[string]string{
                "blanditiis": "deleniti",
                "sapiente": "amet",
                "deserunt": "nisi",
            },
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSimulationApplicationResponse != nil {
        // handle response
    }
}
```

## CreateSimulationApplicationVersion

Creates a simulation application with a specific revision id.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateSimulationApplicationVersion(ctx, operations.CreateSimulationApplicationVersionRequest{
        RequestBody: operations.CreateSimulationApplicationVersionRequestBody{
            Application: "distinctio",
            CurrentRevisionID: sdk.String("id"),
            ImageDigest: sdk.String("labore"),
            S3Etags: []string{
                "suscipit",
                "natus",
            },
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("et"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSimulationApplicationVersionResponse != nil {
        // handle response
    }
}
```

## CreateSimulationJob

<p>Creates a simulation job.</p> <note> <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be accessible. </p> </note>

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
    res, err := s.SDK.CreateSimulationJob(ctx, operations.CreateSimulationJobRequest{
        RequestBody: operations.CreateSimulationJobRequestBody{
            ClientRequestToken: sdk.String("excepturi"),
            Compute: &operations.CreateSimulationJobRequestBodyCompute{
                ComputeType: shared.ComputeTypeEnumCPU.ToPointer(),
                GpuUnitLimit: sdk.Int64(590873),
                SimulationUnitLimit: sdk.Int64(551816),
            },
            DataSources: []shared.DataSourceConfig{
                shared.DataSourceConfig{
                    Destination: sdk.String("accusantium"),
                    Name: "Abel O'Hara",
                    S3Bucket: "dolor",
                    S3Keys: []string{
                        "odit",
                        "nemo",
                        "quasi",
                        "iure",
                    },
                    Type: shared.DataSourceTypeEnumFile.ToPointer(),
                },
                shared.DataSourceConfig{
                    Destination: sdk.String("debitis"),
                    Name: "Jasmine Lind",
                    S3Bucket: "architecto",
                    S3Keys: []string{
                        "repudiandae",
                    },
                    Type: shared.DataSourceTypeEnumArchive.ToPointer(),
                },
                shared.DataSourceConfig{
                    Destination: sdk.String("expedita"),
                    Name: "Kristie Spencer",
                    S3Bucket: "pariatur",
                    S3Keys: []string{
                        "consequuntur",
                    },
                    Type: shared.DataSourceTypeEnumArchive.ToPointer(),
                },
            },
            FailureBehavior: operations.CreateSimulationJobRequestBodyFailureBehaviorEnumContinue.ToPointer(),
            IamRole: "magni",
            LoggingConfig: &operations.CreateSimulationJobRequestBodyLoggingConfig{
                RecordAllRosTopics: sdk.Bool(false),
            },
            MaxJobDurationInSeconds: 123820,
            OutputLocation: &operations.CreateSimulationJobRequestBodyOutputLocation{
                S3Bucket: sdk.String("quo"),
                S3Prefix: sdk.String("illum"),
            },
            RobotApplications: []shared.RobotApplicationConfig{
                shared.RobotApplicationConfig{
                    Application: "maxime",
                    ApplicationVersion: sdk.String("ea"),
                    LaunchConfig: shared.LaunchConfig{
                        Command: []string{
                            "odit",
                            "ea",
                            "accusantium",
                        },
                        EnvironmentVariables: map[string]string{
                            "maiores": "quidem",
                        },
                        LaunchFile: sdk.String("ipsam"),
                        PackageName: sdk.String("voluptate"),
                        PortForwardingConfig: &shared.PortForwardingConfig{
                            PortMappings: []shared.PortMapping{
                                shared.PortMapping{
                                    ApplicationPort: 722056,
                                    EnableOnPublicIP: sdk.Bool(false),
                                    JobPort: 50588,
                                },
                                shared.PortMapping{
                                    ApplicationPort: 866383,
                                    EnableOnPublicIP: sdk.Bool(false),
                                    JobPort: 365496,
                                },
                            },
                        },
                        StreamUI: sdk.Bool(false),
                    },
                    Tools: []shared.Tool{
                        shared.Tool{
                            Command: "perferendis",
                            ExitBehavior: shared.ExitBehaviorEnumRestart.ToPointer(),
                            Name: "Jennifer Runolfsdottir",
                            StreamOutputToCloudWatch: sdk.Bool(false),
                            StreamUI: sdk.Bool(false),
                        },
                        shared.Tool{
                            Command: "libero",
                            ExitBehavior: shared.ExitBehaviorEnumRestart.ToPointer(),
                            Name: "Beatrice Lebsack II",
                            StreamOutputToCloudWatch: sdk.Bool(false),
                            StreamUI: sdk.Bool(false),
                        },
                        shared.Tool{
                            Command: "nesciunt",
                            ExitBehavior: shared.ExitBehaviorEnumFail.ToPointer(),
                            Name: "Jacqueline Schimmel",
                            StreamOutputToCloudWatch: sdk.Bool(false),
                            StreamUI: sdk.Bool(false),
                        },
                        shared.Tool{
                            Command: "vero",
                            ExitBehavior: shared.ExitBehaviorEnumFail.ToPointer(),
                            Name: "Percy Mohr",
                            StreamOutputToCloudWatch: sdk.Bool(false),
                            StreamUI: sdk.Bool(false),
                        },
                    },
                    UploadConfigurations: []shared.UploadConfiguration{
                        shared.UploadConfiguration{
                            Name: "Bobby Kutch V",
                            Path: "rerum",
                            UploadBehavior: shared.UploadBehaviorEnumUploadOnTerminate,
                        },
                    },
                    UseDefaultTools: sdk.Bool(false),
                    UseDefaultUploadConfigurations: sdk.Bool(false),
                },
                shared.RobotApplicationConfig{
                    Application: "asperiores",
                    ApplicationVersion: sdk.String("earum"),
                    LaunchConfig: shared.LaunchConfig{
                        Command: []string{
                            "iste",
                            "dolorum",
                        },
                        EnvironmentVariables: map[string]string{
                            "pariatur": "provident",
                            "nobis": "libero",
                            "delectus": "quaerat",
                        },
                        LaunchFile: sdk.String("quos"),
                        PackageName: sdk.String("aliquid"),
                        PortForwardingConfig: &shared.PortForwardingConfig{
                            PortMappings: []shared.PortMapping{
                                shared.PortMapping{
                                    ApplicationPort: 209843,
                                    EnableOnPublicIP: sdk.Bool(false),
                                    JobPort: 222443,
                                },
                            },
                        },
                        StreamUI: sdk.Bool(false),
                    },
                    Tools: []shared.Tool{
                        shared.Tool{
                            Command: "ipsum",
                            ExitBehavior: shared.ExitBehaviorEnumRestart.ToPointer(),
                            Name: "Felipe Klein",
                            StreamOutputToCloudWatch: sdk.Bool(false),
                            StreamUI: sdk.Bool(false),
                        },
                    },
                    UploadConfigurations: []shared.UploadConfiguration{
                        shared.UploadConfiguration{
                            Name: "Mr. Bradley Bogan",
                            Path: "odio",
                            UploadBehavior: shared.UploadBehaviorEnumUploadOnTerminate,
                        },
                    },
                    UseDefaultTools: sdk.Bool(false),
                    UseDefaultUploadConfigurations: sdk.Bool(false),
                },
                shared.RobotApplicationConfig{
                    Application: "accusamus",
                    ApplicationVersion: sdk.String("quidem"),
                    LaunchConfig: shared.LaunchConfig{
                        Command: []string{
                            "voluptas",
                            "natus",
                            "eos",
                            "atque",
                        },
                        EnvironmentVariables: map[string]string{
                            "fugiat": "ab",
                        },
                        LaunchFile: sdk.String("soluta"),
                        PackageName: sdk.String("dolorum"),
                        PortForwardingConfig: &shared.PortForwardingConfig{
                            PortMappings: []shared.PortMapping{
                                shared.PortMapping{
                                    ApplicationPort: 453697,
                                    EnableOnPublicIP: sdk.Bool(false),
                                    JobPort: 677082,
                                },
                                shared.PortMapping{
                                    ApplicationPort: 536579,
                                    EnableOnPublicIP: sdk.Bool(false),
                                    JobPort: 607045,
                                },
                            },
                        },
                        StreamUI: sdk.Bool(false),
                    },
                    Tools: []shared.Tool{
                        shared.Tool{
                            Command: "distinctio",
                            ExitBehavior: shared.ExitBehaviorEnumRestart.ToPointer(),
                            Name: "Edna Klocko",
                            StreamOutputToCloudWatch: sdk.Bool(false),
                            StreamUI: sdk.Bool(false),
                        },
                        shared.Tool{
                            Command: "eius",
                            ExitBehavior: shared.ExitBehaviorEnumFail.ToPointer(),
                            Name: "Wendy Rosenbaum",
                            StreamOutputToCloudWatch: sdk.Bool(false),
                            StreamUI: sdk.Bool(false),
                        },
                        shared.Tool{
                            Command: "saepe",
                            ExitBehavior: shared.ExitBehaviorEnumFail.ToPointer(),
                            Name: "Rene Hane",
                            StreamOutputToCloudWatch: sdk.Bool(false),
                            StreamUI: sdk.Bool(false),
                        },
                        shared.Tool{
                            Command: "similique",
                            ExitBehavior: shared.ExitBehaviorEnumFail.ToPointer(),
                            Name: "Alex Goodwin",
                            StreamOutputToCloudWatch: sdk.Bool(false),
                            StreamUI: sdk.Bool(false),
                        },
                    },
                    UploadConfigurations: []shared.UploadConfiguration{
                        shared.UploadConfiguration{
                            Name: "Jan Wilderman",
                            Path: "iusto",
                            UploadBehavior: shared.UploadBehaviorEnumUploadOnTerminate,
                        },
                        shared.UploadConfiguration{
                            Name: "Saul Fay",
                            Path: "numquam",
                            UploadBehavior: shared.UploadBehaviorEnumUploadOnTerminate,
                        },
                        shared.UploadConfiguration{
                            Name: "Jeannie Leannon MD",
                            Path: "neque",
                            UploadBehavior: shared.UploadBehaviorEnumUploadOnTerminate,
                        },
                        shared.UploadConfiguration{
                            Name: "Kelli Hintz",
                            Path: "ipsum",
                            UploadBehavior: shared.UploadBehaviorEnumUploadOnTerminate,
                        },
                    },
                    UseDefaultTools: sdk.Bool(false),
                    UseDefaultUploadConfigurations: sdk.Bool(false),
                },
                shared.RobotApplicationConfig{
                    Application: "qui",
                    ApplicationVersion: sdk.String("cupiditate"),
                    LaunchConfig: shared.LaunchConfig{
                        Command: []string{
                            "pariatur",
                            "soluta",
                            "dicta",
                            "laborum",
                        },
                        EnvironmentVariables: map[string]string{
                            "incidunt": "aspernatur",
                            "dolores": "distinctio",
                            "facilis": "aliquid",
                        },
                        LaunchFile: sdk.String("quam"),
                        PackageName: sdk.String("molestias"),
                        PortForwardingConfig: &shared.PortForwardingConfig{
                            PortMappings: []shared.PortMapping{
                                shared.PortMapping{
                                    ApplicationPort: 183280,
                                    EnableOnPublicIP: sdk.Bool(false),
                                    JobPort: 204865,
                                },
                                shared.PortMapping{
                                    ApplicationPort: 144847,
                                    EnableOnPublicIP: sdk.Bool(false),
                                    JobPort: 164959,
                                },
                                shared.PortMapping{
                                    ApplicationPort: 488056,
                                    EnableOnPublicIP: sdk.Bool(false),
                                    JobPort: 124833,
                                },
                                shared.PortMapping{
                                    ApplicationPort: 355613,
                                    EnableOnPublicIP: sdk.Bool(false),
                                    JobPort: 722081,
                                },
                            },
                        },
                        StreamUI: sdk.Bool(false),
                    },
                    Tools: []shared.Tool{
                        shared.Tool{
                            Command: "voluptatem",
                            ExitBehavior: shared.ExitBehaviorEnumRestart.ToPointer(),
                            Name: "Robin Bosco",
                            StreamOutputToCloudWatch: sdk.Bool(false),
                            StreamUI: sdk.Bool(false),
                        },
                        shared.Tool{
                            Command: "veritatis",
                            ExitBehavior: shared.ExitBehaviorEnumRestart.ToPointer(),
                            Name: "Dr. Randolph McDermott",
                            StreamOutputToCloudWatch: sdk.Bool(false),
                            StreamUI: sdk.Bool(false),
                        },
                        shared.Tool{
                            Command: "dolore",
                            ExitBehavior: shared.ExitBehaviorEnumFail.ToPointer(),
                            Name: "Mr. Sonya Bradtke",
                            StreamOutputToCloudWatch: sdk.Bool(false),
                            StreamUI: sdk.Bool(false),
                        },
                        shared.Tool{
                            Command: "itaque",
                            ExitBehavior: shared.ExitBehaviorEnumFail.ToPointer(),
                            Name: "Marcos Schaden",
                            StreamOutputToCloudWatch: sdk.Bool(false),
                            StreamUI: sdk.Bool(false),
                        },
                    },
                    UploadConfigurations: []shared.UploadConfiguration{
                        shared.UploadConfiguration{
                            Name: "Alan Bergnaum",
                            Path: "occaecati",
                            UploadBehavior: shared.UploadBehaviorEnumUploadRollingAutoRemove,
                        },
                        shared.UploadConfiguration{
                            Name: "Ignacio Moen",
                            Path: "delectus",
                            UploadBehavior: shared.UploadBehaviorEnumUploadOnTerminate,
                        },
                        shared.UploadConfiguration{
                            Name: "Meghan Wiegand",
                            Path: "distinctio",
                            UploadBehavior: shared.UploadBehaviorEnumUploadRollingAutoRemove,
                        },
                    },
                    UseDefaultTools: sdk.Bool(false),
                    UseDefaultUploadConfigurations: sdk.Bool(false),
                },
            },
            SimulationApplications: []shared.SimulationApplicationConfig{
                shared.SimulationApplicationConfig{
                    Application: "similique",
                    ApplicationVersion: sdk.String("facilis"),
                    LaunchConfig: shared.LaunchConfig{
                        Command: []string{
                            "ducimus",
                            "dolore",
                            "quibusdam",
                            "illum",
                        },
                        EnvironmentVariables: map[string]string{
                            "natus": "impedit",
                        },
                        LaunchFile: sdk.String("aut"),
                        PackageName: sdk.String("voluptatibus"),
                        PortForwardingConfig: &shared.PortForwardingConfig{
                            PortMappings: []shared.PortMapping{
                                shared.PortMapping{
                                    ApplicationPort: 862310,
                                    EnableOnPublicIP: sdk.Bool(false),
                                    JobPort: 148141,
                                },
                                shared.PortMapping{
                                    ApplicationPort: 780427,
                                    EnableOnPublicIP: sdk.Bool(false),
                                    JobPort: 981830,
                                },
                            },
                        },
                        StreamUI: sdk.Bool(false),
                    },
                    Tools: []shared.Tool{
                        shared.Tool{
                            Command: "iusto",
                            ExitBehavior: shared.ExitBehaviorEnumRestart.ToPointer(),
                            Name: "Linda Nikolaus",
                            StreamOutputToCloudWatch: sdk.Bool(false),
                            StreamUI: sdk.Bool(false),
                        },
                        shared.Tool{
                            Command: "ea",
                            ExitBehavior: shared.ExitBehaviorEnumFail.ToPointer(),
                            Name: "Elena Gulgowski",
                            StreamOutputToCloudWatch: sdk.Bool(false),
                            StreamUI: sdk.Bool(false),
                        },
                        shared.Tool{
                            Command: "laudantium",
                            ExitBehavior: shared.ExitBehaviorEnumFail.ToPointer(),
                            Name: "Elisa Boyle",
                            StreamOutputToCloudWatch: sdk.Bool(false),
                            StreamUI: sdk.Bool(false),
                        },
                        shared.Tool{
                            Command: "excepturi",
                            ExitBehavior: shared.ExitBehaviorEnumRestart.ToPointer(),
                            Name: "Dixie Schamberger",
                            StreamOutputToCloudWatch: sdk.Bool(false),
                            StreamUI: sdk.Bool(false),
                        },
                    },
                    UploadConfigurations: []shared.UploadConfiguration{
                        shared.UploadConfiguration{
                            Name: "Mrs. Sally Jacobi",
                            Path: "quo",
                            UploadBehavior: shared.UploadBehaviorEnumUploadOnTerminate,
                        },
                        shared.UploadConfiguration{
                            Name: "Dr. Bruce Hane",
                            Path: "aut",
                            UploadBehavior: shared.UploadBehaviorEnumUploadOnTerminate,
                        },
                        shared.UploadConfiguration{
                            Name: "Myron Haag",
                            Path: "inventore",
                            UploadBehavior: shared.UploadBehaviorEnumUploadOnTerminate,
                        },
                        shared.UploadConfiguration{
                            Name: "Sonya Osinski",
                            Path: "eum",
                            UploadBehavior: shared.UploadBehaviorEnumUploadOnTerminate,
                        },
                    },
                    UseDefaultTools: sdk.Bool(false),
                    UseDefaultUploadConfigurations: sdk.Bool(false),
                    WorldConfigs: []shared.WorldConfig{
                        shared.WorldConfig{
                            World: sdk.String("quas"),
                        },
                        shared.WorldConfig{
                            World: sdk.String("assumenda"),
                        },
                        shared.WorldConfig{
                            World: sdk.String("nulla"),
                        },
                        shared.WorldConfig{
                            World: sdk.String("voluptas"),
                        },
                    },
                },
                shared.SimulationApplicationConfig{
                    Application: "libero",
                    ApplicationVersion: sdk.String("quasi"),
                    LaunchConfig: shared.LaunchConfig{
                        Command: []string{
                            "numquam",
                            "explicabo",
                        },
                        EnvironmentVariables: map[string]string{
                            "ipsa": "molestiae",
                            "magnam": "odio",
                            "eius": "esse",
                        },
                        LaunchFile: sdk.String("esse"),
                        PackageName: sdk.String("rem"),
                        PortForwardingConfig: &shared.PortForwardingConfig{
                            PortMappings: []shared.PortMapping{
                                shared.PortMapping{
                                    ApplicationPort: 442015,
                                    EnableOnPublicIP: sdk.Bool(false),
                                    JobPort: 695626,
                                },
                                shared.PortMapping{
                                    ApplicationPort: 852635,
                                    EnableOnPublicIP: sdk.Bool(false),
                                    JobPort: 283519,
                                },
                                shared.PortMapping{
                                    ApplicationPort: 433439,
                                    EnableOnPublicIP: sdk.Bool(false),
                                    JobPort: 379927,
                                },
                            },
                        },
                        StreamUI: sdk.Bool(false),
                    },
                    Tools: []shared.Tool{
                        shared.Tool{
                            Command: "eos",
                            ExitBehavior: shared.ExitBehaviorEnumRestart.ToPointer(),
                            Name: "Harold Bednar",
                            StreamOutputToCloudWatch: sdk.Bool(false),
                            StreamUI: sdk.Bool(false),
                        },
                        shared.Tool{
                            Command: "neque",
                            ExitBehavior: shared.ExitBehaviorEnumRestart.ToPointer(),
                            Name: "Salvatore Parker",
                            StreamOutputToCloudWatch: sdk.Bool(false),
                            StreamUI: sdk.Bool(false),
                        },
                        shared.Tool{
                            Command: "voluptas",
                            ExitBehavior: shared.ExitBehaviorEnumFail.ToPointer(),
                            Name: "William Goodwin",
                            StreamOutputToCloudWatch: sdk.Bool(false),
                            StreamUI: sdk.Bool(false),
                        },
                        shared.Tool{
                            Command: "aspernatur",
                            ExitBehavior: shared.ExitBehaviorEnumFail.ToPointer(),
                            Name: "Miss Claude Walsh",
                            StreamOutputToCloudWatch: sdk.Bool(false),
                            StreamUI: sdk.Bool(false),
                        },
                    },
                    UploadConfigurations: []shared.UploadConfiguration{
                        shared.UploadConfiguration{
                            Name: "Jackie Leannon",
                            Path: "odio",
                            UploadBehavior: shared.UploadBehaviorEnumUploadRollingAutoRemove,
                        },
                        shared.UploadConfiguration{
                            Name: "Miranda Daniel",
                            Path: "accusantium",
                            UploadBehavior: shared.UploadBehaviorEnumUploadRollingAutoRemove,
                        },
                    },
                    UseDefaultTools: sdk.Bool(false),
                    UseDefaultUploadConfigurations: sdk.Bool(false),
                    WorldConfigs: []shared.WorldConfig{
                        shared.WorldConfig{
                            World: sdk.String("quas"),
                        },
                        shared.WorldConfig{
                            World: sdk.String("praesentium"),
                        },
                    },
                },
            },
            Tags: map[string]string{
                "deleniti": "fugit",
            },
            VpcConfig: &operations.CreateSimulationJobRequestBodyVpcConfig{
                AssignPublicIP: sdk.Bool(false),
                SecurityGroups: []string{
                    "mollitia",
                    "incidunt",
                    "atque",
                },
                Subnets: []string{
                    "minima",
                },
            },
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("ratione"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSimulationJobResponse != nil {
        // handle response
    }
}
```

## CreateWorldExportJob

Creates a world export job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateWorldExportJob(ctx, operations.CreateWorldExportJobRequest{
        RequestBody: operations.CreateWorldExportJobRequestBody{
            ClientRequestToken: sdk.String("occaecati"),
            IamRole: "atque",
            OutputLocation: operations.CreateWorldExportJobRequestBodyOutputLocation{
                S3Bucket: sdk.String("et"),
                S3Prefix: sdk.String("esse"),
            },
            Tags: map[string]string{
                "accusamus": "veritatis",
                "esse": "quod",
                "nam": "vero",
                "aliquid": "quasi",
            },
            Worlds: []string{
                "vel",
                "harum",
                "molestiae",
                "rerum",
            },
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("eligendi"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("tempore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorldExportJobResponse != nil {
        // handle response
    }
}
```

## CreateWorldGenerationJob

Creates worlds using the specified template.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateWorldGenerationJob(ctx, operations.CreateWorldGenerationJobRequest{
        RequestBody: operations.CreateWorldGenerationJobRequestBody{
            ClientRequestToken: sdk.String("adipisci"),
            Tags: map[string]string{
                "consequuntur": "consequatur",
                "minus": "quaerat",
                "sapiente": "consectetur",
                "esse": "blanditiis",
            },
            Template: "provident",
            WorldCount: operations.CreateWorldGenerationJobRequestBodyWorldCount{
                FloorplanCount: sdk.Int64(953722),
                InteriorCountPerFloorplan: sdk.Int64(857723),
            },
            WorldTags: map[string]string{
                "esse": "quasi",
                "a": "error",
                "sint": "pariatur",
            },
        },
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("quia"),
        XAmzCredential: sdk.String("eveniet"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorldGenerationJobResponse != nil {
        // handle response
    }
}
```

## CreateWorldTemplate

Creates a world template.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateWorldTemplate(ctx, operations.CreateWorldTemplateRequest{
        RequestBody: operations.CreateWorldTemplateRequestBody{
            ClientRequestToken: sdk.String("quasi"),
            Name: sdk.String("Shannon Jacobi DVM"),
            Tags: map[string]string{
                "in": "eius",
                "libero": "illum",
            },
            TemplateBody: sdk.String("soluta"),
            TemplateLocation: &operations.CreateWorldTemplateRequestBodyTemplateLocation{
                S3Bucket: sdk.String("accusantium"),
                S3Key: sdk.String("aliquam"),
            },
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("aut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorldTemplateResponse != nil {
        // handle response
    }
}
```

## ~~DeleteFleet~~

<p>Deletes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteFleet(ctx, operations.DeleteFleetRequest{
        RequestBody: operations.DeleteFleetRequestBody{
            Fleet: "voluptatum",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFleetResponse != nil {
        // handle response
    }
}
```

## ~~DeleteRobot~~

<p>Deletes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRobot(ctx, operations.DeleteRobotRequest{
        RequestBody: operations.DeleteRobotRequestBody{
            Robot: "omnis",
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRobotResponse != nil {
        // handle response
    }
}
```

## DeleteRobotApplication

Deletes a robot application.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRobotApplication(ctx, operations.DeleteRobotApplicationRequest{
        RequestBody: operations.DeleteRobotApplicationRequestBody{
            Application: "veritatis",
            ApplicationVersion: sdk.String("consectetur"),
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRobotApplicationResponse != nil {
        // handle response
    }
}
```

## DeleteSimulationApplication

Deletes a simulation application.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSimulationApplication(ctx, operations.DeleteSimulationApplicationRequest{
        RequestBody: operations.DeleteSimulationApplicationRequestBody{
            Application: "eum",
            ApplicationVersion: sdk.String("mollitia"),
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("numquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSimulationApplicationResponse != nil {
        // handle response
    }
}
```

## DeleteWorldTemplate

Deletes a world template.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteWorldTemplate(ctx, operations.DeleteWorldTemplateRequest{
        RequestBody: operations.DeleteWorldTemplateRequestBody{
            Template: "impedit",
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWorldTemplateResponse != nil {
        // handle response
    }
}
```

## ~~DeregisterRobot~~

<p>Deregisters a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeregisterRobot(ctx, operations.DeregisterRobotRequest{
        RequestBody: operations.DeregisterRobotRequestBody{
            Fleet: "velit",
            Robot: "voluptatibus",
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("repellendus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterRobotResponse != nil {
        // handle response
    }
}
```

## ~~DescribeDeploymentJob~~

<p>Describes a deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeDeploymentJob(ctx, operations.DescribeDeploymentJobRequest{
        RequestBody: operations.DescribeDeploymentJobRequestBody{
            Job: "officia",
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("quaerat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDeploymentJobResponse != nil {
        // handle response
    }
}
```

## ~~DescribeFleet~~

<p>Describes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeFleet(ctx, operations.DescribeFleetRequest{
        RequestBody: operations.DescribeFleetRequestBody{
            Fleet: "porro",
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFleetResponse != nil {
        // handle response
    }
}
```

## ~~DescribeRobot~~

<p>Describes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeRobot(ctx, operations.DescribeRobotRequest{
        RequestBody: operations.DescribeRobotRequestBody{
            Robot: "velit",
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("ducimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRobotResponse != nil {
        // handle response
    }
}
```

## DescribeRobotApplication

Describes a robot application.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeRobotApplication(ctx, operations.DescribeRobotApplicationRequest{
        RequestBody: operations.DescribeRobotApplicationRequestBody{
            Application: "quos",
            ApplicationVersion: sdk.String("vel"),
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRobotApplicationResponse != nil {
        // handle response
    }
}
```

## DescribeSimulationApplication

Describes a simulation application.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeSimulationApplication(ctx, operations.DescribeSimulationApplicationRequest{
        RequestBody: operations.DescribeSimulationApplicationRequestBody{
            Application: "reiciendis",
            ApplicationVersion: sdk.String("assumenda"),
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSimulationApplicationResponse != nil {
        // handle response
    }
}
```

## DescribeSimulationJob

Describes a simulation job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeSimulationJob(ctx, operations.DescribeSimulationJobRequest{
        RequestBody: operations.DescribeSimulationJobRequestBody{
            Job: "exercitationem",
        },
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSimulationJobResponse != nil {
        // handle response
    }
}
```

## DescribeSimulationJobBatch

Describes a simulation job batch.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeSimulationJobBatch(ctx, operations.DescribeSimulationJobBatchRequest{
        RequestBody: operations.DescribeSimulationJobBatchRequestBody{
            Batch: "saepe",
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("sunt"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSimulationJobBatchResponse != nil {
        // handle response
    }
}
```

## DescribeWorld

Describes a world.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeWorld(ctx, operations.DescribeWorldRequest{
        RequestBody: operations.DescribeWorldRequestBody{
            World: "beatae",
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWorldResponse != nil {
        // handle response
    }
}
```

## DescribeWorldExportJob

Describes a world export job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeWorldExportJob(ctx, operations.DescribeWorldExportJobRequest{
        RequestBody: operations.DescribeWorldExportJobRequestBody{
            Job: "ipsa",
        },
        XAmzAlgorithm: sdk.String("voluptates"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWorldExportJobResponse != nil {
        // handle response
    }
}
```

## DescribeWorldGenerationJob

Describes a world generation job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeWorldGenerationJob(ctx, operations.DescribeWorldGenerationJobRequest{
        RequestBody: operations.DescribeWorldGenerationJobRequestBody{
            Job: "voluptas",
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWorldGenerationJobResponse != nil {
        // handle response
    }
}
```

## DescribeWorldTemplate

Describes a world template.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeWorldTemplate(ctx, operations.DescribeWorldTemplateRequest{
        RequestBody: operations.DescribeWorldTemplateRequestBody{
            Template: "dolores",
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWorldTemplateResponse != nil {
        // handle response
    }
}
```

## GetWorldTemplateBody

Gets the world template body.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetWorldTemplateBody(ctx, operations.GetWorldTemplateBodyRequest{
        RequestBody: operations.GetWorldTemplateBodyRequestBody{
            GenerationJob: sdk.String("adipisci"),
            Template: sdk.String("cum"),
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorldTemplateBodyResponse != nil {
        // handle response
    }
}
```

## ~~ListDeploymentJobs~~

<p>Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.ListDeploymentJobs(ctx, operations.ListDeploymentJobsRequest{
        RequestBody: operations.ListDeploymentJobsRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Miss Jorge Rolfson"),
                    Values: []string{
                        "explicabo",
                        "asperiores",
                        "facilis",
                        "voluptate",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Raymond Moore"),
                    Values: []string{
                        "in",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Melody Cole"),
                    Values: []string{
                        "suscipit",
                    },
                },
            },
            MaxResults: sdk.Int64(960257),
            NextToken: sdk.String("debitis"),
        },
        XAmzAlgorithm: sdk.String("illo"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("corrupti"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("sed"),
        MaxResults: sdk.String("provident"),
        NextToken: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeploymentJobsResponse != nil {
        // handle response
    }
}
```

## ~~ListFleets~~

<p>Returns a list of fleets. You can optionally provide filters to retrieve specific fleets.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.ListFleets(ctx, operations.ListFleetsRequest{
        RequestBody: operations.ListFleetsRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Rosemary McClure"),
                    Values: []string{
                        "tempora",
                        "voluptate",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Marc Balistreri"),
                    Values: []string{
                        "facilis",
                        "quaerat",
                        "incidunt",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Miss Alyssa Leffler"),
                    Values: []string{
                        "minima",
                        "recusandae",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Dr. Jody Cummings"),
                    Values: []string{
                        "in",
                        "officiis",
                    },
                },
            },
            MaxResults: sdk.Int64(104627),
            NextToken: sdk.String("laudantium"),
        },
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("error"),
        MaxResults: sdk.String("hic"),
        NextToken: sdk.String("expedita"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFleetsResponse != nil {
        // handle response
    }
}
```

## ListRobotApplications

Returns a list of robot application. You can optionally provide filters to retrieve specific robot applications.

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
    res, err := s.SDK.ListRobotApplications(ctx, operations.ListRobotApplicationsRequest{
        RequestBody: operations.ListRobotApplicationsRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Sonya Heaney"),
                    Values: []string{
                        "accusamus",
                        "tempora",
                        "atque",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Miss April Stiedemann"),
                    Values: []string{
                        "consequatur",
                        "esse",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Karen Lehner"),
                    Values: []string{
                        "et",
                        "blanditiis",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Jane Bailey"),
                    Values: []string{
                        "error",
                        "consequatur",
                        "incidunt",
                        "reiciendis",
                    },
                },
            },
            MaxResults: sdk.Int64(209750),
            NextToken: sdk.String("harum"),
            VersionQualifier: sdk.String("dicta"),
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("nam"),
        MaxResults: sdk.String("tenetur"),
        NextToken: sdk.String("laboriosam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRobotApplicationsResponse != nil {
        // handle response
    }
}
```

## ~~ListRobots~~

<p>Returns a list of robots. You can optionally provide filters to retrieve specific robots.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.ListRobots(ctx, operations.ListRobotsRequest{
        RequestBody: operations.ListRobotsRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Joanna Klocko"),
                    Values: []string{
                        "repellendus",
                        "delectus",
                        "voluptates",
                    },
                },
            },
            MaxResults: sdk.Int64(16871),
            NextToken: sdk.String("est"),
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("veniam"),
        MaxResults: sdk.String("voluptatem"),
        NextToken: sdk.String("quisquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRobotsResponse != nil {
        // handle response
    }
}
```

## ListSimulationApplications

Returns a list of simulation applications. You can optionally provide filters to retrieve specific simulation applications. 

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
    res, err := s.SDK.ListSimulationApplications(ctx, operations.ListSimulationApplicationsRequest{
        RequestBody: operations.ListSimulationApplicationsRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Kay Kihn"),
                    Values: []string{
                        "quidem",
                        "maxime",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Georgia Farrell"),
                    Values: []string{
                        "error",
                        "officiis",
                        "officiis",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Wendell Harber"),
                    Values: []string{
                        "corrupti",
                        "at",
                        "error",
                        "blanditiis",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Delia Littel DVM"),
                    Values: []string{
                        "repellendus",
                        "labore",
                        "reiciendis",
                    },
                },
            },
            MaxResults: sdk.Int64(42976),
            NextToken: sdk.String("repudiandae"),
            VersionQualifier: sdk.String("dicta"),
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("a"),
        MaxResults: sdk.String("molestias"),
        NextToken: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSimulationApplicationsResponse != nil {
        // handle response
    }
}
```

## ListSimulationJobBatches

Returns a list simulation job batches. You can optionally provide filters to retrieve specific simulation batch jobs. 

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
    res, err := s.SDK.ListSimulationJobBatches(ctx, operations.ListSimulationJobBatchesRequest{
        RequestBody: operations.ListSimulationJobBatchesRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Toni Torphy"),
                    Values: []string{
                        "eveniet",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Carlos Considine"),
                    Values: []string{
                        "error",
                        "illo",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Melody Vandervort"),
                    Values: []string{
                        "iure",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Lena Beier"),
                    Values: []string{
                        "cum",
                    },
                },
            },
            MaxResults: sdk.Int64(434761),
            NextToken: sdk.String("necessitatibus"),
        },
        XAmzAlgorithm: sdk.String("ratione"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("ad"),
        MaxResults: sdk.String("repellat"),
        NextToken: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSimulationJobBatchesResponse != nil {
        // handle response
    }
}
```

## ListSimulationJobs

Returns a list of simulation jobs. You can optionally provide filters to retrieve specific simulation jobs. 

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
    res, err := s.SDK.ListSimulationJobs(ctx, operations.ListSimulationJobsRequest{
        RequestBody: operations.ListSimulationJobsRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Christian O'Conner DVM"),
                    Values: []string{
                        "dolores",
                        "id",
                        "minima",
                        "dolore",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Danny Berge"),
                    Values: []string{
                        "molestiae",
                        "ex",
                    },
                },
            },
            MaxResults: sdk.Int64(284000),
            NextToken: sdk.String("culpa"),
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("esse"),
        MaxResults: sdk.String("provident"),
        NextToken: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSimulationJobsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists all tags on a AWS RoboMaker resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("animi"),
        ResourceArn: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListWorldExportJobs

Lists world export jobs.

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
    res, err := s.SDK.ListWorldExportJobs(ctx, operations.ListWorldExportJobsRequest{
        RequestBody: operations.ListWorldExportJobsRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Rufus Okuneva"),
                    Values: []string{
                        "repellat",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Dustin King"),
                    Values: []string{
                        "laborum",
                        "placeat",
                        "modi",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Virgil Towne"),
                    Values: []string{
                        "rerum",
                    },
                },
            },
            MaxResults: sdk.Int64(272229),
            NextToken: sdk.String("quis"),
        },
        XAmzAlgorithm: sdk.String("inventore"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        MaxResults: sdk.String("eum"),
        NextToken: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorldExportJobsResponse != nil {
        // handle response
    }
}
```

## ListWorldGenerationJobs

Lists world generator jobs.

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
    res, err := s.SDK.ListWorldGenerationJobs(ctx, operations.ListWorldGenerationJobsRequest{
        RequestBody: operations.ListWorldGenerationJobsRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Edmund Daugherty"),
                    Values: []string{
                        "minima",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Misty McKenzie"),
                    Values: []string{
                        "illum",
                        "eaque",
                        "earum",
                        "perspiciatis",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Doyle Jacobs"),
                    Values: []string{
                        "fugit",
                    },
                },
            },
            MaxResults: sdk.Int64(764995),
            NextToken: sdk.String("fuga"),
        },
        XAmzAlgorithm: sdk.String("ratione"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("et"),
        MaxResults: sdk.String("ducimus"),
        NextToken: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorldGenerationJobsResponse != nil {
        // handle response
    }
}
```

## ListWorldTemplates

Lists world templates.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListWorldTemplates(ctx, operations.ListWorldTemplatesRequest{
        RequestBody: operations.ListWorldTemplatesRequestBody{
            MaxResults: sdk.Int64(581082),
            NextToken: sdk.String("suscipit"),
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        MaxResults: sdk.String("tempora"),
        NextToken: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorldTemplatesResponse != nil {
        // handle response
    }
}
```

## ListWorlds

Lists worlds.

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
    res, err := s.SDK.ListWorlds(ctx, operations.ListWorldsRequest{
        RequestBody: operations.ListWorldsRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Marlene Koch"),
                    Values: []string{
                        "vel",
                        "architecto",
                        "fugiat",
                        "doloremque",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Glenda Goldner"),
                    Values: []string{
                        "aliquid",
                    },
                },
            },
            MaxResults: sdk.Int64(58870),
            NextToken: sdk.String("laborum"),
        },
        XAmzAlgorithm: sdk.String("sunt"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        MaxResults: sdk.String("aliquid"),
        NextToken: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorldsResponse != nil {
        // handle response
    }
}
```

## ~~RegisterRobot~~

<p>Registers a robot with a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RegisterRobot(ctx, operations.RegisterRobotRequest{
        RequestBody: operations.RegisterRobotRequestBody{
            Fleet: "eum",
            Robot: "voluptas",
        },
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("voluptates"),
        XAmzSignedHeaders: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterRobotResponse != nil {
        // handle response
    }
}
```

## RestartSimulationJob

Restarts a running simulation job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RestartSimulationJob(ctx, operations.RestartSimulationJobRequest{
        RequestBody: operations.RestartSimulationJobRequestBody{
            Job: "laborum",
        },
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("vitae"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RestartSimulationJobResponse != nil {
        // handle response
    }
}
```

## StartSimulationJobBatch

Starts a new simulation job batch. The batch is defined using one or more <code>SimulationJobRequest</code> objects. 

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
    res, err := s.SDK.StartSimulationJobBatch(ctx, operations.StartSimulationJobBatchRequest{
        RequestBody: operations.StartSimulationJobBatchRequestBody{
            BatchPolicy: &operations.StartSimulationJobBatchRequestBodyBatchPolicy{
                MaxConcurrency: sdk.Int64(775803),
                TimeoutInSeconds: sdk.Int64(405373),
            },
            ClientRequestToken: sdk.String("ut"),
            CreateSimulationJobRequests: []shared.SimulationJobRequest{
                shared.SimulationJobRequest{
                    Compute: &shared.Compute{
                        ComputeType: shared.ComputeTypeEnumGpuAndCPU.ToPointer(),
                        GpuUnitLimit: sdk.Int64(29950),
                        SimulationUnitLimit: sdk.Int64(561577),
                    },
                    DataSources: []shared.DataSourceConfig{
                        shared.DataSourceConfig{
                            Destination: sdk.String("aliquid"),
                            Name: "Miss Nora Moen",
                            S3Bucket: "culpa",
                            S3Keys: []string{
                                "sapiente",
                            },
                            Type: shared.DataSourceTypeEnumFile.ToPointer(),
                        },
                        shared.DataSourceConfig{
                            Destination: sdk.String("architecto"),
                            Name: "Mr. Dewey Toy",
                            S3Bucket: "earum",
                            S3Keys: []string{
                                "sapiente",
                                "rem",
                            },
                            Type: shared.DataSourceTypeEnumFile.ToPointer(),
                        },
                        shared.DataSourceConfig{
                            Destination: sdk.String("nemo"),
                            Name: "Dr. Chris Hermiston",
                            S3Bucket: "impedit",
                            S3Keys: []string{
                                "nam",
                                "ipsam",
                                "culpa",
                                "dolor",
                            },
                            Type: shared.DataSourceTypeEnumPrefix.ToPointer(),
                        },
                    },
                    FailureBehavior: shared.FailureBehaviorEnumFail.ToPointer(),
                    IamRole: sdk.String("deleniti"),
                    LoggingConfig: &shared.LoggingConfig{
                        RecordAllRosTopics: sdk.Bool(false),
                    },
                    MaxJobDurationInSeconds: 85311,
                    OutputLocation: &shared.OutputLocation{
                        S3Bucket: sdk.String("tempora"),
                        S3Prefix: sdk.String("dolor"),
                    },
                    RobotApplications: []shared.RobotApplicationConfig{
                        shared.RobotApplicationConfig{
                            Application: "architecto",
                            ApplicationVersion: sdk.String("sit"),
                            LaunchConfig: shared.LaunchConfig{
                                Command: []string{
                                    "fugit",
                                    "ab",
                                },
                                EnvironmentVariables: map[string]string{
                                    "quae": "dolor",
                                    "fugiat": "ipsam",
                                    "consequuntur": "ipsa",
                                },
                                LaunchFile: sdk.String("quas"),
                                PackageName: sdk.String("eveniet"),
                                PortForwardingConfig: &shared.PortForwardingConfig{
                                    PortMappings: []shared.PortMapping{
                                        shared.PortMapping{
                                            ApplicationPort: 884952,
                                            EnableOnPublicIP: sdk.Bool(false),
                                            JobPort: 456410,
                                        },
                                        shared.PortMapping{
                                            ApplicationPort: 897277,
                                            EnableOnPublicIP: sdk.Bool(false),
                                            JobPort: 153369,
                                        },
                                        shared.PortMapping{
                                            ApplicationPort: 332191,
                                            EnableOnPublicIP: sdk.Bool(false),
                                            JobPort: 199596,
                                        },
                                        shared.PortMapping{
                                            ApplicationPort: 712927,
                                            EnableOnPublicIP: sdk.Bool(false),
                                            JobPort: 432984,
                                        },
                                    },
                                },
                                StreamUI: sdk.Bool(false),
                            },
                            Tools: []shared.Tool{
                                shared.Tool{
                                    Command: "voluptatum",
                                    ExitBehavior: shared.ExitBehaviorEnumFail.ToPointer(),
                                    Name: "Kathleen Sauer",
                                    StreamOutputToCloudWatch: sdk.Bool(false),
                                    StreamUI: sdk.Bool(false),
                                },
                                shared.Tool{
                                    Command: "laboriosam",
                                    ExitBehavior: shared.ExitBehaviorEnumRestart.ToPointer(),
                                    Name: "Helen Heller III",
                                    StreamOutputToCloudWatch: sdk.Bool(false),
                                    StreamUI: sdk.Bool(false),
                                },
                            },
                            UploadConfigurations: []shared.UploadConfiguration{
                                shared.UploadConfiguration{
                                    Name: "Carlton Pollich",
                                    Path: "repudiandae",
                                    UploadBehavior: shared.UploadBehaviorEnumUploadRollingAutoRemove,
                                },
                                shared.UploadConfiguration{
                                    Name: "Herman Klocko",
                                    Path: "voluptas",
                                    UploadBehavior: shared.UploadBehaviorEnumUploadOnTerminate,
                                },
                                shared.UploadConfiguration{
                                    Name: "Brandy Gibson",
                                    Path: "nesciunt",
                                    UploadBehavior: shared.UploadBehaviorEnumUploadRollingAutoRemove,
                                },
                                shared.UploadConfiguration{
                                    Name: "Randall Boyle",
                                    Path: "dicta",
                                    UploadBehavior: shared.UploadBehaviorEnumUploadOnTerminate,
                                },
                            },
                            UseDefaultTools: sdk.Bool(false),
                            UseDefaultUploadConfigurations: sdk.Bool(false),
                        },
                    },
                    SimulationApplications: []shared.SimulationApplicationConfig{
                        shared.SimulationApplicationConfig{
                            Application: "consectetur",
                            ApplicationVersion: sdk.String("aperiam"),
                            LaunchConfig: shared.LaunchConfig{
                                Command: []string{
                                    "reiciendis",
                                    "soluta",
                                    "alias",
                                },
                                EnvironmentVariables: map[string]string{
                                    "eos": "occaecati",
                                    "iste": "magni",
                                    "inventore": "fuga",
                                },
                                LaunchFile: sdk.String("accusamus"),
                                PackageName: sdk.String("voluptatibus"),
                                PortForwardingConfig: &shared.PortForwardingConfig{
                                    PortMappings: []shared.PortMapping{
                                        shared.PortMapping{
                                            ApplicationPort: 608593,
                                            EnableOnPublicIP: sdk.Bool(false),
                                            JobPort: 966390,
                                        },
                                        shared.PortMapping{
                                            ApplicationPort: 328379,
                                            EnableOnPublicIP: sdk.Bool(false),
                                            JobPort: 507636,
                                        },
                                        shared.PortMapping{
                                            ApplicationPort: 802692,
                                            EnableOnPublicIP: sdk.Bool(false),
                                            JobPort: 300403,
                                        },
                                    },
                                },
                                StreamUI: sdk.Bool(false),
                            },
                            Tools: []shared.Tool{
                                shared.Tool{
                                    Command: "quos",
                                    ExitBehavior: shared.ExitBehaviorEnumFail.ToPointer(),
                                    Name: "Leslie Lebsack",
                                    StreamOutputToCloudWatch: sdk.Bool(false),
                                    StreamUI: sdk.Bool(false),
                                },
                                shared.Tool{
                                    Command: "nam",
                                    ExitBehavior: shared.ExitBehaviorEnumRestart.ToPointer(),
                                    Name: "Mr. Holly Kautzer",
                                    StreamOutputToCloudWatch: sdk.Bool(false),
                                    StreamUI: sdk.Bool(false),
                                },
                                shared.Tool{
                                    Command: "maiores",
                                    ExitBehavior: shared.ExitBehaviorEnumFail.ToPointer(),
                                    Name: "Orville Nolan",
                                    StreamOutputToCloudWatch: sdk.Bool(false),
                                    StreamUI: sdk.Bool(false),
                                },
                                shared.Tool{
                                    Command: "reprehenderit",
                                    ExitBehavior: shared.ExitBehaviorEnumRestart.ToPointer(),
                                    Name: "Velma Thompson",
                                    StreamOutputToCloudWatch: sdk.Bool(false),
                                    StreamUI: sdk.Bool(false),
                                },
                            },
                            UploadConfigurations: []shared.UploadConfiguration{
                                shared.UploadConfiguration{
                                    Name: "Ruben Hodkiewicz",
                                    Path: "quae",
                                    UploadBehavior: shared.UploadBehaviorEnumUploadRollingAutoRemove,
                                },
                                shared.UploadConfiguration{
                                    Name: "Pablo Feeney",
                                    Path: "ipsum",
                                    UploadBehavior: shared.UploadBehaviorEnumUploadRollingAutoRemove,
                                },
                                shared.UploadConfiguration{
                                    Name: "Shelia Walker",
                                    Path: "iusto",
                                    UploadBehavior: shared.UploadBehaviorEnumUploadOnTerminate,
                                },
                                shared.UploadConfiguration{
                                    Name: "Stella DuBuque",
                                    Path: "quibusdam",
                                    UploadBehavior: shared.UploadBehaviorEnumUploadOnTerminate,
                                },
                            },
                            UseDefaultTools: sdk.Bool(false),
                            UseDefaultUploadConfigurations: sdk.Bool(false),
                            WorldConfigs: []shared.WorldConfig{
                                shared.WorldConfig{
                                    World: sdk.String("voluptatibus"),
                                },
                            },
                        },
                    },
                    Tags: map[string]string{
                        "magnam": "quibusdam",
                        "inventore": "facere",
                    },
                    UseDefaultApplications: sdk.Bool(false),
                    VpcConfig: &shared.VPCConfig{
                        AssignPublicIP: sdk.Bool(false),
                        SecurityGroups: []string{
                            "architecto",
                            "voluptatibus",
                            "quia",
                        },
                        Subnets: []string{
                            "aliquam",
                            "velit",
                            "illo",
                            "accusantium",
                        },
                    },
                },
                shared.SimulationJobRequest{
                    Compute: &shared.Compute{
                        ComputeType: shared.ComputeTypeEnumCPU.ToPointer(),
                        GpuUnitLimit: sdk.Int64(406922),
                        SimulationUnitLimit: sdk.Int64(107617),
                    },
                    DataSources: []shared.DataSourceConfig{
                        shared.DataSourceConfig{
                            Destination: sdk.String("excepturi"),
                            Name: "Sheila Graham",
                            S3Bucket: "dicta",
                            S3Keys: []string{
                                "voluptatibus",
                                "iste",
                                "itaque",
                                "alias",
                            },
                            Type: shared.DataSourceTypeEnumArchive.ToPointer(),
                        },
                        shared.DataSourceConfig{
                            Destination: sdk.String("itaque"),
                            Name: "Maggie Friesen",
                            S3Bucket: "sit",
                            S3Keys: []string{
                                "consequatur",
                            },
                            Type: shared.DataSourceTypeEnumArchive.ToPointer(),
                        },
                        shared.DataSourceConfig{
                            Destination: sdk.String("recusandae"),
                            Name: "Alison Hodkiewicz",
                            S3Bucket: "perspiciatis",
                            S3Keys: []string{
                                "deleniti",
                                "a",
                                "voluptate",
                            },
                            Type: shared.DataSourceTypeEnumArchive.ToPointer(),
                        },
                        shared.DataSourceConfig{
                            Destination: sdk.String("unde"),
                            Name: "Lyle Russel",
                            S3Bucket: "est",
                            S3Keys: []string{
                                "esse",
                                "labore",
                                "veritatis",
                            },
                            Type: shared.DataSourceTypeEnumFile.ToPointer(),
                        },
                    },
                    FailureBehavior: shared.FailureBehaviorEnumFail.ToPointer(),
                    IamRole: sdk.String("vitae"),
                    LoggingConfig: &shared.LoggingConfig{
                        RecordAllRosTopics: sdk.Bool(false),
                    },
                    MaxJobDurationInSeconds: 81371,
                    OutputLocation: &shared.OutputLocation{
                        S3Bucket: sdk.String("dolorem"),
                        S3Prefix: sdk.String("ad"),
                    },
                    RobotApplications: []shared.RobotApplicationConfig{
                        shared.RobotApplicationConfig{
                            Application: "iste",
                            ApplicationVersion: sdk.String("ex"),
                            LaunchConfig: shared.LaunchConfig{
                                Command: []string{
                                    "soluta",
                                    "libero",
                                },
                                EnvironmentVariables: map[string]string{
                                    "dolorum": "odio",
                                    "fugit": "alias",
                                    "magni": "vel",
                                },
                                LaunchFile: sdk.String("quae"),
                                PackageName: sdk.String("quae"),
                                PortForwardingConfig: &shared.PortForwardingConfig{
                                    PortMappings: []shared.PortMapping{
                                        shared.PortMapping{
                                            ApplicationPort: 208253,
                                            EnableOnPublicIP: sdk.Bool(false),
                                            JobPort: 348357,
                                        },
                                        shared.PortMapping{
                                            ApplicationPort: 932394,
                                            EnableOnPublicIP: sdk.Bool(false),
                                            JobPort: 88248,
                                        },
                                    },
                                },
                                StreamUI: sdk.Bool(false),
                            },
                            Tools: []shared.Tool{
                                shared.Tool{
                                    Command: "unde",
                                    ExitBehavior: shared.ExitBehaviorEnumRestart.ToPointer(),
                                    Name: "Wilbert Crona",
                                    StreamOutputToCloudWatch: sdk.Bool(false),
                                    StreamUI: sdk.Bool(false),
                                },
                            },
                            UploadConfigurations: []shared.UploadConfiguration{
                                shared.UploadConfiguration{
                                    Name: "Gerald Ondricka",
                                    Path: "officia",
                                    UploadBehavior: shared.UploadBehaviorEnumUploadRollingAutoRemove,
                                },
                                shared.UploadConfiguration{
                                    Name: "Dr. Paul Kris Jr.",
                                    Path: "totam",
                                    UploadBehavior: shared.UploadBehaviorEnumUploadOnTerminate,
                                },
                                shared.UploadConfiguration{
                                    Name: "Kelvin Bartoletti",
                                    Path: "dolores",
                                    UploadBehavior: shared.UploadBehaviorEnumUploadRollingAutoRemove,
                                },
                            },
                            UseDefaultTools: sdk.Bool(false),
                            UseDefaultUploadConfigurations: sdk.Bool(false),
                        },
                    },
                    SimulationApplications: []shared.SimulationApplicationConfig{
                        shared.SimulationApplicationConfig{
                            Application: "est",
                            ApplicationVersion: sdk.String("facere"),
                            LaunchConfig: shared.LaunchConfig{
                                Command: []string{
                                    "molestiae",
                                    "provident",
                                    "accusamus",
                                },
                                EnvironmentVariables: map[string]string{
                                    "tempore": "sint",
                                    "ea": "autem",
                                    "ipsam": "rerum",
                                    "laudantium": "corporis",
                                },
                                LaunchFile: sdk.String("officiis"),
                                PackageName: sdk.String("voluptatibus"),
                                PortForwardingConfig: &shared.PortForwardingConfig{
                                    PortMappings: []shared.PortMapping{
                                        shared.PortMapping{
                                            ApplicationPort: 872303,
                                            EnableOnPublicIP: sdk.Bool(false),
                                            JobPort: 5152,
                                        },
                                        shared.PortMapping{
                                            ApplicationPort: 156653,
                                            EnableOnPublicIP: sdk.Bool(false),
                                            JobPort: 694158,
                                        },
                                        shared.PortMapping{
                                            ApplicationPort: 684126,
                                            EnableOnPublicIP: sdk.Bool(false),
                                            JobPort: 919508,
                                        },
                                    },
                                },
                                StreamUI: sdk.Bool(false),
                            },
                            Tools: []shared.Tool{
                                shared.Tool{
                                    Command: "expedita",
                                    ExitBehavior: shared.ExitBehaviorEnumRestart.ToPointer(),
                                    Name: "Rosemarie Kub",
                                    StreamOutputToCloudWatch: sdk.Bool(false),
                                    StreamUI: sdk.Bool(false),
                                },
                            },
                            UploadConfigurations: []shared.UploadConfiguration{
                                shared.UploadConfiguration{
                                    Name: "Natasha Wehner",
                                    Path: "similique",
                                    UploadBehavior: shared.UploadBehaviorEnumUploadOnTerminate,
                                },
                            },
                            UseDefaultTools: sdk.Bool(false),
                            UseDefaultUploadConfigurations: sdk.Bool(false),
                            WorldConfigs: []shared.WorldConfig{
                                shared.WorldConfig{
                                    World: sdk.String("quis"),
                                },
                                shared.WorldConfig{
                                    World: sdk.String("beatae"),
                                },
                                shared.WorldConfig{
                                    World: sdk.String("unde"),
                                },
                            },
                        },
                    },
                    Tags: map[string]string{
                        "delectus": "cupiditate",
                        "fugit": "numquam",
                    },
                    UseDefaultApplications: sdk.Bool(false),
                    VpcConfig: &shared.VPCConfig{
                        AssignPublicIP: sdk.Bool(false),
                        SecurityGroups: []string{
                            "nesciunt",
                            "at",
                        },
                        Subnets: []string{
                            "dignissimos",
                            "optio",
                            "necessitatibus",
                        },
                    },
                },
            },
            Tags: map[string]string{
                "qui": "expedita",
                "voluptatum": "cupiditate",
            },
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartSimulationJobBatchResponse != nil {
        // handle response
    }
}
```

## ~~SyncDeploymentJob~~

<p>Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SyncDeploymentJob(ctx, operations.SyncDeploymentJobRequest{
        RequestBody: operations.SyncDeploymentJobRequestBody{
            ClientRequestToken: "modi",
            Fleet: "corporis",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("voluptates"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("ratione"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncDeploymentJobResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Adds or edits tags for a AWS RoboMaker resource.</p> <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty strings. </p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "totam": "occaecati",
                "voluptas": "quo",
            },
        },
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("delectus"),
        ResourceArn: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

<p>Removes the specified tags from the specified AWS RoboMaker resource.</p> <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key, use <a href="https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html"> <code>TagResource</code> </a>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("aperiam"),
        ResourceArn: "odio",
        TagKeys: []string{
            "in",
            "ducimus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateRobotApplication

Updates a robot application.

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
    res, err := s.SDK.UpdateRobotApplication(ctx, operations.UpdateRobotApplicationRequest{
        RequestBody: operations.UpdateRobotApplicationRequestBody{
            Application: "excepturi",
            CurrentRevisionID: sdk.String("dolores"),
            Environment: &operations.UpdateRobotApplicationRequestBodyEnvironment{
                URI: sdk.String("https://bossy-landscape.info"),
            },
            RobotSoftwareSuite: operations.UpdateRobotApplicationRequestBodyRobotSoftwareSuite{
                Name: shared.RobotSoftwareSuiteTypeEnumGeneral.ToPointer(),
                Version: shared.RobotSoftwareSuiteVersionTypeEnumFoxy.ToPointer(),
            },
            Sources: []shared.SourceConfig{
                shared.SourceConfig{
                    Architecture: shared.ArchitectureEnumArmhf.ToPointer(),
                    S3Bucket: sdk.String("ex"),
                    S3Key: sdk.String("quaerat"),
                },
                shared.SourceConfig{
                    Architecture: shared.ArchitectureEnumArm64.ToPointer(),
                    S3Bucket: sdk.String("officiis"),
                    S3Key: sdk.String("placeat"),
                },
                shared.SourceConfig{
                    Architecture: shared.ArchitectureEnumArmhf.ToPointer(),
                    S3Bucket: sdk.String("exercitationem"),
                    S3Key: sdk.String("quam"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateRobotApplicationResponse != nil {
        // handle response
    }
}
```

## UpdateSimulationApplication

Updates a simulation application.

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
    res, err := s.SDK.UpdateSimulationApplication(ctx, operations.UpdateSimulationApplicationRequest{
        RequestBody: operations.UpdateSimulationApplicationRequestBody{
            Application: "cum",
            CurrentRevisionID: sdk.String("dicta"),
            Environment: &operations.UpdateSimulationApplicationRequestBodyEnvironment{
                URI: sdk.String("https://gleaming-piglet.biz"),
            },
            RenderingEngine: &operations.UpdateSimulationApplicationRequestBodyRenderingEngine{
                Name: shared.RenderingEngineTypeEnumOgre.ToPointer(),
                Version: sdk.String("nam"),
            },
            RobotSoftwareSuite: operations.UpdateSimulationApplicationRequestBodyRobotSoftwareSuite{
                Name: shared.RobotSoftwareSuiteTypeEnumRos.ToPointer(),
                Version: shared.RobotSoftwareSuiteVersionTypeEnumKinetic.ToPointer(),
            },
            SimulationSoftwareSuite: operations.UpdateSimulationApplicationRequestBodySimulationSoftwareSuite{
                Name: shared.SimulationSoftwareSuiteTypeEnumSimulationRuntime.ToPointer(),
                Version: sdk.String("nobis"),
            },
            Sources: []shared.SourceConfig{
                shared.SourceConfig{
                    Architecture: shared.ArchitectureEnumArm64.ToPointer(),
                    S3Bucket: sdk.String("maiores"),
                    S3Key: sdk.String("veritatis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSimulationApplicationResponse != nil {
        // handle response
    }
}
```

## UpdateWorldTemplate

Updates a world template.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateWorldTemplate(ctx, operations.UpdateWorldTemplateRequest{
        RequestBody: operations.UpdateWorldTemplateRequestBody{
            Name: sdk.String("Bernice Yundt"),
            Template: "enim",
            TemplateBody: sdk.String("hic"),
            TemplateLocation: &operations.UpdateWorldTemplateRequestBodyTemplateLocation{
                S3Bucket: sdk.String("animi"),
                S3Key: sdk.String("quas"),
            },
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWorldTemplateResponse != nil {
        // handle response
    }
}
```
