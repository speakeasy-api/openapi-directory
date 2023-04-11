<!-- Start SDK Example Usage -->
```typescript
import {
  AcceptCertificateTransferRequest,
  AcceptCertificateTransferResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AcceptCertificateTransferRequest = {
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "provident",
  xAmzCredential: "distinctio",
  xAmzDate: "quibusdam",
  xAmzSecurityToken: "unde",
  xAmzSignature: "nulla",
  xAmzSignedHeaders: "corrupti",
  certificateId: "illum",
  setAsActive: false,
};

sdk.acceptCertificateTransfer(req).then((res: AcceptCertificateTransferResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->