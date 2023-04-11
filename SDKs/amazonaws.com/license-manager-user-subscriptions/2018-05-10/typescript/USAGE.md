<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateUserRequest,
  AssociateUserResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateUserRequest = {
  requestBody: {
    domain: "corrupti",
    identityProvider: {
      activeDirectoryIdentityProvider: {
        directoryId: "provident",
      },
    },
    instanceId: "distinctio",
    username: "Rosalinda_Mitchell84",
  },
  xAmzAlgorithm: "vel",
  xAmzContentSha256: "error",
  xAmzCredential: "deserunt",
  xAmzDate: "suscipit",
  xAmzSecurityToken: "iure",
  xAmzSignature: "magnam",
  xAmzSignedHeaders: "debitis",
};

sdk.associateUser(req).then((res: AssociateUserResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->