<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateConfigurationItemsToApplicationRequest,
  AssociateConfigurationItemsToApplicationResponse,
  AssociateConfigurationItemsToApplicationXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateConfigurationItemsToApplicationRequest = {
  associateConfigurationItemsToApplicationRequest: {
    applicationConfigurationId: "corrupti",
    configurationIds: [
      "distinctio",
      "quibusdam",
      "unde",
    ],
  },
  xAmzAlgorithm: "nulla",
  xAmzContentSha256: "corrupti",
  xAmzCredential: "illum",
  xAmzDate: "vel",
  xAmzSecurityToken: "error",
  xAmzSignature: "deserunt",
  xAmzSignedHeaders: "suscipit",
  xAmzTarget: AssociateConfigurationItemsToApplicationXAmzTargetEnum.AWSPoseidonServiceV20151101AssociateConfigurationItemsToApplication,
};

sdk.associateConfigurationItemsToApplication(req).then((res: AssociateConfigurationItemsToApplicationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->