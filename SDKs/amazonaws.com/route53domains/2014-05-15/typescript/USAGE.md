<!-- Start SDK Example Usage -->
```typescript
import {
  AcceptDomainTransferFromAnotherAwsAccountRequest,
  AcceptDomainTransferFromAnotherAwsAccountResponse,
  AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AcceptDomainTransferFromAnotherAwsAccountRequest = {
  acceptDomainTransferFromAnotherAwsAccountRequest: {
    domainName: "corrupti",
    password: "provident",
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
  xAmzTarget: AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum.Route53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccount,
};

sdk.acceptDomainTransferFromAnotherAwsAccount(req).then((res: AcceptDomainTransferFromAnotherAwsAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->