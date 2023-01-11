<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { SendSshPublicKeyRequest, SendSshPublicKeyResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: SendSshPublicKeyRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AWSEC2InstanceConnectService.SendSSHPublicKey",
  },
  request: {
    availabilityZone: "fugit",
    instanceId: "et",
    instanceOSUser: "nihil",
    sshPublicKey: "rerum",
  },
};

sdk.sendSshPublicKey(req).then((res: SendSshPublicKeyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->