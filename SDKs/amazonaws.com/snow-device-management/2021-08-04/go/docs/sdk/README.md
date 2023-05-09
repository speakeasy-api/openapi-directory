# SDK

## Overview

Amazon Web Services Snow Device Management documentation.

Amazon Web Services documentation
<https://docs.aws.amazon.com/snow-device-management/>
### Available Operations

* [CancelTask](#canceltask) - <p>Sends a cancel request for a specified task. You can cancel a task only if it's still in a <code>QUEUED</code> state. Tasks that are already running can't be cancelled.</p> <note> <p>A task might still run if it's processed from the queue before the <code>CancelTask</code> operation changes the task's state.</p> </note>
* [CreateTask](#createtask) - Instructs one or more devices to start a task, such as unlocking or rebooting.
* [DescribeDevice](#describedevice) - Checks device-specific information, such as the device type, software version, IP addresses, and lock status.
* [DescribeDeviceEc2Instances](#describedeviceec2instances) - Checks the current state of the Amazon EC2 instances. The output is similar to <code>describeDevice</code>, but the results are sourced from the device cache in the Amazon Web Services Cloud and include a subset of the available fields. 
* [DescribeExecution](#describeexecution) - Checks the status of a remote task running on one or more target devices.
* [DescribeTask](#describetask) - Checks the metadata for a given task on a device. 
* [ListDeviceResources](#listdeviceresources) - Returns a list of the Amazon Web Services resources available for a device. Currently, Amazon EC2 instances are the only supported resource type.
* [ListDevices](#listdevices) - Returns a list of all devices on your Amazon Web Services account that have Amazon Web Services Snow Device Management enabled in the Amazon Web Services Region where the command is run.
* [ListExecutions](#listexecutions) - Returns the status of tasks for one or more target devices.
* [ListTagsForResource](#listtagsforresource) - Returns a list of tags for a managed device or task.
* [ListTasks](#listtasks) - Returns a list of tasks that can be filtered by state.
* [TagResource](#tagresource) - Adds or replaces tags on a device or task.
* [UntagResource](#untagresource) - Removes a tag from a device or task.

## CancelTask

<p>Sends a cancel request for a specified task. You can cancel a task only if it's still in a <code>QUEUED</code> state. Tasks that are already running can't be cancelled.</p> <note> <p>A task might still run if it's processed from the queue before the <code>CancelTask</code> operation changes the task's state.</p> </note>

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
    res, err := s.SDK.CancelTask(ctx, operations.CancelTaskRequest{
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("debitis"),
        TaskID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelTaskOutput != nil {
        // handle response
    }
}
```

## CreateTask

Instructs one or more devices to start a task, such as unlocking or rebooting.

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
    res, err := s.SDK.CreateTask(ctx, operations.CreateTaskRequest{
        RequestBody: operations.CreateTaskRequestBody{
            ClientToken: sdk.String("delectus"),
            Command: operations.CreateTaskRequestBodyCommand{
                Reboot: map[string]interface{}{
                    "suscipit": "molestiae",
                    "minus": "placeat",
                },
                Unlock: map[string]interface{}{
                    "iusto": "excepturi",
                    "nisi": "recusandae",
                    "temporibus": "ab",
                },
            },
            Description: sdk.String("quis"),
            Tags: map[string]string{
                "deserunt": "perferendis",
            },
            Targets: []string{
                "repellendus",
                "sapiente",
            },
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTaskOutput != nil {
        // handle response
    }
}
```

## DescribeDevice

Checks device-specific information, such as the device type, software version, IP addresses, and lock status.

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
    res, err := s.SDK.DescribeDevice(ctx, operations.DescribeDeviceRequest{
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("nam"),
        ManagedDeviceID: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDeviceOutput != nil {
        // handle response
    }
}
```

## DescribeDeviceEc2Instances

Checks the current state of the Amazon EC2 instances. The output is similar to <code>describeDevice</code>, but the results are sourced from the device cache in the Amazon Web Services Cloud and include a subset of the available fields. 

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
    res, err := s.SDK.DescribeDeviceEc2Instances(ctx, operations.DescribeDeviceEc2InstancesRequest{
        RequestBody: operations.DescribeDeviceEc2InstancesRequestBody{
            InstanceIds: []string{
                "fugit",
                "deleniti",
                "hic",
            },
        },
        XAmzAlgorithm: sdk.String("optio"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("qui"),
        ManagedDeviceID: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDeviceEc2Output != nil {
        // handle response
    }
}
```

## DescribeExecution

Checks the status of a remote task running on one or more target devices.

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
    res, err := s.SDK.DescribeExecution(ctx, operations.DescribeExecutionRequest{
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("ad"),
        ManagedDeviceID: "natus",
        TaskID: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeExecutionOutput != nil {
        // handle response
    }
}
```

## DescribeTask

Checks the metadata for a given task on a device. 

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
    res, err := s.SDK.DescribeTask(ctx, operations.DescribeTaskRequest{
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("fuga"),
        TaskID: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTaskOutput != nil {
        // handle response
    }
}
```

## ListDeviceResources

Returns a list of the Amazon Web Services resources available for a device. Currently, Amazon EC2 instances are the only supported resource type.

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
    res, err := s.SDK.ListDeviceResources(ctx, operations.ListDeviceResourcesRequest{
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        ManagedDeviceID: "reiciendis",
        MaxResults: sdk.Int64(666767),
        NextToken: sdk.String("mollitia"),
        Type: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeviceResourcesOutput != nil {
        // handle response
    }
}
```

## ListDevices

Returns a list of all devices on your Amazon Web Services account that have Amazon Web Services Snow Device Management enabled in the Amazon Web Services Region where the command is run.

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
    res, err := s.SDK.ListDevices(ctx, operations.ListDevicesRequest{
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("omnis"),
        JobID: sdk.String("nemo"),
        MaxResults: sdk.Int64(325047),
        NextToken: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDevicesOutput != nil {
        // handle response
    }
}
```

## ListExecutions

Returns the status of tasks for one or more target devices.

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
    res, err := s.SDK.ListExecutions(ctx, operations.ListExecutionsRequest{
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        MaxResults: sdk.Int64(208876),
        NextToken: sdk.String("culpa"),
        State: operations.ListExecutionsStateEnumInProgress.ToPointer(),
        TaskID: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExecutionsOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

Returns a list of tags for a managed device or task.

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
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("velit"),
        ResourceArn: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceOutput != nil {
        // handle response
    }
}
```

## ListTasks

Returns a list of tasks that can be filtered by state.

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
    res, err := s.SDK.ListTasks(ctx, operations.ListTasksRequest{
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("odit"),
        MaxResults: sdk.Int64(778346),
        NextToken: sdk.String("sequi"),
        State: operations.ListTasksStateEnumCompleted.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTasksOutput != nil {
        // handle response
    }
}
```

## TagResource

Adds or replaces tags on a device or task.

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
                "id": "possimus",
                "aut": "quasi",
            },
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("vero"),
        ResourceArn: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UntagResource

Removes a tag from a device or task.

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
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        ResourceArn: "doloremque",
        TagKeys: []string{
            "ut",
            "maiores",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
