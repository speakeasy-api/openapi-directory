<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AssociateMemberAccountRequest, AssociateMemberAccountResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateMemberAccountRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "MacieService.AssociateMemberAccount",
  },
  request: {
    memberAccountId: "fugit",
  },
};

sdk.associateMemberAccount(req).then((res: AssociateMemberAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->