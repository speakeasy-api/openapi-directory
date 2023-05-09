# Queues

### Available Operations

* [DeleteAppsAppIDQueuesQueueID](#deleteappsappidqueuesqueueid) - Deletes a queue
* [GetAppsAppIDQueues](#getappsappidqueues) - Lists queues
* [PostAppsAppIDQueues](#postappsappidqueues) - Creates a queue

## DeleteAppsAppIDQueuesQueueID

Deletes a queue

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
    res, err := s.Queues.DeleteAppsAppIDQueuesQueueID(ctx, operations.DeleteAppsAppIDQueuesQueueIDRequest{
        AppID: "dolor",
        QueueID: "debitis",
    }, operations.DeleteAppsAppIDQueuesQueueIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAppsAppIDQueues

Lists queues

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
    res, err := s.Queues.GetAppsAppIDQueues(ctx, operations.GetAppsAppIDQueuesRequest{
        AppID: "a",
    }, operations.GetAppsAppIDQueuesSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueueResponses != nil {
        // handle response
    }
}
```

## PostAppsAppIDQueues

Creates a queue

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Queues.PostAppsAppIDQueues(ctx, operations.PostAppsAppIDQueuesRequest{
        AppID: "dolorum",
        Queue: &shared.Queue{
            MaxLength: 447125,
            Name: "Angel Wolff II",
            Region: "cumque",
            TTL: 813798,
        },
    }, operations.PostAppsAppIDQueuesSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueueResponse != nil {
        // handle response
    }
}
```
