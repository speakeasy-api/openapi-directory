<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AssociateKmsKeyRequest, AssociateKmsKeyResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateKmsKeyRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "Logs_20140328.AssociateKmsKey",
  },
  request: {
    kmsKeyId: "fugit",
    logGroupName: "et",
  },
};

sdk.associateKmsKey(req).then((res: AssociateKmsKeyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->