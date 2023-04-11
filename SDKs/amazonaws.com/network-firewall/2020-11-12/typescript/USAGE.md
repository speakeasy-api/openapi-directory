<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateFirewallPolicyRequest,
  AssociateFirewallPolicyResponse,
  AssociateFirewallPolicyXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateFirewallPolicyRequest = {
  associateFirewallPolicyRequest: {
    firewallArn: "corrupti",
    firewallName: "provident",
    firewallPolicyArn: "distinctio",
    updateToken: "quibusdam",
  },
  xAmzAlgorithm: "unde",
  xAmzContentSha256: "nulla",
  xAmzCredential: "corrupti",
  xAmzDate: "illum",
  xAmzSecurityToken: "vel",
  xAmzSignature: "error",
  xAmzSignedHeaders: "deserunt",
  xAmzTarget: AssociateFirewallPolicyXAmzTargetEnum.NetworkFirewall20201112AssociateFirewallPolicy,
};

sdk.associateFirewallPolicy(req).then((res: AssociateFirewallPolicyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->