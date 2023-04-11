<!-- Start SDK Example Usage -->
```typescript
import {
  WebhooksAddRequest,
  WebhooksAddResponse
} from "openapi/dist/sdk/models/operations";
import {
  UnifiedApiIdEnum,
  StatusEnum,
  WebhookEventTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: WebhooksAddRequest = {
  createWebhookRequest: {
    deliveryUrl: "https://example.com/my/webhook/endpoint",
    description: "A description",
    events: [
      WebhookEventTypeEnum.CrmCompanyCreated,
      WebhookEventTypeEnum.CrmCompanyCreated,
      WebhookEventTypeEnum.CrmCompanyCreated,
    ],
    status: StatusEnum.Enabled,
    unifiedApi: UnifiedApiIdEnum.Crm,
  },
  xApideckAppId: "provident",
};

sdk.webhooks.webhooksAdd(req).then((res: WebhooksAddResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->