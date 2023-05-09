# SDK

## Overview

<p>AWS IoT Jobs is a service that allows you to define a set of jobs — remote operations that are sent to and executed on one or more devices connected to AWS IoT. For example, you can define a job that instructs a set of devices to download and install application or firmware updates, reboot, rotate certificates, or perform remote troubleshooting operations.</p> <p> To create a job, you make a job document which is a description of the remote operations to be performed, and you specify a list of targets that should perform the operations. The targets can be individual things, thing groups or both.</p> <p> AWS IoT Jobs sends a message to inform the targets that a job is available. The target starts the execution of the job by downloading the job document, performing the operations it specifies, and reporting its progress to AWS IoT. The Jobs service provides commands to track the progress of a job on a specific target and for all the targets of the job</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/iot/>
### Available Operations

* [DescribeJobExecution](#describejobexecution) - Gets details of a job execution.
* [GetPendingJobExecutions](#getpendingjobexecutions) - Gets the list of all jobs for a thing that are not in a terminal status.
* [StartNextPendingJobExecution](#startnextpendingjobexecution) - Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing.
* [UpdateJobExecution](#updatejobexecution) - Updates the status of a job execution.

## DescribeJobExecution

Gets details of a job execution.

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
    res, err := s.SDK.DescribeJobExecution(ctx, operations.DescribeJobExecutionRequest{
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("delectus"),
        ExecutionNumber: sdk.Int64(272656),
        IncludeJobDocument: sdk.Bool(false),
        JobID: "suscipit",
        ThingName: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeJobExecutionResponse != nil {
        // handle response
    }
}
```

## GetPendingJobExecutions

Gets the list of all jobs for a thing that are not in a terminal status.

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
    res, err := s.SDK.GetPendingJobExecutions(ctx, operations.GetPendingJobExecutionsRequest{
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        ThingName: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPendingJobExecutionsResponse != nil {
        // handle response
    }
}
```

## StartNextPendingJobExecution

Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing.

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
    res, err := s.SDK.StartNextPendingJobExecution(ctx, operations.StartNextPendingJobExecutionRequest{
        RequestBody: operations.StartNextPendingJobExecutionRequestBody{
            StatusDetails: map[string]string{
                "quis": "veritatis",
            },
            StepTimeoutInMinutes: sdk.Int64(648172),
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("at"),
        ThingName: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartNextPendingJobExecutionResponse != nil {
        // handle response
    }
}
```

## UpdateJobExecution

Updates the status of a job execution.

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
    res, err := s.SDK.UpdateJobExecution(ctx, operations.UpdateJobExecutionRequest{
        RequestBody: operations.UpdateJobExecutionRequestBody{
            ExecutionNumber: sdk.Int64(978619),
            ExpectedVersion: sdk.Int64(473608),
            IncludeJobDocument: sdk.Bool(false),
            IncludeJobExecutionState: sdk.Bool(false),
            Status: operations.UpdateJobExecutionRequestBodyStatusEnumRemoved,
            StatusDetails: map[string]string{
                "esse": "totam",
                "porro": "dolorum",
                "dicta": "nam",
                "officia": "occaecati",
            },
            StepTimeoutInMinutes: sdk.Int64(143353),
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        JobID: "modi",
        ThingName: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateJobExecutionResponse != nil {
        // handle response
    }
}
```
