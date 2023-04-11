<!-- Start SDK Example Usage -->
```typescript
import {
  GETCreateDomainRequest,
  GETCreateDomainResponse,
  GETCreateDomainActionEnum,
  GETCreateDomainVersionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GETCreateDomainRequest = {
  action: GETCreateDomainActionEnum.CreateDomain,
  domainName: "corrupti",
  version: GETCreateDomainVersionEnum.TwoThousandAndEleven0201,
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
};

sdk.getCreateDomain(req).then((res: GETCreateDomainResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->