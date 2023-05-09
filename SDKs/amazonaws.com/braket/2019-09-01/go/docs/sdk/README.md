# SDK

## Overview

<p>The Amazon Braket API Reference provides information about the operations and structures supported in Amazon Braket.</p> <p>Additional Resources:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/braket/latest/developerguide/what-is-braket.html">Amazon Braket Developer Guide</a> </p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/braket/>
### Available Operations

* [CancelJob](#canceljob) - Cancels an Amazon Braket job.
* [CancelQuantumTask](#cancelquantumtask) - Cancels the specified task.
* [CreateJob](#createjob) - Creates an Amazon Braket job.
* [CreateQuantumTask](#createquantumtask) - Creates a quantum task.
* [GetDevice](#getdevice) - <p>Retrieves the devices available in Amazon Braket.</p> <note> <p>For backwards compatibility with older versions of BraketSchemas, OpenQASM information is omitted from GetDevice API calls. To get this information the user-agent needs to present a recent version of the BraketSchemas (1.8.0 or later). The Braket SDK automatically reports this for you. If you do not see OpenQASM results in the GetDevice response when using a Braket SDK, you may need to set AWS_EXECUTION_ENV environment variable to configure user-agent. See the code examples provided below for how to do this for the AWS CLI, Boto3, and the Go, Java, and JavaScript/TypeScript SDKs.</p> </note>
* [GetJob](#getjob) - Retrieves the specified Amazon Braket job.
* [GetQuantumTask](#getquantumtask) - Retrieves the specified quantum task.
* [ListTagsForResource](#listtagsforresource) - Shows the tags associated with this resource.
* [SearchDevices](#searchdevices) - Searches for devices using the specified filters.
* [SearchJobs](#searchjobs) - Searches for Amazon Braket jobs that match the specified filter values.
* [SearchQuantumTasks](#searchquantumtasks) - Searches for tasks that match the specified filter values.
* [TagResource](#tagresource) - Add a tag to the specified resource.
* [UntagResource](#untagresource) - Remove tags from a resource.

## CancelJob

Cancels an Amazon Braket job.

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
    res, err := s.SDK.CancelJob(ctx, operations.CancelJobRequest{
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("debitis"),
        JobArn: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelJobResponse != nil {
        // handle response
    }
}
```

## CancelQuantumTask

Cancels the specified task.

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
    res, err := s.SDK.CancelQuantumTask(ctx, operations.CancelQuantumTaskRequest{
        RequestBody: operations.CancelQuantumTaskRequestBody{
            ClientToken: "delectus",
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("iusto"),
        QuantumTaskArn: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelQuantumTaskResponse != nil {
        // handle response
    }
}
```

## CreateJob

Creates an Amazon Braket job.

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
    res, err := s.SDK.CreateJob(ctx, operations.CreateJobRequest{
        RequestBody: operations.CreateJobRequestBody{
            AlgorithmSpecification: operations.CreateJobRequestBodyAlgorithmSpecification{
                ContainerImage: &shared.ContainerImage{
                    URI: "http://velvety-spiderling.com",
                },
                ScriptModeConfig: &shared.ScriptModeConfig{
                    CompressionType: shared.CompressionTypeEnumNone.ToPointer(),
                    EntryPoint: "veritatis",
                    S3URI: "deserunt",
                },
            },
            CheckpointConfig: &operations.CreateJobRequestBodyCheckpointConfig{
                LocalPath: sdk.String("perferendis"),
                S3URI: sdk.String("ipsam"),
            },
            ClientToken: "repellendus",
            DeviceConfig: operations.CreateJobRequestBodyDeviceConfig{
                Device: sdk.String("sapiente"),
            },
            HyperParameters: map[string]string{
                "odit": "at",
                "at": "maiores",
                "molestiae": "quod",
                "quod": "esse",
            },
            InputDataConfig: []shared.InputFileConfig{
                shared.InputFileConfig{
                    ChannelName: "porro",
                    ContentType: sdk.String("dolorum"),
                    DataSource: shared.DataSource{
                        S3DataSource: shared.S3DataSource{
                            S3URI: "dicta",
                        },
                    },
                },
                shared.InputFileConfig{
                    ChannelName: "nam",
                    ContentType: sdk.String("officia"),
                    DataSource: shared.DataSource{
                        S3DataSource: shared.S3DataSource{
                            S3URI: "occaecati",
                        },
                    },
                },
                shared.InputFileConfig{
                    ChannelName: "fugit",
                    ContentType: sdk.String("deleniti"),
                    DataSource: shared.DataSource{
                        S3DataSource: shared.S3DataSource{
                            S3URI: "hic",
                        },
                    },
                },
            },
            InstanceConfig: operations.CreateJobRequestBodyInstanceConfig{
                InstanceCount: sdk.Int64(758616),
                InstanceType: shared.InstanceTypeEnumMlC48xlarge.ToPointer(),
                VolumeSizeInGb: sdk.Int64(105907),
            },
            JobName: "commodi",
            OutputDataConfig: operations.CreateJobRequestBodyOutputDataConfig{
                KmsKeyID: sdk.String("molestiae"),
                S3Path: sdk.String("modi"),
            },
            RoleArn: "qui",
            StoppingCondition: &operations.CreateJobRequestBodyStoppingCondition{
                MaxRuntimeInSeconds: sdk.Int64(774234),
            },
            Tags: map[string]string{
                "esse": "ipsum",
                "excepturi": "aspernatur",
                "perferendis": "ad",
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateJobResponse != nil {
        // handle response
    }
}
```

## CreateQuantumTask

Creates a quantum task.

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
    res, err := s.SDK.CreateQuantumTask(ctx, operations.CreateQuantumTaskRequest{
        RequestBody: operations.CreateQuantumTaskRequestBody{
            Action: "saepe",
            ClientToken: "fuga",
            DeviceArn: "in",
            DeviceParameters: sdk.String("corporis"),
            JobToken: sdk.String("iste"),
            OutputS3Bucket: "iure",
            OutputS3KeyPrefix: "saepe",
            Shots: 697631,
            Tags: map[string]string{
                "ipsa": "reiciendis",
            },
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateQuantumTaskResponse != nil {
        // handle response
    }
}
```

## GetDevice

<p>Retrieves the devices available in Amazon Braket.</p> <note> <p>For backwards compatibility with older versions of BraketSchemas, OpenQASM information is omitted from GetDevice API calls. To get this information the user-agent needs to present a recent version of the BraketSchemas (1.8.0 or later). The Braket SDK automatically reports this for you. If you do not see OpenQASM results in the GetDevice response when using a Braket SDK, you may need to set AWS_EXECUTION_ENV environment variable to configure user-agent. See the code examples provided below for how to do this for the AWS CLI, Boto3, and the Go, Java, and JavaScript/TypeScript SDKs.</p> </note>

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
    res, err := s.SDK.GetDevice(ctx, operations.GetDeviceRequest{
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        DeviceArn: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceResponse != nil {
        // handle response
    }
}
```

## GetJob

Retrieves the specified Amazon Braket job.

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
    res, err := s.SDK.GetJob(ctx, operations.GetJobRequest{
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("culpa"),
        JobArn: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetJobResponse != nil {
        // handle response
    }
}
```

## GetQuantumTask

Retrieves the specified quantum task.

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
    res, err := s.SDK.GetQuantumTask(ctx, operations.GetQuantumTaskRequest{
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        QuantumTaskArn: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetQuantumTaskResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Shows the tags associated with this resource.

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
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("quia"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("animi"),
        XAmzSignedHeaders: sdk.String("enim"),
        ResourceArn: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## SearchDevices

Searches for devices using the specified filters.

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
    res, err := s.SDK.SearchDevices(ctx, operations.SearchDevicesRequest{
        RequestBody: operations.SearchDevicesRequestBody{
            Filters: []shared.SearchDevicesFilter{
                shared.SearchDevicesFilter{
                    Name: "Mandy Hills",
                    Values: []string{
                        "quasi",
                    },
                },
                shared.SearchDevicesFilter{
                    Name: "Dr. Jake Pacocha",
                    Values: []string{
                        "nihil",
                        "praesentium",
                        "voluptatibus",
                        "ipsa",
                    },
                },
                shared.SearchDevicesFilter{
                    Name: "Mr. Jared Ritchie",
                    Values: []string{
                        "maiores",
                        "dicta",
                    },
                },
                shared.SearchDevicesFilter{
                    Name: "Miss Valerie Kshlerin",
                    Values: []string{
                        "commodi",
                        "repudiandae",
                        "quae",
                        "ipsum",
                    },
                },
            },
            MaxResults: sdk.Int64(692472),
            NextToken: sdk.String("molestias"),
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("voluptates"),
        XAmzSignedHeaders: sdk.String("quasi"),
        MaxResults: sdk.String("repudiandae"),
        NextToken: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchDevicesResponse != nil {
        // handle response
    }
}
```

## SearchJobs

Searches for Amazon Braket jobs that match the specified filter values.

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
    res, err := s.SDK.SearchJobs(ctx, operations.SearchJobsRequest{
        RequestBody: operations.SearchJobsRequestBody{
            Filters: []shared.SearchJobsFilter{
                shared.SearchJobsFilter{
                    Name: "Miss Randall Hamill",
                    Operator: shared.SearchJobsFilterOperatorEnumLt,
                    Values: []string{
                        "distinctio",
                        "quibusdam",
                        "labore",
                    },
                },
            },
            MaxResults: sdk.Int64(264730),
            NextToken: sdk.String("qui"),
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        MaxResults: sdk.String("alias"),
        NextToken: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchJobsResponse != nil {
        // handle response
    }
}
```

## SearchQuantumTasks

Searches for tasks that match the specified filter values.

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
    res, err := s.SDK.SearchQuantumTasks(ctx, operations.SearchQuantumTasksRequest{
        RequestBody: operations.SearchQuantumTasksRequestBody{
            Filters: []shared.SearchQuantumTasksFilter{
                shared.SearchQuantumTasksFilter{
                    Name: "Eddie Prosacco",
                    Operator: shared.SearchQuantumTasksFilterOperatorEnumBetween,
                    Values: []string{
                        "non",
                        "eligendi",
                    },
                },
                shared.SearchQuantumTasksFilter{
                    Name: "Gilbert Medhurst",
                    Operator: shared.SearchQuantumTasksFilterOperatorEnumGt,
                    Values: []string{
                        "debitis",
                    },
                },
                shared.SearchQuantumTasksFilter{
                    Name: "Wilbur King",
                    Operator: shared.SearchQuantumTasksFilterOperatorEnumBetween,
                    Values: []string{
                        "dicta",
                        "magnam",
                        "cumque",
                    },
                },
            },
            MaxResults: sdk.Int64(813798),
            NextToken: sdk.String("ea"),
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        MaxResults: sdk.String("delectus"),
        NextToken: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchQuantumTasksResponse != nil {
        // handle response
    }
}
```

## TagResource

Add a tag to the specified resource.

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
                "nam": "id",
                "blanditiis": "deleniti",
                "sapiente": "amet",
            },
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        ResourceArn: "nihil",
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

Remove tags from a resource.

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
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("natus"),
        ResourceArn: "nobis",
        TagKeys: []string{
            "vero",
            "aspernatur",
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
