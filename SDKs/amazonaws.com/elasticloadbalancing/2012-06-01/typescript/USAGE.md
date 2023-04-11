<!-- Start SDK Example Usage -->
```typescript
import {
  GETApplySecurityGroupsToLoadBalancerRequest,
  GETApplySecurityGroupsToLoadBalancerResponse,
  GETApplySecurityGroupsToLoadBalancerActionEnum,
  GETApplySecurityGroupsToLoadBalancerVersionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GETApplySecurityGroupsToLoadBalancerRequest = {
  action: GETApplySecurityGroupsToLoadBalancerActionEnum.ApplySecurityGroupsToLoadBalancer,
  loadBalancerName: "corrupti",
  securityGroups: [
    "distinctio",
    "quibusdam",
    "unde",
  ],
  version: GETApplySecurityGroupsToLoadBalancerVersionEnum.TwoThousandAndTwelve0601,
  xAmzAlgorithm: "nulla",
  xAmzContentSha256: "corrupti",
  xAmzCredential: "illum",
  xAmzDate: "vel",
  xAmzSecurityToken: "error",
  xAmzSignature: "deserunt",
  xAmzSignedHeaders: "suscipit",
};

sdk.getApplySecurityGroupsToLoadBalancer(req).then((res: GETApplySecurityGroupsToLoadBalancerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->