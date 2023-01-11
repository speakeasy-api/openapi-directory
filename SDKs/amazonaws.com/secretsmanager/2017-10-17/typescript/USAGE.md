<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CancelRotateSecretRequest, CancelRotateSecretResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CancelRotateSecretRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "secretsmanager.CancelRotateSecret",
  },
  request: {
    secretId: "fugit",
  },
};

sdk.cancelRotateSecret(req).then((res: CancelRotateSecretResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->