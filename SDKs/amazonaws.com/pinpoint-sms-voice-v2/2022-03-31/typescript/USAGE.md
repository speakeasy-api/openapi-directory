<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateOriginationIdentityRequest,
  AssociateOriginationIdentityResponse,
  AssociateOriginationIdentityXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateOriginationIdentityRequest = {
  associateOriginationIdentityRequest: {
    clientToken: "corrupti",
    isoCountryCode: "provident",
    originationIdentity: "distinctio",
    poolId: "quibusdam",
  },
  xAmzAlgorithm: "unde",
  xAmzContentSha256: "nulla",
  xAmzCredential: "corrupti",
  xAmzDate: "illum",
  xAmzSecurityToken: "vel",
  xAmzSignature: "error",
  xAmzSignedHeaders: "deserunt",
  xAmzTarget: AssociateOriginationIdentityXAmzTargetEnum.PinpointSMSVoiceV2AssociateOriginationIdentity,
};

sdk.associateOriginationIdentity(req).then((res: AssociateOriginationIdentityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->