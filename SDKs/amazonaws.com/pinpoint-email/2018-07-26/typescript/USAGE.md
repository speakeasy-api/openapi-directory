<!-- Start SDK Example Usage -->
```typescript
import {
  CreateConfigurationSetRequest,
  CreateConfigurationSetResponse
} from "openapi/dist/sdk/models/operations";
import {
  TlsPolicyEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateConfigurationSetRequest = {
  requestBody: {
    configurationSetName: "corrupti",
    deliveryOptions: {
      sendingPoolName: "provident",
      tlsPolicy: TlsPolicyEnum.Optional,
    },
    reputationOptions: {
      lastFreshStart: "2021-03-11T23:22:42.658Z",
      reputationMetricsEnabled: false,
    },
    sendingOptions: {
      sendingEnabled: false,
    },
    tags: [
      {
        key: "corrupti",
        value: "illum",
      },
      {
        key: "vel",
        value: "error",
      },
      {
        key: "deserunt",
        value: "suscipit",
      },
      {
        key: "iure",
        value: "magnam",
      },
    ],
    trackingOptions: {
      customRedirectDomain: "debitis",
    },
  },
  xAmzAlgorithm: "ipsa",
  xAmzContentSha256: "delectus",
  xAmzCredential: "tempora",
  xAmzDate: "suscipit",
  xAmzSecurityToken: "molestiae",
  xAmzSignature: "minus",
  xAmzSignedHeaders: "placeat",
};

sdk.createConfigurationSet(req).then((res: CreateConfigurationSetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->