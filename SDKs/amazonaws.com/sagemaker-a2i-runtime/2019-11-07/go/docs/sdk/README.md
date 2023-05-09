# SDK

## Overview

<p>Amazon Augmented AI (Amazon A2I) adds the benefit of human judgment to any machine learning application. When an AI application can't evaluate data with a high degree of confidence, human reviewers can take over. This human review is called a human review workflow. To create and start a human review workflow, you need three resources: a <i>worker task template</i>, a <i>flow definition</i>, and a <i>human loop</i>.</p> <p>For information about these resources and prerequisites for using Amazon A2I, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-getting-started.html">Get Started with Amazon Augmented AI</a> in the Amazon SageMaker Developer Guide.</p> <p>This API reference includes information about API actions and data types that you can use to interact with Amazon A2I programmatically. Use this guide to:</p> <ul> <li> <p>Start a human loop with the <code>StartHumanLoop</code> operation when using Amazon A2I with a <i>custom task type</i>. To learn more about the difference between custom and built-in task types, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-task-types-general.html">Use Task Types </a>. To learn how to start a human loop using this API, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-start-human-loop.html#a2i-instructions-starthumanloop">Create and Start a Human Loop for a Custom Task Type </a> in the Amazon SageMaker Developer Guide.</p> </li> <li> <p>Manage your human loops. You can list all human loops that you have created, describe individual human loops, and stop and delete human loops. To learn more, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-monitor-humanloop-results.html">Monitor and Manage Your Human Loop </a> in the Amazon SageMaker Developer Guide.</p> </li> </ul> <p>Amazon A2I integrates APIs from various AWS services to create and start human review workflows for those services. To learn how Amazon A2I uses these APIs, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-api-references.html">Use APIs in Amazon A2I</a> in the Amazon SageMaker Developer Guide.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/sagemaker/>
### Available Operations

* [DeleteHumanLoop](#deletehumanloop) - <p>Deletes the specified human loop for a flow definition.</p> <p>If the human loop was deleted, this operation will return a <code>ResourceNotFoundException</code>. </p>
* [DescribeHumanLoop](#describehumanloop) - Returns information about the specified human loop. If the human loop was deleted, this operation will return a <code>ResourceNotFoundException</code> error. 
* [ListHumanLoops](#listhumanloops) - Returns information about human loops, given the specified parameters. If a human loop was deleted, it will not be included.
* [StartHumanLoop](#starthumanloop) - Starts a human loop, provided that at least one activation condition is met.
* [StopHumanLoop](#stophumanloop) - Stops the specified human loop.

## DeleteHumanLoop

<p>Deletes the specified human loop for a flow definition.</p> <p>If the human loop was deleted, this operation will return a <code>ResourceNotFoundException</code>. </p>

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
    res, err := s.SDK.DeleteHumanLoop(ctx, operations.DeleteHumanLoopRequest{
        HumanLoopName: "vel",
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteHumanLoopResponse != nil {
        // handle response
    }
}
```

## DescribeHumanLoop

Returns information about the specified human loop. If the human loop was deleted, this operation will return a <code>ResourceNotFoundException</code> error. 

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
    res, err := s.SDK.DescribeHumanLoop(ctx, operations.DescribeHumanLoopRequest{
        HumanLoopName: "delectus",
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeHumanLoopResponse != nil {
        // handle response
    }
}
```

## ListHumanLoops

Returns information about human loops, given the specified parameters. If a human loop was deleted, it will not be included.

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
    res, err := s.SDK.ListHumanLoops(ctx, operations.ListHumanLoopsRequest{
        CreationTimeAfter: types.MustTimeFromString("2022-03-20T06:24:36.919Z"),
        CreationTimeBefore: types.MustTimeFromString("2020-06-29T11:50:59.674Z"),
        FlowDefinitionArn: "ab",
        MaxResults: sdk.Int64(337396),
        NextToken: sdk.String("veritatis"),
        SortOrder: operations.ListHumanLoopsSortOrderEnumDescending.ToPointer(),
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHumanLoopsResponse != nil {
        // handle response
    }
}
```

## StartHumanLoop

Starts a human loop, provided that at least one activation condition is met.

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
    res, err := s.SDK.StartHumanLoop(ctx, operations.StartHumanLoopRequest{
        RequestBody: operations.StartHumanLoopRequestBody{
            DataAttributes: &operations.StartHumanLoopRequestBodyDataAttributes{
                ContentClassifiers: []shared.ContentClassifierEnum{
                    shared.ContentClassifierEnumFreeOfAdultContent,
                    shared.ContentClassifierEnumFreeOfPersonallyIdentifiableInformation,
                    shared.ContentClassifierEnumFreeOfAdultContent,
                    shared.ContentClassifierEnumFreeOfAdultContent,
                },
            },
            FlowDefinitionArn: "esse",
            HumanLoopInput: operations.StartHumanLoopRequestBodyHumanLoopInput{
                InputContent: sdk.String("totam"),
            },
            HumanLoopName: "porro",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartHumanLoopResponse != nil {
        // handle response
    }
}
```

## StopHumanLoop

Stops the specified human loop.

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
    res, err := s.SDK.StopHumanLoop(ctx, operations.StopHumanLoopRequest{
        RequestBody: operations.StopHumanLoopRequestBody{
            HumanLoopName: "hic",
        },
        XAmzAlgorithm: sdk.String("optio"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopHumanLoopResponse != nil {
        // handle response
    }
}
```
