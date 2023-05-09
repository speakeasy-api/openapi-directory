# Queues

## Overview

Queue management, send, get and ack.

### Available Operations

* [AckMessage](#ackmessage) - Acknowledge that Queue Message has been processed.
* [CreateQueue](#createqueue) - Create new queue.
* [DeleteQueue](#deletequeue) - Delete Queue.
* [GetListOfQueues](#getlistofqueues) - Get list of all Queues.
* [GetMessageData](#getmessagedata) - Get data associated with a Queue Message.
* [GetNextMessages](#getnextmessages) - Get next Queue Messages from a Queue
* [GetQueueConfig](#getqueueconfig) - Get Queue config.
* [SendMessageBinary](#sendmessagebinary) - Send Queue Message with a binary data (blob) payload.
* [UpdateQueueConfig](#updatequeueconfig) - Update Queue configuration.

## AckMessage

Acknowledge that Queue Message has been processed.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Queues.AckMessage(ctx, operations.AckMessageRequest{
        QueueMessageID: "distinctio",
        QueueName: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponse != nil {
        // handle response
    }
}
```

## CreateQueue

Create new queue.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Queues.CreateQueue(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponse != nil {
        // handle response
    }
}
```

## DeleteQueue

Delete Queue.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Queues.DeleteQueue(ctx, operations.DeleteQueueRequest{
        Confirm: sdk.Bool(false),
        QueueName: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponse != nil {
        // handle response
    }
}
```

## GetListOfQueues

Get list of all Queues.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Queues.GetListOfQueues(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponse != nil {
        // handle response
    }
}
```

## GetMessageData

Get data associated with a Queue Message.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Queues.GetMessageData(ctx, operations.GetMessageDataRequest{
        QueueMessageID: "nulla",
        QueueName: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetNextMessages

Get next Queue Messages from a Queue

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Queues.GetNextMessages(ctx, operations.GetNextMessagesRequest{
        Count: sdk.String("illum"),
        QueueName: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponse != nil {
        // handle response
    }
}
```

## GetQueueConfig

Get Queue config.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Queues.GetQueueConfig(ctx, operations.GetQueueConfigRequest{
        QueueName: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponse != nil {
        // handle response
    }
}
```

## SendMessageBinary

Send Queue Message with a binary data (blob) payload.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Queues.SendMessageBinary(ctx, operations.SendMessageBinaryRequest{
        RequestBody: []byte("deserunt"),
        ContentType: "suscipit",
        Delay: sdk.String("iure"),
        Expiration: sdk.String("magnam"),
        QueueName: "debitis",
        Regions: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponse != nil {
        // handle response
    }
}
```

## UpdateQueueConfig

Update Queue configuration.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Queues.UpdateQueueConfig(ctx, operations.UpdateQueueConfigRequest{
        QueueName: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponse != nil {
        // handle response
    }
}
```
