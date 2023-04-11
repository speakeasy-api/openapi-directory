<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateDomainRequest,
  AssociateDomainResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateDomainRequest = {
  requestBody: {
    acmCertificateArn: "corrupti",
    displayName: "provident",
    domainName: "distinctio",
    fleetArn: "quibusdam",
  },
  xAmzAlgorithm: "unde",
  xAmzContentSha256: "nulla",
  xAmzCredential: "corrupti",
  xAmzDate: "illum",
  xAmzSecurityToken: "vel",
  xAmzSignature: "error",
  xAmzSignedHeaders: "deserunt",
};

sdk.associateDomain(req).then((res: AssociateDomainResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->