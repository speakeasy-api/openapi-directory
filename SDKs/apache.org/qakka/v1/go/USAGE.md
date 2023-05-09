<!-- Start SDK Example Usage -->
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
        QueueMessageID: "corrupti",
        QueueName: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->