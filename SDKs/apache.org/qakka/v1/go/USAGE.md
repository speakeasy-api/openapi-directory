<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AckMessageRequest{
        PathParams: operations.AckMessagePathParams{
            QueueMessageID: "unde",
            QueueName: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.Queues.AckMessage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->