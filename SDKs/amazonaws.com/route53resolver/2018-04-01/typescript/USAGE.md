<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateFirewallRuleGroupRequest,
  AssociateFirewallRuleGroupResponse,
  AssociateFirewallRuleGroupXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  MutationProtectionStatusEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateFirewallRuleGroupRequest = {
  associateFirewallRuleGroupRequest: {
    creatorRequestId: "corrupti",
    firewallRuleGroupId: "provident",
    mutationProtection: MutationProtectionStatusEnum.Disabled,
    name: "quibusdam",
    priority: 602763,
    tags: [
      {
        key: "corrupti",
        value: "illum",
      },
      {
        key: "vel",
        value: "error",
      },
      {
        key: "deserunt",
        value: "suscipit",
      },
      {
        key: "iure",
        value: "magnam",
      },
    ],
    vpcId: "debitis",
  },
  xAmzAlgorithm: "ipsa",
  xAmzContentSha256: "delectus",
  xAmzCredential: "tempora",
  xAmzDate: "suscipit",
  xAmzSecurityToken: "molestiae",
  xAmzSignature: "minus",
  xAmzSignedHeaders: "placeat",
  xAmzTarget: AssociateFirewallRuleGroupXAmzTargetEnum.Route53ResolverAssociateFirewallRuleGroup,
};

sdk.associateFirewallRuleGroup(req).then((res: AssociateFirewallRuleGroupResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->