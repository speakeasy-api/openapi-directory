# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apache.org/qakka/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
        QueueMessageID: "corrupti",
        QueueName: "provident",
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Queues

* `AckMessage` - Acknowledge that Queue Message has been processed.
* `CreateQueue` - Create new queue.
* `DeleteQueue` - Delete Queue.
* `GetListOfQueues` - Get list of all Queues.
* `GetMessageData` - Get data associated with a Queue Message.
* `GetNextMessages` - Get next Queue Messages from a Queue
* `GetQueueConfig` - Get Queue config.
* `SendMessageBinary` - Send Queue Message with a binary data (blob) payload.
* `UpdateQueueConfig` - Update Queue configuration.

### Status

* `Status` - Status of webapp.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
