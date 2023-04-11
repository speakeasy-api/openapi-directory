<!-- Start SDK Example Usage -->
```typescript
import {
  GETAuthorizeCacheSecurityGroupIngressRequest,
  GETAuthorizeCacheSecurityGroupIngressResponse,
  GETAuthorizeCacheSecurityGroupIngressActionEnum,
  GETAuthorizeCacheSecurityGroupIngressVersionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GETAuthorizeCacheSecurityGroupIngressRequest = {
  action: GETAuthorizeCacheSecurityGroupIngressActionEnum.AuthorizeCacheSecurityGroupIngress,
  cacheSecurityGroupName: "corrupti",
  ec2SecurityGroupName: "provident",
  ec2SecurityGroupOwnerId: "distinctio",
  version: GETAuthorizeCacheSecurityGroupIngressVersionEnum.TwoThousandAndFifteen0202,
  xAmzAlgorithm: "quibusdam",
  xAmzContentSha256: "unde",
  xAmzCredential: "nulla",
  xAmzDate: "corrupti",
  xAmzSecurityToken: "illum",
  xAmzSignature: "vel",
  xAmzSignedHeaders: "error",
};

sdk.getAuthorizeCacheSecurityGroupIngress(req).then((res: GETAuthorizeCacheSecurityGroupIngressResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->