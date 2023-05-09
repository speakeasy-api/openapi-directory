# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AckMessageRequest;
import org.openapis.openapi.models.operations.AckMessageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AckMessageRequest req = new AckMessageRequest("corrupti", "provident");            

            AckMessageResponse res = sdk.queues.ackMessage(req);

            if (res.apiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [queues](docs/queues/README.md)

* [ackMessage](docs/queues/README.md#ackmessage) - Acknowledge that Queue Message has been processed.
* [createQueue](docs/queues/README.md#createqueue) - Create new queue.
* [deleteQueue](docs/queues/README.md#deletequeue) - Delete Queue.
* [getListOfQueues](docs/queues/README.md#getlistofqueues) - Get list of all Queues.
* [getMessageData](docs/queues/README.md#getmessagedata) - Get data associated with a Queue Message.
* [getNextMessages](docs/queues/README.md#getnextmessages) - Get next Queue Messages from a Queue
* [getQueueConfig](docs/queues/README.md#getqueueconfig) - Get Queue config.
* [sendMessageBinary](docs/queues/README.md#sendmessagebinary) - Send Queue Message with a binary data (blob) payload.
* [updateQueueConfig](docs/queues/README.md#updatequeueconfig) - Update Queue configuration.

### [status](docs/status/README.md)

* [status](docs/status/README.md#status) - Status of webapp.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
