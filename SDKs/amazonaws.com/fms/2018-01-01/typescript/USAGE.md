<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AssociateAdminAccountRequest, AssociateAdminAccountResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateAdminAccountRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AWSFMS_20180101.AssociateAdminAccount",
  },
  request: {
    adminAccount: "fugit",
  },
};

sdk.associateAdminAccount(req).then((res: AssociateAdminAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->