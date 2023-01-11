<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetApplySecurityGroupsToLoadBalancerRequest, GetApplySecurityGroupsToLoadBalancerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetApplySecurityGroupsToLoadBalancerRequest = {
  queryParams: {
    action: "ApplySecurityGroupsToLoadBalancer",
    loadBalancerName: "voluptas",
    securityGroups: [
      "expedita",
      "consequuntur",
    ],
    version: "2012-06-01",
  },
  headers: {
    xAmzAlgorithm: "expedita",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "fugit",
    xAmzDate: "et",
    xAmzSecurityToken: "nihil",
    xAmzSignature: "rerum",
    xAmzSignedHeaders: "dicta",
  },
};

sdk.getApplySecurityGroupsToLoadBalancer(req).then((res: GetApplySecurityGroupsToLoadBalancerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->