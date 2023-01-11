<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ApplyArchiveRuleRequest, ApplyArchiveRuleResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: ApplyArchiveRuleRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
  },
  request: {
    analyzerArn: "voluptas",
    clientToken: "fugit",
    ruleName: "et",
  },
};

sdk.applyArchiveRule(req).then((res: ApplyArchiveRuleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->