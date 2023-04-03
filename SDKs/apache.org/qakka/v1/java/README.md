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

            AckMessageRequest req = new AckMessageRequest() {{
                queueMessageId = "corrupti";
                queueName = "provident";
            }}            

            AckMessageResponse res = sdk.queues.ackMessage(req);

            if (res.apiResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### queues

* `ackMessage` - Acknowledge that Queue Message has been processed.
* `createQueue` - Create new queue.
* `deleteQueue` - Delete Queue.
* `getListOfQueues` - Get list of all Queues.
* `getMessageData` - Get data associated with a Queue Message.
* `getNextMessages` - Get next Queue Messages from a Queue
* `getQueueConfig` - Get Queue config.
* `sendMessageBinary` - Send Queue Message with a binary data (blob) payload.
* `updateQueueConfig` - Update Queue configuration.

### status

* `status` - Status of webapp.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
