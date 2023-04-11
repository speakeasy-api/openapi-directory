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