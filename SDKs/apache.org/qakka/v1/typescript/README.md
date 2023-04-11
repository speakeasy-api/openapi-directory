# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apache.org/qakka/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apache.org/qakka/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AckMessageRequest,
  AckMessageResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AckMessageRequest = {
  queueMessageId: "corrupti",
  queueName: "provident",
};

sdk.queues.ackMessage(req).then((res: AckMessageResponse | AxiosError) => {
   // handle response
});
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

