# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apideck.com/sms/9.1.2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apideck.com/sms/9.1.2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  MessagesAddRequest,
  MessagesAddResponse
} from "openapi/dist/sdk/models/operations";
import {
  MessageMessageTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: MessagesAddRequest = {
  messageInput: {
    body: "Hi! How are you doing?",
    from: "+15017122661",
    messagingServiceId: "123456",
    reference: "CUST001",
    scheduledAt: "2020-09-30T07:43:32.000Z",
    subject: "Picture",
    to: "+15017122662",
    type: MessageMessageTypeEnum.Sms,
    webhookUrl: "https://unify.apideck.com/webhook/webhooks/eyz329dkffdl4949/x/sms",
  },
  raw: false,
  xApideckAppId: "corrupti",
  xApideckConsumerId: "provident",
  xApideckServiceId: "distinctio",
};

sdk.messages.messagesAdd(req).then((res: MessagesAddResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### messages

* `messagesAdd` - Create Message
* `messagesAll` - List Messages
* `messagesDelete` - Delete Message
* `messagesOne` - Get Message
* `messagesUpdate` - Update Message
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

