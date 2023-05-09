# SDK

## Overview

<p><fullname>Amazon Managed Workflows for Apache Airflow</fullname> <p>This section contains the Amazon Managed Workflows for Apache Airflow (MWAA) API reference documentation. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html">What Is Amazon MWAA?</a>.</p> <p> <b>Endpoints</b> </p> <ul> <li> <p> <code>api.airflow.{region}.amazonaws.com</code> - This endpoint is used for environment management.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_CreateEnvironment.html">CreateEnvironment</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_DeleteEnvironment.html">DeleteEnvironment</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_GetEnvironment.html">GetEnvironment</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_ListEnvironments.html">ListEnvironments</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_ListTagsForResource.html">ListTagsForResource</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_TagResource.html">TagResource</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_UntagResource.html">UntagResource</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_UpdateEnvironment.html">UpdateEnvironment</a> </p> </li> </ul> </li> <li> <p> <code>env.airflow.{region}.amazonaws.com</code> - This endpoint is used to operate the Airflow environment.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_CreateCliToken.html ">CreateCliToken</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_CreateWebLoginToken.html">CreateWebLoginToken</a> </p> </li> </ul> </li> <li> <p> <code>ops.airflow.{region}.amazonaws.com</code> - This endpoint is used to push environment metrics that track environment health.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_PublishMetrics.html ">PublishMetrics</a> </p> </li> </ul> </li> </ul> <p> <b>Regions</b> </p> <p>For a list of regions that Amazon MWAA supports, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html#regions-mwaa">Region availability</a> in the <i>Amazon MWAA User Guide</i>.</p></p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/airflow/>
### Available Operations

