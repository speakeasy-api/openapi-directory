# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apideck.com/webhook/9.1.2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apideck.com/webhook/9.1.2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### webhooks

* `webhooksAdd` - Create webhook subscription
* `webhooksAll` - List webhook subscriptions
* `webhooksDelete` - Delete webhook subscription
* `webhooksExecute` - Execute a webhook
* `webhooksOne` - Get webhook subscription
* `webhooksResolve` - Resolve and Execute a connection webhook
* `webhooksShortExecute` - Execute a webhook
* `webhooksUpdate` - Update webhook subscription
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

