<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateAttributeGroupRequest,
  AssociateAttributeGroupResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateAttributeGroupRequest = {
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "provident",
  xAmzCredential: "distinctio",
  xAmzDate: "quibusdam",
  xAmzSecurityToken: "unde",
  xAmzSignature: "nulla",
  xAmzSignedHeaders: "corrupti",
  application: "illum",
  attributeGroup: "vel",
};

sdk.associateAttributeGroup(req).then((res: AssociateAttributeGroupResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->