* [CreateCliToken](#createclitoken) - Creates a CLI token for the Airflow CLI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-cli.html">Creating an Apache Airflow CLI token</a>.
* [CreateEnvironment](#createenvironment) - Creates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
* [CreateWebLoginToken](#createweblogintoken) - Creates a web login token for the Airflow Web UI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-web.html">Creating an Apache Airflow web login token</a>.
* [DeleteEnvironment](#deleteenvironment) - Deletes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
* [GetEnvironment](#getenvironment) - Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
* [ListEnvironments](#listenvironments) - Lists the Amazon Managed Workflows for Apache Airflow (MWAA) environments.
* [ListTagsForResource](#listtagsforresource) - Lists the key-value tag pairs associated to the Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>. 
* [PublishMetrics](#publishmetrics) -  <b>Internal only</b>. Publishes environment health metrics to Amazon CloudWatch.
* [TagResource](#tagresource) - Associates key-value tag pairs to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. 
* [UntagResource](#untagresource) - Removes key-value tag pairs associated to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>.
* [UpdateEnvironment](#updateenvironment) - Updates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.

## CreateCliToken

Creates a CLI token for the Airflow CLI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-cli.html">Creating an Apache Airflow CLI token</a>.

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
    res, err := s.SDK.CreateCliToken(ctx, operations.CreateCliTokenRequest{
        Name: "Dr. Valerie Toy",
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCliTokenResponse != nil {
        // handle response
    }
}
```

## CreateEnvironment

Creates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.

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
        Name: "Mrs. Sophie Smith MD",
        RequestBody: operations.CreateEnvironmentRequestBody{
            AirflowConfigurationOptions: map[string]string{
                "ipsam": "repellendus",
            },
            AirflowVersion: sdk.String("sapiente"),
            DagS3Path: "quo",
            EnvironmentClass: sdk.String("odit"),
            ExecutionRoleArn: "at",
            KmsKey: sdk.String("at"),
            LoggingConfiguration: &operations.CreateEnvironmentRequestBodyLoggingConfiguration{
                DagProcessingLogs: &shared.ModuleLoggingConfigurationInput{
                    Enabled: false,
                    LogLevel: shared.LoggingLevelEnumDebug,
                },
                SchedulerLogs: &shared.ModuleLoggingConfigurationInput{
                    Enabled: false,
                    LogLevel: shared.LoggingLevelEnumWarning,
                },
                TaskLogs: &shared.ModuleLoggingConfigurationInput{
                    Enabled: false,
                    LogLevel: shared.LoggingLevelEnumInfo,
                },
                WebserverLogs: &shared.ModuleLoggingConfigurationInput{
                    Enabled: false,
                    LogLevel: shared.LoggingLevelEnumDebug,
                },
                WorkerLogs: &shared.ModuleLoggingConfigurationInput{
                    Enabled: false,
                    LogLevel: shared.LoggingLevelEnumWarning,
                },
            },
            MaxWorkers: sdk.Int64(520478),
            MinWorkers: sdk.Int64(780529),
            NetworkConfiguration: operations.CreateEnvironmentRequestBodyNetworkConfiguration{
                SecurityGroupIds: []string{
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
            PluginsS3ObjectVersion: sdk.String("optio"),
            PluginsS3Path: sdk.String("totam"),
            RequirementsS3ObjectVersion: sdk.String("beatae"),
            RequirementsS3Path: sdk.String("commodi"),
            Schedulers: sdk.Int64(473600),
            SourceBucketArn: "modi",
            StartupScriptS3ObjectVersion: sdk.String("qui"),
            StartupScriptS3Path: sdk.String("impedit"),
            Tags: map[string]string{
                "esse": "ipsum",
                "excepturi": "aspernatur",
                "perferendis": "ad",
            },
            WebserverAccessMode: operations.CreateEnvironmentRequestBodyWebserverAccessModeEnumPublicOnly.ToPointer(),
            WeeklyMaintenanceWindowStart: sdk.String("sed"),
        },
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEnvironmentOutput != nil {
        // handle response
    }
}
```

## CreateWebLoginToken

Creates a web login token for the Airflow Web UI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-web.html">Creating an Apache Airflow web login token</a>.

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
    res, err := s.SDK.CreateWebLoginToken(ctx, operations.CreateWebLoginTokenRequest{
        Name: "Stacy Moore",
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWebLoginTokenResponse != nil {
        // handle response
    }
}
```

## DeleteEnvironment

Deletes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.

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
        Name: "Connie Herzog",
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEnvironmentOutput != nil {
        // handle response
    }
}
```

## GetEnvironment

Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.

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
        Name: "Miss Aubrey Williamson",
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEnvironmentOutput != nil {
        // handle response
    }
}
```

## ListEnvironments

Lists the Amazon Managed Workflows for Apache Airflow (MWAA) environments.

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
        MaxResults: sdk.Int64(466311),
        NextToken: sdk.String("molestiae"),
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("vitae"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("animi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEnvironmentsOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the key-value tag pairs associated to the Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>. 

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
        ResourceArn: "enim",
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("possimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceOutput != nil {
        // handle response
    }
}
```

## PublishMetrics

 <b>Internal only</b>. Publishes environment health metrics to Amazon CloudWatch.

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
    res, err := s.SDK.PublishMetrics(ctx, operations.PublishMetricsRequest{
        EnvironmentName: "aut",
        RequestBody: operations.PublishMetricsRequestBody{
            MetricData: []shared.MetricDatum{
                shared.MetricDatum{
                    Dimensions: []shared.Dimension{
                        shared.Dimension{
                            Name: "Neal Boyer",
                            Value: "vero",
                        },
                        shared.Dimension{
                            Name: "Miss Irma Wolff",
                            Value: "cum",
                        },
                        shared.Dimension{
                            Name: "Sharon Kiehn",
                            Value: "dicta",
                        },
                    },
                    MetricName: "corporis",
                    StatisticValues: &shared.StatisticSet{
                        Maximum: sdk.Float64(2961.4),
                        Minimum: sdk.Float64(4808.94),
                        SampleCount: sdk.Int64(118727),
                        Sum: sdk.Float64(6886.61),
                    },
                    Timestamp: types.MustTimeFromString("2022-02-13T15:01:52.114Z"),
                    Unit: shared.UnitEnumGigabits.ToPointer(),
                    Value: sdk.Float64(9182.36),
                },
            },
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublishMetricsOutput != nil {
        // handle response
    }
}
```

## TagResource

Associates key-value tag pairs to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. 

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
                "rem": "voluptates",
                "quasi": "repudiandae",
                "sint": "veritatis",
            },
        },
        ResourceArn: "itaque",
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceOutput != nil {
        // handle response
    }
}
```

## UntagResource

Removes key-value tag pairs associated to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>.

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
        ResourceArn: "distinctio",
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("quos"),
        TagKeys: []string{
            "magni",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceOutput != nil {
        // handle response
    }
}
```

## UpdateEnvironment

Updates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.

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
    res, err := s.SDK.UpdateEnvironment(ctx, operations.UpdateEnvironmentRequest{
        Name: "Vernon Abshire",
        RequestBody: operations.UpdateEnvironmentRequestBody{
            AirflowConfigurationOptions: map[string]string{
                "tempora": "facilis",
                "tempore": "labore",
                "delectus": "eum",
            },
            AirflowVersion: sdk.String("non"),
            DagS3Path: sdk.String("eligendi"),
            EnvironmentClass: sdk.String("sint"),
            ExecutionRoleArn: sdk.String("aliquid"),
            LoggingConfiguration: &operations.UpdateEnvironmentRequestBodyLoggingConfiguration{
                DagProcessingLogs: &shared.ModuleLoggingConfigurationInput{
                    Enabled: false,
                    LogLevel: shared.LoggingLevelEnumWarning,
                },
                SchedulerLogs: &shared.ModuleLoggingConfigurationInput{
                    Enabled: false,
                    LogLevel: shared.LoggingLevelEnumDebug,
                },
                TaskLogs: &shared.ModuleLoggingConfigurationInput{
                    Enabled: false,
                    LogLevel: shared.LoggingLevelEnumWarning,
                },
                WebserverLogs: &shared.ModuleLoggingConfigurationInput{
                    Enabled: false,
                    LogLevel: shared.LoggingLevelEnumInfo,
                },
                WorkerLogs: &shared.ModuleLoggingConfigurationInput{
                    Enabled: false,
                    LogLevel: shared.LoggingLevelEnumError,
                },
            },
            MaxWorkers: sdk.Int64(891555),
            MinWorkers: sdk.Int64(952749),
            NetworkConfiguration: &operations.UpdateEnvironmentRequestBodyNetworkConfiguration{
                SecurityGroupIds: []string{
                    "in",
                    "in",
                    "illum",
                },
            },
            PluginsS3ObjectVersion: sdk.String("maiores"),
            PluginsS3Path: sdk.String("rerum"),
            RequirementsS3ObjectVersion: sdk.String("dicta"),
            RequirementsS3Path: sdk.String("magnam"),
            Schedulers: sdk.Int64(767024),
            SourceBucketArn: sdk.String("facere"),
            StartupScriptS3ObjectVersion: sdk.String("ea"),
            StartupScriptS3Path: sdk.String("aliquid"),
            WebserverAccessMode: operations.UpdateEnvironmentRequestBodyWebserverAccessModeEnumPublicOnly.ToPointer(),
            WeeklyMaintenanceWindowStart: sdk.String("accusamus"),
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEnvironmentOutput != nil {
        // handle response
    }
}
```
