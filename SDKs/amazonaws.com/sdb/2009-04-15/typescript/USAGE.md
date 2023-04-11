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
  awsAccessKeyId: "corrupti",
  action: GETCreateDomainActionEnum.CreateDomain,
  domainName: "provident",
  signature: "distinctio",
  signatureMethod: "quibusdam",
  signatureVersion: "unde",
  timestamp: "nulla",
  version: GETCreateDomainVersionEnum.TwoThousandAndNine0415,
};

sdk.getCreateDomain(req).then((res: GETCreateDomainResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->