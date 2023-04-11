<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateDelegateToResourceRequest,
  AssociateDelegateToResourceResponse,
  AssociateDelegateToResourceXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateDelegateToResourceRequest = {
  associateDelegateToResourceRequest: {
    entityId: "corrupti",
    organizationId: "provident",
    resourceId: "distinctio",
  },
  xAmzAlgorithm: "quibusdam",
  xAmzContentSha256: "unde",
  xAmzCredential: "nulla",
  xAmzDate: "corrupti",
  xAmzSecurityToken: "illum",
  xAmzSignature: "vel",
  xAmzSignedHeaders: "error",
  xAmzTarget: AssociateDelegateToResourceXAmzTargetEnum.WorkMailServiceAssociateDelegateToResource,
};

sdk.associateDelegateToResource(req).then((res: AssociateDelegateToResourceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->