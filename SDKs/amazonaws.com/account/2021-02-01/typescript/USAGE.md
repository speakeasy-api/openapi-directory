<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteAlternateContactRequest,
  DeleteAlternateContactResponse,
  DeleteAlternateContactRequestBodyAlternateContactTypeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteAlternateContactRequest = {
  requestBody: {
    accountId: "corrupti",
    alternateContactType: DeleteAlternateContactRequestBodyAlternateContactTypeEnum.Operations,
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
};

sdk.deleteAlternateContact(req).then((res: DeleteAlternateContactResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->