# SDK

## Overview

<p>Amazon EMR on EKS provides a deployment option for Amazon EMR that allows you to run open-source big data frameworks on Amazon Elastic Kubernetes Service (Amazon EKS). With this deployment option, you can focus on running analytics workloads while Amazon EMR on EKS builds, configures, and manages containers for open-source applications. For more information about Amazon EMR on EKS concepts and tasks, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/emr-eks.html">What is shared id="EMR-EKS"/&gt;</a>.</p> <p> <i>Amazon EMR containers</i> is the API name for Amazon EMR on EKS. The <code>emr-containers</code> prefix is used in the following scenarios: </p> <ul> <li> <p>It is the prefix in the CLI commands for Amazon EMR on EKS. For example, <code>aws emr-containers start-job-run</code>.</p> </li> <li> <p>It is the prefix before IAM policy actions for Amazon EMR on EKS. For example, <code>"Action": [ "emr-containers:StartJobRun"]</code>. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-actions">Policy actions for Amazon EMR on EKS</a>.</p> </li> <li> <p>It is the prefix used in Amazon EMR on EKS service endpoints. For example, <code>emr-containers.us-east-2.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/service-quotas.html#service-endpoints">Amazon EMR on EKSService Endpoints</a>.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/emr-containers/>
### Available Operations

