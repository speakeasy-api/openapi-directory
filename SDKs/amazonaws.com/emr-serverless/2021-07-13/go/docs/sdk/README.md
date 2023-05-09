# SDK

## Overview

<p>Amazon EMR Serverless is a new deployment option for Amazon EMR. EMR Serverless provides a serverless runtime environment that simplifies running analytics applications using the latest open source frameworks such as Apache Spark and Apache Hive. With EMR Serverless, you don’t have to configure, optimize, secure, or operate clusters to run applications with these frameworks.</p> <p>The API reference to Amazon EMR Serverless is <code>emr-serverless</code>. The <code>emr-serverless</code> prefix is used in the following scenarios: </p> <ul> <li> <p>It is the prefix in the CLI commands for Amazon EMR Serverless. For example, <code>aws emr-serverless start-job-run</code>.</p> </li> <li> <p>It is the prefix before IAM policy actions for Amazon EMR Serverless. For example, <code>"Action": ["emr-serverless:StartJobRun"]</code>. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-actions">Policy actions for Amazon EMR Serverless</a>.</p> </li> <li> <p>It is the prefix used in Amazon EMR Serverless service endpoints. For example, <code>emr-serverless.us-east-2.amazonaws.com</code>.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/emr-serverless/>
### Available Operations

* [CancelJobRun](#canceljobrun) - Cancels a job run.
* [CreateApplication](#createapplication) - Creates an application.
* [DeleteApplication](#deleteapplication) - Deletes an application. An application has to be in a stopped or created state in order to be deleted.
* [GetApplication](#getapplication) - Displays detailed information about a specified application.
* [GetDashboardForJobRun](#getdashboardforjobrun) - Returns a URL to access the job run dashboard. The generated URL is valid for one hour, after which you must invoke the API again to generate a new URL.
* [GetJobRun](#getjobrun) - Displays detailed information about a job run.
* [ListApplications](#listapplications) - Lists applications based on a set of parameters.
* [ListJobRuns](#listjobruns) - Lists job runs based on a set of parameters.
* [ListTagsForResource](#listtagsforresource) - Lists the tags assigned to the resources.
* [StartApplication](#startapplication) - Starts a specified application and initializes initial capacity if configured.
* [StartJobRun](#startjobrun) - Starts a job run.
* [StopApplication](#stopapplication) - Stops a specified application and releases initial capacity if configured. All scheduled and running jobs must be completed or cancelled before stopping an application.
* [TagResource](#tagresource) - Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your Amazon Web Services resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. 
* [UntagResource](#untagresource) - Removes tags from resources.
* [UpdateApplication](#updateapplication) - Updates a specified application. An application has to be in a stopped or created state in order to be updated.

## CancelJobRun

Cancels a job run.

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
    res, err := s.SDK.CancelJobRun(ctx, operations.CancelJobRunRequest{
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        ApplicationID: "delectus",
        JobRunID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelJobRunResponse != nil {
        // handle response
    }
}
```

## CreateApplication

Creates an application.

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
    res, err := s.SDK.CreateApplication(ctx, operations.CreateApplicationRequest{
        RequestBody: operations.CreateApplicationRequestBody{
            Architecture: operations.CreateApplicationRequestBodyArchitectureEnumArm64.ToPointer(),
            AutoStartConfiguration: &operations.CreateApplicationRequestBodyAutoStartConfiguration{
                Enabled: sdk.Bool(false),
            },
            AutoStopConfiguration: &operations.CreateApplicationRequestBodyAutoStopConfiguration{
                Enabled: sdk.Bool(false),
                IdleTimeoutMinutes: sdk.Int64(477665),
            },
            ClientToken: "minus",
            ImageConfiguration: &operations.CreateApplicationRequestBodyImageConfiguration{
                ImageURI: sdk.String("placeat"),
            },
            InitialCapacity: map[string]shared.InitialCapacityConfig{
                "iusto": shared.InitialCapacityConfig{
                    WorkerConfiguration: &shared.WorkerResourceConfig{
                        CPU: "excepturi",
                        Disk: sdk.String("nisi"),
                        Memory: "recusandae",
                    },
                    WorkerCount: 836079,
                },
                "ab": shared.InitialCapacityConfig{
                    WorkerConfiguration: &shared.WorkerResourceConfig{
                        CPU: "quis",
                        Disk: sdk.String("veritatis"),
                        Memory: "deserunt",
                    },
                    WorkerCount: 20218,
                },
                "ipsam": shared.InitialCapacityConfig{
                    WorkerConfiguration: &shared.WorkerResourceConfig{
                        CPU: "repellendus",
                        Disk: sdk.String("sapiente"),
                        Memory: "quo",
                    },
                    WorkerCount: 140350,
                },
            },
            MaximumCapacity: &operations.CreateApplicationRequestBodyMaximumCapacity{
                CPU: sdk.String("at"),
                Disk: sdk.String("at"),
                Memory: sdk.String("maiores"),
            },
            Name: sdk.String("Bernadette Schmidt"),
            NetworkConfiguration: &operations.CreateApplicationRequestBodyNetworkConfiguration{
                SecurityGroupIds: []string{
                    "dolorum",
                    "dicta",
                    "nam",
                    "officia",
                },
                SubnetIds: []string{
                    "fugit",
                    "deleniti",
                    "hic",
                },
            },
            ReleaseLabel: "optio",
            Tags: map[string]string{
                "beatae": "commodi",
                "molestiae": "modi",
                "qui": "impedit",
            },
            Type: "cum",
            WorkerTypeSpecifications: map[string]shared.WorkerTypeSpecificationInput{
                "ipsum": shared.WorkerTypeSpecificationInput{
                    ImageConfiguration: &shared.ImageConfigurationInput{
                        ImageURI: sdk.String("excepturi"),
                    },
                },
                "aspernatur": shared.WorkerTypeSpecificationInput{
                    ImageConfiguration: &shared.ImageConfigurationInput{
                        ImageURI: sdk.String("perferendis"),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicationResponse != nil {
        // handle response
    }
}
```

## DeleteApplication

Deletes an application. An application has to be in a stopped or created state in order to be deleted.

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
    res, err := s.SDK.DeleteApplication(ctx, operations.DeleteApplicationRequest{
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("iure"),
        ApplicationID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteApplicationResponse != nil {
        // handle response
    }
}
```

## GetApplication

Displays detailed information about a specified application.

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
    res, err := s.SDK.GetApplication(ctx, operations.GetApplicationRequest{
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("laborum"),
        ApplicationID: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApplicationResponse != nil {
        // handle response
    }
}
```

## GetDashboardForJobRun

Returns a URL to access the job run dashboard. The generated URL is valid for one hour, after which you must invoke the API again to generate a new URL.

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
    res, err := s.SDK.GetDashboardForJobRun(ctx, operations.GetDashboardForJobRunRequest{
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("nemo"),
        ApplicationID: "minima",
        JobRunID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDashboardForJobRunResponse != nil {
        // handle response
    }
}
```

## GetJobRun

Displays detailed information about a job run.

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
    res, err := s.SDK.GetJobRun(ctx, operations.GetJobRunRequest{
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        ApplicationID: "dolorem",
        JobRunID: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetJobRunResponse != nil {
        // handle response
    }
}
```

## ListApplications

Lists applications based on a set of parameters.

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
    res, err := s.SDK.ListApplications(ctx, operations.ListApplicationsRequest{
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("quam"),
        MaxResults: sdk.Int64(474697),
        NextToken: sdk.String("velit"),
        States: []shared.ApplicationStateEnum{
            shared.ApplicationStateEnumCreated,
            shared.ApplicationStateEnumStarting,
            shared.ApplicationStateEnumCreating,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListApplicationsResponse != nil {
        // handle response
    }
}
```

## ListJobRuns

Lists job runs based on a set of parameters.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListJobRuns(ctx, operations.ListJobRunsRequest{
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        ApplicationID: "ipsam",
        CreatedAtAfter: types.MustTimeFromString("2021-05-11T16:11:54.761Z"),
        CreatedAtBefore: types.MustTimeFromString("2022-11-26T13:23:33.410Z"),
        MaxResults: sdk.Int64(622846),
        NextToken: sdk.String("temporibus"),
        States: []shared.JobRunStateEnum{
            shared.JobRunStateEnumSubmitted,
            shared.JobRunStateEnumCancelled,
            shared.JobRunStateEnumCancelled,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobRunsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags assigned to the resources.

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
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        ResourceArn: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## StartApplication

Starts a specified application and initializes initial capacity if configured.

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
    res, err := s.SDK.StartApplication(ctx, operations.StartApplicationRequest{
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("doloremque"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("corporis"),
        ApplicationID: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartApplicationResponse != nil {
        // handle response
    }
}
```

## StartJobRun

Starts a job run.

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
    res, err := s.SDK.StartJobRun(ctx, operations.StartJobRunRequest{
        RequestBody: operations.StartJobRunRequestBody{
            ClientToken: "iusto",
            ConfigurationOverrides: &operations.StartJobRunRequestBodyConfigurationOverrides{
                ApplicationConfiguration: []shared.Configuration{
                    shared.Configuration{
                        Classification: "harum",
                        Configurations: []shared.Configuration{
                            shared.Configuration{},
                            shared.Configuration{},
                        },
                        Properties: sdk.String("accusamus"),
                    },
                },
                MonitoringConfiguration: &shared.MonitoringConfiguration{
                    ManagedPersistenceMonitoringConfiguration: &shared.ManagedPersistenceMonitoringConfiguration{
                        Enabled: sdk.Bool(false),
                        EncryptionKeyArn: sdk.String("commodi"),
                    },
                    S3MonitoringConfiguration: &shared.S3MonitoringConfiguration{
                        EncryptionKeyArn: sdk.String("repudiandae"),
                        LogURI: sdk.String("quae"),
                    },
                },
            },
            ExecutionRoleArn: "ipsum",
            ExecutionTimeoutMinutes: sdk.Int64(692472),
            JobDriver: &operations.StartJobRunRequestBodyJobDriver{
                Hive: &shared.Hive{
                    InitQueryFile: sdk.String("molestias"),
                    Parameters: sdk.String("excepturi"),
                    Query: "pariatur",
                },
                SparkSubmit: &shared.SparkSubmit{
                    EntryPoint: "modi",
                    EntryPointArguments: []string{
                        "rem",
                        "voluptates",
                        "quasi",
                    },
                    SparkSubmitParameters: sdk.String("repudiandae"),
                },
            },
            Name: sdk.String("Patrick Ward"),
            Tags: map[string]string{
                "est": "quibusdam",
            },
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("qui"),
        ApplicationID: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartJobRunResponse != nil {
        // handle response
    }
}
```

## StopApplication

Stops a specified application and releases initial capacity if configured. All scheduled and running jobs must be completed or cancelled before stopping an application.

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
    res, err := s.SDK.StopApplication(ctx, operations.StopApplicationRequest{
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("alias"),
        ApplicationID: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopApplicationResponse != nil {
        // handle response
    }
}
```

## TagResource

Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your Amazon Web Services resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. 

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
                "excepturi": "tempora",
                "facilis": "tempore",
                "labore": "delectus",
            },
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        ResourceArn: "sint",
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

Removes tags from resources.

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
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("in"),
        ResourceArn: "illum",
        TagKeys: []string{
            "rerum",
            "dicta",
            "magnam",
            "cumque",
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

## UpdateApplication

Updates a specified application. An application has to be in a stopped or created state in order to be updated.

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
    res, err := s.SDK.UpdateApplication(ctx, operations.UpdateApplicationRequest{
        RequestBody: operations.UpdateApplicationRequestBody{
            Architecture: operations.UpdateApplicationRequestBodyArchitectureEnumX8664.ToPointer(),
            AutoStartConfiguration: &operations.UpdateApplicationRequestBodyAutoStartConfiguration{
                Enabled: sdk.Bool(false),
            },
            AutoStopConfiguration: &operations.UpdateApplicationRequestBodyAutoStopConfiguration{
                Enabled: sdk.Bool(false),
                IdleTimeoutMinutes: sdk.Int64(411820),
            },
            ClientToken: "aliquid",
            ImageConfiguration: &operations.UpdateApplicationRequestBodyImageConfiguration{
                ImageURI: sdk.String("laborum"),
            },
            InitialCapacity: map[string]shared.InitialCapacityConfig{
                "non": shared.InitialCapacityConfig{
                    WorkerConfiguration: &shared.WorkerResourceConfig{
                        CPU: "occaecati",
                        Disk: sdk.String("enim"),
                        Memory: "accusamus",
                    },
                    WorkerCount: 965417,
                },
                "quidem": shared.InitialCapacityConfig{
                    WorkerConfiguration: &shared.WorkerResourceConfig{
                        CPU: "provident",
                        Disk: sdk.String("nam"),
                        Memory: "id",
                    },
                    WorkerCount: 501324,
                },
                "deleniti": shared.InitialCapacityConfig{
                    WorkerConfiguration: &shared.WorkerResourceConfig{
                        CPU: "sapiente",
                        Disk: sdk.String("amet"),
                        Memory: "deserunt",
                    },
                    WorkerCount: 394869,
                },
                "vel": shared.InitialCapacityConfig{
                    WorkerConfiguration: &shared.WorkerResourceConfig{
                        CPU: "natus",
                        Disk: sdk.String("omnis"),
                        Memory: "molestiae",
                    },
                    WorkerCount: 19193,
                },
            },
            MaximumCapacity: &operations.UpdateApplicationRequestBodyMaximumCapacity{
                CPU: sdk.String("nihil"),
                Disk: sdk.String("magnam"),
                Memory: sdk.String("distinctio"),
            },
            NetworkConfiguration: &operations.UpdateApplicationRequestBodyNetworkConfiguration{
                SecurityGroupIds: []string{
                    "labore",
                    "labore",
                    "suscipit",
                },
                SubnetIds: []string{
                    "nobis",
                    "eum",
                    "vero",
                },
            },
            WorkerTypeSpecifications: map[string]shared.WorkerTypeSpecificationInput{
                "architecto": shared.WorkerTypeSpecificationInput{
                    ImageConfiguration: &shared.ImageConfigurationInput{
                        ImageURI: sdk.String("magnam"),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        ApplicationID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateApplicationResponse != nil {
        // handle response
    }
}
```
