<!-- Start SDK Example Usage -->
```typescript
import {
  AttachCustomerManagedPolicyReferenceToPermissionSetRequest,
  AttachCustomerManagedPolicyReferenceToPermissionSetResponse,
  AttachCustomerManagedPolicyReferenceToPermissionSetXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AttachCustomerManagedPolicyReferenceToPermissionSetRequest = {
  attachCustomerManagedPolicyReferenceToPermissionSetRequest: {
    customerManagedPolicyReference: {
      name: "corrupti",
      path: "provident",
    },
    instanceArn: "distinctio",
    permissionSetArn: "quibusdam",
  },
  xAmzAlgorithm: "unde",
  xAmzContentSha256: "nulla",
  xAmzCredential: "corrupti",
  xAmzDate: "illum",
  xAmzSecurityToken: "vel",
  xAmzSignature: "error",
  xAmzSignedHeaders: "deserunt",
  xAmzTarget: AttachCustomerManagedPolicyReferenceToPermissionSetXAmzTargetEnum.SWBExternalServiceAttachCustomerManagedPolicyReferenceToPermissionSet,
};

sdk.attachCustomerManagedPolicyReferenceToPermissionSet(req).then((res: AttachCustomerManagedPolicyReferenceToPermissionSetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->