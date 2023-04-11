<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateCustomDomainRequest,
  AssociateCustomDomainResponse,
  AssociateCustomDomainXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateCustomDomainRequest = {
  associateCustomDomainRequest: {
    domainName: "corrupti",
    enableWWWSubdomain: false,
    serviceArn: "provident",
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
  xAmzTarget: AssociateCustomDomainXAmzTargetEnum.AppRunnerAssociateCustomDomain,
};

sdk.associateCustomDomain(req).then((res: AssociateCustomDomainResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->