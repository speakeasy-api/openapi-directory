<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { MessagesAddRequest, MessagesAddResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: MessagesAddRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  queryParams: {
    raw: false,
  },
  headers: {
    xApideckAppId: "voluptas",
    xApideckConsumerId: "culpa",
    xApideckServiceId: "expedita",
  },
  request: {
    body: "consequuntur",
    from: "dolor",
    messagingServiceId: "expedita",
    reference: "voluptas",
    scheduledAt: "2011-08-12T10:11:12Z",
    subject: "nihil",
    to: "rerum",
    type: "mms",
    webhookUrl: "debitis",
  },
};

sdk.messages.messagesAdd(req).then((res: MessagesAddResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->