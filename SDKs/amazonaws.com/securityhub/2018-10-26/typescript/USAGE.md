<!-- Start SDK Example Usage -->
```typescript
import {
  AcceptAdministratorInvitationRequest,
  AcceptAdministratorInvitationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AcceptAdministratorInvitationRequest = {
  requestBody: {
    administratorId: "corrupti",
    invitationId: "provident",
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
};

sdk.acceptAdministratorInvitation(req).then((res: AcceptAdministratorInvitationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->