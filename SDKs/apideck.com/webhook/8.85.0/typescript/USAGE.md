<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { WebhooksAddRequest, WebhooksAddResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: WebhooksAddRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  headers: {
    xApideckAppId: "sit",
  },
  request: {
    deliveryUrl: "voluptas",
    description: "culpa",
    events: [
      "crm.contact.created",
      "crm.contact.updated",
    ],
    status: "disabled",
    unifiedApi: "crm",
  },
};

sdk.webhooks.webhooksAdd(req).then((res: WebhooksAddResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->