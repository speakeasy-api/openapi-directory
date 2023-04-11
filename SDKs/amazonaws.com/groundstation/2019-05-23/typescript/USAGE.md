<!-- Start SDK Example Usage -->
```typescript
import {
  CancelContactRequest,
  CancelContactResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CancelContactRequest = {
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "provident",
  xAmzCredential: "distinctio",
  xAmzDate: "quibusdam",
  xAmzSecurityToken: "unde",
  xAmzSignature: "nulla",
  xAmzSignedHeaders: "corrupti",
  contactId: "illum",
};

sdk.cancelContact(req).then((res: CancelContactResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->