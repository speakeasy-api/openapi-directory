<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AcceptDomainTransferFromAnotherAwsAccountRequest, AcceptDomainTransferFromAnotherAwsAccountResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AcceptDomainTransferFromAnotherAwsAccountRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount",
  },
  request: {
    domainName: "fugit",
    password: "et",
  },
};

sdk.acceptDomainTransferFromAnotherAwsAccount(req).then((res: AcceptDomainTransferFromAnotherAwsAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->