* [CancelJobRun](#canceljobrun) - Cancels a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
* [CreateJobTemplate](#createjobtemplate) - Creates a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
* [CreateManagedEndpoint](#createmanagedendpoint) - Creates a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
* [CreateVirtualCluster](#createvirtualcluster) - Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
* [DeleteJobTemplate](#deletejobtemplate) - Deletes a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
* [DeleteManagedEndpoint](#deletemanagedendpoint) - Deletes a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
* [DeleteVirtualCluster](#deletevirtualcluster) - Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
* [DescribeJobRun](#describejobrun) - Displays detailed information about a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
* [DescribeJobTemplate](#describejobtemplate) - Displays detailed information about a specified job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
* [DescribeManagedEndpoint](#describemanagedendpoint) - Displays detailed information about a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
* [DescribeVirtualCluster](#describevirtualcluster) - Displays detailed information about a specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
* [ListJobRuns](#listjobruns) - Lists job runs based on a set of parameters. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
* [ListJobTemplates](#listjobtemplates) - Lists job templates based on a set of parameters. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
* [ListManagedEndpoints](#listmanagedendpoints) - Lists managed endpoints based on a set of parameters. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
* [ListTagsForResource](#listtagsforresource) - Lists the tags assigned to the resources.
* [ListVirtualClusters](#listvirtualclusters) - Lists information about the specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
* [StartJobRun](#startjobrun) - Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
* [TagResource](#tagresource) - Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your Amazon Web Services resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. For example, you can define a set of tags for your Amazon EMR on EKS clusters to help you track each cluster's owner and stack level. We recommend that you devise a consistent set of tag keys for each resource type. You can then search and filter the resources based on the tags that you add.
* [UntagResource](#untagresource) - Removes tags from resources.

## CancelJobRun

Cancels a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.

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
        JobRunID: "delectus",
        VirtualClusterID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelJobRunResponse != nil {
        // handle response
    }
}
```

## CreateJobTemplate

Creates a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.

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
    res, err := s.SDK.CreateJobTemplate(ctx, operations.CreateJobTemplateRequest{
        RequestBody: operations.CreateJobTemplateRequestBody{
            ClientToken: "suscipit",
            JobTemplateData: operations.CreateJobTemplateRequestBodyJobTemplateData{
                ConfigurationOverrides: &shared.ParametricConfigurationOverrides{
                    ApplicationConfiguration: []shared.Configuration{
                        shared.Configuration{
                            Classification: "minus",
                            Configurations: []shared.Configuration{
                                shared.Configuration{},
                                shared.Configuration{},
                                shared.Configuration{},
                                shared.Configuration{},
                            },
                            Properties: sdk.String("voluptatum"),
                        },
                        shared.Configuration{
                            Classification: "iusto",
                            Configurations: []shared.Configuration{
                                shared.Configuration{},
                                shared.Configuration{},
                                shared.Configuration{},
                            },
                            Properties: sdk.String("nisi"),
                        },
                    },
                    MonitoringConfiguration: &shared.ParametricMonitoringConfiguration{
                        CloudWatchMonitoringConfiguration: &shared.ParametricCloudWatchMonitoringConfiguration{
                            LogGroupName: sdk.String("recusandae"),
                            LogStreamNamePrefix: sdk.String("temporibus"),
                        },
                        PersistentAppUI: sdk.String("ab"),
                        S3MonitoringConfiguration: &shared.ParametricS3MonitoringConfiguration{
                            LogURI: sdk.String("quis"),
                        },
                    },
                },
                ExecutionRoleArn: sdk.String("veritatis"),
                JobDriver: &shared.JobDriver{
                    SparkSQLJobDriver: &shared.SparkSQLJobDriver{
                        EntryPoint: sdk.String("deserunt"),
                        SparkSQLParameters: sdk.String("perferendis"),
                    },
                    SparkSubmitJobDriver: &shared.SparkSubmitJobDriver{
                        EntryPoint: "ipsam",
                        EntryPointArguments: []string{
                            "sapiente",
                            "quo",
                            "odit",
                            "at",
                        },
                        SparkSubmitParameters: sdk.String("at"),
                    },
                },
                JobTags: map[string]string{
                    "molestiae": "quod",
                    "quod": "esse",
                    "totam": "porro",
                    "dolorum": "dicta",
                },
                ParameterConfiguration: map[string]shared.TemplateParameterConfiguration{
                    "officia": shared.TemplateParameterConfiguration{
                        DefaultValue: sdk.String("occaecati"),
                        Type: shared.TemplateParameterDataTypeEnumNumber.ToPointer(),
                    },
                    "deleniti": shared.TemplateParameterConfiguration{
                        DefaultValue: sdk.String("hic"),
                        Type: shared.TemplateParameterDataTypeEnumString.ToPointer(),
                    },
                    "totam": shared.TemplateParameterConfiguration{
                        DefaultValue: sdk.String("beatae"),
                        Type: shared.TemplateParameterDataTypeEnumNumber.ToPointer(),
                    },
                },
                ReleaseLabel: sdk.String("molestiae"),
            },
            KmsKeyArn: sdk.String("modi"),
            Name: "Krista Rippin",
            Tags: map[string]string{
                "aspernatur": "perferendis",
                "ad": "natus",
                "sed": "iste",
            },
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateJobTemplateResponse != nil {
        // handle response
    }
}
```

## CreateManagedEndpoint

Creates a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.

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
    res, err := s.SDK.CreateManagedEndpoint(ctx, operations.CreateManagedEndpointRequest{
        RequestBody: operations.CreateManagedEndpointRequestBody{
            CertificateArn: sdk.String("corporis"),
            ClientToken: "iste",
            ConfigurationOverrides: &operations.CreateManagedEndpointRequestBodyConfigurationOverrides{
                ApplicationConfiguration: []shared.Configuration{
                    shared.Configuration{
                        Classification: "saepe",
                        Configurations: []shared.Configuration{
                            shared.Configuration{},
                            shared.Configuration{},
                            shared.Configuration{},
                        },
                        Properties: sdk.String("architecto"),
                    },
                    shared.Configuration{
                        Classification: "ipsa",
                        Configurations: []shared.Configuration{
                            shared.Configuration{},
                            shared.Configuration{},
                            shared.Configuration{},
                            shared.Configuration{},
                        },
                        Properties: sdk.String("est"),
                    },
                },
                MonitoringConfiguration: &shared.MonitoringConfiguration{
                    CloudWatchMonitoringConfiguration: &shared.CloudWatchMonitoringConfiguration{
                        LogGroupName: "mollitia",
                        LogStreamNamePrefix: sdk.String("laborum"),
                    },
                    PersistentAppUI: shared.PersistentAppUIEnumEnabled.ToPointer(),
                    S3MonitoringConfiguration: &shared.S3MonitoringConfiguration{
                        LogURI: "dolorem",
                    },
                },
            },
            ExecutionRoleArn: "corporis",
            Name: "Della Halvorson",
            ReleaseLabel: "minima",
            Tags: map[string]string{
                "accusantium": "iure",
                "culpa": "doloribus",
                "sapiente": "architecto",
            },
            Type: "mollitia",
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("numquam"),
        VirtualClusterID: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateManagedEndpointResponse != nil {
        // handle response
    }
}
```

## CreateVirtualCluster

Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.

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
    res, err := s.SDK.CreateVirtualCluster(ctx, operations.CreateVirtualClusterRequest{
        RequestBody: operations.CreateVirtualClusterRequestBody{
            ClientToken: "quam",
            ContainerProvider: operations.CreateVirtualClusterRequestBodyContainerProvider{
                ID: sdk.String("739251aa-52c3-4f5a-9019-da1ffe78f097"),
                Info: &shared.ContainerInfo{
                    EksInfo: &shared.EksInfo{
                        Namespace: sdk.String("cum"),
                    },
                },
                Type: shared.ContainerProviderTypeEnumEks.ToPointer(),
            },
            Name: "Sharon Kiehn",
            Tags: map[string]string{
                "corporis": "dolore",
            },
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateVirtualClusterResponse != nil {
        // handle response
    }
}
```

## DeleteJobTemplate

Deletes a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.

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
    res, err := s.SDK.DeleteJobTemplate(ctx, operations.DeleteJobTemplateRequest{
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("modi"),
        TemplateID: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteJobTemplateResponse != nil {
        // handle response
    }
}
```

## DeleteManagedEndpoint

Deletes a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.

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
    res, err := s.SDK.DeleteManagedEndpoint(ctx, operations.DeleteManagedEndpointRequest{
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("voluptates"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("itaque"),
        EndpointID: "incidunt",
        VirtualClusterID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteManagedEndpointResponse != nil {
        // handle response
    }
}
```

## DeleteVirtualCluster

Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.

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
    res, err := s.SDK.DeleteVirtualCluster(ctx, operations.DeleteVirtualClusterRequest{
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        VirtualClusterID: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteVirtualClusterResponse != nil {
        // handle response
    }
}
```

## DescribeJobRun

Displays detailed information about a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.

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
    res, err := s.SDK.DescribeJobRun(ctx, operations.DescribeJobRunRequest{
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("magni"),
        JobRunID: "assumenda",
        VirtualClusterID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeJobRunResponse != nil {
        // handle response
    }
}
```

## DescribeJobTemplate

Displays detailed information about a specified job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.

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
    res, err := s.SDK.DescribeJobTemplate(ctx, operations.DescribeJobTemplateRequest{
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("tempore"),
        TemplateID: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeJobTemplateResponse != nil {
        // handle response
    }
}
```

## DescribeManagedEndpoint

Displays detailed information about a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.

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
    res, err := s.SDK.DescribeManagedEndpoint(ctx, operations.DescribeManagedEndpointRequest{
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("eligendi"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("provident"),
        EndpointID: "necessitatibus",
        VirtualClusterID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeManagedEndpointResponse != nil {
        // handle response
    }
}
```

## DescribeVirtualCluster

Displays detailed information about a specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.

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
    res, err := s.SDK.DescribeVirtualCluster(ctx, operations.DescribeVirtualClusterRequest{
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("in"),
        VirtualClusterID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeVirtualClusterResponse != nil {
        // handle response
    }
}
```

## ListJobRuns

Lists job runs based on a set of parameters. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.

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
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("ea"),
        CreatedAfter: types.MustTimeFromString("2022-04-29T11:09:12.937Z"),
        CreatedBefore: types.MustTimeFromString("2022-04-02T11:21:13.260Z"),
        MaxResults: sdk.Int64(581273),
        Name: sdk.String("Sophia Wintheiser"),
        NextToken: sdk.String("nam"),
        States: []shared.JobRunStateEnum{
            shared.JobRunStateEnumFailed,
            shared.JobRunStateEnumFailed,
            shared.JobRunStateEnumCompleted,
        },
        VirtualClusterID: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobRunsResponse != nil {
        // handle response
    }
}
```

## ListJobTemplates

Lists job templates based on a set of parameters. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.

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
    res, err := s.SDK.ListJobTemplates(ctx, operations.ListJobTemplatesRequest{
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        CreatedAfter: types.MustTimeFromString("2022-09-12T22:12:15.897Z"),
        CreatedBefore: types.MustTimeFromString("2021-09-06T01:45:34.248Z"),
        MaxResults: sdk.Int64(287991),
        NextToken: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobTemplatesResponse != nil {
        // handle response
    }
}
```

## ListManagedEndpoints

Lists managed endpoints based on a set of parameters. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.

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
    res, err := s.SDK.ListManagedEndpoints(ctx, operations.ListManagedEndpointsRequest{
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("architecto"),
        CreatedAfter: types.MustTimeFromString("2022-11-28T06:48:16.205Z"),
        CreatedBefore: types.MustTimeFromString("2022-04-17T13:06:08.135Z"),
        MaxResults: sdk.Int64(590873),
        NextToken: sdk.String("quos"),
        States: []shared.EndpointStateEnum{
            shared.EndpointStateEnumCreating,
            shared.EndpointStateEnumTerminated,
            shared.EndpointStateEnumTerminatedWithErrors,
        },
        Types: []string{
            "ad",
            "eum",
            "dolor",
        },
        VirtualClusterID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListManagedEndpointsResponse != nil {
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
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("eius"),
        ResourceArn: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListVirtualClusters

Lists information about the specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.

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
    res, err := s.SDK.ListVirtualClusters(ctx, operations.ListVirtualClustersRequest{
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("ullam"),
        ContainerProviderID: sdk.String("expedita"),
        ContainerProviderType: operations.ListVirtualClustersContainerProviderTypeEnumEks.ToPointer(),
        CreatedAfter: types.MustTimeFromString("2022-01-01T10:06:00.916Z"),
        CreatedBefore: types.MustTimeFromString("2022-07-21T08:29:53.942Z"),
        MaxResults: sdk.Int64(904648),
        NextToken: sdk.String("pariatur"),
        States: []shared.VirtualClusterStateEnum{
            shared.VirtualClusterStateEnumRunning,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVirtualClustersResponse != nil {
        // handle response
    }
}
```

## StartJobRun

Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.

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
            ClientToken: "praesentium",
            ConfigurationOverrides: &operations.StartJobRunRequestBodyConfigurationOverrides{
                ApplicationConfiguration: []shared.Configuration{
                    shared.Configuration{
                        Classification: "magni",
                        Configurations: []shared.Configuration{
                            shared.Configuration{},
                        },
                        Properties: sdk.String("quo"),
                    },
                    shared.Configuration{
                        Classification: "illum",
                        Configurations: []shared.Configuration{
                            shared.Configuration{},
                            shared.Configuration{},
                            shared.Configuration{},
                            shared.Configuration{},
                        },
                        Properties: sdk.String("maxime"),
                    },
                    shared.Configuration{
                        Classification: "ea",
                        Configurations: []shared.Configuration{
                            shared.Configuration{},
                            shared.Configuration{},
                            shared.Configuration{},
                        },
                        Properties: sdk.String("odit"),
                    },
                },
                MonitoringConfiguration: &shared.MonitoringConfiguration{
                    CloudWatchMonitoringConfiguration: &shared.CloudWatchMonitoringConfiguration{
                        LogGroupName: "ea",
                        LogStreamNamePrefix: sdk.String("accusantium"),
                    },
                    PersistentAppUI: shared.PersistentAppUIEnumEnabled.ToPointer(),
                    S3MonitoringConfiguration: &shared.S3MonitoringConfiguration{
                        LogURI: "maiores",
                    },
                },
            },
            ExecutionRoleArn: sdk.String("quidem"),
            JobDriver: &operations.StartJobRunRequestBodyJobDriver{
                SparkSQLJobDriver: &shared.SparkSQLJobDriver{
                    EntryPoint: sdk.String("ipsam"),
                    SparkSQLParameters: sdk.String("voluptate"),
                },
                SparkSubmitJobDriver: &shared.SparkSubmitJobDriver{
                    EntryPoint: "autem",
                    EntryPointArguments: []string{
                        "eaque",
                        "pariatur",
                        "nemo",
                    },
                    SparkSubmitParameters: sdk.String("voluptatibus"),
                },
            },
            JobTemplateID: sdk.String("perferendis"),
            JobTemplateParameters: map[string]string{
                "amet": "aut",
                "cumque": "corporis",
                "hic": "libero",
                "nobis": "dolores",
            },
            Name: sdk.String("Mrs. Deanna Kuhn"),
            ReleaseLabel: sdk.String("eos"),
            RetryPolicyConfiguration: &operations.StartJobRunRequestBodyRetryPolicyConfiguration{
                MaxAttempts: sdk.Int64(18521),
            },
            Tags: map[string]string{
                "minus": "quam",
            },
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("facilis"),
        VirtualClusterID: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartJobRunResponse != nil {
        // handle response
    }
}
```

## TagResource

Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your Amazon Web Services resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. For example, you can define a set of tags for your Amazon EMR on EKS clusters to help you track each cluster's owner and stack level. We recommend that you devise a consistent set of tag keys for each resource type. You can then search and filter the resources based on the tags that you add.

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
                "porro": "consequuntur",
            },
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        ResourceArn: "earum",
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
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("nobis"),
        ResourceArn: "libero",
        TagKeys: []string{
            "quaerat",
            "quos",
            "aliquid",
            "dolorem",
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
