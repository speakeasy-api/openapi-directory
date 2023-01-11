<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CancelQuantumTaskRequest, CancelQuantumTaskResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CancelQuantumTaskRequest = {
  pathParams: {
    quantumTaskArn: "sit",
  },
  headers: {
    xAmzAlgorithm: "voluptas",
    xAmzContentSha256: "culpa",
    xAmzCredential: "expedita",
    xAmzDate: "consequuntur",
    xAmzSecurityToken: "dolor",
    xAmzSignature: "expedita",
    xAmzSignedHeaders: "voluptas",
  },
  request: {
    clientToken: "fugit",
  },
};

sdk.cancelQuantumTask(req).then((res: CancelQuantumTaskResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->