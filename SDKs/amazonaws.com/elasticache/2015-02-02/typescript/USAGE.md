<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAuthorizeCacheSecurityGroupIngressRequest, GetAuthorizeCacheSecurityGroupIngressResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetAuthorizeCacheSecurityGroupIngressRequest = {
  queryParams: {
    action: "AuthorizeCacheSecurityGroupIngress",
    cacheSecurityGroupName: "voluptas",
    ec2SecurityGroupName: "culpa",
    ec2SecurityGroupOwnerId: "expedita",
    version: "2015-02-02",
  },
  headers: {
    xAmzAlgorithm: "dolor",
    xAmzContentSha256: "expedita",
    xAmzCredential: "voluptas",
    xAmzDate: "fugit",
    xAmzSecurityToken: "et",
    xAmzSignature: "nihil",
    xAmzSignedHeaders: "rerum",
  },
};

sdk.getAuthorizeCacheSecurityGroupIngress(req).then((res: GetAuthorizeCacheSecurityGroupIngressResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->