# SDK

## Overview

Amazon Web Services Mainframe Modernization provides tools and resources to help you plan and implement migration and modernization from mainframes to Amazon Web Services managed runtime environments. It provides tools for analyzing existing mainframe applications, developing or updating mainframe applications using COBOL or PL/I, and implementing an automated pipeline for continuous integration and continuous delivery (CI/CD) of the applications.

Amazon Web Services documentation
<https://docs.aws.amazon.com/m2/>
### Available Operations

* [CancelBatchJobExecution](#cancelbatchjobexecution) - Cancels the running of a specific batch job execution.
* [CreateApplication](#createapplication) - Creates a new application with given parameters. Requires an existing runtime environment and application definition file.
* [CreateDataSetImportTask](#createdatasetimporttask) - Starts a data set import task for a specific application.
* [CreateDeployment](#createdeployment) - Creates and starts a deployment to deploy an application into a runtime environment.
* [CreateEnvironment](#createenvironment) - Creates a runtime environment for a given runtime engine.
* [DeleteApplication](#deleteapplication) - Deletes a specific application. You cannot delete a running application.
* [DeleteApplicationFromEnvironment](#deleteapplicationfromenvironment) - Deletes a specific application from the specific runtime environment where it was previously deployed. You cannot delete a runtime environment using DeleteEnvironment if any application has ever been deployed to it. This API removes the association of the application with the runtime environment so you can delete the environment smoothly.
* [DeleteEnvironment](#deleteenvironment) - Deletes a specific runtime environment. The environment cannot contain deployed applications. If it does, you must delete those applications before you delete the environment.
* [GetApplication](#getapplication) - Describes the details of a specific application.
* [GetApplicationVersion](#getapplicationversion) - Returns details about a specific version of a specific application.
* [GetBatchJobExecution](#getbatchjobexecution) - Gets the details of a specific batch job execution for a specific application.
* [GetDataSetDetails](#getdatasetdetails) - Gets the details of a specific data set.
* [GetDataSetImportTask](#getdatasetimporttask) - Gets the status of a data set import task initiated with the <a>CreateDataSetImportTask</a> operation.
* [GetDeployment](#getdeployment) - Gets details of a specific deployment with a given deployment identifier.
* [GetEnvironment](#getenvironment) - Describes a specific runtime environment.
* [ListApplicationVersions](#listapplicationversions) - Returns a list of the application versions for a specific application.
* [ListApplications](#listapplications) - Lists the applications associated with a specific Amazon Web Services account. You can provide the unique identifier of a specific runtime environment in a query parameter to see all applications associated with that environment.
* [ListBatchJobDefinitions](#listbatchjobdefinitions) - Lists all the available batch job definitions based on the batch job resources uploaded during the application creation. You can use the batch job definitions in the list to start a batch job.
* [ListBatchJobExecutions](#listbatchjobexecutions) - Lists historical, current, and scheduled batch job executions for a specific application.
* [ListDataSetImportHistory](#listdatasetimporthistory) - Lists the data set imports for the specified application.
* [ListDataSets](#listdatasets) - Lists the data sets imported for a specific application. In Amazon Web Services Mainframe Modernization, data sets are associated with applications deployed on runtime environments. This is known as importing data sets. Currently, Amazon Web Services Mainframe Modernization can import data sets into catalogs using <a href="https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateDataSetImportTask.html">CreateDataSetImportTask</a>.
* [ListDeployments](#listdeployments) - Returns a list of all deployments of a specific application. A deployment is a combination of a specific application and a specific version of that application. Each deployment is mapped to a particular application version.
* [ListEngineVersions](#listengineversions) - Lists the available engine versions.
* [ListEnvironments](#listenvironments) - Lists the runtime environments.
* [ListTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [StartApplication](#startapplication) - Starts an application that is currently stopped.
* [StartBatchJob](#startbatchjob) - Starts a batch job and returns the unique identifier of this execution of the batch job. The associated application must be running in order to start the batch job.
* [StopApplication](#stopapplication) - Stops a running application.
* [TagResource](#tagresource) - Adds one or more tags to the specified resource.
* [UntagResource](#untagresource) - Removes one or more tags from the specified resource.
* [UpdateApplication](#updateapplication) - Updates an application and creates a new version.
* [UpdateEnvironment](#updateenvironment) - Updates the configuration details for a specific runtime environment.

## CancelBatchJobExecution

Cancels the running of a specific batch job execution.

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
    res, err := s.SDK.CancelBatchJobExecution(ctx, operations.CancelBatchJobExecutionRequest{
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        ApplicationID: "delectus",
        ExecutionID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelBatchJobExecutionResponse != nil {
        // handle response
    }
}
```

## CreateApplication

Creates a new application with given parameters. Requires an existing runtime environment and application definition file.

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
    res, err := s.SDK.CreateApplication(ctx, operations.CreateApplicationRequest{
        RequestBody: operations.CreateApplicationRequestBody{
            ClientToken: sdk.String("suscipit"),
            Definition: operations.CreateApplicationRequestBodyDefinition{
                Content: sdk.String("molestiae"),
                S3Location: sdk.String("minus"),
            },
            Description: sdk.String("placeat"),
            EngineType: operations.CreateApplicationRequestBodyEngineTypeEnumBluage,
            KmsKeyID: sdk.String("iusto"),
            Name: "Charlie Walsh II",
            Tags: map[string]string{
                "deserunt": "perferendis",
            },
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicationResponse != nil {
        // handle response
    }
}
```

## CreateDataSetImportTask

Starts a data set import task for a specific application.

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
    res, err := s.SDK.CreateDataSetImportTask(ctx, operations.CreateDataSetImportTaskRequest{
        RequestBody: operations.CreateDataSetImportTaskRequestBody{
            ClientToken: sdk.String("maiores"),
            ImportConfig: operations.CreateDataSetImportTaskRequestBodyImportConfig{
                DataSets: []shared.DataSetImportItem{
                    shared.DataSetImportItem{
                        DataSet: shared.DataSet{
                            DatasetName: "quod",
                            DatasetOrg: shared.DatasetOrgAttributes{
                                Gdg: &shared.GdgAttributes{
                                    Limit: sdk.Int64(800911),
                                    RollDisposition: sdk.String("esse"),
                                },
                                Vsam: &shared.VsamAttributes{
                                    AlternateKeys: []shared.AlternateKey{
                                        shared.AlternateKey{
                                            AllowDuplicates: sdk.Bool(false),
                                            Length: 780529,
                                            Name: sdk.String("Samuel Reichel"),
                                            Offset: 143353,
                                        },
                                        shared.AlternateKey{
                                            AllowDuplicates: sdk.Bool(false),
                                            Length: 537373,
                                            Name: sdk.String("Ms. Earnest Lebsack"),
                                            Offset: 264555,
                                        },
                                        shared.AlternateKey{
                                            AllowDuplicates: sdk.Bool(false),
                                            Length: 186332,
                                            Name: sdk.String("Jonathon Klocko"),
                                            Offset: 135218,
                                        },
                                    },
                                    Compressed: sdk.Bool(false),
                                    Encoding: sdk.String("perferendis"),
                                    Format: "ad",
                                    PrimaryKey: &shared.PrimaryKey{
                                        Length: 617636,
                                        Name: sdk.String("Sheryl Fadel"),
                                        Offset: 943749,
                                    },
                                },
                            },
                            RecordLength: shared.RecordLength{
                                Max: 902599,
                                Min: 681820,
                            },
                            RelativePath: sdk.String("in"),
                            StorageType: sdk.String("corporis"),
                        },
                        ExternalLocation: shared.ExternalLocation{
                            S3Location: sdk.String("iste"),
                        },
                    },
                    shared.DataSetImportItem{
                        DataSet: shared.DataSet{
                            DatasetName: "iure",
                            DatasetOrg: shared.DatasetOrgAttributes{
                                Gdg: &shared.GdgAttributes{
                                    Limit: sdk.Int64(902349),
                                    RollDisposition: sdk.String("quidem"),
                                },
                                Vsam: &shared.VsamAttributes{
                                    AlternateKeys: []shared.AlternateKey{
                                        shared.AlternateKey{
                                            AllowDuplicates: sdk.Bool(false),
                                            Length: 60225,
                                            Name: sdk.String("Carlton O'Hara"),
                                            Offset: 210382,
                                        },
                                    },
                                    Compressed: sdk.Bool(false),
                                    Encoding: sdk.String("corporis"),
                                    Format: "explicabo",
                                    PrimaryKey: &shared.PrimaryKey{
                                        Length: 750686,
                                        Name: sdk.String("Guadalupe Hickle"),
                                        Offset: 38425,
                                    },
                                },
                            },
                            RecordLength: shared.RecordLength{
                                Max: 438601,
                                Min: 634274,
                            },
                            RelativePath: sdk.String("doloribus"),
                            StorageType: sdk.String("sapiente"),
                        },
                        ExternalLocation: shared.ExternalLocation{
                            S3Location: sdk.String("architecto"),
                        },
                    },
                },
                S3Location: sdk.String("mollitia"),
            },
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("numquam"),
        ApplicationID: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDataSetImportTaskResponse != nil {
        // handle response
    }
}
```

## CreateDeployment

Creates and starts a deployment to deploy an application into a runtime environment.

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
    res, err := s.SDK.CreateDeployment(ctx, operations.CreateDeploymentRequest{
        RequestBody: operations.CreateDeploymentRequestBody{
            ApplicationVersion: 466311,
            ClientToken: sdk.String("molestiae"),
            EnvironmentID: "velit",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("quia"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("animi"),
        XAmzSignedHeaders: sdk.String("enim"),
        ApplicationID: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeploymentResponse != nil {
        // handle response
    }
}
```

## CreateEnvironment

Creates a runtime environment for a given runtime engine.

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
    res, err := s.SDK.CreateEnvironment(ctx, operations.CreateEnvironmentRequest{
        RequestBody: operations.CreateEnvironmentRequestBody{
            ClientToken: sdk.String("quo"),
            Description: sdk.String("sequi"),
            EngineType: operations.CreateEnvironmentRequestBodyEngineTypeEnumBluage,
            EngineVersion: sdk.String("ipsam"),
            HighAvailabilityConfig: &operations.CreateEnvironmentRequestBodyHighAvailabilityConfig{
                DesiredCapacity: sdk.Int64(662527),
            },
            InstanceType: "possimus",
            KmsKeyID: sdk.String("aut"),
            Name: "Sabrina Smitham DVM",
            PreferredMaintenanceWindow: sdk.String("voluptatibus"),
            PubliclyAccessible: sdk.Bool(false),
            SecurityGroupIds: []string{
                "nihil",
                "praesentium",
                "voluptatibus",
                "ipsa",
            },
            StorageConfigurations: []shared.StorageConfiguration{
                shared.StorageConfiguration{
                    Efs: &shared.EfsStorageConfiguration{
                        FileSystemID: "voluptate",
                        MountPoint: "cum",
                    },
                    Fsx: &shared.FsxStorageConfiguration{
                        FileSystemID: "perferendis",
                        MountPoint: "doloremque",
                    },
                },
                shared.StorageConfiguration{
                    Efs: &shared.EfsStorageConfiguration{
                        FileSystemID: "reprehenderit",
                        MountPoint: "ut",
                    },
                    Fsx: &shared.FsxStorageConfiguration{
                        FileSystemID: "maiores",
                        MountPoint: "dicta",
                    },
                },
                shared.StorageConfiguration{
                    Efs: &shared.EfsStorageConfiguration{
                        FileSystemID: "corporis",
                        MountPoint: "dolore",
                    },
                    Fsx: &shared.FsxStorageConfiguration{
                        FileSystemID: "iusto",
                        MountPoint: "dicta",
                    },
                },
            },
            SubnetIds: []string{
                "enim",
                "accusamus",
                "commodi",
            },
            Tags: map[string]string{
                "quae": "ipsum",
                "quidem": "molestias",
                "excepturi": "pariatur",
                "modi": "praesentium",
            },
        },
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("voluptates"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("itaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEnvironmentResponse != nil {
        // handle response
    }
}
```

## DeleteApplication

Deletes a specific application. You cannot delete a running application.

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
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        ApplicationID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteApplicationResponse != nil {
        // handle response
    }
}
```

## DeleteApplicationFromEnvironment

Deletes a specific application from the specific runtime environment where it was previously deployed. You cannot delete a runtime environment using DeleteEnvironment if any application has ever been deployed to it. This API removes the association of the application with the runtime environment so you can delete the environment smoothly.

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
    res, err := s.SDK.DeleteApplicationFromEnvironment(ctx, operations.DeleteApplicationFromEnvironmentRequest{
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("quos"),
        ApplicationID: "perferendis",
        EnvironmentID: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteApplicationFromEnvironmentResponse != nil {
        // handle response
    }
}
```

## DeleteEnvironment

Deletes a specific runtime environment. The environment cannot contain deployed applications. If it does, you must delete those applications before you delete the environment.

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
    res, err := s.SDK.DeleteEnvironment(ctx, operations.DeleteEnvironmentRequest{
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("tempora"),
        EnvironmentID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEnvironmentResponse != nil {
        // handle response
    }
}
```

## GetApplication

Describes the details of a specific application.

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
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("sint"),
        ApplicationID: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApplicationResponse != nil {
        // handle response
    }
}
```

## GetApplicationVersion

Returns details about a specific version of a specific application.

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
    res, err := s.SDK.GetApplicationVersion(ctx, operations.GetApplicationVersionRequest{
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("a"),
        ApplicationID: "dolorum",
        ApplicationVersion: 447125,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApplicationVersionResponse != nil {
        // handle response
    }
}
```

## GetBatchJobExecution

Gets the details of a specific batch job execution for a specific application.

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
    res, err := s.SDK.GetBatchJobExecution(ctx, operations.GetBatchJobExecutionRequest{
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("cumque"),
        ApplicationID: "facere",
        ExecutionID: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBatchJobExecutionResponse != nil {
        // handle response
    }
}
```

## GetDataSetDetails

Gets the details of a specific data set.

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
    res, err := s.SDK.GetDataSetDetails(ctx, operations.GetDataSetDetailsRequest{
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        ApplicationID: "delectus",
        DataSetName: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDataSetDetailsResponse != nil {
        // handle response
    }
}
```

## GetDataSetImportTask

Gets the status of a data set import task initiated with the <a>CreateDataSetImportTask</a> operation.

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
    res, err := s.SDK.GetDataSetImportTask(ctx, operations.GetDataSetImportTaskRequest{
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("amet"),
        ApplicationID: "deserunt",
        TaskID: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDataSetImportTaskResponse != nil {
        // handle response
    }
}
```

## GetDeployment

Gets details of a specific deployment with a given deployment identifier.

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
    res, err := s.SDK.GetDeployment(ctx, operations.GetDeploymentRequest{
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("magnam"),
        ApplicationID: "distinctio",
        DeploymentID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeploymentResponse != nil {
        // handle response
    }
}
```

## GetEnvironment

Describes a specific runtime environment.

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
    res, err := s.SDK.GetEnvironment(ctx, operations.GetEnvironmentRequest{
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("vero"),
        EnvironmentID: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEnvironmentResponse != nil {
        // handle response
    }
}
```

## ListApplicationVersions

Returns a list of the application versions for a specific application.

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
    res, err := s.SDK.ListApplicationVersions(ctx, operations.ListApplicationVersionsRequest{
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("quos"),
        ApplicationID: "sint",
        MaxResults: sdk.Int64(33625),
        NextToken: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListApplicationVersionsResponse != nil {
        // handle response
    }
}
```

## ListApplications

Lists the applications associated with a specific Amazon Web Services account. You can provide the unique identifier of a specific runtime environment in a query parameter to see all applications associated with that environment.

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
    res, err := s.SDK.ListApplications(ctx, operations.ListApplicationsRequest{
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("odit"),
        EnvironmentID: sdk.String("nemo"),
        MaxResults: sdk.Int64(97260),
        Names: []string{
            "doloribus",
            "debitis",
        },
        NextToken: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListApplicationsResponse != nil {
        // handle response
    }
}
```

## ListBatchJobDefinitions

Lists all the available batch job definitions based on the batch job resources uploaded during the application creation. You can use the batch job definitions in the list to start a batch job.

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
    res, err := s.SDK.ListBatchJobDefinitions(ctx, operations.ListBatchJobDefinitionsRequest{
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        ApplicationID: "ullam",
        MaxResults: sdk.Int64(714242),
        NextToken: sdk.String("nihil"),
        Prefix: sdk.String("repellat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBatchJobDefinitionsResponse != nil {
        // handle response
    }
}
```

## ListBatchJobExecutions

Lists historical, current, and scheduled batch job executions for a specific application.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListBatchJobExecutions(ctx, operations.ListBatchJobExecutionsRequest{
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        ApplicationID: "natus",
        ExecutionIds: []string{
            "sunt",
        },
        JobName: sdk.String("quo"),
        MaxResults: sdk.Int64(848009),
        NextToken: sdk.String("pariatur"),
        StartedAfter: types.MustTimeFromString("2021-10-07T12:29:38.109Z"),
        StartedBefore: types.MustTimeFromString("2022-09-20T19:40:48.375Z"),
        Status: operations.ListBatchJobExecutionsStatusEnumRunning.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBatchJobExecutionsResponse != nil {
        // handle response
    }
}
```

## ListDataSetImportHistory

Lists the data set imports for the specified application.

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
    res, err := s.SDK.ListDataSetImportHistory(ctx, operations.ListDataSetImportHistoryRequest{
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("autem"),
        ApplicationID: "nam",
        MaxResults: sdk.Int64(50588),
        NextToken: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDataSetImportHistoryResponse != nil {
        // handle response
    }
}
```

## ListDataSets

Lists the data sets imported for a specific application. In Amazon Web Services Mainframe Modernization, data sets are associated with applications deployed on runtime environments. This is known as importing data sets. Currently, Amazon Web Services Mainframe Modernization can import data sets into catalogs using <a href="https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateDataSetImportTask.html">CreateDataSetImportTask</a>.

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
    res, err := s.SDK.ListDataSets(ctx, operations.ListDataSetsRequest{
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("cumque"),
        ApplicationID: "corporis",
        MaxResults: sdk.Int64(944124),
        NextToken: sdk.String("libero"),
        Prefix: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDataSetsResponse != nil {
        // handle response
    }
}
```

## ListDeployments

Returns a list of all deployments of a specific application. A deployment is a combination of a specific application and a specific version of that application. Each deployment is mapped to a particular application version.

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
    res, err := s.SDK.ListDeployments(ctx, operations.ListDeploymentsRequest{
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
        ApplicationID: "eos",
        MaxResults: sdk.Int64(18521),
        NextToken: sdk.String("dolores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeploymentsResponse != nil {
        // handle response
    }
}
```

## ListEngineVersions

Lists the available engine versions.

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
    res, err := s.SDK.ListEngineVersions(ctx, operations.ListEngineVersionsRequest{
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        EngineType: operations.ListEngineVersionsEngineTypeEnumBluage.ToPointer(),
        MaxResults: sdk.Int64(704415),
        NextToken: sdk.String("perspiciatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEngineVersionsResponse != nil {
        // handle response
    }
}
```

## ListEnvironments

Lists the runtime environments.

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
    res, err := s.SDK.ListEnvironments(ctx, operations.ListEnvironmentsRequest{
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        EngineType: operations.ListEnvironmentsEngineTypeEnumBluage.ToPointer(),
        MaxResults: sdk.Int64(237893),
        Names: []string{
            "earum",
            "modi",
            "iste",
            "dolorum",
        },
        NextToken: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEnvironmentsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags for the specified resource.

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
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("quos"),
        ResourceArn: "aliquid",
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

Starts an application that is currently stopped.

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
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        ApplicationID: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartApplicationResponse != nil {
        // handle response
    }
}
```

## StartBatchJob

Starts a batch job and returns the unique identifier of this execution of the batch job. The associated application must be running in order to start the batch job.

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
    res, err := s.SDK.StartBatchJob(ctx, operations.StartBatchJobRequest{
        RequestBody: operations.StartBatchJobRequestBody{
            BatchJobIdentifier: operations.StartBatchJobRequestBodyBatchJobIdentifier{
                FileBatchJobIdentifier: &shared.FileBatchJobIdentifier{
                    FileName: "voluptate",
                    FolderPath: sdk.String("dignissimos"),
                },
                ScriptBatchJobIdentifier: &shared.ScriptBatchJobIdentifier{
                    ScriptName: "reiciendis",
                },
            },
            JobParams: map[string]string{
                "dolorum": "numquam",
            },
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        ApplicationID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartBatchJobResponse != nil {
        // handle response
    }
}
```

## StopApplication

Stops a running application.

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
        RequestBody: operations.StopApplicationRequestBody{
            ForceStop: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        ApplicationID: "ab",
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

Adds one or more tags to the specified resource.

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
                "dolorum": "iusto",
                "voluptate": "dolorum",
                "deleniti": "omnis",
            },
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("id"),
        ResourceArn: "saepe",
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

Removes one or more tags from the specified resource.

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
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("ad"),
        ResourceArn: "saepe",
        TagKeys: []string{
            "deserunt",
            "provident",
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

Updates an application and creates a new version.

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
    res, err := s.SDK.UpdateApplication(ctx, operations.UpdateApplicationRequest{
        RequestBody: operations.UpdateApplicationRequestBody{
            CurrentApplicationVersion: 324683,
            Definition: &operations.UpdateApplicationRequestBodyDefinition{
                Content: sdk.String("repellendus"),
                S3Location: sdk.String("totam"),
            },
            Description: sdk.String("similique"),
        },
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("officiis"),
        ApplicationID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateApplicationResponse != nil {
        // handle response
    }
}
```

## UpdateEnvironment

Updates the configuration details for a specific runtime environment.

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
    res, err := s.SDK.UpdateEnvironment(ctx, operations.UpdateEnvironmentRequest{
        RequestBody: operations.UpdateEnvironmentRequestBody{
            ApplyDuringMaintenanceWindow: sdk.Bool(false),
            DesiredCapacity: sdk.Int64(679880),
            EngineVersion: sdk.String("a"),
            InstanceType: sdk.String("esse"),
            PreferredMaintenanceWindow: sdk.String("harum"),
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        EnvironmentID: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEnvironmentResponse != nil {
        // handle response
    }
}
```
