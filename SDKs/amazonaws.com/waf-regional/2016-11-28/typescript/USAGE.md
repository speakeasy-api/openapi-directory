<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateWebACLRequest,
  AssociateWebACLResponse,
  AssociateWebACLXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateWebACLRequest = {
  associateWebACLRequest: {
    resourceArn: "corrupti",
    webACLId: "provident",
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
  xAmzTarget: AssociateWebACLXAmzTargetEnum.AWSWAFRegional20161128AssociateWebACL,
};

sdk.associateWebACL(req).then((res: AssociateWebACLResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->