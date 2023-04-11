<!-- Start SDK Example Usage -->
```typescript
import {
  SendSSHPublicKeyRequest,
  SendSSHPublicKeyResponse,
  SendSSHPublicKeyXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: SendSSHPublicKeyRequest = {
  sendSSHPublicKeyRequest: {
    availabilityZone: "corrupti",
    instanceId: "provident",
    instanceOSUser: "distinctio",
    sshPublicKey: "quibusdam",
  },
  xAmzAlgorithm: "unde",
  xAmzContentSha256: "nulla",
  xAmzCredential: "corrupti",
  xAmzDate: "illum",
  xAmzSecurityToken: "vel",
  xAmzSignature: "error",
  xAmzSignedHeaders: "deserunt",
  xAmzTarget: SendSSHPublicKeyXAmzTargetEnum.Awsec2InstanceConnectServiceSendSSHPublicKey,
};

sdk.sendSSHPublicKey(req).then((res: SendSSHPublicKeyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->