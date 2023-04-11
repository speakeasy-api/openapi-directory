<!-- Start SDK Example Usage -->
```typescript
import {
  AcceptResourceShareInvitationRequest,
  AcceptResourceShareInvitationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AcceptResourceShareInvitationRequest = {
  requestBody: {
    clientToken: "corrupti",
    resourceShareInvitationArn: "provident",
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
};

sdk.acceptResourceShareInvitation(req).then((res: AcceptResourceShareInvitationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->