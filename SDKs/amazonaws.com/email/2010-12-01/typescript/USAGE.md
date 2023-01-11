<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetCloneReceiptRuleSetRequest, GetCloneReceiptRuleSetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetCloneReceiptRuleSetRequest = {
  queryParams: {
    action: "CloneReceiptRuleSet",
    originalRuleSetName: "voluptas",
    ruleSetName: "culpa",
    version: "2010-12-01",
  },
  headers: {
    xAmzAlgorithm: "consequuntur",
    xAmzContentSha256: "dolor",
    xAmzCredential: "expedita",
    xAmzDate: "voluptas",
    xAmzSecurityToken: "fugit",
    xAmzSignature: "et",
    xAmzSignedHeaders: "nihil",
  },
};

sdk.getCloneReceiptRuleSet(req).then((res: GetCloneReceiptRuleSetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->