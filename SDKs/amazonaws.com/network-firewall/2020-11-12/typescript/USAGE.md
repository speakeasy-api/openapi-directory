<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AssociateFirewallPolicyRequest, AssociateFirewallPolicyResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateFirewallPolicyRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "NetworkFirewall_20201112.AssociateFirewallPolicy",
  },
  request: {
    firewallArn: "fugit",
    firewallName: "et",
    firewallPolicyArn: "nihil",
    updateToken: "rerum",
  },
};

sdk.associateFirewallPolicy(req).then((res: AssociateFirewallPolicyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->