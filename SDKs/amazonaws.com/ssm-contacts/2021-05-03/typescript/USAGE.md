<!-- Start SDK Example Usage -->
```typescript
import {
  AcceptPageRequest,
  AcceptPageResponse,
  AcceptPageXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AcceptTypeEnum,
  AcceptCodeValidationEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AcceptPageRequest = {
  acceptPageRequest: {
    acceptCode: "corrupti",
    acceptCodeValidation: AcceptCodeValidationEnum.Enforce,
    acceptType: AcceptTypeEnum.Read,
    contactChannelId: "quibusdam",
    note: "unde",
    pageId: "nulla",
  },
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "illum",
  xAmzCredential: "vel",
  xAmzDate: "error",
  xAmzSecurityToken: "deserunt",
  xAmzSignature: "suscipit",
  xAmzSignedHeaders: "iure",
  xAmzTarget: AcceptPageXAmzTargetEnum.SSMContactsAcceptPage,
};

sdk.acceptPage(req).then((res: AcceptPageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->