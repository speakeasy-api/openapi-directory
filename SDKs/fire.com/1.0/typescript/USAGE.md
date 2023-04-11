<!-- Start SDK Example Usage -->
```typescript
import {
  CreateApiApplicationNewApiApplication,
  CreateApiApplicationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CreateApiApplicationNewApiApplication = {
  applicationName: "Batch Processing API",
  enabled: true,
  expiry: "2019-08-22T07:48:56.460Z",
  ican: 548814,
  numberOfPayeeApprovalsRequired: 1,
  numberOfPaymentApprovalsRequired: 1,
  permissions: [
    "distinctio",
    "quibusdam",
    "unde",
  ],
};

sdk.api.createApiApplication(req).then((res: CreateApiApplicationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->