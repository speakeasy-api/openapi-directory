<!-- Start SDK Example Usage -->
```typescript
import {
  AddProfileKeyRequest,
  AddProfileKeyResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AddProfileKeyRequest = {
  domainName: "corrupti",
  requestBody: {
    keyName: "provident",
    profileId: "distinctio",
    values: [
      "unde",
      "nulla",
      "corrupti",
      "illum",
    ],
  },
  xAmzAlgorithm: "vel",
  xAmzContentSha256: "error",
  xAmzCredential: "deserunt",
  xAmzDate: "suscipit",
  xAmzSecurityToken: "iure",
  xAmzSignature: "magnam",
  xAmzSignedHeaders: "debitis",
};

sdk.addProfileKey(req).then((res: AddProfileKeyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->