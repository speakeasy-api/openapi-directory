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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Queues](docs/queues/README.md)

* [AckMessage](docs/queues/README.md#ackmessage) - Acknowledge that Queue Message has been processed.
* [CreateQueue](docs/queues/README.md#createqueue) - Create new queue.
* [DeleteQueue](docs/queues/README.md#deletequeue) - Delete Queue.
* [GetListOfQueues](docs/queues/README.md#getlistofqueues) - Get list of all Queues.
* [GetMessageData](docs/queues/README.md#getmessagedata) - Get data associated with a Queue Message.
* [GetNextMessages](docs/queues/README.md#getnextmessages) - Get next Queue Messages from a Queue
* [GetQueueConfig](docs/queues/README.md#getqueueconfig) - Get Queue config.
* [SendMessageBinary](docs/queues/README.md#sendmessagebinary) - Send Queue Message with a binary data (blob) payload.
* [UpdateQueueConfig](docs/queues/README.md#updatequeueconfig) - Update Queue configuration.

### [Status](docs/status/README.md)

* [Status](docs/status/README.md#status) - Status of webapp.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
